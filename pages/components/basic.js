import styles from '/styles/Home.module.css'

export function Gig(){
	return(
		<div className={styles.gig}>
						<i className="fi fi-rr-magic-wand"></i>
							<h3>Banner Design</h3>
						</div>
	)
} 
export function Banner(){
	return(
			<div className={styles.banners} id="banner">
					<h2>Anime Banner Design<i className="fi fi-rr-arrow-right"></i></h2>
					<div className={styles.bannerBody}>
					<div className={styles.banner}>
						<img/>
						<div className={styles.info}>
						
						</div>
					</div>
						<div className={styles.banner}>
						<img/>
						<div className={styles.info}>
						
						</div>
					</div>
					</div>
				</div>
	)
}