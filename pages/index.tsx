import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Gig, Banner} from './components/basic'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
			<nav>
				<h2>Creative Design</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
				<li>
          <a href="/contact">Contact</a>
        </li>
				<li>
          <a href="/contact">Contact</a>
        </li>
				<li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
			</nav>
				<div className={styles.selection}>
					<li><a href="#banner">Banner Designs</a></li>
					<li><a>Web Designs</a></li>
					<li><a>Banner Designs</a></li>
					<li><a>Banner Designs</a></li>
				</div>
				<div className={styles.hero}>
				<span><h2>Welcome Back</h2><p>Feel free to look around and contact us anytime</p><a>Make a order</a></span>
					<div className={styles.box1}>
					<h2>Check out our Gigs on Fiverr!</h2>
						<div className={styles.gigs}>
						<Gig/>
							<Gig/>
						</div>
					</div>
				</div>
				<Banner/>
				<Banner/>
			</main>

     <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
