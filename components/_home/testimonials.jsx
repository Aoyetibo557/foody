import React from "react";
import { testimoniallist } from "@/consts/home";
import { TestimonialCard } from "@/components/_home/testimonialcard";

export const Testimonials = () => {
    return (
        <div className={`flex flex-row flex-wrap gap-8 testimonials_container`}>   
            {testimoniallist.map((testimonial, index) => (
                <TestimonialCard key={index} name={testimonial.name} image={testimonial.image} text={testimonial.testimonial} />
            ))}
        </div>
    )
}