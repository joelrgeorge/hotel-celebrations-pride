import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function TermsAndConditions() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/"); // Change "/home" if needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-3xl w-full p-6 bg-white shadow-lg rounded-2xl text-center">
        <CardContent>
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src="/favicon.ico" alt="Logo" className="w-20 h-16" />
          </div>

          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
          <ScrollArea className="h-80 overflow-y-auto p-2 border rounded-lg text-left">
            <p className="mb-4">
              Welcome to Hotel Celebrations Pride! These terms and conditions outline the
              rules and regulations for the use of our services.
            </p>
            <h2 className="text-lg font-semibold mb-2">1. Booking and Payment</h2>
            <p className="mb-4">
              All reservations must be guaranteed with a valid payment method. Cancellations
              within 24 hours of check-in may be subject to charges.
            </p>
            <h2 className="text-lg font-semibold mb-2">2. Check-in & Check-out</h2>
            <p className="mb-4">
              Check-in time is from 3:00 PM, and check-out is until 11:00 AM. Late
              check-out may incur additional charges.
            </p>
            <h2 className="text-lg font-semibold mb-2">3. Guest Conduct</h2>
            <p className="mb-4">
              Guests must follow hotel policies regarding noise, behavior, and
              prohibited activities. Any violations may result in removal without
              refund.
            </p>
            <h2 className="text-lg font-semibold mb-2">4. Liability</h2>
            <p className="mb-4">
              The hotel is not responsible for lost, stolen, or damaged belongings.
              Guests are advised to use safes for valuables.
            </p>
            <h2 className="text-lg font-semibold mb-2">5. Changes to Terms</h2>
            <p className="mb-4">
              The hotel reserves the right to modify these terms at any time. Guests
              will be notified of any significant changes.
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