import React, { useCallback, useRef, useState } from 'react';
import CCCRoomComponent from '../components/CCCRoomComponent';
import { LPDrop ,LPRotate, LPUp } from '../animation/CCCRoomAnimation';
import { Keyframes } from 'styled-components';
import Palette from '../style/palette';

function CCCRoomContainer() {
    const [lpAni, setLpAni] = useState<Keyframes | null>(null);
    const [lpColor, setLpColor] = useState<string[] | null>(null);
    const refButton = useRef<HTMLDivElement>(null);
    const refLP = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);
    const refStick = useRef<HTMLDivElement>(null);
    const refStickBody = useRef<HTMLDivElement>(null);
    const refComment = useRef<HTMLHeadingElement>(null);

    const closeLpFront = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', closeLpFront);
        const lpFront = document.querySelector(".open") as HTMLDivElement;

        if(lpFront) {
            lpFront.style.transform = "";
            lpFront.classList.remove('open');
        }
    }, []);

    const downLpDummy = useCallback(function(this:HTMLDivElement, e: AnimationEvent) {
        this.removeEventListener('animationend', downLpDummy);
        const lpFront = document.querySelector(".open") as HTMLDivElement;

        if(lpFront){
            const lp = lpFront.parentNode;
            const lpDummy = lp?.querySelector("div:nth-child(2)") as HTMLDivElement;

            lpDummy.style.transform = "";
            lpDummy.addEventListener('transitionend', closeLpFront)
        }
    }, [closeLpFront]);

    const upLp = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', upLp);
        if(refLP.current) {
            refLP.current.style.animationPlayState = "";
            refLP.current.addEventListener('animationend', downLpDummy)
        }
        setLpAni(LPUp);
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    }, [downLpDummy]);

    const backStick = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', backStick);
        if(refStick.current){
            refStick.current.style.transform = "";
            if(refStickBody.current) {
                refStickBody.current.style.transform = "";
                refStickBody.current.addEventListener('transitionend', upLp);
            }
        }
    }, [upLp]);

    const backStickBody = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend',backStickBody);
        if(refStickBody.current) {
            refStickBody.current.style.transform = "translateZ(10px) rotateX(25deg)";
            refStickBody.current.addEventListener('transitionend', backStick);
        }
    }, [backStick]);

    const hideButtonBlock = useCallback(function(e: React.MouseEvent) {
        if(refButton.current) {
            refButton.current.style.transform = "";
            refButton.current.addEventListener('transitionend', backStickBody);
            if(refAudio.current) {
                if(!refAudio.current.paused) {
                    refAudio.current.pause();
                    refAudio.current.currentTime = 0;
                    if(refLP.current) {
                        if(lpAni === LPRotate){
                            refLP.current.style.animationPlayState = "paused";
                        }
                    }
                }
            }
        }
        document.body.style.background = "";
    }, [backStickBody, lpAni]);

    const showButtonBlock = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', showButtonBlock);
        if(refButton.current) {
            refButton.current.style.transform = "translateY(-3.5rem)";
        }
    }, []);

    const moveStickBodyDown = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', moveStickBodyDown);
        if(refStickBody.current) {
            refStickBody.current.style.transform = "";
            refStickBody.current.addEventListener('transitionend', showButtonBlock);
        }
    }, [showButtonBlock]);

    const moveStick = useCallback(function(this: HTMLDivElement, e: TransitionEvent){
        this.removeEventListener('transitionend', moveStick);
        if(refStick.current) {
            if(window.innerWidth > 1024) {
                refStick.current.style.transform = "rotateZ(-25deg)";
            } else if(window.innerWidth >= 768 ) {
                refStick.current.style.transform = "rotateZ(-32deg)";
            } else {
                refStick.current.style.transform = "rotateZ(-37deg)";
            }
            
            refStick.current.addEventListener('transitionend', moveStickBodyDown);
        }
    }, [moveStickBodyDown]);

    const moveStickBody = useCallback(function(this: HTMLDivElement, e: AnimationEvent){
        this.removeEventListener('animationend', moveStickBody);
        if(refStickBody.current) {
            refStickBody.current.style.transform = "translateZ(10px) rotateX(25deg)";
            refStickBody.current.addEventListener('transitionend', moveStick);
            if(refComment.current){
                refComment.current.style.opacity = "1";
                refComment.current.style.letterSpacing = ".25rem";
            }
        }
    }, [moveStick]);

    const dropLpAni = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', dropLpAni);
        setLpAni(LPDrop);
        if(refLP.current) {
            refLP.current.addEventListener('animationend', moveStickBody);
        }
    }, [moveStickBody])

    const openLpBook = useCallback((e: React.MouseEvent) => {
        console.log(e.currentTarget.tagName);

        const lpFront = e.currentTarget as HTMLDivElement;

        lpFront.classList.add("open");
        console.log(lpFront.dataset);
        const color: string = lpFront.dataset.color as string;
        setLpColor(Palette[color]);
        lpFront.style.transform = "rotateX(-7.5deg)";

        const lpBook = lpFront.parentNode;
        console.log(lpBook);
        const lpDummy = lpBook?.querySelector("div:nth-child(2)") as HTMLDivElement;


        lpDummy.style.transform = "translateY(-200rem) translateZ(300px)";

        console.log(Palette[color].join(" 0%,"));

        document.body.style.background = "linear-gradient(45deg," + Palette[color][0] + " 50%," + Palette[color][8] +" 100%)";
        // document.body.style.height = "200vh";

        lpDummy.addEventListener('transitionend', dropLpAni);
        setTimeout(function () {
            if(window.innerHeight < 820) {
                window.scrollTo({
                    // top: document.body.scrollHeight,
                    top: 980,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    // top: 980,
                    behavior: 'smooth'
                });
            }
            
        }, 100);
    }, [dropLpAni]);

    const offMusic = useCallback(() => {
        if(refAudio.current) {
            if(!refAudio.current.paused) {
                if(refLP.current) {
                    refLP.current.style.animationPlayState = "paused";
                    refAudio.current.pause();
                }
            }
        }
    }, []);

    const onMusic = useCallback(() => {
        if(refAudio.current){
            if(lpAni !== LPRotate){
                refAudio.current.play();
                setLpAni(LPRotate);
            } else {
                if(refLP.current){
                    refAudio.current.play();
                    refLP.current.style.animationPlayState = "";
                }
            }
        }
    }, [lpAni]);

    const setLpRotate = useCallback(() => {
        if(refAudio.current){
            if(refAudio.current.paused) {
                if(refAudio.current) {
                    refAudio.current.play();
                }
                if(refLP.current) {
                    if(lpAni === LPRotate){
                        refLP.current.style.animationPlayState = "";
                    } else {
                        setLpAni(LPRotate);
                    }
                }
            } else {
                if(refAudio.current) {
                    refAudio.current.pause();
                } 
                if(refLP.current) {
                    refLP.current.style.animationPlayState = "paused";
                }   
            }
        }
        
    }, [lpAni]);
    
    return <CCCRoomComponent
        lpAni={lpAni}
        lpColor={lpColor}
        refButton={refButton}
        refLP={refLP}
        refAudio={refAudio}
        refStick={refStick}
        refStickBody={refStickBody}
        refComment={refComment}
        setLpRotate={setLpRotate}
        onMusic={onMusic}
        offMusic={offMusic}
        openLpBook={openLpBook}
        hideButton={hideButtonBlock}
    />
}

export default CCCRoomContainer;