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

                <div className={home.pane}>
                    <h3>What others are saying</h3>
                    <div className={styles.testimonial}>
                        <blockquote>
                            <p>“If we had had the system from the Aletheia company during the crisis, many things would have been better.”</p>
                        </blockquote>

                        <div className={styles.block}>
                            <img src="/images/person3.jpg" alt="Katerina D." />
                            <aside>
                                <h4>Katerina D.</h4>
                                <p>
                                    Minister of Education
                                </p>
                            </aside>

                            <p>In our history, there have been few moments that have impacted the field of education on a national level as much as the Covid 19 crisis a few years ago. We learned a lot after that, but I have to admit that it's companies like Aletheia that are making the difference today. The use of emotional level in homeschool programs has had a tremendous impact on the quality of learning. You just have to look at the numbers over the last few years.</p>
                        </div>
                    </div>

                    <div className={styles.testimonial}>
                        <blockquote>
                            <p>“It's so much easier now to understand my students' needs and improve the way I teach.”</p>
                        </blockquote>

                        <div className={styles.block}>
                            <img src="/images/person4.jpg" alt="Eric L." />
                            <aside>
                                <h4>Eric L.</h4>
                                <p>
                                    Professor at Cornell University, Ithaca
                                </p>
                            </aside>

                            <p>In recent years, we've been getting more and more distance students, which has made it harder for me as a professor to interact with them. Since Cornell University implemented the new Aletheia system for faculty and students, things have really changed. I have never had so much insight into my students' behavior, which gives me the opportunity to improve as a teacher.</p>
                        </div>
                    </div>
                </div>

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