import React, { useCallback, useRef, useState } from 'react';
import CCCRoomComponent from '../components/CCCRoomComponent';
import { LPDrop ,LPRotate } from '../animation/CCCRoomAnimation';
import { Keyframes } from 'styled-components';

function CCCRoomContainer() {
    const [lpAni, setLpAni] = useState<Keyframes>(LPDrop);
    const refLP = useRef<HTMLDivElement>(null);

    const onLpRotate = useCallback(() => {
        if(refLP.current) {
            if(lpAni === LPRotate){
                refLP.current.style.animationPlayState = "";
            } else {
                setLpAni(LPRotate);
            }
        }
    }, [lpAni]);

    const offLpRotate = useCallback(() => {
        if(refLP.current) {
            refLP.current.style.animationPlayState = "paused";
        }
    }, [])
    
    return <CCCRoomComponent
        lpAni={lpAni}
        refLP={refLP}
        onLpRotate={onLpRotate}
        offLpRotate={offLpRotate}
    />
}

export default CCCRoomContainer;