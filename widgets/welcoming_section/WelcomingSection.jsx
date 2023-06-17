"use client";
import Image from "next/image";

import welcoming_photo from "../../assets/images/erkindik.png";
import welcoming_photo_2 from "../../assets/images/carusel1.jpg";

import classes from "./welcoming_section.module.scss";

export const WelcomingSection = () => {
	return (
		<section className={classes.welcoming_wrapper}>
			<div className={classes.img_container}>
				<Image
					src={welcoming_photo}
					alt='erkingik'
				/>
				<div className={classes.border}></div>
			</div>
			<div className={classes.img}>
				<Image
					src={welcoming_photo_2}
					alt=''
				/>
			</div>
		</section>
	);
};
