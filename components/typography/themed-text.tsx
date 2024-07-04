import React from "react";
import { TextProps, View } from "react-native";
import { Text as TextNative } from "react-native";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("text-font-default", {
  variants: {
    intent: {
      title: "text-4xl font-[500]",
      body: "text-base",
      primary: "text-primary",
      subtle: "text-base text-font-subtle",
    },
  },
  defaultVariants: {
    intent: "body",
  },
});

interface TextVariantProps extends VariantProps<typeof textVariants> {}

interface ThemedTextProps extends TextVariantProps, TextProps {
  classNames?: string;
}

export function ThemedText({
  children,
  intent,
  classNames,
  ...rest
}: ThemedTextProps) {
  return (
    <TextNative
      {...rest}
      className={textVariants({
        intent,
        className: classNames,
      })}
    >
      {children}
    </TextNative>
  );
}
