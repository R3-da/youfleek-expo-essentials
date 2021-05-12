import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export default function SubHeading({
  children,
  fontSize = 16,
  fontWeight = "600",
  style,
  ...props
}) {
  return (
    <Text
      category="s1"
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: "Poppins-SemiBold",
        ...style,
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
