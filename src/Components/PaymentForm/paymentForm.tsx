import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  PaymentFormContainer,
  FormContainer,
  PayNowButton,
} from "./paymentForm-style.jsx";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { buttonType } from "../Button/button.js";
import { selectCartTotal } from "../../Store/Cart/cartSelector.js";
import { selectCurrentUser } from "../../Store/User/userSelector.js";
import { emptyItemsFromCart } from "../../Store/Cart/cartActions.js";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElement = (
  cardElement: StripeCardElement | null
): cardElement is StripeCardElement => {
  if (cardElement === null) {
    alert("Card details not found");
    return false;
  }
  return true;
};
export default function PaymentForm() {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const clearCart = () => {
    dispatch(emptyItemsFromCart());
  };

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    const {
      paymentIntent: { client_secret },
    } = response;
    const cardDetails = elements.getElement(CardElement);
    if (!ifValidCardElement(cardDetails)) {
      alert("Card details not found");
      return;
    }
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest User",
        },
      },
    });
    setIsProcessingPayment(false);
    clearCart();
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };
  return (
    <>
      <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment</h2>
          <CardElement />
          <PayNowButton
            isLoading={isProcessingPayment}
            button={buttonType.inverted}
          >
            Pay Now
          </PayNowButton>
        </FormContainer>
      </PaymentFormContainer>
    </>
  );
}
