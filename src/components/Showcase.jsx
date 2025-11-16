import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video  src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div> 

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Welcome to Titan Consultancy</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Welcome to Titan Consultancy, a Maltese company with <span className="text-white">20+ years of service</span>.
                            </p>
                            <p>
                                From consulting to implementation, we offer a full spectrum of services to support your digital journey.
                            </p>
                            <p>
                                We have successfully executed projects across the globe, from the US to the UK and beyond. We are always committed to helping businesses navigate the complexities of the digital world and achieve their goals.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>a</p>
                            <h3>Maltese</h3>
                            <p>company</p>
                        </div>
                        <div className="space-y-2">
                            <p>with </p>
                            <h3>20+</h3>
                            <p>years of experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
