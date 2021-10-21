import './App.css';
import React, { Component } from 'react';
import BillController from './controller/BillController';
import BillDisplay from './view/BillDisplay';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tip: "0.00",
            people: "0.00"
        }
    }

    refreshParent = (bill, people) => {
        this.setState({
            tip: bill,
            people: people
        })
    }

    render() {
        return (
            <div className="container">
                <h1 id='title'>
                    spli <br />
                    tter
                </h1>

                <div className="main-content">
                    <BillController refreshParent={this.refreshParent}/>
                    <BillDisplay tip={this.state.tip} person={this.state.people}/>
                </div>
            </div>
        );
    }
}

export default App;