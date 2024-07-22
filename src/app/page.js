'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const send_wapp = async () => {
    const sms = {
      phone: phone,
      message: message,
    };

    try {
      const response = await fetch("/api/send/wapp", {
        method: "POST",
        body: JSON.stringify(sms),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Response:", data);
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.formContainer}>
        <h1>Send a WhatsApp Message</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send_wapp();
          }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone Number (including country code)</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
