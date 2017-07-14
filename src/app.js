import React from 'react';
import Button from './bootstrap/button.js';
export default class App extends React.Component{
    render() { 
        return <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage: 'url(img/countryside-2326787_1920.jpg)', color:'white'}} >
            <div className="container">
                <h1>What a beautiful piece of stuff</h1>
                <p>Eat the cheese</p>
                <p>
                    <Button className="btn-primary" href="http://www.google.co.uk" target="_blank" />
                    <Button className="btn-danger" target="_blank" />
                </p>
            </div>
        </div>;
    }

}