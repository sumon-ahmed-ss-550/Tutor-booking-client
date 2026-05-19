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
      router.push("/login");
    } else {
      toast.error("Registration failed. Try again");
    }
    console.log({ data, error });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-default-100 px-4">
      <fieldset className="border border-default-200 rounded-2xl p-8 w-full max-w-md bg-white shadow-lg">
        <legend className="px-3 text-2xl font-bold text-center">
          User Registration
        </legend>

        <Form className="flex flex-col gap-5 mt-4" onSubmit={onSubmit}>
          {/* Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="rounded-none" />
            <FieldError />
          </TextField>

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

          {/* Photo URL */}
          <TextField name="photoURL" type="url">
            <Label>Photo URL</Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="rounded-none"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className="rounded-none" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
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
              Register
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
      </fieldset>
    </div>
  );
};

export default RegisterPage;
