"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import ShimmerButton from './ui/ShimmerButton'
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

function Contacts() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            console.log("SUCCESS!", response);
            setIsSubmitted(true);
        } catch (error) {
            const typedError = error as Error;
            console.error("FAILED...", typedError.message);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            const timeoutId = setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [isSubmitted]);

    return (
        <motion.div id='contacts' className="pt-20" initial={{
            opacity: 0,
        }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 5 // Animation duration
                }
            }}
            viewport={{ once: false }}>
            <h1 className="heading">Let&apos;s <span className="text-purple">Connect</span></h1>
            <div className="max-w-md w-full mx-auto border-2 border-purple rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100 mt-14 hover:bg-black-100">

                <div className="justify-center items-center">
                    {!isSubmitted && (
                        <form ref={form} onSubmit={sendEmail} className="my-8">
                            <LabelInputContainer className="mb-4 ">
                                <Label htmlFor="user_name">Name</Label>
                                <Input id="user_name" name="user_name" placeholder="Your Name" type="text" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="user_email">Email Address</Label>
                                <Input id="user_email" name="user_email" placeholder="Your Email Id" type="email" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" className="block w-full break-words text-base" name="message" placeholder="Your message here" required />
                            </LabelInputContainer>

                            <ShimmerButton title="Send Message" position="center" />
                        </form>
                    )}

                    {isSubmitted && (
                        <p className="success-message">Thank you for your message!</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default Contacts;