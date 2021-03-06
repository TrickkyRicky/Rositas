import styled from "styled-components";

interface IProps {
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  fd?: string;
  jc?: string;
  ai?: string;
  fw?: string;
  as?: string;
}

export const FBox = styled.div<IProps>`
  display: flex;
  width: ${(props) => (props.w ? props.w : "unset")};
  height: ${(props) => (props.h ? props.h : "unset")};
  margin: ${(props) => (props.m ? props.m : "0px")};
  padding: ${(props) => (props.p ? props.p : "0px")};
  flex-direction: ${(props) => (props.fd ? props.fd : "unset")};
  justify-content: ${(props) => (props.jc ? props.jc : "unset")};
  align-items: ${(props) => (props.ai ? props.ai : "unset")};
  flex-wrap: ${(props) => (props.fw ? props.fw : "unset")};
  align-self: ${(props) => (props.as ? props.as : "unset")};
`;
