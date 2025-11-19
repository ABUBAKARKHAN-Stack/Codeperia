"use client";
import { createContext, useContext } from "react";
import { IReview } from "@/types/main.types";

type ReviewsContextType = {
    reviews: IReview[];
};

const ReviewsContext = createContext<ReviewsContextType | null>(null);

export const ReviewsProvider = ({
    children,
    reviews
}: {
    children: React.ReactNode;
    reviews: IReview[];
}) => {
    return (
        <ReviewsContext.Provider value={{ reviews }}>
            {children}
        </ReviewsContext.Provider>
    );
};

export const useReviews = () => {
    const ctx = useContext(ReviewsContext);
    if (!ctx) throw new Error("useReviews must be inside ServicesProvider");
    return ctx;
};
