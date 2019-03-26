import React, { Component } from 'react';
import belle from 'belle';
import './App.css';
import Canvas from './CanvasComponent';
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
                [
                    {
                        "X": 1,
                        "Y": 2,
                        "R": 3,
                        "result": true
                    },
                    {
                        "X": 1,
                        "Y": 2,
                        "R": 3,
                        "result": true
                    },
                    {
                        "X": 1,
                        "Y": 2,
                        "R": 3,
                        "result": true
                    }
                ]
        };
    }


    updateCanvas(canvasR) {
        Canvas.updateState({canvasR})
    }

    handleOptionChangeForX = changeEvent => {
        this.setState({
            selectedOptionForX: changeEvent.target.value
        });
        this.updateDynamicResult();
    };
    handleOptionChangeForR = changeEvent => {
        this.setState({
            selectedOptionForR: changeEvent.target.value
        });
        this.updateDynamicResult();
        this.updateCanvas(changeEvent.target.value);

    };
    handleOptionChangeForY = changeEvent => {
        this.setState({
            selectedOptionForY: changeEvent.target.value

        });
        this.updateDynamicResult();
    };

    updateDynamicResult(){
        this.setState({
            dynamicResult: this.isInArea(
                this.state.selectedOptionForX,
                this.state.selectedOptionForY,
                this.state.selectedOptionForR
            )
        });
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

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        console.log("You have submitted X:", this.state.selectedOptionForX);
        console.log("You have submitted Y:", this.state.selectedOptionForY);
        console.log("You have submitted R:", this.state.selectedOptionForR);

        this.setState({data:[...this.state.data, {
            X:this.state.selectedOptionForX,
                Y:this.state.selectedOptionForY,
                R:this.state.selectedOptionForR,
                result:this.state.dynamicResult}
                ]});
    };


    render() {
        const BButton = withRouter(({ history }) => (
            <belle.Button
                type='button'
                onClick={() => { history.push('/') }}
            >
                Sign out
            </belle.Button>
        ));
        return (
            <div>
                <div className="Main">
                    <Canvas/>
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
                                           onChange={this.handleOptionChangeForX} />
                                    -3
                                </label>
                                <label>
                                    <input type="radio" value="-3"
                                           checked={this.state.selectedOptionForR === '-3'}
                                           onChange={this.handleOptionChangeForR} />
                                    -3
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="-2"
                                           checked={this.state.selectedOptionForX === '-2'}
                                           onChange={this.handleOptionChangeForX} />
                                    -2
                                </label>
                                <label>
                                    <input type="radio" value="-2"
                                           checked={this.state.selectedOptionForR === '-2'}
                                           onChange={this.handleOptionChangeForR} />
                                    -2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="-1"
                                           checked={this.state.selectedOptionForX === '-1'}
                                           onChange={this.handleOptionChangeForX} />
                                    -1
                                </label>
                                <label>
                                    <input type="radio" value="-1"
                                           checked={this.state.selectedOptionForR === '-1'}
                                           onChange={this.handleOptionChangeForR} />
                                    -1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="0"
                                           checked={this.state.selectedOptionForX === '0'}
                                           onChange={this.handleOptionChangeForX} />
                                    0
                                </label>
                                <label>
                                    <input type="radio" value="0"
                                           checked={this.state.selectedOptionForR === '0'}
                                           onChange={this.handleOptionChangeForR} />
                                    0
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="1"
                                           checked={this.state.selectedOptionForX === '1'}
                                           onChange={this.handleOptionChangeForX} />
                                    1
                                </label>
                                <label>
                                    <input type="radio" value="1"
                                           checked={this.state.selectedOptionForR === '1'}
                                           onChange={this.handleOptionChangeForR} />
                                    1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="2"
                                           checked={this.state.selectedOptionForX === '2'}
                                           onChange={this.handleOptionChangeForX} />
                                    2
                                </label>
                                <label>
                                    <input type="radio" value="2"
                                           checked={this.state.selectedOptionForR === '2'}
                                           onChange={this.handleOptionChangeForR} />
                                    2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="3"
                                           checked={this.state.selectedOptionForX === '3'}
                                           onChange={this.handleOptionChangeForX} />
                                    3
                                </label>
                                <label>
                                    <input type="radio" value="3"
                                           checked={this.state.selectedOptionForR === '3'}
                                           onChange={this.handleOptionChangeForR} />
                                    3
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="4"
                                           checked={this.state.selectedOptionForX === '4'}
                                           onChange={this.handleOptionChangeForX} />
                                    4
                                </label>
                                <label>
                                    <input type="radio" value="4"
                                           checked={this.state.selectedOptionForR === '4'}
                                           onChange={this.handleOptionChangeForR} />
                                    4
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="5"
                                           checked={this.state.selectedOptionForX === '5'}
                                           onChange={this.handleOptionChangeForX} />
                                    5
                                </label>
                                <label>
                                    <input type="radio" value="5"
                                           checked={this.state.selectedOptionForR === '5'}
                                           onChange={this.handleOptionChangeForR} />
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
                            {this.state.data.map((data, i) => <TableRow key={i} data={data} />)}
                            </tbody>
                        </table>
                        <BButton/>
                    </header>
                </div>
            </div>
        );
    }
}

export default Main;