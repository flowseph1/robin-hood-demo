import React from "react";
import { Text as TextNative, TextProps as TextPropsNative } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

export const TextVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
    },
  },
});

interface TextVariantProps extends VariantProps<typeof TextVariants> {}

interface TextProps extends TextVariantProps, TextPropsNative {}

export function Text({ children, ...rest }: TextProps) {
  return <TextNative {...rest}>{children}</TextNative>;
}
