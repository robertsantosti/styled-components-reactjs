import styled from "styled-components";

const x = {
  biologia: "green",
  quimica: "blue",
  fisica: "pink"
};

export const Container = styled.div``;

export const Header = styled.header`
  background-color: ${props => x[props.area]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Text = styled.p``;
