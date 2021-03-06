import React, { Component } from 'react';
import belle from 'belle';
import './App.css';
/*import Canvas from './CanvasComponent';*/
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOptionForX: "0",
            selectedOptionForY: "0",
            selectedOptionForR: "1",
            dynamicResult: true,
            data:
                [],
            hits:
                []
        };
    }

    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.clearCanvas();
        this.updateCanvas();
    }


    handleOptionChangeForX = changeEvent => {
        this.setState({
            selectedOptionForX: changeEvent.target.value
        });
        this.updateDynamicResult();
    };
    handleOptionChangeForR = changeEvent => {
        if (changeEvent.target.value > 0) {
            console.log(changeEvent.target.value);
            this.setState({
                selectedOptionForR: changeEvent.target.value
            });
            this.updateDynamicResult();
        } else
            alert("R cannot be negative or 0")

    };

    handleOptionChangeForY = changeEvent => {
        this.setState({
            selectedOptionForY: changeEvent.target.value

        });
        this.updateDynamicResult();
    };

    updateDynamicResult() {
        this.setState({
            dynamicResult: this.isInArea(
                this.state.selectedOptionForX,
                this.state.selectedOptionForY,
                this.state.selectedOptionForR
            )
        });
    }

    isInArea(x, y, r) {

        if ((x >= 0 && y >= 0) && (x <= r) && (y <= (r))) {
            return true;
        } else if (x <= 0 && y >= 0 && y <= (x + (r / 2))*2 && x >= (-r / 2) && y <= r) {
            return true;
        } else return x >= 0 && y <= 0 && r >= Math.sqrt(y * y + x * x);
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted X:", this.state.selectedOptionForX);
        console.log("You have submitted Y:", this.state.selectedOptionForY);
        console.log("You have submitted R:", this.state.selectedOptionForR);

        this.setState({
            data: [...this.state.data, {
                X: this.state.selectedOptionForX,
                Y: this.state.selectedOptionForY,
                R: this.state.selectedOptionForR,
                result: this.state.dynamicResult
            }
            ]
        });
    };

    render() {
        const BButton = withRouter(({history}) => (
            <belle.Button
                type='button'
                onClick={() => {
                    history.push('/')
                }}
            >
                Sign out
            </belle.Button>
        ));
        return (
            <div>
                <div className="Main">

                    <canvas id="canvas" ref="canvas" onClick={this.clickCanvas.bind(this)} width={300} height={300}/>
                    <header className="Main-header">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="labels">
                                <label id="XLabel">
                                    X
                                </label>
                                <label id="RLabel">
                                    R
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="-3"
                                           checked={this.state.selectedOptionForX === '-3'}
                                           onChange={this.handleOptionChangeForX}/>
                                    -3
                                </label>
                                <label>
                                    <input type="radio" value="-3"
                                           checked={this.state.selectedOptionForR === '-3'}
                                           onChange={this.handleOptionChangeForR}/>
                                    -3
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="-2"
                                           checked={this.state.selectedOptionForX === '-2'}
                                           onChange={this.handleOptionChangeForX}/>
                                    -2
                                </label>
                                <label>
                                    <input type="radio" value="-2"
                                           checked={this.state.selectedOptionForR === '-2'}
                                           onChange={this.handleOptionChangeForR}/>
                                    -2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="-1"
                                           checked={this.state.selectedOptionForX === '-1'}
                                           onChange={this.handleOptionChangeForX}/>
                                    -1
                                </label>
                                <label>
                                    <input type="radio" value="-1"
                                           checked={this.state.selectedOptionForR === '-1'}
                                           onChange={this.handleOptionChangeForR}/>
                                    -1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="0"
                                           checked={this.state.selectedOptionForX === '0'}
                                           onChange={this.handleOptionChangeForX}/>
                                    0
                                </label>
                                <label>
                                    <input type="radio" value="0"
                                           checked={this.state.selectedOptionForR === '0'}
                                           onChange={this.handleOptionChangeForR}/>
                                    0
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="1"
                                           checked={this.state.selectedOptionForX === '1'}
                                           onChange={this.handleOptionChangeForX}/>
                                    1
                                </label>
                                <label>
                                    <input type="radio" value="1"
                                           checked={this.state.selectedOptionForR === '1'}
                                           onChange={this.handleOptionChangeForR}/>
                                    1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="2"
                                           checked={this.state.selectedOptionForX === '2'}
                                           onChange={this.handleOptionChangeForX}/>
                                    2
                                </label>
                                <label>
                                    <input type="radio" value="2"
                                           checked={this.state.selectedOptionForR === '2'}
                                           onChange={this.handleOptionChangeForR}/>
                                    2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="3"
                                           checked={this.state.selectedOptionForX === '3'}
                                           onChange={this.handleOptionChangeForX}/>
                                    3
                                </label>
                                <label>
                                    <input type="radio" value="3"
                                           checked={this.state.selectedOptionForR === '3'}
                                           onChange={this.handleOptionChangeForR}/>
                                    3
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="4"
                                           checked={this.state.selectedOptionForX === '4'}
                                           onChange={this.handleOptionChangeForX}/>
                                    4
                                </label>
                                <label>
                                    <input type="radio" value="4"
                                           checked={this.state.selectedOptionForR === '4'}
                                           onChange={this.handleOptionChangeForR}/>
                                    4
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="5"
                                           checked={this.state.selectedOptionForX === '5'}
                                           onChange={this.handleOptionChangeForX}/>
                                    5
                                </label>
                                <label>
                                    <input type="radio" value="5"
                                           checked={this.state.selectedOptionForR === '5'}
                                           onChange={this.handleOptionChangeForR}/>
                                    5
                                </label>
                            </div>
                            <div>
                                <label id="demo">Y value: {this.state.selectedOptionForY}</label>
                            </div>
                            <div className="slideContainer">
                                <input type="range" min="-3" max="5" defaultValue={this.state.selectedOptionForY}
                                       value={this.state.selectedOptionForY}
                                       onChange={this.handleOptionChangeForY}
                                       className="slider" id="myRange"/>
                            </div>
                            <textarea id="hiddenX" hidden="hidden" value={this.state.selectedOptionForX}/>
                            <textarea id="hiddenY" hidden="hidden" value={this.state.selectedOptionForY}/>
                            <textarea id="hiddenR" hidden="hidden" value={this.state.selectedOptionForR}/>
                            <belle.Button type="submit" id="submitForm">Submit</belle.Button>
                        </form>
                        <table>
                            <tbody className="Data">
                            <tr>
                                <td>X</td>
                                <td>Y</td>
                                <td>R</td>
                                <td>result</td>
                            </tr>
                            {this.state.data.map((data, i) => <TableRow key={i} data={data}/>)  }
                            </tbody>
                        </table>
                        <BButton/>
                    </header>
                </div>
            </div>
        );
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
        context.lineTo(85, 150);
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
        context.arc(150, 150, 130, 0, Math.PI / 2, false);
        context.closePath();
        context.strokeStyle = "#3BA4C7";
        context.fillStyle = "#3BA4C7";
        context.fill();
        context.stroke();

//отрисовка осей
        context.beginPath();
        context.font = "12px Verdana";
        context.moveTo(150, 0);
        context.lineTo(150, 300);
        context.moveTo(150, 0);
        context.lineTo(145, 12);
        context.moveTo(150, 0);
        context.lineTo(155, 12);
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
        if (this.state.selectedOptionForR === 0) {
            context.fillText("R", 160, 25);
            context.fillText("R/2", 160, 90);
            context.fillText("-R/2", 160, 220);
            context.fillText("-R", 160, 285);
        } else {
            context.fillText(this.state.selectedOptionForR, 160, 25);
            context.fillText((this.state.selectedOptionForR / 2), 160, 90);
            context.fillText(-(this.state.selectedOptionForR / 2), 160, 220);
            context.fillText(-this.state.selectedOptionForR, 160, 285);
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
        if (this.state.selectedOptionForR === 0) {
            context.fillText("-R", 12, 140);
            context.fillText("-R/2", 70, 140);
            context.fillText("R/2", 205, 140);
            context.fillText("R", 275, 140);
        } else {
            context.fillText(-this.state.selectedOptionForR, 12, 140);
            context.fillText(-(this.state.selectedOptionForR / 2), 70, 140);
            context.fillText((this.state.selectedOptionForR / 2), 205, 140);
            context.fillText(this.state.selectedOptionForR, 275, 140);
        }

        context.closePath();
        context.strokeStyle = "black";
        context.fillStyle = "black";
        context.stroke();
    }

    clearCanvas() {
        let canvas = document.getElementById('canvas'),
            context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    clickCanvas(event){
        let canvas = document.getElementById('canvas');
        let br = canvas.getBoundingClientRect();
        let left = br.left;
        let top = br.top;
        let x = event.clientX-left;
        let y = event.clientY-top;
        let size = canvas.height;
        if (this.state.selectedOptionForR>0) {
            x = Math.round((x - size / 2) * this.state.selectedOptionForR * 100 / 2 / 65) / 100;
            console.log("x:",x);
            y = Math.round((-y + size / 2) * this.state.selectedOptionForR * 100 / 2 / 65) / 100;
            console.log("y:",y);

            this.drawPoint(x, y, this.state.selectedOptionForR);

            /*this.state.selectedOptionForY = y;
            this.state.selectedOptionForX = x;

            document.getElementById("submitForm").click();*/


        }
    }

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
        ctx.arc(150+x*130/r,150-y*130/r,3,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Main;