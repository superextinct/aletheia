import React, { createRef } from "react";
import Head from "next/head"
import * as Icons from "react-feather"
import Gradient from "../components/Gradient"
import home from "../styles/Home.module.scss"
import styles from "../styles/Page.module.scss"
import vision from "../styles/Vision.module.scss"

class Vision extends React.Component {
    constructor(props) {
        super(props);
        
        this.video = createRef();
        this.interactionVideo = createRef();
    }

    state = {
        interactionFocus: 1,
        accordionFocus: 1,
    }

    loopThresholds = [5, 9, 12];
    
    changePlaybackRate = () => {
        this.video.current.playbackRate = 0.3;
    }
    
    timeUpdate = () => {
        console.log(this.interactionVideo.current.currentTime);

        if (this.interactionVideo.current.currentTime > this.loopThresholds[this.state.interactionFocus - 1]) {
            this.interactionVideo.current.currentTime = this.loopThresholds[this.state.interactionFocus - 2] ?? 0;
        }
    }

    render() {
        return (
            <div className={home.container}>
                <Head>
                    <title>Aletheia — Vision</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
                </Head>

                <main className={home.main}>
                    <div className={styles.hero}>
                        <video loop={true} muted={true} playsInline={true} autoPlay={true} disableRemotePlayback={true} onPlay={this.changePlaybackRate} ref={this.video} style={{mixBlendMode: "luminosity"}}>
                            <source src="/videos/portraits_alternating.webm" type="video/webm" />
                            <source src="/videos/portraits_alternating.mp4" type="video/mp4" />
                        </video>
                        <h1 className={styles.title}>
                            We believe in the power of emotion.
                        </h1>
                    </div>

                    <section>
                        <h1>Simplicity in complexity.</h1>
                        <p>
                            Everyday life is full of chaos, moments, emotions and contradictions. As a flawed species, humans have trouble perceiving others outside of a shared physical space. This only gets amplified in virtual spaces, where we fail to recognize our peers in their entirety.
                        </p>

                        <p>
                            From a pragmatic point of view, we aim to reduce complexity in virtual communication. Our approach to cognitive semiotics places emphasis on the design, objectual as well as mental representation of emotion. 
                        </p>
                        <div className={styles.accordion}>
                            <ul>
                                <li
                                    className={this.state.accordionFocus == 1 ? styles.active : ""}
                                    onClick={() => this.setState({accordionFocus: 1}) }
                                >
                                    Aletheia App
                                </li>
                                <li
                                    className={this.state.accordionFocus == 2 ? styles.active : ""}
                                    onClick={() => this.setState({accordionFocus: 2}) }
                                >
                                    Aletheia AI
                                </li>
                                <li
                                    className={this.state.accordionFocus == 3 ? styles.active : ""}
                                    onClick={() => this.setState({accordionFocus: 3}) }
                                >
                                    Aletheia Impulse
                                </li>
                            </ul>
                            <div className={styles.drawer}>
                                <div aria-expanded={this.state.accordionFocus == 1}>
                                    <div>
                                        <h4>Your headquarter</h4>
                                        <p>With the Aletheia App you’re in full control of the entire system. Manage contacts create groups for your personal emotional connection.</p>
                                    </div>
                                    <div>
                                        <h4>Full control over your emotions</h4>
                                        <p>There is nothing more important to us than your privacy. You are in charge and decide freely which depth of emotional level you want to share with groups or specific persons.</p>
                                    </div>
                                    <div>
                                        <h4>Recap meetings with data visualisation</h4>
                                        <p>We want to support you and your team getting better in your individual way of communication. That’s why we provide you with detailed insights of all your meetings directly in your personal app.</p>
                                    </div>
                                </div>
                                <div aria-expanded={this.state.accordionFocus == 2}>
                                    <div>
                                        <h4>Capture your emotions through Emotive Intelligence</h4>
                                        <p>Our intelligent software will track your emotions with your permission. The longer you and your team will use Aletheia, the better she will understand your individual needs.</p>
                                    </div>
                                    <div>
                                        <h4>Aletheia AI</h4>
                                        <p>No matter which other software you are using, Aletheia adapts and integrates into your existing workflow. You can easily have Aletheia communicate with other applications to maximize the level auf automation.</p>
                                    </div>
                                </div>
                                <div aria-expanded={this.state.accordionFocus == 3}>
                                    <div>
                                        <h4>Reproduction of emotions through visual light impulses</h4>
                                        <p>Aletheia Impulse will reproduce detected emotions using calm and restrained visual feedback directly on your desk.</p>
                                    </div>
                                    <div>
                                        <h4>Interaction with your colleagues</h4>
                                        <p>The capacitive touch display lets you interact with friends and colleagues through tap and pinch gestures. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={styles.iconGrid}>
                        <div>
                            <img src="/icons/ai.png" />
                            <h2>Power of AI</h2>
                            <p>Harnessing the power of affective computing for a better understanding in a remote world.</p>
                        </div>
                        
                        <div>
                            <img src="/icons/emotion.png" />
                            <h2>Expressiveness</h2>
                            <p>Striving for emotional understanding in communication, giving everyone a voice.</p>
                        </div>

                        <div>
                            <img src="/icons/cooperative.png" />
                            <h2>Cooperation</h2>
                            <p>As social individuals, humans excel in a group setting. Aletheia has cooperation built-in.</p>
                        </div>
                    </div>

                    <section>
                        <h1>A remote yet<br/>near future.</h1>
                        <img src="/icons/future.svg" />
                        <p>
                            What differentiates the living from the nonliving? What is life? These are perennial questions that have occupied minds since the beginning of cultures. The search for a clear demarcation between animate and inanimate is a reflection of the human tendency to create borders, not only physical but also conceptual. 
                        </p>

                        <p>
                            With artificial intelligence on the rise and an increasingly virtual habitat, Aletheia has made it its mission to search beyond dichotomies and explore the fuzzy border between animate and inanimate matter.
                        </p>

                        <p>
                            <button className="button">
                                Join the cause
                            </button>
                        </p>
                    </section>

                    <div className="grid-2">
                        <div className="col text">
                            <h1>Restrained design with strong impact.</h1>
                            <p>
                                Staying in touch has never looked this good: Aletheia Impulse is designed as an extension of your desk, you can also mount it on a wall for an even subtler integration. The visual reproduction of emotions through radiating light impulses have a calming effect while still being highly effective.
                            </p>
                        </div>
                        <div className="col">
                            <video autoPlay={true} muted={true} playsInline={true} disableRemotePlayback={true}>
                                <source src="/videos/desk.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    
                    {/* <div className={home.pane}>
                        <picture>
                            <source srcSet="/images/rendering.webp" type="image/webp" />
                            <source srcSet="/images/rendering.jpg" type="image/jpeg" />
                            <img src="/images/rendering.jpg" />
                        </picture>
                    </div> */}

                    <div className={vision.interaction}>
                        <video className={vision.video} loop={true} autoPlay={true} playsInline={true} muted={true} disableRemotePlayback={true} ref={this.interactionVideo} onTimeUpdate={this.timeUpdate}>
                            <source src="/videos/interaction.webm" type="video/webm" />
                            <source src="/videos/interaction.mp4" type="video/mp4" />
                        </video>
                        <div className={vision.aside}>
                            <h1>Smart Touch</h1>
                            <ul>
                                <li
                                    aria-expanded={this.state.interactionFocus == 1}
                                    onClick={() => this.setState({ interactionFocus: 1} )}
                                >
                                    <p>
                                        <Icons.Square size={36} />
                                        Joining
                                    </p>

                                    <p>
                                        Let others know you’re there simply by tapping on the surface. Emotion recognition is now active.
                                    </p>
                                </li>
                                <li
                                    aria-expanded={this.state.interactionFocus == 2}
                                    onClick={() => this.setState({ interactionFocus: 2} )}
                                >
                                    <p>
                                        <Icons.Grid size={36} />
                                        Group Spaces
                                    </p>
                                    
                                    <p>
                                        Switch to an overview of all spaces by pinching inwards. To focus on a space, simply tap on it.
                                    </p>
                                </li>
                                <li
                                    aria-expanded={this.state.interactionFocus == 3}
                                    onClick={() => this.setState({ interactionFocus: 3} )}
                                >
                                    <p>
                                        <Icons.Circle size={36} />
                                        Interaction
                                    </p>

                                    <p>
                                        Be even more expressive: Swipe your finger to make yourself seen and gain attention.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.packaging}>

                    </div>

                    <div className={styles.getInTouch}>
                        <h1>
                            Get started using Aletheia<br/>
                            within your organisation
                        </h1>
                        <button className="button big">
                            Get in touch with our team
                        </button>
                    </div>
                </main>

                <footer className="footer">
                    <Gradient />
                </footer>
            </div>
        )
    }
}

export default Vision