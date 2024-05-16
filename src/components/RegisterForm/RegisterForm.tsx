"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Props = {};

export default function RegisterForm({}: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ok");
  };
  return (
    <form className="flex flex-col w-[400px] min-h-80 p-8 border shadow-sm rounded-lg">
      <h2 className="text-4xl font-bold mb-6">Register</h2>

      <div className="flex flex-col items-center w-full h-full">
        <Input
          className="outline-none mb-5 focus-visible:ring-transparent"
          placeholder="Name Surname"
        />
        <Input
          className="outline-none mb-5 focus-visible:ring-transparent"
          placeholder="Email"
        />
        <Input
          className="outline-none mb-5 focus-visible:ring-transparent"
          placeholder="Password"
          type="password"
        />
        <Input
          className="outline-none mb-5 focus-visible:ring-transparent"
          placeholder="Password Again"
          type="password"
        />
      </div>
      <Button onClick={handleSubmit} className="mb-5" variant="default">
        Create Account
      </Button>
      <Link href="/login" className="text-xs text-blue-400">
        Back to Login
      </Link>
    </form>
  );
}
