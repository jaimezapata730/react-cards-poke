import React, { useState } from "react";

const useFlip = ( initialState ) => {
    const [isFacingUp, setIsFacingUp] = useState( initialState = true);

    const flipCard = () => {
        setIsFacingUp( isUp => !isUp );
    };

    return [ isFacingUp, flipCard ]

}

export default useFlip;