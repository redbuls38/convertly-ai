const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-checkout', async (req, res) => {
  const { priceId } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: process.env.NEXT_PUBLIC_SUCCESS_URL || 'https://convertly-ai.vercel.app/success',
      cancel_url: process.env.NEXT_PUBLIC_CANCEL_URL || 'https://convertly-ai.vercel.app/cancel'
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
