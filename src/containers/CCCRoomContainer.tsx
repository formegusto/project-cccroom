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

    const upLp = useCallback(function(this:HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', upLp);
        setLpAni(LPUp);
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);
    }, []);

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
        }
    }, [backStickBody]);

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
        }
    }, [moveStick]);

    const openLpBook = useCallback((e: React.MouseEvent) => {
        const lpFront = e.target as HTMLDivElement;

        console.log(lpFront.dataset);
        const color: string = lpFront.dataset.color as string;
        setLpColor(Palette[color]);
        lpFront.style.transform = "rotateX(-7.5deg)";

        const lpBook = lpFront.parentNode;
        const lpDummy = lpBook?.querySelector("div:nth-child(2)") as HTMLDivElement;

        lpDummy.style.transform = "translateY(-200rem) translateZ(300px)";

        console.log(Palette[color].join(" 0%,"));

        document.body.style.background = "linear-gradient(45deg," + Palette[color][0] + "," + Palette[color][8] +")";
        // document.body.style.height = "200vh";

        lpDummy.addEventListener('transitionend', function(this:HTMLDivElement) {
            setLpAni(LPDrop);
            
            if(refLP.current) {
                refLP.current.addEventListener('animationend', moveStickBody);
            }
        })
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
    }, [moveStickBody]);

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
        setLpRotate={setLpRotate}
        openLpBook={openLpBook}
        hideButton={hideButtonBlock}
    />
}

export default CCCRoomContainer;