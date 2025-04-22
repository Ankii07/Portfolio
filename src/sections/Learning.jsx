import { clientReviews } from '../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const containerRef = useRef();
    // const divRef = useRef();

    useGSAP(() => {
        // Animation for each client review
        gsap.from(".client-review", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".client-container",
                start: "top 70%",
                toggleActions: "play none none none",
            }
        });

        // Optional: Animation for the heading
        gsap.from(".head-text", {
            y: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".c-space",
                start: "top 80%",
                toggleActions: "play none none none",
            }
        });
    }, { scope: containerRef });

    return (
        <section className="c-space my-20" ref={containerRef}>
            <h3 className="head-text">My Learning Journey</h3>

            <div className="client-container" >
                {clientReviews.map((item, index) => (
                    <div key={`review-${item.id}`} className="client-review shadow-xl shadow-sky-400/25">
                        <div>
                            <p className="text-white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2 border-2 border-white-600 rounded-full px-3 py-1">
                                    <a
                                        className="flex items-center gap-2 cursor-pointer text-white-600"
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer">
                                        {index === 0 ? <p>Check Certificate</p> : <p>Check Codes</p>}
                                        <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;