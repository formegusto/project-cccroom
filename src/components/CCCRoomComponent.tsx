import React from 'react';
import styled, { css, Keyframes } from 'styled-components';
import { LPDrop } from '../animation/CCCRoomAnimation';
import sleepingbeauty from '../assets/music/paul_sleepingBeauty.mp3';

type Props = {
    lpAni?: Keyframes;
    refLP: React.Ref<HTMLDivElement>;
    refAudio: React.Ref<HTMLAudioElement>;
    setLpRotate: () => void;
}

function CCCRoomComponent(props: Props) {
    return (
        <CCCRoom>
            <CCCAudio
                ref={props.refAudio}>
                <source src={sleepingbeauty} />
            </CCCAudio>
            <LPBox>
                <LP 
                    onClick={props.setLpRotate}
                    ref={props.refLP}
                    styleProps={{
                        animation: props.lpAni
                    }}
                    >
                    <LPFront>
                        <LPHole/>
                    </LPFront>
                    <LPBack>
                        <LPHole/>
                    </LPBack>
                </LP>
                <LPBoxBlock>
                    <LPBoxFront/>
                    <LPBoxBack/>
                    <LPBoxLeft/>
                    <LPBoxRight/>
                    <LPEdgeLeft/>
                    <LPEdgeRight/>
                </LPBoxBlock>
            </LPBox>
        </CCCRoom>
    )
}

const CCCAudio = styled.audio`
`;

const CCCRoom = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    perspective: 1000px;
`;

const LPBox = styled.div`
    width: 400px;
    height: 400px;

    transform: translateY(-10rem) rotateX(70deg) rotateZ(45deg);
    transform-style: preserve-3d;
`;

const LPBoxBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    transform-style: preserve-3d;

    & > div {
        box-sizing: border-box;
    }
`;

const LPEdgeLeft = styled.div`
    position: absolute;
    top: 100%;
    left: .75rem;

    z-index: 2;

    width: 3px;
    height: calc(2.5rem);
    background-color: rgb(0,0,0);

    transform: rotateX(-90deg);
    transform-origin: 100% 0;
`;

const LPEdgeRight = styled.div`
    position: absolute;
    top: .75rem;
    left: 100%;

    z-index: 2;

    width: calc(2.5rem);
    height: 3px;
    background-color: rgb(0,0,0);

    transform: rotateY(90deg);
    transform-origin: 0 50%;
`

const LPBoxLeft = styled.div`
    position: absolute;
    top: 100%;
    left: 0;

    z-index: 1;

    width: 100%;
    height: calc(2.5rem - 2px);
    background-color: rgb(255,255,255);

    border-end-start-radius: 1rem;
    border-end-end-radius: 1rem;
    transform: rotateX(-90deg);
    transform-origin: 0 0;
`;

const LPBoxRight = styled.div`
    position: absolute;
    top: 0;
    left: 100%;

    z-index: 1;

    width: calc(2.5rem - 2px);
    height: 100%;
    background-color: rgb(255,255,255);

    border-start-end-radius: 1rem;
    border-end-end-radius: 1rem;
    transform: rotateY(90deg);
    transform-origin: 0 0;
`;

const LPBoxFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border: 2px solid rgb(0,0,0);
    border-radius: 1rem;
    background-color: rgb(255,255,255);
`;

const LPBoxBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border: 2px solid rgb(0,0,0);
    border-radius: 1rem;
    background-color: rgb(255,255,255);

    transform: translateZ(-2.5rem);
`;

type LPProps = {
    animation?: Keyframes;
}

const LP = styled.div<{styleProps: LPProps}>`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 300px;
    height: 300px;

    margin: -150px 0 0 -150px;
    transform-style: preserve-3d;

    cursor: pointer;

    ${props => props.styleProps.animation && 
        props.styleProps.animation === LPDrop ?
            css`animation: ${props.styleProps.animation} 1s` :
            css`animation: ${props.styleProps.animation} 1s linear infinite`  
    }
`;

const LPFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background: linear-gradient(70deg, orange, yellow);
    /* background-color: rgb(255,255,255); */

    transform: translateZ(10px);
    transform-style: preserve-3d;
`;

const LPBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background-color: rgb(255,255,255);
    transform-style: preserve-3d;
`;

const LPHole = styled.div`
    width: 10px;
    height: 10px;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background-color: transparent;
`;

export default CCCRoomComponent;