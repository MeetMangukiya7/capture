import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
    pageAnim2,
    titleAnim,
    photoAnim,
    lineAnim,
    sliderAnim,
    sliderContainer,
    ScrollReveal,
} from "../utils/animation";
import { useScroll } from "../utils/useScroll";
import { ScrollTop } from "../utils/ScrollTop";

import athlete from "../img/athlete-small.jpg";
import theracer from "../img/theracer-small.jpg";
import goodtimes from "../img/goodtimes-small.jpg";

export default function OurWork() {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return (
        <Work variants={pageAnim2} initial="hidden" animate="show" exit="exit">
            <ScrollTop />
            <motion.div
                variants={sliderContainer}
                initial="hidden"
                animate="show"
            >
                <Frame1 variants={sliderAnim}></Frame1>
                <Frame2 variants={sliderAnim}></Frame2>
                <Frame3 variants={sliderAnim}></Frame3>
                <Frame4 variants={sliderAnim}></Frame4>
            </motion.div>

            <Movie
                variants={ScrollReveal}
                animate={controls}
                initial="hidden"
                ref={element}
            >
                <Hide>
                    <motion.h2 variants={titleAnim}>The Athlete</motion.h2>
                </Hide>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <Link to="/work/the-athlete">
                        <motion.img
                            variants={photoAnim}
                            src={athlete}
                            alt="athlete"
                        />
                    </Link>
                </Hide>
            </Movie>

            <Movie
                variants={ScrollReveal}
                animate={controls2}
                initial="hidden"
                ref={element2}
            >
                <Hide>
                    <motion.h2 variants={titleAnim}>The Racer</motion.h2>
                </Hide>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <Link to="/work/the-racer">
                        <motion.img
                            variants={photoAnim}
                            src={theracer}
                            alt="theracer"
                        />
                    </Link>
                </Hide>
            </Movie>

            <Movie
                variants={ScrollReveal}
                animate={controls3}
                initial="hidden"
                ref={element3}
            >
                <Hide>
                    <motion.h2 variants={titleAnim}>Good Times</motion.h2>
                </Hide>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <Link to="/work/good-times">
                        <motion.img
                            variants={photoAnim}
                            src={goodtimes}
                            alt="goodtimes"
                        />
                    </Link>
                </Hide>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }

    h2 {
        padding: 1rem 0;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.35rem;
        background-color: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    @media (max-width: 1000px) {
        img {
            height: 70vh;
        }
    }
    @media (max-width: 700px) {
        img {
            height: 50vh;
        }
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebd;
    z-index: 5;
`;

const Frame2 = styled(Frame1)`
    background-color: #ff8ebf;
`;

const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`;
