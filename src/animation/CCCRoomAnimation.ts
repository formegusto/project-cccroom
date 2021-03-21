import { keyframes } from "styled-components";

const LPDrop = keyframes`
    from {
        transform: translateZ(50rem);
    } to {
        transform: translateZ(0);
    } 
`;
const LPRotate = keyframes`
    from {
        transform: rotateZ(0deg);
    } to {
        transform: rotatez(360deg);
    }
`;

export {
    LPRotate,
    LPDrop
}