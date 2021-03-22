import React, { useCallback, useRef, useState } from 'react';
import CCCRoomComponent from '../components/CCCRoomComponent';
import { LPDrop ,LPRotate } from '../animation/CCCRoomAnimation';
import { Keyframes } from 'styled-components';

function CCCRoomContainer() {
    const [lpAni, setLpAni] = useState<Keyframes | null>(null);
    const refLP = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);


    const openLpBook = useCallback((e: React.MouseEvent) => {
        const lpFront = e.target as HTMLDivElement;

        lpFront.style.transform = "rotateX(-7.5deg)";

        const lpBook = lpFront.parentNode;
        const lpDummy = lpBook?.querySelector("div:nth-child(2)") as HTMLDivElement;
        lpDummy.style.transform = "translateY(-150px)";
        lpDummy.addEventListener('click', function(this:HTMLDivElement){
            this.style.transform = "translateY(-200rem) translateZ(300px)";
            this.addEventListener('transitionend', function(this:HTMLDivElement) {
                setLpAni(LPDrop);
            })
            setTimeout(function () {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
            }, 1000);
        });
    }, []);

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
        refLP={refLP}
        refAudio={refAudio}
        setLpRotate={setLpRotate}
        openLpBook={openLpBook}
    />
}

export default CCCRoomContainer;