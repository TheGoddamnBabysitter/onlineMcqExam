const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const OTPModel = require("../models/otpModel");

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.VERIFY_EMAIL,
        pass: process.env.VERIFY_PASSWORD,
    },
});

router.post("/get-otp", async (req, res) => {
    try {
        const email = req.body.email;
        const otpCode = Math.floor(1000 + Math.random() * 900000);

        if (await OTPModel.findOne({ email })) {
            await OTPModel.deleteOne({ email });
        }

        const htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>OTP Verification</title>
                <style>
                body {
                    font-family: sans-serif;
                    background-color: #fff;
                  }
              
                  .container {
                    width: 500px;
                    margin: 0 auto;
                  }
              
                  .header {
                    background-color: #3F51B5;
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                  }
              
                  .header h1 {
                    font-size: 24px;
                    color: #fff;
                  }
              
                  .body {
                    padding: 20px;
                  }
              
                  .body p {
                    font-size: 16px;
                  }
              
                  .otp-code {
                    font-size: 26px;
                    font-weight: bold;
                    color: #fff;
                    background-color: #3F51B5;
                    text-align: center;
                    padding: 10px;
                    border-radius: 5px;
                    margin-left: 12px;
                  }
              
                  .link {
                    color: #000;
                    text-decoration: none;
                  }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>OTP Verification</h1>
                    </div>
                    <div class="body">
                        <p>Hi there,</p>
                        <p>
                            Your OTP code is:
                            <span class="otp-code">${otpCode}</span>
                        </p>
                        <p>Please use this code to verify your account.</p>
                        <p>This code is valid for 10 minutes.</p>
                        <p>Thanks</p>
                    </div>
                </div>
            </body>
        </html>
        `;

        const otpDocument = new OTPModel({ email, otp: otpCode });

        const mailOptions = {
            from: process.env.VERIFY_EMAIL,
            to: email,
            subject: `Your OTP code: is: ${otpCode}`,
            html: htmlTemplate,
        };

        await transporter.sendMail(mailOptions);

        await otpDocument.save();

        res.json({ msg: "OTP sent successfully" });
    } catch (err) {
        console.error("Error sending OTP:", err);
        res.status(500).json({ err: "Failed to send OTP" });
    }
});

router.post("/verify-otp", async (req, res) => {
    try {
        const { email, clientOTP } = req.body;
        const savedOTPDocument = await OTPModel.findOne({ email });
        console.log(savedOTPDocument);

        if (!savedOTPDocument) {
            return res.status(404).json({ msg: "OTP not found" });
        }

        const savedOTP = savedOTPDocument.otp;

        console.log(savedOTP);
        console.log(typeof savedOTP);
        console.log(typeof clientOTP);

        if (clientOTP === savedOTP) {
            await OTPModel.deleteOne({ email });
            return res.status(200).json({ msg: "Email verified successfully" });
        } else {
            return res.status(400).json({ msg: "Invalid OTP" });
        }
    } catch (err) {
        console.error("Error verifying OTP:", err);
        res.status(500).json({ msg: "Internal server error" });
    }
});

module.exports = router;
