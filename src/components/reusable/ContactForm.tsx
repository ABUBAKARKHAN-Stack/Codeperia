"use client";

import { useForm } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { errorToast, successToast } from "@/helpers/toasts.helper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, servicesContactSchema } from "@/schema/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const ContactForm = ({ forServices = false }) => {
  const schema = forServices ? servicesContactSchema : contactSchema;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesItems = [
    "Web Development",
    "App Development",
    "Full Stack Development",
    "UI/UX Design",
    "DevOps & Automation",
  ];

  const subjects = [
    "Buy Ready-Made Project",
    "Request Custom Project",
    "Project Consultation",
    "Technical Support",
    "Partnership / Collaboration",
    "Career / Jobs",
    "Other",
  ];

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      service: "",
      subject: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      form.reset();
      successToast("Your message has been sent successfully!");
    } catch (error) {
      errorToast("Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="border-2 border-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="Your Email"
                    className="border-2 border-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Subject / Service Field */}
        <div className="w-full space-y-2">
          <FormField
            name={forServices ? "service" : "subject"}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{forServices ? "Service" : "Subject"}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-2 border-purple-500">
                      <SelectValue
                        placeholder={
                          forServices ? "Select a Service" : "Select a Subject"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {forServices
                      ? servicesItems.map((service, i) => (
                          <SelectItem key={i} value={service}>
                            {service}
                          </SelectItem>
                        ))
                      : subjects.map((subject, i) => (
                          <SelectItem
                            key={i}
                            value={subject}
                            disabled={
                              subject === "Career / Jobs" ||
                              subject === "Buy Ready-Made Project"
                            }
                          >
                            {subject}
                          </SelectItem>
                        ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="Write Your Message..."
                    className="resize-none border-2 border-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
