import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
      body: "Comfortaa"
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "gray.400",
          color: "white",
          width: "1000px",
          marginLeft: "auto",
          marginRight: "auto"
        },
        // styles for the `a`
        a: {
          color: "white",
        },
      },
    },
})

export default theme;