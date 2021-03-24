import { keyframes } from "styled-components";

const LPDrop = keyframes`
    from {
        transform: translateZ(150rem);
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
        transform: translateZ(150rem);
    } 
`;

export {
    LPRotate,
    LPDrop,
    LPUp
}