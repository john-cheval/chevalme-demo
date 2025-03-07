import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { apiUrl, errorMessage } = await req.json();
    console.log(apiUrl + ": " + errorMessage);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "johncheval1@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "johncheval1@gmail.com",
      to: "selastinmathew@gmail.com.com",
      subject: `🚨 API Failure Alert: ${apiUrl}`,
      text: `An error occurred in API: ${apiUrl}\n\nError Message: ${errorMessage}`,
    };

    console.log("mail send successfully!");

    // Wait for the email to be sent and return the appropriate response
    await transporter.sendMail(mailOptions);

    // After sending the email, return a successful response
    return NextResponse.json(
      { message: "Error notification sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    // Ensure a response is returned in case of error
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
