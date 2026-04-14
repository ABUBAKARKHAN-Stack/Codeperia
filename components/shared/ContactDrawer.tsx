"use client";

import { Activity, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { ContactFormValues, contactSchema } from "@/schemas/contact.schema";
import { contactInfo } from "@/constants/navigation.constants";
import Link from "next/link";
import { useServices } from "@/context/ServiceContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { sendEmail } from "@/app/actions/email.actions";
import { Spinner } from "../ui/spinner";

interface ContactDrawerProps {
  children: React.ReactNode;
}

const ContactDrawer = ({ children }: ContactDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { servicesOverview } = useServices();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      service: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const resp = await sendEmail(data);

      if (resp.data) {
        form.reset();
        setSubmitted(true);

        setTimeout(() => {
          setOpen(false);
          setTimeout(() => setSubmitted(false), 300);
        }, 2000);
      }

      if (resp.error) {
        const errMsg =
          resp.error.message ||
          "We couldn't deliver your message at the moment. Please try again later.";

        toast.error("Message Delivery Failed", {
          description: errMsg,
          richColors: true,
          position: "top-left",
        });
      }
    } catch (error) {
      const err = error as any;

      const errMsg =
        err?.message ||
        "Something went wrong while sending your message. Please try again.";

      toast.error("Unable to Send Message", {
        description: errMsg,
        richColors: true,
        position: "top-left",
      });
    }
  };

  const mailInfo = contactInfo.filter(
    (info) => info.label.toLowerCase().trim() === "mail",
  )[0];

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) {
          setTimeout(() => setSubmitted(false), 300);
          form.reset();
        }
      }}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="custom-scrollbar bg-background border-border/50 w-full overflow-y-auto p-0 sm:max-w-md"
      >
        <div className="p-6 pb-0">
          <SheetHeader className="mb-1 text-left">
            <div className="mb-3 flex items-center gap-2">
              <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />
              <span className="text-accent text-[10px] font-semibold tracking-[0.3em] uppercase">
                Quick Contact
              </span>
            </div>
            <SheetTitle className="text-foreground font-playfair text-2xl font-bold">
              Let's <span className="text-accent italic">talk</span>
            </SheetTitle>
            <SheetDescription className="text-muted-foreground text-sm font-light">
              Fill out the form below and we'll get back to you within 24 hours.
            </SheetDescription>
          </SheetHeader>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="flex min-h-[60vh] flex-col items-center justify-center p-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-accent/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Send className="text-accent h-7 w-7" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold">
                Message Sent!
              </h3>
              <p className="text-muted-foreground text-sm">
                We'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-muted/30 border-border/50 focus:border-accent h-11 rounded-xl text-sm transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-muted/30 border-border/50 focus:border-accent h-11 rounded-xl text-sm transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                          Service Interested In
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-muted/30 border-border/50 focus:border-accent h-11! w-full rounded-xl text-sm transition-colors">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-popover border-border z-200">
                            {servicesOverview.map((s) => (
                              <SelectItem
                                key={s.slug}
                                value={s.title}
                                className="focus:bg-accent/10 text-sm"
                              >
                                {s.title}
                              </SelectItem>
                            ))}
                            <SelectItem
                              value={"Other"}
                              className="focus:bg-accent/10 text-sm"
                            >
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can we help?"
                            className="bg-muted/30 border-border/50 focus:border-accent h-11 rounded-xl text-sm transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            className="bg-muted/30 border-border/50 focus:border-accent resize-none rounded-xl text-sm transition-colors"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    size="lg"
                    className="bg-foreground text-background hover:bg-foreground/90 h-12 w-full rounded-full text-sm font-medium"
                  >
                    {/* Rest State  */}
                    <Activity mode={!isSubmitting ? "visible" : "hidden"}>
                      <Send /> Send Message
                    </Activity>

                    {/* Loader State  */}
                    <Activity mode={isSubmitting ? "visible" : "hidden"}>
                      <Spinner data-icon="inline-start" />
                      Sending Message
                    </Activity>
                  </Button>

                  {/* Direct Email Section  */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="bg-accent/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                      <Mail className="text-accent h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-[10px] tracking-wider uppercase">
                        Or email us directly
                      </p>
                      <Link
                        href={mailInfo.link}
                        className="hover:text-accent text-foreground text-xs font-medium transition-colors duration-300"
                      >
                        {mailInfo.value}
                      </Link>
                    </div>
                    <ArrowUpRight className="text-muted-foreground/40 ml-auto h-3 w-3" />
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
      </SheetContent>
    </Sheet>
  );
};

export default ContactDrawer;
