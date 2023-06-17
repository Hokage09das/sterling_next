"use client";

import React from "react";
// import { Layout } from "../../components/layout/Layout";

import { navigation } from "./constants";

import logo from "../../assets/images/sterling-white-logo.png";
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/insta.png";

import classes from "./footer.module.scss";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { Layout } from "@/components";
import Link from "next/link";

export const Footer = ({ className }) => {
	// const navigate = useNavigate();
	const goto = (path) => {
		redirect(path);
	};
	return (
		<footer className={`${className} ${classes.footer}`}>
			<Layout>
				<div className={classes.main_container}>
					<div className={classes.logo}>
						<Image
							src={logo}
							alt='logo'
						/>
					</div>
					<div>
						<h3 className={classes.h3}>Информация</h3>
						<ul className={classes.navigation}>
							{navigation.map((item) => {
								return (
									<Link
										key={item.title}
										href={item.path}
									>
										{item.title}
									</Link>
								);
							})}
						</ul>
					</div>
					<div>
						<h3>Контакты</h3>
						<ul
							style={{ display: "flex", flexDirection: "column", gap: "10px" }}
							className={classes.ul}
						>
							<li>Адрес: ул. Боконбаева 113</li>
							<li>
								<a
									href='mailto: sales@sterling.kg'
									className={classes.mail}
								>
									Почта: sales@sterling.kg
								</a>
							</li>
							<li style={{ display: "flex", gap: "10px" }}>
								Тел:
								<div>
									<div>0559 404 444</div>
									<div>0709 404 444</div>
								</div>
							</li>
						</ul>
					</div>
					<div className={classes.messenger_container}>
						<div className={classes.messenger_wrapper}>
							<a href='https://wa.me/+996559404444'>
								<Image
									src={whatsapp}
									alt=''
									className={classes.messenger}
								/>
							</a>
						</div>
						<div className={classes.messenger_wrapper}>
							<a href='https://www.instagram.com/sterling_development_kg/?igshid=MzRlODBiNWFlZA%3D%3D'>
								<Image
									src={instagram}
									alt=''
									className={classes.messenger}
								/>
							</a>
						</div>
					</div>
				</div>
			</Layout>
		</footer>
	);
};
