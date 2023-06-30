import styled from "styled-components";
import {
  baseButtonStyles,
  googleSignInStyles,
  invertedStyles,
} from "../Button/button-style";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${baseButtonStyles}, ${googleSignInStyles}, ${invertedStyles} {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
