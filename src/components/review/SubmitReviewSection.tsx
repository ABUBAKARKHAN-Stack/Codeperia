import React from "react";
import ReviewForm from "./ReviewForm";
import { ContainerLayout } from "../layout";
import { SectionHeader } from "../reusable";
import { ReviewIllustration } from "../ui/illustrations";

const SubmitReviewSection = () => {
    return (

        <section
            id="submit-review-form-section"
            className="h-full w-full py-16 text-white"

        >
            <ContainerLayout>
                <SectionHeader mainHeading="Get In Touch" />
                <section className="mt-10 flex justify-between items-center">
                    <ReviewIllustration />
                    <div className="w-full rounded-2xl border border-white/5 bg-purple-500/5 p-8 shadow-2xl backdrop-blur-3xl lg:max-w-xl">
                        <ReviewForm />
                    </div>
                </section>
            </ContainerLayout>
        </section>
    );
};

export default SubmitReviewSection;
