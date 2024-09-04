import styled from "styled-components";

// Estilos para fade-in suave
export const SectionWrapper = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  will-change: opacity, transform;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
