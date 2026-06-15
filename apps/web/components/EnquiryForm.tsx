"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  mobile: z.string().min(10, "Please enter a valid mobile number."),
  service: z.string().min(1, "Please select a service or product."),
  location: z.string().min(2, "Please enter your location."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      service: "",
      location: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Mock API call to the endpoint we will create
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourceUrl: window.location.href,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto bg-green-50 border-green-200">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700 mb-6">
            Your enquiry has been received successfully. Our team will contact you shortly.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
            Submit Another Enquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto shadow-xl border-primary/20" id="contact">
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <CardTitle className="font-heading text-2xl text-center">Request a Callback</CardTitle>
        <CardDescription className="text-center">
          Fill out the form below and we will get back to you immediately.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name *
            </label>
            <input
              id="name"
              {...form.register("name")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="John Doe"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm font-medium leading-none">
              Mobile Number *
            </label>
            <input
              id="mobile"
              type="tel"
              {...form.register("mobile")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="+91 XXXXX XXXXX"
            />
            {form.formState.errors.mobile && (
              <p className="text-sm text-destructive">{form.formState.errors.mobile.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="service-select" className="text-sm font-medium leading-none">
              Service / Product *
            </label>
            <select
              id="service-select"
              {...form.register("service")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select a Service</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Oxygen Equipments">Oxygen Equipments</option>
              <option value="ICU at Home">ICU at Home</option>
              <option value="Wheelchairs & Walkers">Wheelchairs & Walkers</option>
              <option value="Investigations at Home">Investigations at Home</option>
              <option value="Nursing & Elderly Care">Nursing & Elderly Care</option>
              <option value="Other Medical Equipments">Other Medical Equipments</option>
            </select>
            {form.formState.errors.service && (
              <p className="text-sm text-destructive">{form.formState.errors.service.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-medium leading-none">
              Location *
            </label>
            <input
              id="location"
              {...form.register("location")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="E.g., Pitampura, Delhi"
            />
            {form.formState.errors.location && (
              <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Message (Optional)
            </label>
            <textarea
              id="message"
              {...form.register("message")}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="How can we help you?"
            />
          </div>

          <Button type="submit" className="w-full bg-[var(--cta-gradient)]" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
