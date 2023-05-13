import { keyframes } from "styled-components";

export const styledKeyframes = {
  fade_in: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,

  gradient: keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `,

  pulse: keyframes`
    50% { opacity: 0.5; }
  `,

  rotate_primary_avatar: keyframes`
    from { transform: rotateY(0deg); }
    to { transform: rotateY(180deg); }
  `,

  rotate_secondary_avatar: keyframes`
    from { transform: rotateY(180deg); }
    to { transform: rotateY(0deg); }
  `,

  toggle_primary_avatar: keyframes`
    from { z-index: 1; }
    to { z-index: 0; }
  `,

  toggle_secondary_avatar: keyframes`
    from { z-index: 0; }
    to { z-index: 1; }
  `,
};
