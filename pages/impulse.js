import Head from "next/head"
import home from "../styles/Home.module.scss"
import styles from "../styles/Page.module.scss"
import Navigation from "../components/Navigation"

function Impulse() {
    return (
        <div className={home.container}>
            <Head>
                <title>Aletheia – Impulse</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            <main className={home.main}>
                <div className={styles.hero}>
                    {/* <video loop={true} muted={true} playsInline={true} autoPlay={true}>
                        <source src="/videos/impulse.mp4" type="video/mp4" />
                        <source src="/videos/impulse.webm" type="video/webm" />
                    </video> */}

                    <img src="/images/rendering-2.png" />
                    <h1 className={styles.title}>
                        Aletheia Impulse
                    </h1>
                </div>


            </main>
        </div>
    );
}

export default Impulse