import React, { Component } from "react"

class Webcam extends Component {
    constructor(props) {
        super(props);
        this.ref = props.ref;
    }

    render() {
        return (
            <video ref={this.ref} autoPlay={true} muted={true} playsInline={true} style={{
                position: "absolute",
                left: 0,
                top: 0,
                visibility: "hiden"
            }} />
        );
    }
}

export default Webcam