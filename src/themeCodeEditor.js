import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config:{
        initialColourMode:"dark",
        useSystemColorMode:false,
    },
});

export default theme;