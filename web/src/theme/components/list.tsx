import type { ComponentMultiStyleConfig } from "@chakra-ui/theme";

export const List: ComponentMultiStyleConfig = {
  parts: ["container", "item", "icon"],
  baseStyle: {
    container: {
      marginInlineStart: "unset",
      WebkitMarginStart: "unset",
      listStylePosition: "inside",
      p: "0",
    },
    item: {
      pt: "18px",
      pb: "6px",
      px: "0",
    },
  },
  variants: {
    underline: {
      item: {
        listStyleType: "none",
        borderBottom: "2px solid",
        borderColor: "neon.200",
      },
    },
  },
};
