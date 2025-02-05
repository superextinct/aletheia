import Head from "next/head"
import Gradient from "../components/Gradient"
import home from "../styles/Home.module.scss"
import styles from "../styles/Page.module.scss"

function Business() {
    return (
        <div className={home.container}>
            <Head>
                <title>Aletheia for Businesses</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <main className={home.main}>
                <div className={styles.hero}>
                    <video loop={true} muted={true} playsInline={true} autoPlay={true} disableRemotePlayback={true} style={{mixBlendMode: "multiply"}}>
                        <source src="/videos/impulse.webm" type="video/webm" />
                        <source src="/videos/impulse.mp4" type="video/mp4" />
                    </video>
                    <h1 className={styles.title}>
                        Smells Like Team Spirit. 
                    </h1>
                </div>

                <section>
                    <h1>Making your check-ins redundant.</h1>
                    <p>Controlling your employees is a thing of the past. With Aletheia, you will always know how your company or team‘s well-being is doing. Because we believe that good vibes will bring your organization‘s productivity level to unseen standards.</p>
                </section>

                <div className={styles.iconGrid}>
                    <div>
                        <img src="/icons/meeting.png" />
                        <h2>Clear</h2>
                        <p>Stop beating around the bush — fosters honest communication that get’s straight to the point.</p>
                    </div>

                    <div>
                        <img src="/icons/team.png" />
                        <h2>Managable</h2>
                        <p>Keep track of your team anywhere and anytime. Paving the way for a truly remote working environment.</p>
                    </div>

                    <div>
                        <img src="/icons/record.png" />
                        <h2>Attentive</h2>
                        <p>Making that yearly personell review obsolete: Know how your employees are and what you think of them. </p>
                    </div>
                </div>

                <div className="grid-2">
                    <div className="col text">
                        <h1>Great Company</h1>
                        <p>Bring your remote workers right back into the office: Aletheia Impulse works well together. We know how important company culture is to you and your business, and we've made it our mission to help you address the challenges of remote employees. All for the sole reason of increasing your attractiveness as an employer. So are you ready to differentiate yourself from your competitors by setting new standards?</p>
                    </div>
                    <div className="col">
                        <img src="/images/business.jpg" />
                    </div>
                </div>

                <div className={home.pane}>
                    <h3>What others are saying</h3>
                    <div className={styles.testimonial}>
                        <blockquote>
                            <p>“We would have never thought that something so simple has such a big impact on the way people work together.”</p>
                        </blockquote>

                        <div className={styles.block}>
                            <img src="/images/person1.jpg" alt="Sebastian B." />
                            <aside>
                                <h4>Sebastian B.</h4>
                                <p>
                                    Head of HR
                                    Global Tier-One Supplier
                                </p>
                            </aside>

                            <p>In the last 30 years in the field of HR I have already seen a lot of different tools to increase the work situation working in intercultural teams. Most of the products did not bring the result they promised. Aletheia blew our minds when we first tried it and I am glad we got the chance to be one of the first companies to use this awesome system. It really makes a difference in they way our employees work together, you can literally feel it.</p>
                        </div>
                    </div>

                    <div className={styles.testimonial}>
                        <blockquote>
                            <p>“Finding the right people with the needed skillset would be almost impossible without Aletheia.”</p>
                        </blockquote>

                        <div className={styles.block}>
                            <img src="/images/person2.jpg" alt="Rachel F." />
                            <aside>
                                <h4>Rachel F.</h4>
                                <p>
                                    CEO and Founder Start-Up Fem Tech
                                </p>
                            </aside>

                            <p>What do you have to offer as a new player in the market of Fem Tech? That‘s probably the hardest question to answer because there are so many companies in the whole Tech Industry to choose from. Me as a founder I am very happy, that we can easily offer remote contracts and still have a strong family feeling. Aletheia really makes difference here and I think thats why people in the industry see us as an attractive employer.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.getInTouch}>
                    <h1>
                        Get started using Aletheia<br/>
                        within your business
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

export default Business