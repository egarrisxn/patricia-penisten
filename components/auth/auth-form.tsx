"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/admin");
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='mx-auto flex h-fit w-full max-w-7xl justify-center px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <div className='mb-4 flex justify-center'>
            <div className='flex size-16 items-center justify-center rounded-full bg-accent'>
              <Shield className='size-8 text-blue-500' />
            </div>
          </div>
          <CardTitle className='text-2xl font-bold text-accent-foreground'>
            Admin Login
          </CardTitle>
          <p className='text-muted-foreground'>
            Access the admin dashboard to manage submissions
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {error && (
              <div className='rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600'>
                {error}
              </div>
            )}

            <div>
              <Label htmlFor='email' className='text-muted-foreground'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                aria-label='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1'
                required
                disabled={isLoading}
                placeholder='admin@example.com'
              />
            </div>

            <div className='pb-1'>
              <Label htmlFor='password' className='text-muted-foreground'>
                Password
              </Label>
              <div className='relative'>
                <Input
                  id='password'
                  aria-label='password'
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='mt-1'
                  required
                  disabled={isLoading}
                  placeholder='Enter your password'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute top-1/2 right-3 -translate-y-1/2 transform text-muted-foreground hover:text-accent-foreground'
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className='size-4' />
                  ) : (
                    <Eye className='size-4' />
                  )}
                </button>
              </div>
            </div>

            <Button
              type='submit'
              disabled={isLoading || !email || !password}
              className='w-full'
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
