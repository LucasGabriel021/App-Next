"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  CarTaxiFront,
  Hotel,
  ClockIcon,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import testimonials from "@/mocks/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Depoimentos dos nossos clientes
          </h2>
          <div className="relative max-x-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                    {" "}
                    {/* flex-[0_0_100%] Com essa propriedade o slide ocupa 100% da largura do container */}
                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            className="object-cover rounded-full"
                          />
                        </div>
                        <p className="text-gray-200">{item.content}</p>
                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="cursor-pointer absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              className="cursor-pointer absolute right-1 -translate-y-1/2 translate-x-1/2 top-1/2 z-10 bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
