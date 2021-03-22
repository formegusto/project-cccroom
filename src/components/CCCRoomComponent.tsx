import React from 'react';
import styled, { css, Keyframes } from 'styled-components';
import { LPDrop } from '../animation/CCCRoomAnimation';
import sleepingbeauty from '../assets/music/paul_sleepingBeauty.mp3';

type Props = {
    lpAni?: Keyframes | null;
    refLP: React.Ref<HTMLDivElement>;
    refAudio: React.Ref<HTMLAudioElement>;
    setLpRotate: () => void;
    openLpBook: (e: React.MouseEvent) => void;
}

function CCCRoomComponent(props: Props) {
    return (
        <CCCRoom>
            <CCCAudio
                ref={props.refAudio}>
                <source src={sleepingbeauty} />
            </CCCAudio>
            <LPBrary>
                <LPBookGroup>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                </LPBookGroup>
                <LPBookGroup>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                </LPBookGroup>
                <LPBookGroup>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy/>
                        <LPBookFront onClick={props.openLpBook}/>
                    </LPBook>
                </LPBookGroup>
            </LPBrary>
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
                    <LPBoxFront>
                        <LPStick>
                            <LPStickBottom>
                                <LPStickTop/>
                                <LPStickLeft>
                                    <LPStickBody>
                                        <LPStickRound>
                                            <RoundTop/>
                                            <RoundLeft/>
                                            <RoundRight />
                                        </LPStickRound>
                                    </LPStickBody>
                                </LPStickLeft>
                                <LPStickRight />
                            </LPStickBottom>
                        </LPStick>
                    </LPBoxFront>
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

const LPDummy = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    box-sizing: border-box;

    border: 2px solid rgb(0,0,0);
    border-radius: 100%;

    background-color: rgb(255,255,255);
    transition: 1s;

    cursor: pointer;
`;

const LPBookGroup = styled.div`
    display: flex;

    flex-direction: column;

    & > div:not(:last-child) {
        margin: 0 0 1rem 0;
    }
`;

const LPBookFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    border: 2px solid rgb(0,0,0);

    /* transform: rotateX(-5deg); */
    transform-origin: 50% 100%;

    background-color: rgb(255,255,255);

    transition: 1s;
    cursor: pointer;
`;

const LPBookBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    box-sizing: border-box;

    border: 2px solid rgb(0,0,0);

    background-color: rgb(255,255,255);
`;

const LPBook = styled.div`
    position: relative;

    width: 300px;
    height: 300px;

    transform-style: preserve-3d;
`;

const LPBrary = styled.div`
    position: absolute;

    display: flex;

    top: 0;
    left: 50%;
    margin: 0 0 0 -450px;
    box-sizing: border-box;


    transform: translateZ(-300px) translateY(-3rem);
    transform-style: preserve-3d;

    & > div:not(:last-child) {
        margin: 0 1rem 0 0;
    }
`;

const LPStickBody = styled.div`
    position: relative;

    width: 50%;
    height: 50%;

    background-color: #CCC;

    transform-style: preserve-3d;
`;

const LPStickRound = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 50%;
    height: 50%;

    z-index: 10;

    background-color: rgb(0,0,0);
    transform-style: preserve-3d;
    
    & > div {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const RoundTop = styled.div`
    width: 5px;
    height: 5px;

    background-color: red;
    transform: translateZ(-20px);

    border-end-start-radius: 100%;
`;
const RoundLeft = styled.div`
    width: 5px;
    height: 20px;
    background-color: green;

    transform: rotateX(-90deg) rotateY(90deg);
    transform-origin: 100% 0%;
`;
const RoundRight = styled.div`
    width: 5px;    
    height: 20px;
    background-color: blue;

    transform: rotateX(-90deg);
    transform-origin: 0% 0%;
`;

const LPStickBottom = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 50px;

    transform-style: preserve-3d;

    & > div {
        background-color: rgb(255,255,255);
        box-sizing: border-box;
    }
`;

const LPStickTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border: 1px solid rgb(0,0,0);

    transform: translateZ(20px);  
    transform-style: preserve-3d;
`;

const LPStickLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: 20px;

    border: 1px solid rgb(0,0,0);
    transform-style: preserve-3d;

    transform: rotateX(90deg);
    transform-origin: 50% 0%;
`;

const LPStickRight = styled.div`
    width: 100%;
    height: 100%;

    border: 1px solid rgb(0,0,0);

    transform: rotateY(90deg);
    transform-origin: 100% 50%;
`;

const LPStick = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 20px;
    height: 200px;

    box-sizing: border-box;
    border: 1px solid rgb(0,0,0);
`;

const CCCAudio = styled.audio`
`;

const CCCRoom = styled.div`
    position: relative;

    width: 100vw;
    height: 200vh;


    perspective: 1000px;
`;

const LPBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;

    width: 500px;
    height: 400px;

    margin: 0 0 0 -250px;

    transform: translateY(-20rem) rotateX(95deg) rotateZ(45deg);
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

    transform-style: preserve-3d;
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
    animation?: Keyframes | null;
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
            css`animation: ${props.styleProps.animation} 1s forwards;` :
            css`animation: ${props.styleProps.animation} 1s linear infinite;`  
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

    box-sizing: border-box;
    border: 2px solid rgb(0,0,0);
    border-radius: 100%;
    background-color: rgb(0,0,0);
`;

export default CCCRoomComponent;