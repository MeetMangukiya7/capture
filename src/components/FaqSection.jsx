import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import Toggle from "./toggle";
import { ScrollReveal } from "../utils/animation";
import { MainDiv } from "../utils/styles";
import { useScroll } from "../utils/useScroll";

export default function FaqSection() {
    const [element, controls] = useScroll();

    return (
        <Faq
            variants={ScrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <h2>
                Any questions? <span>FAQs</span>
            </h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Alias ipsa obcaecati quos facere deleniti
                            incidunt temporibus, id fuga ducimus odio.
                        </p>
                    </div>
                </Toggle>

                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi voluptas alias laborum sunt repudiandae
                            earum.
                        </p>
                    </div>
                </Toggle>

                <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus atque nihil pariatur voluptate adipisci
                            neque voluptas, voluptatem blanditiis vel maiores.
                        </p>
                    </div>
                </Toggle>

                <Toggle title="What products do we offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Voluptas molestias, fugiat repudiandae
                            reiciendis ad suscipit corporis iste doloremque
                            eligendi ullam.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(MainDiv)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background-color: #23d997;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        margin: 3rem 0;
        padding: 1rem 0 0 0;
        cursor: pointer;

        h4 {
            background-color: #1b1b1b;
        }
        .answer {
            padding: 2rem 0;

            p {
                padding: 1rem 0;
            }
        }
    }
`;
