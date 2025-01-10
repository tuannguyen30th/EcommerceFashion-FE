"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { authService } from "@/utils/auth-service";
import { ResponseType } from "@/types/response-global";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return window.location.replace("/");
  }

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 5) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = state?.data?.email;
    // Handle OTP verification logic here
    console.log("OTP submitted:", otp.join(""));
    console.log("Email submitted:", email);

    try {
      const response = await authService.verifyOtp({
        email,
        verificationCode: otp.join(""),
      });

      const verifiedData = response.data as ResponseType;

      if (response.status === 200 && verifiedData.status) {
        toast({
          description: verifiedData.message,
        });
        // Redirect to home page after successful verification
        navigate("/");
      } else {
        toast({
          variant: "destructive",
          description: verifiedData.message,
        });
      }
    } catch (error) {
      console.error("Error:::", error);
      if (error instanceof AxiosError) {
        toast({
          variant: "destructive",
          title: error.name,
          description: error.response?.data?.message,
        });
      }
    }
  };

  useEffect(() => {
    inputRefs[0].current?.focus();
    console.log("state:::", state);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 flex justify-between p-4">
      <div>
        <Link
          to="/"
          className="mb-4 text-sm text-gray-600 hover:text-gray-900 hover:underline flex"
        >
          <ArrowLeft className="mr-2" /> Back to home
        </Link>
      </div>
      <Card className="w-full max-w-md h-2/3 mt-20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Verify Your Account
          </CardTitle>
          <CardDescription className="text-center">
            We've sent a code to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-4 mb-6">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={inputRefs[index]}
                  className="w-12 h-12 text-center text-2xl"
                  type="text"
                  inputMode="numeric"
                  pattern="\d{1}"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>
            <Button className="w-full" type="submit">
              Verify
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" className="text-sm">
            Resend Code
          </Button>
        </CardFooter>
      </Card>
      <div></div>
    </div>
  );
}
