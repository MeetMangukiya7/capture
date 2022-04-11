import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnim, fadeAnim } from "../utils/animation";
import { MovieState } from "../utils/MovieState";

export default function MovieDetail() {
    const history = useHistory();
    const url = history.location.pathname;
    // eslint-disable-next-line
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url
        );
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details
                    variants={pageAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    <HeadLine>
                        <motion.h2 variants={fadeAnim}>{movie.title}</motion.h2>
                        <img src={movie.mainImg} alt={movie.title} />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt={movie.title} />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
}

const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};

const Details = styled(motion.div)``;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1100px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const AwardStyle = styled.div`
    padding: 5rem;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 50%;
        background-color: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }

    p {
        padding: 2rem 0;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;

    img {
        width: 100%;
        height: 100vh;
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
