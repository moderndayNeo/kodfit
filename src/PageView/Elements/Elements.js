import React from 'react';

export default function Elements() {
    return (
        <div className="container">
            <div className="grid">
                <h1 className="block">Header 1</h1>
                <h2 className="block">Header 2</h2>
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
                    <a className="" href="/">Simple Link</a>
                    <a className="button primary" href="/">Primary</a>
                    <a className="button secondary" href="/">Secondary</a>
                    <a className="button success" href="/">Success</a>
                    <a className="button alert" href="/">Alert</a>
                </div>
                <div>
                    <a className="" href="/">Simple Link</a>
                    <a className="button primary rounded-capsule" href="/">Primary</a>
                    <a className="button secondary rounded-capsule" href="/">Secondary</a>
                    <a className="button success rounded-capsule" href="/">Success</a>
                    <a className="button alert rounded-capsule" href="/">Alert</a>
                </div> 
            </div>
            <div className="grid">
                <h1>need to fix this </h1>
            </div>
        </div>
    )
}
