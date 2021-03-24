import React from 'react';
import styled, { css, Keyframes } from 'styled-components';
import { LPDrop, LPUp } from '../animation/CCCRoomAnimation';
import sleepingbeauty from '../assets/music/paul_sleepingBeauty.mp3';
import Palette from '../style/palette';
import { AiOutlineSmile, AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

type Props = {
    lpAni?: Keyframes | null;
    lpColor: string[] | null;
    refButton: React.Ref<HTMLDivElement>;
    refLP: React.Ref<HTMLDivElement>;
    refAudio: React.Ref<HTMLAudioElement>;
    refStick: React.Ref<HTMLDivElement>;
    refStickBody: React.Ref<HTMLDivElement>;
    setLpRotate: () => void;
    openLpBook: (e: React.MouseEvent) => void;
    hideButton: (e: React.MouseEvent) => void;
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
                    {[0,5,8].map((num, idx) => 
                        <LPBook key={idx}>
                            <LPBookBack 
                            style={{
                                backgroundColor: Palette['ivory'][num]
                            }}/>
                            <LPDummy
                            style={{
                                backgroundColor: Palette['ivory'][num]
                            }}>
                                <LPCenter/>
                            </LPDummy>
                            <LPBookFront onClick={props.openLpBook} data-color="ivory"
                            style={{
                                backgroundColor: Palette['ivory'][num]
                            }}>
                                <h1>
                                    Play?
                                </h1>
                            </LPBookFront>
                        </LPBook>
                    )}
                </LPBookGroup>
                <LPBookGroup>
                    {[0,1,2].map((num, idx) => 
                        <LPBook key={idx}>
                            <LPBookBack 
                            style={{
                                backgroundColor: Palette['yellow'][num]
                            }}/>
                            <LPDummy
                            style={{
                                backgroundColor: Palette['yellow'][num]
                            }}>
                                <LPCenter/>
                            </LPDummy>
                            <LPBookFront onClick={props.openLpBook} data-color="yellow"
                            style={{
                                backgroundColor: Palette['yellow'][num]
                            }}>
                                <h1>
                                    Play?
                                </h1>
                            </LPBookFront>
                        </LPBook>
                    )}
                </LPBookGroup>
                <LPBookGroup>
                    {[0,5,8].map((num, idx) => 
                        <LPBook key={idx}>
                            <LPBookBack 
                            style={{
                                backgroundColor: Palette['green'][num]
                            }}/>
                            <LPDummy
                            style={{
                                backgroundColor: Palette['green'][num]
                            }}>
                                <LPCenter/>
                            </LPDummy>
                            <LPBookFront onClick={props.openLpBook} data-color="green"
                            style={{
                                backgroundColor: Palette['green'][num]
                            }}>
                                <h1>
                                    Play?
                                </h1>
                            </LPBookFront>
                        </LPBook>
                    )}
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
                    <LPFront
                        style={{
                            background: props.lpColor ? `linear-gradient(${props.lpColor[0]} 0%, ${props.lpColor[5]} 30%, ${props.lpColor[6]} 70%, ${props.lpColor[7]} 100%)` : "rgb(255,255,255)"
                        }}
                    >
                        <LPCenter>
                            <LPHole
                                style={{
                                    backgroundColor: props.lpColor ? props.lpColor[3] : "rgb(255,255,255)"
                                }}
                            />
                        </LPCenter>
                    </LPFront>
                    <LPBack
                        style={{
                            backgroundColor: props.lpColor ? props.lpColor[4] : "rgb(255,255,255)"
                        }}
                    >
                        <LPHole/>
                    </LPBack>
                </LP>
                <LPBoxBlock>
                    <LPBoxFront style={{
                        background: props.lpColor ? `linear-gradient(${props.lpColor[0]} 0%, ${props.lpColor[8]} 100%)` : "rgb(255,255,255)"
                    }}>
                        <LPStick ref={props.refStick}
                            styleProps={{
                                nowColor: props.lpColor
                            }}
                        >
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
                    <LPBoxHidden>
                        <ButtonBlock
                            ref={props.refButton}
                            styleProps={{
                                nowColor: props.lpColor
                            }}
                        >
                            <AiOutlinePlayCircle size={48}/>
                            <AiOutlinePauseCircle size={48}/>
                            <AiOutlineSmile size={48} onClick={props.hideButton}/>
                        </ButtonBlock>
                    </LPBoxHidden>
                </LPBoxBlock>
            </LPBox>
        </CCCRoom>
    )
}

type StickProps = {
    nowColor?: string[] | null;
}

const ButtonBlock = styled.div<{styleProps?: StickProps}>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;

    transition: .5s;
    /* transform: translateY(-3.5rem); */
    transform-style: preserve-3d;

    & > svg {
        cursor: pointer;
    }

    & > svg:nth-child(1) {
        color: ${props => props.styleProps?.nowColor &&
            props.styleProps.nowColor[12] }
    }

    & > svg:nth-child(2) {
        margin: 0 5px 0 5px;
        color: ${props => props.styleProps?.nowColor &&
            props.styleProps.nowColor[10] }
    }

    & > svg:nth-child(3) {
        color: ${props => props.styleProps?.nowColor &&
            props.styleProps.nowColor[11] }
    }
`

const LPBoxHidden = styled.div`
    position: absolute;
    top:0;
    left:0;

    width: 100%;
    height: calc(2.5rem - 2px);

    transform: rotateX(-90deg);
    transform-origin: 50% 0;

    transform-style: preserve-3d;
