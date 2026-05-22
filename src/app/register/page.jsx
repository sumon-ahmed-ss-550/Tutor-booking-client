"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: newData.name,
      email: newData.email,
      image: newData.photoURL,
      password: newData.password,
    });

    if (data) {
      toast.success("Account created successfully!");
      router.push("/login");
    } else {
      toast.error("Registration failed. Try again");
    }
    console.log({ data, error });
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
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden">
          
          {/* Header */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Account</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Join our platform and start your learning journey today.
            </p>
          </div>

          <Form className="flex flex-col gap-6 px-8 pb-10 w-full" onSubmit={onSubmit}>
            {/* Name */}
            <TextField
              isRequired
              name="name"
              className="w-full flex flex-col"
              validate={(value) => {
                if (value.length < 3) return "Name must be at least 3 characters";
                return null;
              }}
            >
              <Label className={labelStyles}>Name</Label>
              <Input placeholder="Enter your full name" className={inputStyles} />
              <FieldError className={errorStyles} />
            </TextField>

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

            {/* Photo URL */}
            <TextField name="photoURL" type="url" className="w-full flex flex-col">
              <Label className={labelStyles}>Photo URL (Optional)</Label>
              <Input
                placeholder="https://example.com/photo.jpg"
                className={inputStyles}
              />
              <FieldError className={errorStyles} />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full flex flex-col"
              validate={(value) => {
                if (value.length < 8) return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
                if (!/[0-9]/.test(value)) return "Must contain at least one number";
                return null;
              }}
            >
              <Label className={labelStyles}>Password</Label>
              <Input placeholder="Create a secure password" className={inputStyles} />
              <Description className={descriptionStyles}>
                Must be at least 8 characters with 1 uppercase and 1 number.
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
                Create Account
              </Button>

              <Button
                className="w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors active:scale-[0.98]"
                type="reset"
              >
                Clear Form
              </Button>
            </div>
            
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-teal-600 hover:text-teal-700 transition-colors">
                Sign in
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
