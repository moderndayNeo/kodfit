import React from 'react';
import TimerInput from './TimerInput/TimerInput';
import './Timer.css';
import { FaPlay, FaRegStopCircle } from 'react-icons/fa';
import { MdSettingsBackupRestore } from "react-icons/md";
import { Link } from 'react-router-dom';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timerObject: {},
            toSeconds: 0,
            inputHours: 0,
            inputMinutes: 0,
            inputSeconds: "00",
            runningTimer: 0
        };
        this.timer = 0;
    }

    handleTime = (e, timeUnit, modifier) => {

        if (e.target.value > 60) {
            e.target.value = 0;
        }

        if (e.target.value < 10) {
            e.target.value = ('0' + e.target.value).slice(-2);
        } else {
            e.target.value = +e.target.value;
        }

        const timeObject = {};
        timeObject[timeUnit] = e.target.value * modifier
        this.setState(timeObject)
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.toSeconds);
        this.setState({ timerObject: timeLeftVar });
    }

    startTimer = () => {
        if (this.state.runningTimer === 1 && this.state.toSeconds > 0) {
            this.setState({
                runningTimer: 2
            });

            clearInterval(this.timer);
        } else {
            let total = +this.state.inputHours + +this.state.inputMinutes + +this.state.inputSeconds;

            if (total > 0 && this.state.runningTimer === 0) {
                this.setState({
                    toSeconds: total,
                    runningTimer: 1
                });

                this.timer = setInterval(this.countDown, 1000);
            }

            if (this.state.toSeconds > 0 && this.state.runningTimer === 2) {
                this.setState({
                    runningTimer: 1
                });
                this.timer = setInterval(this.countDown, 1000);
            }
        }
    }


    countDown = () => {
        let countDownSeconds = this.state.toSeconds - 1;
        this.setState({
            timerObject: this.secondsToTime(countDownSeconds),
            toSeconds: countDownSeconds,
        });

        if (countDownSeconds === 0) {
            clearInterval(this.timer);
        }
    }

    secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisorForMinutes = secs % (60 * 60);
        let minutes = Math.floor(divisorForMinutes / 60);

        let divisorForSeconds = divisorForMinutes % 60;
        let seconds = Math.ceil(divisorForSeconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    resetTimer = () => {
        if (this.state.isRunning || this.state.toSeconds > 0) {
            this.setState({
                timerObject: {
                    "h": "00",
                    "m": "00",
                    "s": "00"
                },
                toSeconds: 0,
                runningTimer: 0
            });
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="Timer">
                <div className="grid-container">
                    <div className="titles">
                        <span className="active" >Timer   </span >
                        <span >
                            <Link to="/dashboard/stopwatch">
                                Stopwatch
                            </Link>
                        </span >
                    </div>

                    <div className="display-timer">
                        <span>
                            {('0' + this.state.timerObject.h).slice(-2)}   :
                            {('0' + this.state.timerObject.m).slice(-2)}   :
                            {('0' + this.state.timerObject.s).slice(-2)}
                        </span>
                    </div>
                    <div className="inputs">
                        <div className="input-hours column">
                            <TimerInput
                                value={this.state.inputHours < 1 ? "00" : this.state.inputHours / 3600}
                                field={(e) => this.handleTime(e, 'inputHours', 3600)}
                            />
                            <span>Hours</span>
                        </div>
                        <div className="input-minutes column">
                            <TimerInput
                                value={this.state.inputMinutes < 1 ? "00" : this.state.inputMinutes / 60}
                                field={(e) => this.handleTime(e, 'inputMinutes', 60)} />
                            <span>Minutes</span>
                        </div>
                        <div className="input-seconds column">
                            <TimerInput
                                value={this.state.inputSeconds}
                                field={(e) => this.handleTime(e, 'inputSeconds', 1)} />
                            <span>Seconds</span>
                        </div>
                    </div>
                    <div className="buttons center">
                        <div className="reset inline">
                            <button
                                className="button"
                                onClick={this.resetTimer}>
                                <MdSettingsBackupRestore />
                            </button>
                        </div>
                        <div className="submit inline">
                            <button
                                className="button"
                                onClick={this.startTimer}>
                                {this.state.runningTimer === 1 && this.state.toSeconds ?
                                    <FaRegStopCircle /> :
                                    <FaPlay />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;
