import Head from "next/head"
import Gradient from "../components/Gradient"
import home from "../styles/Home.module.scss"
import styles from "../styles/Page.module.scss"

function Vision() {
    return (
        <div className={home.container}>
            <Head>
                <title>Aletheia for Educators</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <main className={home.main}>
                <div className={styles.hero}>
                    <video loop={true} muted={true} playsInline={true} autoPlay={true} disableRemotePlayback={true} style={{mixBlendMode: "multiply"}}>
                        <source src="/videos/education.webm" type="video/webm" />
                        <source src="/videos/education.mp4" type="video/mp4" />
                    </video>
                    <h1 className={styles.title}>
                        Education reimagined. 
                    </h1>
                </div>

                <section>
                    <h1>Instant feedback to keep your students active &amp; engaged.</h1>
                    <p>Remote teaching can feel — well, remote. Instructors are separated from their learners in time and distance. With digital education on the rise, Aletheia provides a system to gather feedback instantenously and in turn enabling educators to keep their students active and engaged.</p>
                </section>

                <div className={styles.iconGrid}>
                    <div>
                        <img src="/icons/avatar.png" />
                        <h2>Unobstrive</h2>
                        <p>Video meetings can feel quite obstrusive for students. Aletheia allows for active participation without privacy instrusion.</p>
                    </div>
                    <div>
                        <img src="/icons/energy.png" />
                        <h2>Observant</h2>
                        <p>Am I being understood? With Aletheia, you always know if your students can follow you along.</p>
                    </div>
                    <div>
                        <img src="/icons/creativity.png" />
                        <h2>Stress-free</h2>
                        <p>By sharing the emotional state, Aletheia will help you lower the stress level for you and your students.</p>
                    </div>
                </div>

                <section>
                    <h1>Plays well<br/>with others.</h1>
                    <img src="/images/education_apps.png" />
                    <p>We know that you have already found the perfect working tools for you. That's why Aletheia integrates perfectly into your toolset and beyond that into your individual workflow.</p>
                    <p>No matter what video conferencing software you use or if you want to integrate Aletheia into your weekly schedule. Because we believe that your needs are the most important thing to take care of.</p>
                </section>

                <section>
                    <h1>Who‘s paying attention now?</h1>
                    <p className={styles.left}>Aletheia not only provides an in-depth look at the situation at hand, but also lets educators review sessions. With a detailed overview of session progress, you get the chance to maximize the quality of your teaching and better meet the individual needs of your students.</p>
                    <img src="/svg/data.svg" />
                </section>

                <div className={styles.getInTouch}>
                    <h1>
                        Get started using Aletheia<br/>
                        within your school
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

export default Vision