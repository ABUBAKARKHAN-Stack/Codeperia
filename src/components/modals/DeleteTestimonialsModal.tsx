"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2, Trash } from "lucide-react";
import { errorToast, successToast } from "@/helpers/toasts.helper";

type Props = {
  reviewId: string;
};

const DeleteTestimonialsModal = ({ reviewId }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    try {
      setIsDeleting(true)
      const resp = await fetch("/api/review", {
        body: JSON.stringify({ reviewId }),
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => null);
        errorToast(errorData?.message || "Failed to delete review");
      }

      successToast("Review Aeleted Successfully!")
      setIsOpen(false)

    } catch (error: any) {
      setIsDeleting(false)
      errorToast(error.message || "An unexpected error occurred");
    } finally {
      setIsDeleting(false)
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}  >
      <DialogTrigger onClick={() => setIsOpen(true)} >
        <Button size="icon" variant="destructive" className="cursor-pointer">
          <Trash className="size-4.5" />
        </Button>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-de">Delete Testimonial?</DialogTitle>

          <DialogDescription>
            This action cannot be undone. The testimonial will be permanently
            deleted from the database.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            type="submit"
            disabled={isDeleting}
            className="hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 px-4"
            onClick={handleDelete}
            variant={"destructive"}
          >
            {isDeleting ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Trash className="h-4 w-4" />
                <span>Delete Review</span>
              </div>
            )}
          </Button>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTestimonialsModal;