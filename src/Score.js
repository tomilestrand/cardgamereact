import React, {Component} from "react";

class Score extends Component {
    render() {
        return (
            <div>Score: {this.props.text}</div>
        )
    }
}

export default Score;