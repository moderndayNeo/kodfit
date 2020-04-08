import React from 'react';
import TimerInput from './TimerInput/TimerInput';
import './Timer.css';
import { FaPlay, FaRegStopCircle } from 'react-icons/fa';
import { MdSettingsBackupRestore } from "react-icons/md";

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: {},
            seconds: 0,
            inputHours: 0,
            inputMinutes: 0,
            inputSeconds: "00",
            isRunning: false
        };
        this.timer = 0;
    }

    secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisorForMinutes = secs % (60 * 60);
        let minutes = Math.floor(divisorForMinutes / 60);

        let divisorForSeconds = divisorForMinutes % 60;
        let seconds = Math.ceil(divisorForSeconds);

        let zeroAddedMinutes = ('0' + minutes).slice(-2);
        let zeroAddedSeconds = ('0' + seconds).slice(-2);
        let zeroAddedHours = ('0' + hours).slice(-2);

        let obj = {
            "h": zeroAddedHours,
            "m": zeroAddedMinutes,
            "s": zeroAddedSeconds
        };
        return obj;
    }

    handleTime = (e, timeUnit, modifier) => {


        if (e.target.value > 60) {
            e.target.value = 59;
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
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer = (secs) => {
        if (this.state.isRunning && this.state.seconds > 0) {
            this.setState({
                isRunning: false
            });
            clearInterval(this.timer);
        } else {
            let total = +this.state.inputHours + +this.state.inputMinutes + +this.state.inputSeconds;

            if (total > 0) {
                this.setState({
                    seconds: total,
                    isRunning: true
                });

                this.timer = setInterval(this.countDown, 1000);
            }
        }
    }

    resetTimer = () => {
        if (this.state.isRunning || this.state.seconds > 0) {
            this.setState({
                time: {
                    "h": "00",
                    "m": "00",
                    "s": "00"
                },
                isRunning: false
            });
            clearInterval(this.timer);
        }
    }

    countDown = (secs) => {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="Timer">
                <div className="grid-container">
                    <div className="digit-timer">
                        <span className="digit-hour">
                            {this.state.time.h}
                        </span>
                         :
                        <span className="digit-minutes">
                            {this.state.time.m}
                        </span>
                         :
                        <span className="digit-seconds">
                            {this.state.time.s}
                        </span>
                    </div>
                    <div className="hours column">
                        <TimerInput
                            value={this.state.inputHours < 1 ? "00" : this.state.inputHours / 3600}
                            field={(e) => this.handleTime(e, 'inputHours', 3600)}
                        />
                        <span>Hours</span>
                    </div>
                    <div className="minutes column">
                        <TimerInput
                            value={this.state.inputMinutes < 1 ? "00" : this.state.inputMinutes / 60}
                            field={(e) => this.handleTime(e, 'inputMinutes', 60)} />
                        <span>Minutes</span>
                    </div>
                    <div className="seconds column">
                        <TimerInput
                            value={this.state.inputSeconds}
                            field={(e) => this.handleTime(e, 'inputSeconds', 1)} />
                        <span>Seconds</span>
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
                                {this.state.isRunning && this.state.seconds ?
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
