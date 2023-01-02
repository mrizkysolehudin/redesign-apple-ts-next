import { loadStripe, Stripe } from "@stripe/stripe-js";
// https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/get-stripejs.ts;

// Singleton pattern
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe
