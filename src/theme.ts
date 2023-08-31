import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme: ThemeConfig = extendTheme({
  config: {
    // Enable dark mode
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  // change bg color in dark mode
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#fff", "#090D1F")(props),
      },
    }),
  },
  // change color of the switch in dark mode

  components: {
    Switch: {
      baseStyle: (props: any) => ({
        track: {
          bg: mode("#090D1F", "#FFF")(props),
        },
        thumb: {
          bg: mode("#FFF", "#090D1F")(props),
        },
      }),
    },
  },
});

export default theme;
