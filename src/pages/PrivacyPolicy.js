import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/"); // Redirect to home or another page
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent>
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/favicon.ico" alt="Logo" className="w-20 h-16" />
          </div>

          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <ScrollArea className="h-64 border p-2 rounded-lg text-left">
            <p>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information when you use
              our hotel services.
            </p>
            <h3 className="font-semibold mt-2">1. Information We Collect</h3>
            <p>
              We collect personal details such as your name, contact
              information, and payment details when you make a reservation.
            </p>
            <h3 className="font-semibold mt-2">2. How We Use Your Information</h3>
            <p>
              Your data is used to provide hotel services, improve our customer
              experience, and comply with legal obligations.
            </p>
            <h3 className="font-semibold mt-2">3. Security Measures</h3>
            <p>
              We implement strong security protocols to protect your personal
              information from unauthorized access.
            </p>
          </ScrollArea>
          <div className="flex justify-end mt-4">
            <Button onClick={handleAccept}>Accept & Continue</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}