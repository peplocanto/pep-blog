import React from "react";

export interface Image {
  title: string;
  src?: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
}
