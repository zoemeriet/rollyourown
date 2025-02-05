import type { ComponentMultiStyleConfig } from "@chakra-ui/theme";
import BorderImage from "@/components/icons/BorderImage";
import { cardStyle } from "../styles";

export const Card: ComponentMultiStyleConfig = {
  parts: ["container", "header", "body", "footer"],
  baseStyle: {
    container: {
      ...cardStyle,
    },
    header: {
      textAlign: "center",
    },
    body: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    footer: {},
  },
  variants: {
    primary: {
      header: {
        py: "12px",
      },
      body: {
        p: "0",
      },
      footer: {
        px: "20px",
        py: "12px",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
};
