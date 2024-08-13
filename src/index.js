import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themeCodeEditor"

import ContextProvider from "./pages/YourHelper_Gemini/context/Context";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ContextProvider>
            <App />
          </ContextProvider>
        </ChakraProvider>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
