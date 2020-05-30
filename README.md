<img src="./src/common/images/shield.svg">

## Live Demo

Access Kodfit here: https://kodfit-adamzdrzalka.now.sh/

# Mobile View
![kodfit-mobile](-- mobile gif --)

# Desktop View
![kodfit-desktop](-- desktop gif --)


# Table Of Contents
* [Outline](#outline)
* [Technologies](#technologies)
* [The Code](#some-snippets-from-the-code)
* [Authors](#some-snippets-from-the-code)

## Outline

This is Kodfit - the fitness app that keeps you motivated! My aim is to show you that staying fit and healthy is easier than ever before.
Want to find nearby gyms and personal trainers in your area? Head to the Nearby page of the app.
Want to do a workout but not sure where to start? Head to the Schedule page, press Start and the random workout generator will provide one for you.
Need to keep track of your progress? Simply enter your current weight and your goals and let us do the work for you!

Kodfit - The fitter, stronger you is closer than you think.

Features:
* Login System
* Random workout generator
* Google Maps displays nearby gyms and trainers
* Timer & Stopwatch
* & more!

## Technologies

* HTML
* CSS
* JavaScript
* ReactJS
* NodeJS
* Google API


## Some Snippets From The Code

### Each function serves a single purpose
```js
    countDown = () => {
        let countDownSeconds = this.state.toSeconds - 1;
        this.setState({
            timerObject: this.secondsToTime(countDownSeconds),
            toSeconds: countDownSeconds,
        });

        if (countDownSeconds === 0) {
            clearInterval(this.timer);
        }
    };

    secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));
        let divisorForMinutes = secs % (60 * 60);
        let minutes = Math.floor(divisorForMinutes / 60);
        let divisorForSeconds = divisorForMinutes % 60;
        let seconds = Math.ceil(divisorForSeconds);

        let obj = {
            h: hours,
            m: minutes,
            s: seconds,
        };
        return obj;
    };

    resetTimer = () => {
        if (this.state.isRunning || this.state.toSeconds > 0) {
            this.setState({
                timerObject: {
                    h: '00',
                    m: '00',
                    s: '00',
                },
                toSeconds: 0,
                runningTimer: 0,
            });
            clearInterval(this.timer);
        }
    };
}
```
### Clean CSS
Each sub-component has it's own CSS file. Use of CSS Variables results in scalability
```css
.NotFound .main {
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-top: 60px;
}

.NotFound .chevron {
    color: var(--kodfit-blue);
    font-size: 50px;
}

@media (min-width: 600px) {
    .NotFound .main {
        height: 350px;
    }
}
```
### Modern Javascript and React Practices
##### Componentizing the app and using React Hooks allows for easily maintainable code. Asynchronous Javascript results in a smooth user experience even if an API call fails on the backend.

```js
import React, { useState, useEffect } from 'react';
import './NearMe.css';
import Map from './Map/Map';
import List from './List/List';
import SwitchButton from './SwitchButton/SwitchButton';

export default function NearMe() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 });
    const [query, setQuery] = useState('gym');
    const [title, setTitle] = useState('Gyms');
    let endpoint = 'https://discover.search.hereapi.com/v1/discover';
    let queryParams = `at=${location.lat},${location.lng}&q=${query}&limit=15`;
    let apiKEy = // HIDDEN

    useEffect(() => {
        let successPosition = (position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        };
        let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 });
        navigator.geolocation.getCurrentPosition(successPosition, errorHandle);
    }, []);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${endpoint}?${queryParams}&${apiKEy}`
            );
            const result = await response.json();
            setData(result.items);
        })();
    }, [queryParams, endpoint, apiKEy]);

    const updateQuery = (query, title) => {
        setQuery(query);
        setTitle(title);
    };

    return (
        <div className="NearMe">
            <Map data={data} location={location} />
            <div className="buttons-and-list">
                <div className="switch-buttons">
                    <SwitchButton
                        text="gym"
                        onClick={() => updateQuery('gym', 'Gyms')}
                    />

                    <SwitchButton
                        text="personal trainer"
                        onClick={() =>
                            updateQuery(
                                'personal + trainer',
                                'Personal Trainers'
                            )
                        }
                    />
                </div>
                <List title={title} data={data} />
            </div>
        </div>
    );
}

```


## Authors

Initial Authors:
* Adam Zdrzalka - [moderndayNeo](https://github.com/moderndayNeo)
* Dan Arango - [Darango84](https://github.com/Darango84)
* Minji Jeong - [casey-minzi](https://github.com/casey-minzi)
* Ian Molocea - [marianmolocea](https://github.com/marianmolocea)
* Panos Hapsides - [phapsides](https://github.com/phapsides)
* Ebrima Conta - [ebrimaconta](https://github.com/ebrimaconta)

Continuing Author:
* Adam Zdrzalka - [moderndayNeo](https://github.com/moderndayNeo)

Kodfit began as a team project for the Kodiri coding internship. At the conclusion of the internship the members of the group went on to other projects. The following three weeks I continued working solely on the project, as I enjoyed working on the app and it had a number of areas for improvement, mostly with cleaning up the code and improving the layout for desktop users. At the end of the three weeks, this is the final result.