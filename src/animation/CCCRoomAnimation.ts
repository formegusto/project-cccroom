import { keyframes } from "styled-components";

const LPDrop = keyframes`
    from {
        transform: translateZ(200rem);

        & em {
            transform: translateX(-5rem);
        }
    } to {
        transform: translateZ(0rem);

        
    } 
`;
const LPRotate = keyframes`
    from {
        transform: rotateZ(0deg);
    } to {
        transform: rotatez(360deg);
    }
`;
const LPUp = keyframes`
    from {
        transform: translateZ(0rem);
    } to {
        transform: translateZ(200rem);
    } 
`;

const LPBrarySpin = keyframes`
    from {
        /* transform: translateZ(-300px) translateY(-3rem) rotateX(90deg); */
    } to {
        /* transform: translateZ(-300px) translateY(-3rem) rotateX(5deg); */
    }
`

const TitleBoxAni = keyframes`
    from {
        transform: translateY(0rem) translateX(-5rem);
    } to {
        transform: translateY(-3.5rem) translateX(-2rem);
    }
`;

export {
    LPRotate,
    LPDrop,
    LPUp,
    LPBrarySpin,
    TitleBoxAni
}