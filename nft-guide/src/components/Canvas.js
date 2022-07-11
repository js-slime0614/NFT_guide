import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

const CanvasBox = styled.div`
    canvas {
        width: 700px;
        height: 700px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
`;

function Canvas({color, lineWidth}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [ctx, setCtx] = useState();
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 700;
        canvas.height = 700;

        const context = canvas.getContext("2d");
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        contextRef.current = context;

        setCtx(context);
    }, []);
    

    const startDrawing = ({nativeEvent}) => {
        console.log(nativeEvent);

        setIsDrawing(true);
    };

    const finishingDrawing = () => {
        setIsDrawing(false);
    };

    const drawing = ({ nativeEvent }) => {
        const x = nativeEvent.offsetX;
        const y = nativeEvent.offsetY;
        if(ctx) {
            if (!isDrawing) {
                ctx.beginPath();
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }
    };

    return (
        <CanvasBox>
            <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishingDrawing}
            onMouseMove={drawing}
            onMouseLeave={finishingDrawing}>
            </canvas>
        </CanvasBox>);
};

Canvas.defaultProps = {
    color:'black',
    lineWidth:2.5
};

export default Canvas;