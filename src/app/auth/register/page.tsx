"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, Title, Text, TextInput, Button, Flex } from "@tremor/react";
import { FaEnvelope, FaLock, FaUser, FaChartLine } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real application, this would be an API call to register the user
      console.log("Registration data:", formData);

      // Redirect to login page on successful registration
      router.push("/auth/login?registered=true");
    } catch (err) {
      console.error("Registration error:", err);
      setErrors({
        form: "An error occurred during registration. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="max-w-md w-full">
        <div className="text-center mb-6">
          <Flex justifyContent="center" className="mb-2">
            <FaChartLine className="text-primary text-3xl" />
          </Flex>
          <Title>Create an Account</Title>
          <Text className="text-muted-foreground">Join FinVision to start trading</Text>
        </div>

        {errors.form && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-sm">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <TextInput
                name="firstName"
                placeholder="First Name"
                icon={FaUser}
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                errorMessage={errors.firstName}
                required
              />
            </div>
            <div>
              <TextInput
                name="lastName"
                placeholder="Last Name"
                icon={FaUser}
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                errorMessage={errors.lastName}
                required
              />
            </div>
          </div>
          <div>
            <TextInput
              name="email"
              placeholder="Email"
              type="email"
              icon={FaEnvelope}
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              errorMessage={errors.email}
              required
            />
          </div>
          <div>
            <TextInput
              name="password"
              placeholder="Password"
              type="password"
              icon={FaLock}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              errorMessage={errors.password}
              required
            />
            <Text className="text-xs text-muted-foreground mt-1">
              Password must be at least 8 characters long
            </Text>
          </div>
          <div>
            <TextInput
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              icon={FaLock}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            color="blue"
            className="w-full"
            loading={isLoading}
            disabled={isLoading}
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Text className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}