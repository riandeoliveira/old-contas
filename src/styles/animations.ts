import { css } from "styled-components";
import { styledKeyframes as keyframes } from "./keyframes";

export const animations = {
  fade_in: css`
    animation: ${keyframes.fade_in} 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  `,

  gradient: css`
    animation: ${keyframes.gradient} 15s ease infinite;
  `,

  pulse: css`
    animation: ${keyframes.pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  `,

  rotate_primary_avatar: css`
    animation: ${keyframes.rotate_primary_avatar} 2s forwards;
  `,

  rotate_secondary_avatar: css`
    animation: ${keyframes.rotate_secondary_avatar} 2s forwards;
  `,

  toggle_primary_avatar: css`
    animation: ${keyframes.toggle_primary_avatar} 2s forwards;
  `,

  toggle_secondary_avatar: css`
    animation: ${keyframes.toggle_secondary_avatar} 2s forwards;
  `,
};
