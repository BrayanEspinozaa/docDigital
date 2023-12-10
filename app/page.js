import styles from './page.module.css'
import { Header } from './components/Header/Header'
import { Offers } from './components/Offers/Offers'
import { Benefits } from './components/Benefits/Benefits'
import { Steps } from './components/Steps/Steps'
import { Footer } from './components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <Header />

        <Offers />

        <Benefits />

        <Steps />

        <Footer />
      </section>


    </main>
  )
}
