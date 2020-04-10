import React from 'react'
import './StopWatch.css';
import { FaPlay, FaRegStopCircle } from 'react-icons/fa';
import { MdSettingsBackupRestore } from "react-icons/md";
import { Link } from 'react-router-dom';

class StopWatch extends React.Component {
    constructor() {
        super();
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };
    }

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    render() {

        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="Stopwatch">
                <div className="grid-container">
                <div className="titles">
                    <span >
                    <Link to="/timer">Timer</Link>
                    </span >
                    <span className="active">
                        Stopwatch
                    </span >
                    </div>
                    <div className="display-timer">
                        {hours} : {minutes} : {seconds} : {centiseconds}
                    </div>
                    <div className="display-buttons">
                        {this.state.timerOn === false && this.state.timerTime === 0 && (
                            <button  className="button"  onClick={this.startTimer}><FaPlay /></button>
                        )}
                        {this.state.timerOn === true && (
                            <button   className="button" onClick={this.stopTimer}> <FaRegStopCircle /> </button>
                        )}
                      
                        {this.state.timerOn === false && this.state.timerTime > 0 && (
                            <button   className="button" onClick={this.startTimer}><FaPlay /></button>
                        )}
                         {this.state.timerOn === false && this.state.timerTime > 0 && (
                            <button  className="button" onClick={this.resetTimer}> <MdSettingsBackupRestore /></button>
                        )}
          
                    </div>

                </div>
            </div>

        );
    }
}

export default StopWatch;
