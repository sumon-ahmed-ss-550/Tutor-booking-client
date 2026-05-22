"use client";

import { Check } from "@gravity-ui/icons";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: newData.email,
      password: newData.password,
    });
    if (data) {
      toast.success("User login successfully");
      router.push("/");
    } else {
      toast.error("Login failed. Check your credentials.");
    }
  };

  const handleGoogleButton = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  // Common input classes
  const inputStyles = "w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm text-gray-700 placeholder-gray-400";
  const labelStyles = "block text-sm font-semibold text-gray-700 mb-1.5";
  const errorStyles = "text-red-500 text-xs font-medium mt-1";
  const descriptionStyles = "text-gray-500 text-xs mt-1.5";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-12 px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden pb-8">
          
          {/* Header */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Back</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Please enter your details to sign in.
            </p>
          </div>

          <Form className="flex flex-col gap-6 px-8 w-full" onSubmit={onSubmit}>
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full flex flex-col"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className={labelStyles}>Email Address</Label>
              <Input placeholder="name@example.com" className={inputStyles} />
              <FieldError className={errorStyles} />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              className="w-full flex flex-col"
              validate={(value) => {
                if (value.length < 8) return "Password must be at least 8 characters";
                return null;
              }}
            >
              <Label className={labelStyles}>Password</Label>
              <Input placeholder="Enter your password" className={inputStyles} />
              <Description className={descriptionStyles}>
                Password must be at least 8 characters.
              </Description>
              <FieldError className={errorStyles} />
            </TextField>

            {/* Buttons */}
            <div className="w-full space-y-4 mt-2">
              <Button
                className="w-full h-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                type="submit"
              >
                <Check width={18} height={18} />
                Login
              </Button>

              <Button
                className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors active:scale-[0.98]"
                type="reset"
              >
                Clear Form
              </Button>
            </div>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 px-8 my-8">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-gray-400 font-medium text-sm">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="px-8 flex flex-col gap-6">
            {/* Google Login */}
            <Button
              onClick={handleGoogleButton}
              type="button"
              className="w-full h-12 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <FcGoogle size={22} />
              Continue with Google
            </Button>

            {/* Register Link */}
            <p className="text-sm text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-bold text-teal-600 hover:text-teal-700 transition-colors">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
