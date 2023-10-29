const express = require('express');
const Razorpay = require('razorpay');
const { secret, id } = require('../config.json').razorpay;
const router = express.Router();
const crypto = require('crypto');

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: id,
            key_secret: secret
        })

        const options = {
            amount: req.body.rupees * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };
        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.json({ msg: "Transaction not legit!" });
            // return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

module.exports = router;