import React, { Component } from "react"
import Head from "next/head"
import Link from "next/link";
import * as Icons from "react-feather"
import { Context } from "../components/context"
import AbstractFace from "../components/AbstractFace"
import Gradient from "../components/Gradient"
import Intro from "../components/Intro"
import Navigation from "../components/Navigation"
// import Webcam from "../components/Webcam"
import styles from "../styles/Home.module.scss"

class Home extends Component {
  constructor(props) {
    super(props);

    this.stream = React.createRef();
    this.videoEl = React.createRef();
  }

  static contextType = Context

  state = {
    videoPlaying: false,
    webcamActive: false,
  }

  initVideo = () => {
    const options = {
      video: true,
      audio: false
    };

    navigator.mediaDevices.getUserMedia(options)
      .then(stream => {
        this.stream.current.srcObject = stream;
      })
      .catch(error => {
        console.error(error);
      })
  }

  playVideo = () => {
    this.setState({ videoPlaying: true });
    window.scrollTo({ top: this.videoEl.current.offsetTop, behavior: "smooth" });
    document.body.style.overflow = "hidden";

    window.setTimeout( () => {
      this.videoEl.current.querySelector("video").play();
    }, 800);
  }

  exitVideo = () => {
    this.setState({ videoPlaying: false });
    document.body.style.overflow = "scroll";

    this.videoEl.current.querySelector("video").pause();
  }


  componentDidMount() {
    if (this.context.intro)
      this.initVideo();
  }

  stopWebcam = () => {
    this.stream.current.srcObject = null;

    this.context.intro = false;

    this.setState({
      introActive: false
    });
  }

  render() {
    return (
      <div className={styles.container} data-video={this.state.videoPlaying}>
        <Head>
          <title>Aletheia</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </Head>

        {/* <Navigation isVisible={!this.state.videoPlaying} /> */}

        { this.context.intro &&
          <Intro stream={this.stream} stopCallback={this.stopWebcam} />
        }

        <main className={styles.main}>
          <video ref={this.stream} autoPlay={true} muted={true} playsInline={true} style={{
                position: "absolute",
                left: 0,
                top: 0,
                visibility: "hidden"
            }} />
          {/* <AbstractFace video={this.stream} /> */}

          <div className={styles.pane}>
            <Gradient />
            <h1 className={styles.title}>Aletheia</h1>
          </div>

          <div className={styles.pane} ref={this.videoEl}>
            <div className={styles.video} data-playing={this.state.videoPlaying}>
              <video autoPlay={false} playsInline={true} poster="/images/rendering-2.png">
                <source src="/videos/explainer.webm" type="video/webm" />
                <source src="/videos/explainer.mp4" type="video/mp4" />
              </video>
              <div className={styles.inner}>
                <p className={styles.teaser}>
                  Aletheia fosters understanding through emotions.
                </p>

                <button className="button" onClick={this.playVideo}>
                  <Icons.Play size={16} />
                  Watch how it works
                </button>
              </div>
              <div className={styles.close} onClick={this.exitVideo}>
                <Icons.X size={24} color="#fff" />
              </div>
            </div>
          </div>

          <section>
            <h1>Empowering human communication in the digital age.</h1>
            <p>Communication has become an important part of life. In digital communication however, the subtleties of human interaction are often being omitted. The world is changing so fast and it seems like we humans have lost our ability to connect with people.  Our product helps you in understanding each other.  We believe in the power of raw emotions that connects people and organisations.</p>
            <p>
              <Link href="/vision">
                <a className="button">
                  Explore our vision
                </a>
              </Link>
            </p>
          </section>

          {/* <div className="imgcol">
            <div className="img">
              <img src="/images/business.jpg" />
            </div>
            <div className="text">
            <h1>Bridging the Remote Work Gap</h1>
              <p>When working remotely still feels like being at the office.</p>
            </div>
          </div> */}

          <div className="grid-2">
            <div className="col">
              <img src="/images/business.jpg"/>
            </div>
            <div className="col text">
              <h1>Bridging the Remote Work Gap</h1>
              <p>When working remotely still feels like being in the office: Aletheia acts as a link between you and your employees by bridging the gap between office and remote work. Lead your organization in new and flexible ways.</p>

              <Link href="/business">
                <a className="button">
                  Learn more
                </a>
              </Link>
            </div>
          </div>

          <div className="grid-2">
            <div className="col text">
              <h1>Education the 21st-century way</h1>
              <p>The places of learning have changed substantially, and so has the way we learn. With teaching staff facing the difficulties of distance learning, Aletheia provides a way to better understand your students on an emotional level, making education feel humane again.</p>

              <Link href="/education">
                <a className="button">
                  Learn more
                </a>
              </Link>
            </div>
            <div className="col">
              <img src="/images/education.jpg" />
            </div>
          </div>

          <div className="grid-2">
            <div className="col">
              <img src="/images/home.jpg" />
            </div>

            <div className="col text">
              <h1>Coming soon: Aletheia for Families</h1>
              <p>We’re happy to announce a new product line for strong-knit families: Staying in touch has never been this easy. Not only knowing <i>where</i> but <i>how</i> your kids are – anytime.</p>

              <a className="button">
                Get notified
              </a>

            </div>
          </div>

          <div className={styles.pane} id="press">
            <h3>News &amp; Press releases</h3>
            <div className="block-wrapper">
              <article className="block">
                <header>
                  <span>
                    <Icons.File size={16} />
                        Press release
                      </span>
                  <time>
                    January 3rd 2022
                      </time>
                  <h2>Honestly — We’re all about privacy.</h2>
                </header>
                <p>Following the accusations by Gizmodo, we’d like to make a comprehensive statementabout our privacy guidelines and the steps we are taking to enforce these every day.</p>
                <footer>
                  <Icons.ArrowDownRight size={48} />
                </footer>
              </article>

              <article className="block">
                <header>
                  <span>
                    <Icons.File size={16} />
                        Newsroom
                      </span>
                  <time>
                    December 18th 2021
                      </time>
                  <h2>Changing the game one step at a time.</h2>
                </header>
                <p>What developments are to be expected for 2021? How reliable are forecasts and how should businesses best position themselves against this background of uncertainty?</p>
                <footer>
                  <Icons.ArrowDownRight size={48} />
                </footer>
              </article>

              <article className="block">
                <header>
                  <span>
                    <Icons.File size={16} />
                        Press release
                      </span>
                  <time>
                    November 25th 2021
                      </time>
                  <h2>Aletheia secures $8m in private funding.</h2>
                </header>
                <p>After a year that saw 160 percent growth in our service usage, we are proud to announce another $8m of funding from our shareholders, now valuing Aletha at $24m.</p>
                <footer>
                  <Icons.ArrowDownRight size={48} />
                </footer>
              </article>
            </div>
          </div>

          <div className={styles.paneHAuto}>
            <h3>Careers at Aletheia</h3>
            <div className={styles.jobs}>
              <h1>
                Join our family of passionate people.
              </h1>
              <ul>
                <li>
                  Product Ambassador
                  <Icons.ArrowRight size={36}/>
                </li>
                <li>
                  Consultant Information Security &amp; Privacy 
                  <Icons.ArrowRight size={36}/>
                </li>
                <li>
                  Senior Data Scientist
                  <Icons.ArrowRight size={36}/>
                </li>
              </ul>
            </div>
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
    );
  }
}

export default Home

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>


//       <main className={styles.main}>
//         <Webcam ref=
//         <AbstractFace />
//       </main>
//     </div>
//   )
// }
