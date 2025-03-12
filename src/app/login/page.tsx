"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/users.json"); // Mock user database
      const users = await res.json();

      const user = users.find(
        (u: { email: string; password: string }) =>
          u.email === email && u.password === password
      );

      if (user) {
        document.cookie = `user=${email}; path=/`;
        localStorage.setItem("user", JSON.stringify({ email }));
        router.push("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/3 bg-black text-white flex flex-col justify-between p-16">
        <div>
          <h1 className="text-4xl font-bold text-red-600">Shelf Link</h1>
          <p className="mt-4 text-white">
            Please log in to your account to continue
          </p>
        </div>
        <div>
          <p className="text-sm text-white">
            © Acme Ltd. 2024. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 flex items-center relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/image-library/login-background.png')",
          }}
        />

        {/* Login Form */}
        <div className="relative z-10 w-2/5 bg-white p-8 ml-16 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">Login</h2>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 text-right">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot Password?
              </Link>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
