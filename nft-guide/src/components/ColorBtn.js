import React from 'react';
import styled from 'styled-components';

function ColorBtn({color, onClick}) {
    const ColorBtnCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color:${color};
    `;

    return(
        <ColorBtnCircle id={color} onClick={onClick}></ColorBtnCircle>
    );
}

export default ColorBtn;