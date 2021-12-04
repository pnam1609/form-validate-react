import React from 'react';
import FadingDots from "react-cssfx-loading/lib/FadingDots";

function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%' }}>
            <FadingDots color="#FF0000" width="100px" height="100px" duration="0.5s"/>
        </div>
    )
}

export default Loading
