import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/Header'
import { Offers } from './components/Offers'
import { Benefits } from './components/Benefits'
import { Steps } from './components/Steps'
import { Footer } from './components/Footer'

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
