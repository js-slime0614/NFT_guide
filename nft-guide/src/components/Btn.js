import React from 'react';
import styled from 'styled-components';

const BtnStyle = styled.button`
    all: unset;
    cursor: pointer;
    background-color: white;
    padding: 5px 0px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 12px;
    &:active{
        transform: scale(0.98);
    }
`;

function Btn({children}) {
    return <BtnStyle>{children}</BtnStyle>;
}

export default Btn;