import styled from "styled-components";
import { theme } from "styles/theme";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageBox = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 36px ${theme.colors.purple};
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 32px 16px;
  padding: 4px;
  width: 1200px;
  transition: all 0.15s ease;

  ${theme.components.animated_background}

  @media ${theme.devices.mobile_l} {
    gap: 8px;
  }
`;

export const List = styled.ul`
  background-color: ${theme.colors.darkest_purple};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  transition: all 0.15s ease;

  & li:first-of-type button {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }

  & li:last-of-type button {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media ${theme.devices.mobile_l} {
    flex-direction: column;

    & li:first-of-type button {
      border-bottom-left-radius: 0;
      border-top-right-radius: 20px;
    }

    & li:last-of-type button {
      border-bottom-right-radius: 20px;
      border-top-right-radius: 0;
      border-bottom-left-radius: 20px;
    }
  }
`;
