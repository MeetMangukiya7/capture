import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link to="/" id="logo">
                    Capture
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "70%" : "0%" }}
                    />
                </li>

                <li>
                    <Link to="/work">Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/work" ? "70%" : "0%" }}
                    />
                </li>

                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: pathname === "/contact" ? "70%" : "0%",
                        }}
                    />
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    margin: auto;
    background-color: #282828;

    #logo {
        font-family: "Lobster", cursive;
        font-weight: lighter;
        font-size: 1.75rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        li {
            margin-left: 10rem;
            position: relative;
        }
    }
    @media (max-width: 900px) {
        padding: 1.5rem 5rem 1rem;
        flex-direction: column;
        ul {
            justify-content: center;
            align-items: center;
            margin: 0.5rem 0;
            li {
                margin: 1rem;
            }
        }
    }
    @media (max-width: 400px) {
        padding: 1.5rem 1rem 1rem;
    }
`;

const Line = styled(motion.div)`
    height: 0.25rem;
    background-color: #23d997;
    width: 5%;
    position: absolute;
    bottom: -40%;
`;
