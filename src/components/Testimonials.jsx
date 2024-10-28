import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default () => {
  const testimonials = [
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "NEW YORK TIMES",
      quote:
        "It is a long established fact that a reader will be distracted by the Lorem Ipsum.",
    },
    {
      name: "THE GUARDIAN",
      quote:
        "At vero eos et accusamus et iusto odio voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "NEW YORK TIMES",
      quote:
        "It is a long established fact that a reader will be distracted by the Lorem Ipsum.",
    },
    {
      name: "THE GUARDIAN",
      quote:
        "At vero eos et accusamus et iusto odio voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
    {
      name: "THE SUNDAY TIMES",
      quote:
        "A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.",
    },
    {
      name: "NEW YORK TIMES",
      quote:
        "It is a long established fact that a reader will be distracted by the Lorem Ipsum.",
    },
    {
      name: "THE GUARDIAN",
      quote:
        "At vero eos et accusamus et iusto odio voluptatum atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section>
      <div className="mx-auto py-20 px-4 md:px-8 bg-[rgb(31,30,44)] w-full">
        <div className="w-full mx-auto text-center relative">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 border rounded-full p-4 transform -translate-y-1/2 text-gray-100 hover:text-gray-300"
            aria-label="Previous testimonial"
          >
            <HiOutlineArrowNarrowLeft size={24} />
          </button>
          <ul className="lg:w-[40%] w-[60%] mx-auto">
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-100 italic text-xl font-normal sm:text-2xl font-piazzolla">
                        "{item.quote}"
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <div className="mt-3">
                        <span className="block text-gray-100 text-[18px] font-semibold font-alegreya">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2  transform border rounded-full p-4 -translate-y-1/2 text-gray-100 hover:text-gray-300"
            aria-label="Next testimonial"
          >
            <HiOutlineArrowNarrowRight size={24} />
          </button>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 border ring-gray-100 focus:ring ${
                    currentTestimonial == idx ? "bg-gray-100" : "bg-transparent"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
