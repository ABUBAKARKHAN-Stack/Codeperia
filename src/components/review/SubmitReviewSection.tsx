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
                <SectionHeader mainHeading="Drop Your Review" />
                <section className="mt-10 grid grid-cols-1  lg:grid-cols-2 gap-y-8 items-center">
                    <div className="w-full rounded-2xl border border-white/5 bg-purple-500/5 p-8 shadow-2xl backdrop-blur-3xl lg:max-w-xl lg:order-1 order-2">
                        <ReviewForm />
                    </div>
                    <div className="flex justify-center lg:order-2 order-1 ">
                        <ReviewIllustration className="w-full max-w-md drop-shadow-2xl" />
                    </div>
                </section>
            </ContainerLayout>
        </section>
    );
};

export default SubmitReviewSection;
