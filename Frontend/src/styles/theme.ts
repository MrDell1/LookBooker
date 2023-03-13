import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";

export const rawTheme = {
  components: {},
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    brown: {
      500: "#552B21",
      400: "#74463B",
      300: "#976559",
      100: "#FFE6D9",
    },
    green: {
      100: "#859971",
      200: "#667A53",
      300: "#495B37",
      400: "#2D3F1D",
    },
    white: "#FFFFFF",
  },
};
export const theme = extendTheme(rawTheme);
