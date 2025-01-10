import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { SignInFormData, signInSchema } from "@/schemas/authSchemas/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { authService } from "@/utils/auth-service";
import { toast } from "@/hooks/use-toast";
import { ROUTES } from "@/constants/routes";
import { LoginDataType, ResponseType } from "@/types/response-global";
import { AxiosError } from "axios";
import { useAuth } from "@/context/auth-context";

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const { setToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (data: SignInFormData) => {
    try {
      const response = await authService.signinAccount(data);

      const signinData = response.data as ResponseType;
      if (response.status === 200) {
        toast({
          description: signinData.message,
        });

        const authData = signinData.data as LoginDataType;
        
        setToken(authData.accessToken);
        setRefreshToken(authData.refreshToken);
        navigate(ROUTES.HOME);
      } else {
        toast({
          variant: "destructive",
          description: signinData.message || "An error occurred during signup.",
        });
        setValue("password", "");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          variant: "destructive",
          description: error.response?.data?.message,
        });
        setValue("password", "");
      } else {
        toast({
          variant: "destructive",
          description: "Failed to connect to the server. Please try again.",
        });
      }
    }
  };

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
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <ShoppingBag className="mr-2 h-6 w-6" />
            <CardTitle className="text-2xl font-bold">Shop.co</CardTitle>
          </div>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      placeholder="abc@example.com"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Button className="w-full mt-6" type="submit">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link
            to="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot your password?
          </Link>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-primary font-semibold hover:underline"
            >
              Create an account
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div></div>
    </div>
  );
}
