import { PaymentFormContainer, FormContainer } from "./paymentForm-style.jsx";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { buttonType } from "../Button/button";
export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <>
      <PaymentFormContainer>
        <FormContainer>
          <h2>Credit Card Payment</h2>
          <CardElement />
          <Button button={buttonType.inverted}>Pay Now</Button>
        </FormContainer>
      </PaymentFormContainer>
    </>
  );
}
