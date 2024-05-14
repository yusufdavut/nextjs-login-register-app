"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type Props = {};

export default function LoginForm({}: Props) {
  return (
    <form className="flex flex-col w-[400px] min-h-80 p-8 border shadow-sm rounded-lg">
      <h2 className="text-4xl font-bold mb-6">Login</h2>

      <div className="flex flex-col items-center w-full h-full">
        <Input
          className="outline-none focus-visible:shadow-none mb-5"
          placeholder="Email"
        />
        <Input
          className="outline-none focus-visible:shadow-none mb-5"
          placeholder="Password"
          type="password"
        />
      </div>
      <Button className="mb-5">Login</Button>
      <Link href="/register" className="text-xs text-blue-400">
        Create Account
      </Link>
    </form>
  );
}
