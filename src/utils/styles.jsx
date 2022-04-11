import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDiv = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        display: block;
        padding: 2rem;
        text-align: center;
    }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem;
        }
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
