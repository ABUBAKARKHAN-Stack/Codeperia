"use client";
import { reviewSchema } from "@/schema/review.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { PiStar } from "react-icons/pi";
// import { createReview } from "@/helpers/review.helper";
import { errorToast, successToast } from "@/helpers/toasts.helper";

const ReviewForm = () => {
    const form = useForm({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            clientName: "",
            feedback: "",
            rating: 1,
        },
    });

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (data: z.infer<typeof reviewSchema>) => {
        try {
            const resp = await fetch("/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!resp.ok) {
                const errorData = await resp.json().catch(() => null);
                errorToast(errorData?.message || "Failed to submit review");
            }
            form.reset()
            successToast("Review Added!");
        } catch (error: any) {
            errorToast(error.message || "An unexpected error occurred");
        }
    };


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Client Name Field */}
                <div className="space-y-2">
                    <FormField
                        name="clientName"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Client Name</FormLabel>
                                <FormControl>
                                    <Input
                                        id="clientName"
                                        placeholder="Enter your name"
                                        className="border-2 border-purple-500"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Feedback Field */}
                <div className="space-y-2">
                    <FormField
                        name="feedback"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Feedback</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="feedback"
                                        placeholder="Enter your feedback"
                                        className="border-2 border-purple-500"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Rating Field */}
                <div className="space-y-2">
                    <FormField
                        name="rating"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rating</FormLabel>
                                <FormControl>
                                    <Input
                                        id="rating"
                                        placeholder="Enter rating (1-5)"
                                        className="border-2 border-purple-500"
                                        type="number"
                                        {...field}
                                        value={field.value as number}
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
                            <span>Submitting...</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <PiStar className="h-4 w-4" />
                            <span>Submit Review</span>
                        </div>
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ReviewForm;
