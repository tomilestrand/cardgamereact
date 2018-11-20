import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
    render() {
        return(
            <img src={this.props.src} className="card"></img>
        )
    }
}

export default Card;