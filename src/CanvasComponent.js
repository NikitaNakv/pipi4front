import React, { Component } from 'react';

class CanvasComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            r : "1",
            width : 300,
            height : 300
        }
    }


    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const context = this.refs.canvas.getContext('2d');
        context.clearRect(0, 0, this.width, this.height);
//треугольник
        context.beginPath();
        // context.moveTo(150, 150);
        // context.lineTo(150, 85);
        // context.lineTo(280,150);
        // context.lineTo(150, 150);
        context.moveTo(150, 150);
        context.lineTo(150, 20);
        context.lineTo(85,150);
        context.lineTo(150, 150);
        context.closePath();
        context.strokeStyle = "#3BA4C7";
        context.fillStyle = "#3BA4C7";
        context.fill();
        context.stroke();

//прямоугольник
        context.beginPath();
        // context.rect(20, 150, 130, 130);
        context.rect(150, 20, 130, 130);
        context.closePath();
        context.strokeStyle = "#3BA4C7";
        context.fillStyle = "#3BA4C7";
        context.fill();
        context.stroke();

//сектор
        context.beginPath();
        context.moveTo(150, 150);
        context.arc(150, 150, 130, 0, Math.PI/2, false);
        context.closePath();
        context.strokeStyle = "#3BA4C7";
        context.fillStyle = "#3BA4C7";
        context.fill();
        context.stroke();

//отрисовка осей
        context.beginPath();
        context.font = "12px Verdana";
        context.moveTo(150, 0); context.lineTo(150, 300);
        context.moveTo(150, 0); context.lineTo(145, 12);
        context.moveTo(150, 0); context.lineTo(155, 12);
        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();

        context.beginPath();
        context.fillText("Y", 160, 10);
        context.moveTo(0, 150);
        context.lineTo(300, 150);
        context.moveTo(300, 150);
        context.lineTo(288, 145);
        context.moveTo(300, 150);
        context.lineTo(288, 155);
        context.fillText("X", 290, 135);
        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();

//деления X
        context.beginPath();
        context.moveTo(145, 20);
        context.lineTo(155, 20);
        context.moveTo(145, 85);
        context.lineTo(155, 85);
        context.moveTo(145, 215);
        context.lineTo(155, 215);
        context.moveTo(145, 280);
        context.lineTo(155, 280);
        if (this.state.r === 0){
            context.fillText("R", 160, 25);
            context.fillText("R/2", 160, 90);
            context.fillText("-R/2", 160, 220);
            context.fillText("-R", 160, 285);
        } else {
            context.fillText(this.state.r, 160, 25);
            context.fillText((this.state.r / 2), 160, 90);
            context.fillText(-(this.state.r / 2), 160, 220);
            context.fillText(-this.state.r, 160, 285);
        }

//деления Y
        context.moveTo(20, 145);
        context.lineTo(20, 155);
        context.moveTo(85, 145);
        context.lineTo(85, 155);
        context.moveTo(215, 145);
        context.lineTo(215, 155);
        context.moveTo(280, 145);
        context.lineTo(280, 155);
        if (this.state.r===0){
            context.fillText("-R", 12, 140);
            context.fillText("-R/2", 70, 140);
            context.fillText("R/2", 205, 140);
            context.fillText("R", 275, 140);
        } else {
            context.fillText(-this.state.r, 12, 140);
            context.fillText(-(this.state.r / 2), 70, 140);
            context.fillText((this.state.r / 2), 205, 140);
            context.fillText(this.state.r, 275, 140);
        }

        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

export default CanvasComponent;