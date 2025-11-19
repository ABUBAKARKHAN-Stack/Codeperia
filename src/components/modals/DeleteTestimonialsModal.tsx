import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'

type Props = {
    onDelete: () => void;
}

const DeleteTestimonialsModal = ({ onDelete }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    variant="destructive"
                    className="cursor-pointer"
                >
                    <Trash className="size-4.5" />
                </Button>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="max-w-sm">
                <DialogHeader>
                    <DialogTitle className="text-de">
                        Delete Testimonial?
                    </DialogTitle>

                    <DialogDescription>
                        This action cannot be undone. The testimonial will be permanently deleted
                        from the database.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='mt-4'>
                    <DialogClose>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        className="px-4"
                        onClick={onDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteTestimonialsModal