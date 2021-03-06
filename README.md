<img src="./src/common/images/shield.svg">

## Live Demo

Access Kodfit Here: https://kodfit-adamzdrzalka.now.sh/

# Mobile View

![kodfit-mobile-nearby-gyms](https://user-images.githubusercontent.com/57966028/85389682-aa1fcf80-b53f-11ea-9e69-21d50b247b61.gif)

# Desktop View

![kodfit-desktop-login](https://user-images.githubusercontent.com/57966028/85386357-6aef7f80-b53b-11ea-8a6f-21ebf3357734.gif)

# Table Of Contents

-   [Outline](#outline)
-   [Technologies](#technologies)
-   [The Code](#some-snippets-from-the-code)
-   [Authors](#authors)

## Outline

This is Kodfit - the fitness app that keeps you motivated! My aim is to show you that staying fit and healthy is easier than ever before.
Want to find nearby gyms and personal trainers in your area? Head to the Nearby page of the app.
Want to do a workout but not sure where to start? Head to the Schedule page, press Start and the random workout generator will provide one for you.
Need to keep track of your progress? Simply enter your current weight and your goals and let Kodfit do the work.

Kodfit - _The fitter, stronger you is closer than you think._

Features:

-   Integrated Google Maps API with geolocation-based searching to display location of nearby gyms and personal trainers
-   Applied CSS media queries, grid, and flexbox to create a fully responsive UI for both desktop, tablet, and mobile users that flows seamlessly when resizing the page
-   Google Login System
-   Created a category dashboard that allows users to select workouts by category
-   Timer & Stopwatch
-   & more!

## Technologies

-   HTML5
-   CSS3
-   ES6 JavaScript
-   React.js v16.13.1
-   Node.js v12.14.0
-   Google Maps & Google Login APIs

## Some Snippets From The Code

### Modern Javascript and React Practices

Asynchronous JavaScript results in a smooth user experience even if an API call fails.

```js
import React, { useState, useEffect } from 'react'
import './NearMe.css'
import Map from './Map/Map'
import List from './List/List'
import SwitchButton from './SwitchButton/SwitchButton'

export default function NearMe() {
    const [data, setData] = useState([])
    const [location, setLocation] = useState({ lat: 51.5007, lng: -0.1246 })
    const [query, setQuery] = useState('gym')
    const [title, setTitle] = useState('Gyms')
    let endpoint = 'https://discover.search.hereapi.com/v1/discover'
    let queryParams = `at=${location.lat},${location.lng}&q=${query}&limit=15`
    let apiKEy = useEffect(() => { // HIDDEN
        let successPosition = (position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        }
        let errorHandle = () => setLocation({ lat: 51.5007, lng: -0.1246 })
        navigator.geolocation.getCurrentPosition(successPosition, errorHandle)
    }, [])

    useEffect(() => {
        ;(async () => {
            const response = await fetch(`${endpoint}?${queryParams}&${apiKEy}`)
            const result = await response.json()
            setData(result.items)
        })()
    }, [queryParams, endpoint, apiKEy])

    const updateQuery = (query, title) => {
        setQuery(query)
        setTitle(title)
    }

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
    )
}
```

### Clean CSS

Give each sub-component it's own CSS file. Emply CSS Variables for maintainable styling

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

### Separation of concerns

Modularise code so each file and function serves a single purpose

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

### Componentization

Componentizing the app and using React Hooks allows for easily maintainable code

```js
export default function Profile() {
    const [popup, setPopup] = useState(false)
    const [infoProvided, setInfoProvided] = useState(false)

    const updateStats = () => {
        setPopup(!popup)
        window.location.reload()
    }

    const handleClick = () => {
        setPopup(!popup)
        setInfoProvided(true)
    }

    return (
        <div className="Profile">
            <PopupButton onClick={handleClick} infoProvided={infoProvided} />
            {popup && <Popup onClick={() => updateStats()} />}
            <UserProfile />
            <Stats />
            <BarChartContainer />
        </div>
    )
}
```

## Authors

Initial Authors:

-   Adam Zdrzalka - [moderndayNeo](https://github.com/moderndayNeo)
-   Dan Arango - [Darango84](https://github.com/Darango84)
-   Minji Jeong - [casey-minzi](https://github.com/casey-minzi)
-   Ian Molocea - [marianmolocea](https://github.com/marianmolocea)
-   Panos Hapsides - [phapsides](https://github.com/phapsides)
-   Ebrima Conta - [ebrimaconta](https://github.com/ebrimaconta)

Continuing Author:

-   Adam Zdrzalka - [moderndayNeo](https://github.com/moderndayNeo)

Kodfit began as a team project for the Kodiri coding internship. At the conclusion of the internship the members of the group went on to other projects. For the following five weeks I continued working alone on the project as I enjoyed working on the app and it had a number of areas for improvement - notably new features, cleaning up the code, improving the layout for desktop users, fixing bugs and improving user functionality. Having completed those tasks, this is the final result.
