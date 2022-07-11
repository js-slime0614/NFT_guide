import React from 'react';
import styled from 'styled-components';

const TitleBarBlock = styled.div`
    width: 100%;
    height: 100px;
    background-color: #CC99FF;
    margin-bottom: 50px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.21), 0 1px 3px rgba(0, 0, 0, 0);
    font-size:48px;
    font-family: sans-serif;
    color: white;
    text-align:center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
    img {
        height: 100px;
        float: left;
    }
`;

function TitleBar({children, imgSrc}) {
    return <TitleBarBlock>
        <img src={imgSrc}/>
        {children}
        </TitleBarBlock>
}

export default TitleBar;