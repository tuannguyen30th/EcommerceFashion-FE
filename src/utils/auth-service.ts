import { SignUpFormData } from "@/schemas/authSchemas/sign-up-schema";
import httpRequest from "./axios";
import { ENDPOINTS } from "@/constants/endpoints";
import { AuthVerificationType } from "@/requestTypes/authRequests/auth-verification";
import { SignInFormData } from "@/schemas/authSchemas/sign-in-schema";

export const authService = {
  //register
  signupAccount: (data: SignUpFormData) => {
    return httpRequest.post(ENDPOINTS.SIGN_UP, {
      ...data,
      gender: Number(data.gender),
      roles: [0],
    });
  },
  //verify otp
  verifyOtp: (data: AuthVerificationType) => {
    return httpRequest.post(ENDPOINTS.VERIFY_OTP, data);
  },
  //login
  signinAccount: (data: SignInFormData) => {
    return httpRequest.post(ENDPOINTS.SIGN_IN, data);
  },
};
