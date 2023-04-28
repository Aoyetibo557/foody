import React from "react";
import { testimoniallist } from "@/consts/home";
import { TestimonialCard } from "@/components/_home/testimonialcard";

export const Testimonials = () => {
    return (
        <div className={`flex flex-col items-center gap-10`}>
            <div className={`text-3xl comfortaa-font font-semibold`}>
                Feedbacks from our community
            </div>
            <div className={` flex flex-row gap-10`}>
                {testimoniallist.map((testimonial, index) => (
                    <TestimonialCard key={index} name={testimonial.name} image={testimonial.image} text={testimonial.testimonial} />
                ))}
            </div>
        </div>
    )
}