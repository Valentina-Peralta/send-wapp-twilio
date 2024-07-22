import { NextResponse } from "next/server";
import twilio from "twilio";

// Load Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhoneNumber) {
    throw new Error("Twilio credentials are not properly configured in the environment variables.");
}

// Initialize Twilio client
const client = twilio(accountSid, authToken);

export async function POST(request) {
    try {
        // Parse the incoming request body
        const data = await request.json();
        const { message, phone } = data;

        if (!message || !phone) {
            return NextResponse.json(
                { message: "Missing required fields: messageS and/or phone" },
                { status: 400 }
            );
        }

        // Create and send the WhatsApp message
        const sentMessage = await client.messages.create({
            body: `Message: ${message}.`,
            from: `whatsapp:${twilioPhoneNumber}`,
            to: `whatsapp:${phone}`,
        });

        return NextResponse.json({ message: "Message sent successfully", sid: sentMessage.sid });
    } catch (error) {
        console.error("Error sending message:", error);
        return NextResponse.json(
            { message: "Error sending message", error: error.message },
            { status: 500 }
        );
    }
}
