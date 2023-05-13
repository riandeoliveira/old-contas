import { Tab as MaterialTab } from "@mui/material";
import { green } from "@mui/material/colors";
import styled from "styled-components";

export const Header = styled.header`
  min-height: 48px;
  background-color: ${green[500]};
`;

export const Tab = styled(MaterialTab)`
  flex: 1;
  max-width: 100%;
`;

export const Main = styled.main``;
