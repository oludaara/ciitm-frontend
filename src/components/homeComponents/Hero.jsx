import { useSelector } from "react-redux";
import Notice_Card from "../Notice_Card";
import { useEffect, useState } from "react";

const Hero = () => {
    let [image, setImage] = useState();
    const [heading, setHeading] = useState()
    const [Paragraph, setParagraph] = useState()

    let hero = useSelector((state) => state.ui.landingPage);


    useEffect(() => {
        setImage('')
        setHeading('')
        setParagraph('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nemo.')

        if (hero) {
            let data = hero.HeroSection;
            setImage(data.homeBackgroundImage)
            setHeading(data.homeTitle)
            setParagraph(data.homeParagraph)
        }
    }, [hero])



    return (

        <section
            className="w-full h-screen flex flex-col lg:flex-row items-center justify-center text-white bg-cover bg-no-repeat px-10"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="text w-full lg:w-1/2 h-full flex items-start justify-end lg:justify-center flex-col">

                <h3 className="text-[7vw] lg:text-[4vw] font-extrabold lg:font-[700] leading-tight">
                    {heading}
                </h3>

                <p className="text-lg sm:text-2xl w-[70%]">
                    {Paragraph}
                </p>
            </div>
            <div className="card-container h-1/2 lg:h-full w-full lg:w-1/2 flex items-end justify-end pb-10 flex-col gap-4">
                <Notice_Card title="Download Free Call" />
                <Notice_Card title="Apply online admission 2025-2026" />
            </div>
        </section>
    );
};

export default Hero;
