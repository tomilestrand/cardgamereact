import React, {Component} from "react";
import Card from "./Card.js";
import "./PlayingArea.css";


class PlayingArea extends Component {
    render () {
        return(
            <div id="playarea">

            <Card></Card>
            <Card cardcode="AS"></Card>
            <Card cardcode="AS"></Card>
            <Card cardcode="AS"></Card>
            </div>
           
        )
    }
}

export default PlayingArea;