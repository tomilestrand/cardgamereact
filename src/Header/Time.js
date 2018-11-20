import React, {Component} from "react";

class Time extends Component {
        render (){
            return(
                <time>Time: {this.props.text}</time>
            )
        }
}

export default Time;