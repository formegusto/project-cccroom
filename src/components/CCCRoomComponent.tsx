import React from 'react';
import styled, { css, Keyframes } from 'styled-components';
import { LPDrop } from '../animation/CCCRoomAnimation';
import sleepingbeauty from '../assets/music/paul_sleepingBeauty.mp3';

type Props = {
    lpAni?: Keyframes | null;
    refLP: React.Ref<HTMLDivElement>;
    refAudio: React.Ref<HTMLAudioElement>;
    refStick: React.Ref<HTMLDivElement>;
    refStickBody: React.Ref<HTMLDivElement>;
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
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                </LPBookGroup>
                <LPBookGroup>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                </LPBookGroup>
                <LPBookGroup>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
                    </LPBook>
                    <LPBook>
                        <LPBookBack />
                        <LPDummy>
                            <LPCenter/>
                        </LPDummy>
                        <LPBookFront onClick={props.openLpBook}>
                            <h1>
                                Play?
                            </h1>
                        </LPBookFront>
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
                        <LPStick ref={props.refStick}>
                            <LPStickController>
                                <ControllerFront/>
                                <ControllerBack />
                                <ControllerTop />
                            </LPStickController>
                            <LPStickBottom ref={props.refStickBody}>
                                <LPStickTop/>
                                <LPStickLeft>
                                    <LPStickBody>
                                        <LPStickRound>
                                            <RoundFront/>
                                            <RoundBack/>
                                            <RoundTop>
                                                <LPEnd>
                                                    <EndTop/>
                                                    <EndBottom>
                                                        <LPpin/>
                                                    </EndBottom>
                                                    <EndFront/>
                                                    <EndRight/>
                                                    <EndBack/>
                                                </LPEnd>
                                            </RoundTop>
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

const LPpin = styled.div`
    width: 1px;
    height: 10px;

    background-color: rgb(0,0,0);

    transform: rotateX(-90deg);
`;

const LPEnd = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    box-sizing: border-box;

    transform: rotateY(-25deg) translateZ(3px);
    transform-origin: 100% 100%;
    transform-style: preserve-3d;
    background-color: rgb(255,255,255);

    & > div {
        box-sizing: border-box;
        border: 1px solid rgb(0,0,0);
        background-color: rgb(255,255,255);
    }
`;

const EndTop = styled.div`
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 40px;

    transform: rotateX(90deg);
    transform-origin: 50% 100%;
`;

const EndRight = styled.div`
    position: absolute;

    bottom: 0;
    right: 0;

    width: 40px;
    height: 100%;

    transform: rotateY(-90deg);
    transform-origin: 100% 50%;
`;

const EndFront = styled.div`
    position: absolute;

    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;

    transform: translateZ(-40px);
`;

const EndBack = styled.div`
    position: absolute;

    bottom: 0;
    left: 0;

    width: 40px;
    height: 100%;

    transform: rotateY(90deg);
    transform-origin: 0% 50%;
`;

const EndBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 40px;

    transform: rotateX(-90deg);
    transform-origin: 50% 0%;
    transform-style: preserve-3d;
`;

const LPStickController = styled.div`
    position: relative;

    width: 20px;
    height: 20px;

    box-sizing: border-box;

    transform-style: preserve-3d;
`;

const ControllerFront = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;    

    width: 100%;
    height: 10px;

    background-color: rgb(255,255,255);
    border: 1px solid rgb(0,0,0);
    box-sizing: border-box;

    transform: rotateX(-90deg);
    transform-origin: 50% 100%;
`;

const ControllerTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border: 1px solid rgb(0,0,0);
    box-sizing: border-box;

    transform: translateZ(10px);
`;

const ControllerBack = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 10px;
    height: 100%;

    background-color: rgb(255,255,255);
    border: 1px solid rgb(0,0,0);
    box-sizing: border-box;

    transform: rotateY(90deg);
    transform-origin: 100% 50%;
`;


const LPCenter = styled.div`
    width: 50%;
    height: 50%;

    border-radius: 100%;

    background-color: rgb(0,0,0);
`;

const LPDummy = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

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

    transform-style: preserve-3d;

    & > div:not(:last-child) {
        margin: 0 20px 0 0;
    }
`;

const LPBookFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    box-sizing: border-box;

    border: 2px solid rgb(0,0,0);

    /* transform: rotateX(-5deg); */
    transform-origin: 50% 100%;

    background-color: rgb(255,255,255);

    transition: .5s;
    cursor: pointer;

    & > h1 {
        font-size: 2rem;
        letter-spacing: .5rem;

        transition: .25s;
        opacity: 0;

        @media ${({theme}) => theme.device.laptop} {
            font-size: 2rem;
            letter-spacing: .5rem;
        }

        @media ${({theme}) => theme.device.tablet} {
            font-size: 1.5rem;
            letter-spacing: .25rem;
        }

        @media ${({theme}) => theme.device.mobile} {
            font-size: 1rem;
            letter-spacing: .125rem;
        }
    }
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

    &:hover > div:nth-child(3) {
        transform: rotateX(-7.5deg);

        & > h1 {
            opacity: 1;
        }
    }

    &:hover > div:nth-child(2) {
        transform: translateY(-150px);
    }

    &:hover > div:nth-child(1) {
        transform: rotateX(1deg);
    }

    @media ${({theme}) => theme.device.laptop} {
        width: 300px;
        height: 300px;

        &:hover > div:nth-child(2) {
            transform: translateY(-150px);
        }
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 200px;
        height: 200px;

        &:hover > div:nth-child(2) {
            transform: translateY(-100px);
        }
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 100px;
        height: 100px;

        &:hover > div:nth-child(2) {
            transform: translateY(-50px);
        }
    }
`;

const LPBrary = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;

    top: 0;
    left: 50%;
    margin: 0 0 0 -470px;
    box-sizing: border-box;

    transform-style: preserve-3d;

    transform: translateZ(-300px) translateY(-3rem) rotateX(5deg);

    & > div:not(:last-child) {
        margin: 0 0 1rem 0;
    }

    & > div:nth-child(1) {
        transform: translateZ(1px);
    }

    & > div:nth-child(2) {
        transform: translateZ(4px);
    }

    & > div:nth-child(3) {
        transform: translateZ(7px);
    }

    @media ${({theme}) => theme.device.laptop} {
        margin: 0 0 0 -470px;
    }

    @media ${({theme}) => theme.device.tablet} {
        margin: 0 0 0 -320px;
    }

    @media ${({theme}) => theme.device.mobile} {
        margin: 0 0 0 -170px;
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

    width: 100%;
    height: 100%;

    z-index: 10;

    transform-style: preserve-3d;
    
    & > div {
        background-color: rgb(255,255,255);
    }
`;

const RoundTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* border: 1px solid black; */
    transform: translateZ(-200px);
    transform-style: preserve-3d;
`;

const RoundLeft = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 200px;
    border: 1px solid black;
    box-sizing: border-box;

    transform: rotateX(-90deg) rotateY(90deg);
    transform-origin: 100% 0%;
`;

const RoundRight = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;    
    height: 200px;

    border: 1px solid black;
    box-sizing: border-box;

    transform: rotateX(-90deg);
    transform-origin: 0% 0%;
`;

const RoundFront = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;    
    height: 200px;

    border: 1px solid black;
    box-sizing: border-box;

    transform: rotateX(90deg);
    transform-origin: 50% 100%;
`;

const RoundBack = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;    
    height: 200px;

    border: 1px solid black;
    box-sizing: border-box;

    transform: rotateX(-90deg) rotateY(-90deg);
    transform-origin: 0% 0%;
`;

const LPStickBottom = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 50px;

    border: 1px solid rgb(0,0,0);
    transform: translateZ(10px);
    transition: 1s;
    /* transform: translateZ(10px) rotateX(25deg); */
    transform-origin: 50% 0%;
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

    width: 20px;
    height: 50px;

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

    width: 20px;
    height: 20px;

    border: 1px solid rgb(0,0,0);
    transform-style: preserve-3d;

    transform: rotateX(90deg);
    transform-origin: 50% 0%;
`;

const LPStickRight = styled.div`
    width: 20px;
    height: 50px;

    border: 1px solid rgb(0,0,0);

    transform: rotateY(90deg);
    transform-origin: 100% 50%;
`;

const LPStick = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 20px;
    height: 300px;

    box-sizing: border-box;
    
    /* transform: rotateZ(-25deg); */
    transition: 1s;
    transform-origin: 0% 0%;
    transform-style: preserve-3d;
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