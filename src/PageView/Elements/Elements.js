import React from 'react';
import { Link } from 'react-router-dom';

export default function Elements() {
    return (
        <div className="container">
            <div className="grid">
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
            </div>
            <div className="grid">
                <p>
                    Lorem Ipsum is <a href="/">simply</a> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="grid">
                <h1 className="separator-left">Left Separator</h1>
                <h1 className="separator-center">Center Separator</h1>
                <h1 className="separator-right">Right Separator</h1>
            </div>
            <div className="grid">
                <div>
                    <Link className="" to="/">Simple Link</Link>
                    <button className="button primary" >
                        <Link to="/">Primary</Link>
                    </button>
                    <button className="button secondary" >
                        <Link to="/">Secondary</Link>
                    </button>
                    <button className="button success" >
                        <Link to="/">Success</Link>
                    </button>
                    <button className="button alert" >
                        <Link to="/">Alert</Link>
                    </button>
                    <button className="button btn-transparent">
                        <Link to="/">Transparent</Link>
                    </button>
                </div>
                <div>
                    <Link className="rounded-capsule" to="/">Simple Link</Link>
                    <button className="button primary rounded-capsule">
                        <Link to="/">Primary</Link>
                    </button>
                    <button className="button secondary rounded-capsule">
                        <Link to="/">Secondary</Link>
                    </button>
                    <button className="button success rounded-capsule">
                        <Link to="/">Success</Link>
                    </button>
                    <button className="button alert rounded-capsule">
                        <Link to="/">Alert</Link>
                    </button>
                    <button className="button btn-transparent rounded-capsule">
                        <Link to="/">Transparent</Link>
                    </button>
                </div> 
            </div>
        </div>
    )
}
