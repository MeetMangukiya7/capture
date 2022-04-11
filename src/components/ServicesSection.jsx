import styled from "styled-components";
import { motion } from "framer-motion";
import { MainDiv, Description, Image } from "../utils/styles";
import { photoAnim, ScrollReveal } from "../utils/animation";
import { useScroll } from "../utils/useScroll";

import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";

export default function ServicesSection() {
    const [element, controls] = useScroll();

    return (
        <Services
            variants={ScrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <Description>
                <h2>
                    High <span>quality</span> services.
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home2}
                    alt="just a camera"
                />
            </Image>
        </Services>
    );
}

const Services = styled(MainDiv)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    width: 20rem;
    height: 15rem;
    display: grid;
    place-items: center;
    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background-color: #23d997;
            color: #1b1b1b;
            padding: 0.75rem 1.25rem;

            &::selection {
                background-color: #1b1b1b;
                color: #23d997;
            }
        }
    }
`;
