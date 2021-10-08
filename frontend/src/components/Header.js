import styled from "styled-components/macro";

export default function Header() {
  return (
    <HeaderStyled>
      <StyledImage
        src={require("../icons/todo.png").default}
        alt={"todo icon"}
        width={30}
      />
      {/*<h1>Super Todo App</h1>*/}
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  text-align: center;
`;

const StyledImage = styled.img`
  width: 30px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 5px;
`;