`;

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
    /* background-color: rgb(255,255,255); */

    & div {
        box-sizing: border-box;
        border: 1px solid rgb(0,0,0);
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

    /* background-color: rgb(255,255,255); */
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

    /* background-color: rgb(255,255,255); */
    border: 1px solid rgb(0,0,0);
    box-sizing: border-box;

    transform: rotateY(90deg);
    transform-origin: 100% 50%;
`;


const LPCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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

        & > div > div:nth-child(2) {
            background-color: ${Palette.ivory[2]};
        }

        & > div > div:not(:nth-child(2)) {
            background-color: ${Palette.ivory[0]};
        }
    }

    & > div:nth-child(2) {
        transform: translateZ(4px);

        & > div > div:nth-child(2) {
            background-color: ${Palette.yellow[2]};
        }

        & > div > div:not(:nth-child(2)) {
            background-color: ${Palette.yellow[0]};
        }
    }

    & > div:nth-child(3) {
        transform: translateZ(7px);

        & > div > div:nth-child(2) {
            background-color: ${Palette.green[2]};
        }

        & > div > div:not(:nth-child(2)) {
            background-color: ${Palette.green[0]};
        }
    }

    @media ${({theme}) => theme.device.laptop} {
        margin: 0 0 0 -470px;
        transform: translateZ(-300px) translateY(-3rem) rotateX(5deg);
    }

    @media ${({theme}) => theme.device.tablet} {
        margin: 0 0 0 -320px;
        transform: translateZ(-300px) translateY(-3rem) rotateX(5deg);
    }

    @media ${({theme}) => theme.device.mobile} {
        margin: 0 0 0 -170px;
        transform: translateZ(-300px) translateY(1rem) rotateX(5deg);
    }
`;

const LPStickBody = styled.div`
    position: relative;

    width: 50%;
    height: 50%;

    transform-style: preserve-3d;

    @media ${({theme}) => theme.device.laptop} {
        width: 50%;
        height: 50%;
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 45%;
        height: 45%;
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 40%;
        height: 40%;
    }
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
        /* background-color: rgb(255,255,255); */
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

    @media ${({theme}) => theme.device.laptop} {
        transform: translateZ(-200px);
    }

    @media ${({theme}) => theme.device.tablet} {
        transform: translateZ(-120px);
    }

    @media ${({theme}) => theme.device.mobile} {
        transform: translateZ(-80px);
    }
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

    @media ${({theme}) => theme.device.laptop} {
        height: 200px;
    }

    @media ${({theme}) => theme.device.tablet} {
        height: 120px;
    }

    @media ${({theme}) => theme.device.mobile} {
        height: 80px;
    }
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

    @media ${({theme}) => theme.device.laptop} {
        height: 200px;
    }

    @media ${({theme}) => theme.device.tablet} {
        height: 120px;
    }

    @media ${({theme}) => theme.device.mobile} {
        height: 80px;
    }
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

    @media ${({theme}) => theme.device.laptop} {
        height: 200px;
    }

    @media ${({theme}) => theme.device.tablet} {
        height: 120px;
    }

    @media ${({theme}) => theme.device.mobile} {
        height: 80px;
    }
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

    @media ${({theme}) => theme.device.laptop} {
        height: 200px;
    }

    @media ${({theme}) => theme.device.tablet} {
        height: 120px;
    }

    @media ${({theme}) => theme.device.mobile} {
        height: 80px;
    }
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
        /* background-color: rgb(255,255,255); */
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

const LPStick = styled.div<{styleProps?:StickProps}>`
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

    & div {
        background-color: ${props => props.styleProps?.nowColor ? 
            props.styleProps.nowColor[0]
            : 
            "rgb(255,255,255)"} ;
    }
`;

const CCCAudio = styled.audio`
`;

const CCCRoom = styled.div`
    position: relative;

    width: 100vw;
    height: 200vh;

    min-height: 1620px;

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

    @media ${({theme}) => theme.device.laptop} {
        width: 500px;
        height: 400px;
        margin: 0 0 0 -250px;
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 400px;
        height: 300px;
        margin: 0 0 0 -200px;
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 300px;
        height: 200px;
        margin: 0 0 0 -150px;
    }
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
    /* background-color: rgb(255,255,255); */

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
    /* background-color: rgb(255,255,255); */

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
    border-top: none;
    border-left: none;
    border-radius: 1rem;
    /* background-color: rgb(255,255,255); */

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
    border-radius: 100%;
    transform-style: preserve-3d;

    cursor: pointer;

    ${props => props.styleProps.animation && 
       (props.styleProps.animation === LPDrop || props.styleProps.animation === LPUp) ?
            css`animation: ${props.styleProps.animation} 1s forwards;` :
            css`animation: ${props.styleProps.animation} 1s linear infinite;`  
    }

    transform: translateZ(150rem);

    @media ${({theme}) => theme.device.laptop} {
        width: 300px;
        height: 300px;
        margin: -150px 0 0 -150px;
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 200px;
        height: 200px;
        margin: -100px 0 0 -100px;
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 100px;
        height: 100px;
        margin: -50px 0 0 -50px;
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
    background-color: rgb(255,255,255);

    transform: translateZ(10px);
    transform-style: preserve-3d;

    @media ${({theme}) => theme.device.laptop} {
        width: 300px;
        height: 300px;
        transform: translateZ(10px);
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 200px;
        height: 200px;
        transform: translateZ(5px);
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 100px;
        height: 100px;
        transform: translateZ(2.5px);
    }
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

    @media ${({theme}) => theme.device.laptop} {
        width: 300px;
        height: 300px;
    }

    @media ${({theme}) => theme.device.tablet} {
        width: 200px;
        height: 200px;
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 100px;
        height: 100px;
    }

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