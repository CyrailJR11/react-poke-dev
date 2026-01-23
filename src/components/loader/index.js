import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/ball-logo.png";

// Animación de giro para el logo
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Logo giratorio
const Logo = styled.img`
  width: 80%;
  max-width: 120px;
  display: block;
  margin: auto;
  animation: ${spin} 2s linear infinite;
`;

// Texto de carga
const TextLoading = styled.div`
  max-width: 300px;
  display: block;
  margin: auto;
  margin-top: 32px;
  text-align: center;
  font-family: cursive;
  font-size: 20px;
  color: #ff1a1a;
  text-shadow: 2px 2px #000;
`;

// Wrapper centrado vertical y horizontal
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
`;

// Componente Loader
export default function Loader() {
  return (
    <Wrapper>
      <Logo src={logo} />
      <TextLoading>{"LOADING POKEMONS..."}</TextLoading>
    </Wrapper>
  );
}
