# WhatsApp Message Sender with Twilio and Next.js

This repository demonstrates how to integrate Twilio to send WhatsApp messages from a Next.js application. It includes a simple form for users to input a phone number and message, and sends that message via Twilio's API.

## Prerequisites

Before setting up the project, ensure you have the following:

- Node.js and npm installed on your machine.
- A Twilio account with WhatsApp messaging enabled.

## Configuration

### Set Up Twilio Account

1. **Create a Twilio Account**: If you don't have a Twilio account, sign up [here](https://www.twilio.com/try-twilio).
2. **Get Twilio Credentials**:
   - Navigate to the [Twilio Console](https://www.twilio.com/console).
   - Go to the "Account SID" and "Auth Token" section and copy these credentials.
   - Make sure you have a Twilio phone number with WhatsApp capabilities.
   - 
### Configuring Twilio for WhatsApp

1. **Add a WhatsApp Sender:**
   - In Twilio, you need to add a WhatsApp sender (i.e., `twilioPhoneNumber`). This can either be a number purchased through the Twilio platform or a WhatsApp number associated with a business account.

2. **Create a WhatsApp Template:**
   - Create a WhatsApp message template within Twilio. This template must be approved by WhatsApp before you can use it to send messages.

3. **Message Format:**
   - The message sent using the `client.messages.create` method must follow the exact format of the approved template. Ensure that the `body` of the message adheres to the template structure.

4. **Number Formatting:**
   - It is essential that the phone number to which you are sending messages is in E.164 format. This format includes the country code, and should look like `+1234567890`.

### Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your Twilio credentials:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```
## Additional Information

For more details about configuring Twilio for WhatsApp messaging, refer to the [Twilio API Documentation](https://www.twilio.com/docs/whatsapp).
