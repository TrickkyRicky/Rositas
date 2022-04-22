import styled from "styled-components";
import { colors } from "../../../styles/colors";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: ${colors.test};
  z-index: 10;
`;

export default Nav;
