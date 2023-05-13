import { FlattenSimpleInterpolation, css } from "styled-components";

type FocusSizeType = "small" | "large";
type FocusBrightmessType = "dark" | "light";

export const functions = {
  focus(
    size: FocusSizeType,
    color: string,
    brightness: FocusBrightmessType
  ): FlattenSimpleInterpolation {
    const colorOpacity: number = 80;

    let focusColor: string = "";

    if (brightness === "dark") {
      focusColor = color;
    }

    if (brightness === "light") {
      focusColor = `${color}${colorOpacity}`;
    }

    if (size === "large") {
      return css`
        outline: 0;
        transition: box-shadow 0.15s;

        &:focus-visible {
          box-shadow: 0 0 0 4px ${focusColor};
        }
      `;
    }

    if (size === "small") {
      return css`
        &:focus-visible {
          outline: 2px solid ${focusColor};
        }
      `;
    }

    return css``;
  },
};
