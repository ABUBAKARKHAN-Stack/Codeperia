"use client";

import { sendEmail } from "@/app/actions/email.actions";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormValues, contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Activity } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useServices } from "@/context/ServiceContext";

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const { servicesOverview } = useServices();

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const resp = await sendEmail(data);

      if (resp.error) {
        const errMsg =
          resp.error.message ||
          "We couldn't deliver your message at the moment. Please try again later.";

        toast.error("Message Delivery Failed", {
          description: errMsg,
          richColors: true,
          position: "top-left",
        });
        return;
      }
      form.reset();
      toast.success("Message Sent Successfully", {
        description:
          "Thank you for contacting us. We've received your message and will get back to you shortly.",
        richColors: true,
        position: "bottom-right",
      });
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

  return (
    <AnimatedSection className="lg:col-span-3" direction="left">
      <div className="glass-card rounded-2xl p-8 md:p-10">
        <h2
          className="text-foreground mb-8 text-2xl font-bold"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Send a message
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-accent h-12 rounded-xl transition-colors"
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
                    <FormLabel className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background/50 border-border/50 focus:border-accent h-12 rounded-xl transition-colors"
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
                  <FormLabel className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    Service Interested In
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-accent h-12 rounded-xl transition-colors">
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
                  <FormLabel className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="How can we help?"
                      className="bg-background/50 border-border/50 focus:border-accent h-12 rounded-xl transition-colors"
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
                  <FormLabel className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-accent resize-none rounded-xl transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <MagneticButton strength={0.1}>
              <Button
                disabled={isSubmitting}
                type="submit"
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-12 rounded-full px-8 text-sm font-medium"
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
            </MagneticButton>
          </form>
        </Form>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
