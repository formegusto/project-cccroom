import React, { useCallback, useRef, useState } from 'react';
import CCCRoomComponent from '../components/CCCRoomComponent';
import { LPDrop ,LPRotate } from '../animation/CCCRoomAnimation';
import { Keyframes } from 'styled-components';
import Palette from '../style/palette';

function CCCRoomContainer() {
    const [lpAni, setLpAni] = useState<Keyframes | null>(null);
    const [lpColor, setLpColor] = useState<string[] | null>(null);
    const refLP = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);
    const refStick = useRef<HTMLDivElement>(null);
    const refStickBody = useRef<HTMLDivElement>(null);

    const moveStickBodyDown = useCallback(function(this: HTMLDivElement, e: TransitionEvent) {
        this.removeEventListener('transitionend', moveStickBodyDown);
        if(refStickBody.current) {
            refStickBody.current.style.transform = "";
        }
    }, []);

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
        lpDummy.addEventListener('transitionend', function(this:HTMLDivElement) {
            setLpAni(LPDrop);
            
            if(refLP.current) {
                refLP.current.addEventListener('animationend', moveStickBody);
            }
        })
        setTimeout(function () {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            })
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
        refLP={refLP}
        refAudio={refAudio}
        refStick={refStick}
        refStickBody={refStickBody}
        setLpRotate={setLpRotate}
        openLpBook={openLpBook}
    />
}

export default CCCRoomContainer;