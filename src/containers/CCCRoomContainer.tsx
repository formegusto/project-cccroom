import React, { useCallback, useRef, useState } from 'react';
import CCCRoomComponent from '../components/CCCRoomComponent';
import { LPDrop ,LPRotate } from '../animation/CCCRoomAnimation';
import { Keyframes } from 'styled-components';

function CCCRoomContainer() {
    const [lpAni, setLpAni] = useState<Keyframes>(LPDrop);
    const refLP = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);

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
    />
}

export default CCCRoomContainer;