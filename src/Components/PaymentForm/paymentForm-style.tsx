import styled from "styled-components";
import { Button } from "../Button/button";
export const PaymentFormContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PayNowButton = styled(Button)`
  margin-left: auto;
  margin-top: 50px;
`;
