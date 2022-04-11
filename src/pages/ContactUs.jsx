import { motion } from "framer-motion";
import { pageAnim, titleAnim, lineAnim } from "../utils/animation";
import { ScrollTop } from "../utils/ScrollTop";
import styled from "styled-components";

export default function ContactUs() {
    return (
        <ContactStyle
            variants={pageAnim}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <ScrollTop />
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in Touch...</motion.h2>
                </Hide>
                <motion.div variants={lineAnim} className="line"></motion.div>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Us An Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Social Media</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 5rem;
    }
    @media (max-width: 600px) {
        padding: 2rem;
        & * {
            font-size: 2rem;
        }
    }
`;

const Title = styled.div`
    margin: 4rem 0;
    div h2 {
        font-size: 4rem;
    }
    .line {
        height: 0.35rem;
        background-color: #23d997;
    }
    @media (max-width: 1500px) {
        div h2 {
            font-size: 3rem;
        }
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #555;
    @media (max-width: 1300px) {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
        margin: 2rem;
        color: #aaa;
    }
`;
