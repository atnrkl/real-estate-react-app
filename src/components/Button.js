import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 160px;
  min-height: 30px;
  max-height: 40px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  margin: ${({ primary }) => (primary ? "12px 20px" : "16px 30px")};
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "1.4rem" : "1rem")};
  background: ${({ primary }) => (primary ? "#212529" : "#fff")};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
