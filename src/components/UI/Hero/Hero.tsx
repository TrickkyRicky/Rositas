import React from "react";
import { Container, HeroImg, Overlay } from "./styles";

interface IProps {
  src: string;
}
const Hero = ({ src }: IProps) => {
  return (
    <Container>
      <Overlay />
      <HeroImg src={src} />
    </Container>
  );
};
export default Hero;
