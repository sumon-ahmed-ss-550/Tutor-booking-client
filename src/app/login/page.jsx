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
  Link as HeroLink,
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
    }
  };

  const handleGoogleButton = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-100 px-4">
      <fieldset className="border border-default-200 rounded-2xl p-8 w-full max-w-md bg-white shadow-lg">
        <legend className="px-3 text-2xl font-bold text-center">
          User Login
        </legend>

        <Form className="flex flex-col gap-5 mt-4" onSubmit={onSubmit}>
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="rounded-none" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className="rounded-none" />
            <Description>Password must be at least 8 characters</Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="w-full space-y-3">
            <Button
              className="w-full rounded-none"
              color="primary"
              type="submit"
            >
              <Check />
              Login
            </Button>

            <Button
              className="w-full rounded-none"
              type="reset"
              variant="secondary"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-1 my-1.5">
          <div className="h-px bg-[#ebebec] flex-1"></div>
          <span>OR</span>
          <div className="h-px bg-[#ebebec] flex-1"></div>
        </div>

        <div>
          {/* Google Login */}
          <Button
            onClick={handleGoogleButton}
            type="button"
            variant="bordered"
            className="w-full"
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Register Link */}
          <p className="text-sm text-center text-default-600">
            Don&apos;t have an account?
            <Link href="/register">
              {" "}
              <u>Register</u>
            </Link>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default LoginPage;
