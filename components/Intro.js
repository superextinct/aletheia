import React, { Component, createRef } from "react"
import styles from "../styles/Intro.module.scss"
import AbstractFace from "./AbstractFace";

class Intro extends Component{

    constructor(props) {
        super(props);

        this.wrapper = createRef();
        this.portraits = createRef();
        this.stream = props.stream;
        this.stopCallback = props.stopCallback;
    }

    state = {
        activePane: 0,
    }

    componentDidMount() {
        console.log(this);
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount()  {
        console.log(document.body.style);
        document.body.style.overflow = "visible";
    }

    startInto = () => {
        this.setState({
            activePane: 1
        });

        window.setTimeout(() => {
            this.setState({activePane: 2});
        }, 5000);

        window.setTimeout(() => {
            this.setState({activePane: 3, showing: false});
            this.stopCallback();
        }, 10000);
    }

    render() {
        return (
            <div className={styles.wrapper} data-pane={this.state.activePane}>
                <div className={styles.pane} onClick={this.startInto}>
                    <div>
                        <h1>We’d like to see<br/>your beautiful face. </h1>
                        <p>Please grant access to your camera.<br/>We won’t store anything – pinky promise.</p>
                    </div>
                </div>
                <div className={styles.pane}>
                    <span className={styles.big}>
                        Imagine a future of <span>radical understanding</span>
                    </span>
                    <video className={styles.video} controls={false} loop={true} autoPlay={true} muted={true} playsInline={true} ref={this.portraits}>
                        <source src="/videos/portraits.mp4" type="video/mp4" />
                        <source src="/videos/portraits.webm" type="video/webm" />
                    </video>
                </div>

                <div className={styles.pane}>
                    {this.stream.current && this.state.activePane == 2 &&
                        <AbstractFace video={this.stream} />
                    }
                </div>

                <div className={styles.pane}>

                </div>
            </div>
        );
    }
}

export default Intro