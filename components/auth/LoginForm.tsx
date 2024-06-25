"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Login Submitted by the Moose...", data);
    router.push("/");
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Log into your account with your credentials
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text.white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="p-6 bg-slate-100 dark:bg-slate-500 dark:text-white"
                        placeholder="Please Enter Email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text.white">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="p-6 bg-slate-100 dark:bg-slate-500 dark:text-white"
                        placeholder="Please Enter password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />
              <Button className="w-full dark:bg-slate-800 dark:text-white">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
