import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                {/* <h1>Welcome To,</h1> */}
                <img src="/title_titan.png" alt="Titan Consultancy" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <p style={{color: "white", fontSize: "24px"}}>Experience That Leads, ... Value That Lasts.<br/>
            UNPARALLELED WEBSITE, SOFTWARE & TECHNOLOGY SERVICES AT YOUR BUDGET!</p>
<br/>
            <button style={{color: "white"}}>Contact Us</button>
        </section>
    )
}
export default Hero
