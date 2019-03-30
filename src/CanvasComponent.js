import React, { Component } from 'react';


class CanvasComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            canvasR : "1",
            width : 300,
            height : 300
        };
    }

    componentWillReceiveProps(nextProps,nextState){
        this.onChangeCanvasR(nextProps.r);
    }

    onChangeCanvasR(newR){
        this.setState({
            canvasR : newR
        });
        this.clearCanvas();
        this.updateCanvas();
        this.forceUpdate();
    }

    componentDidMount() {
        this.updateCanvas();
    }


    handleClick(){
        alert("canvas");
    }

    clearCanvas(){
        let canvas = document.getElementById('canvas'),
            ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /*handleClick() {
        let canvas = document.getElementById('canvas');
        let br = canvas.getBoundingClientRect();
        let left = br.left;
        let top = br.top;
        let event = window.event;
        let x = event.clientX-left;
        let y = event.clientY-top;
        let size = canvas.height;
        if (this.state.canvasR>0) {
            x = Math.round((x - size / 2) * this.state.canvasR * 10 / 2 / 65) / 10;
            y = Math.round((-y + size / 2) * this.state.canvasR * 10 / 2 / 65) / 10;

            this.drawPoint(x, y, this.state.canvasR);

            document.getElementById('hiddenY').value=y;
            document.getElementById('hiddenX').value=x;

            document.getElementById("submitForm").click();
        }
    }*/


    drawPoint(x,y,r){
        let color;
        let canvas = document.getElementById('canvas'),
            ctx = canvas.getContext("2d");
        if (this.isInArea(x,y,r)) {
            color = 'green';
        } else {
            color = 'red';
        }
        ctx.beginPath();
        ctx.arc(150+x*130/r,150-y*130/r,2,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
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
        if (this.state.canvasR === 0){
            context.fillText("R", 160, 25);
            context.fillText("R/2", 160, 90);
            context.fillText("-R/2", 160, 220);
            context.fillText("-R", 160, 285);
        } else {
            context.fillText(this.state.canvasR, 160, 25);
            context.fillText((this.state.canvasR / 2), 160, 90);
            context.fillText(-(this.state.canvasR / 2), 160, 220);
            context.fillText(-this.state.canvasR, 160, 285);
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
        if (this.state.canvasR===0){
            context.fillText("-R", 12, 140);
            context.fillText("-R/2", 70, 140);
            context.fillText("R/2", 205, 140);
            context.fillText("R", 275, 140);
        } else {
            context.fillText(-this.state.canvasR, 12, 140);
            context.fillText(-(this.state.canvasR / 2), 70, 140);
            context.fillText((this.state.canvasR / 2), 205, 140);
            context.fillText(this.state.canvasR, 275, 140);
        }

        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();
    }
    render() {
        return (
            <canvas id="canvas" ref="canvas"  onClick={this.handleClick.bind(this)} width={300} height={300}/>
        );
    }


    isInArea(x, y, r) {

        if((x >= 0 && y >= 0) && (x <= r) && (y <= (r))){
            return true;
        }
        else if(x <= 0 && y >= 0 && y <= (x+(r/2)) && x >= (-r/2) && y <= r){
            return true;
        }
        else return x >= 0 && y <= 0 && r >= Math.sqrt(y * y + x * x);
    }
}

export default CanvasComponent;