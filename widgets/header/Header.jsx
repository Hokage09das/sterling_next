"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { navbar } from "./constants";
import { BurgerMenu, Layout } from "@/components";
import logo from "@/assets/images/sterling-white-logo.png";

import styles from "./header.module.scss";

export const Header = () => {
	const [scroll, setScroll] = React.useState(false);
	const pathname = usePathname();
	const router = useRouter();

	const goTo = (path) => {
		router.push(path);
	};

	const handleScroll = () => {
		window.scrollY > 100 ? setScroll(true) : setScroll(false);
	};

	const path =
		pathname === "/"
			? scroll
				? styles.header_fixed
				: styles.main_header_style
			: styles.header_fixed;

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={path}>
			<Layout>
				<div className={styles.header}>
					<div
						className={styles.logo}
						onClick={() => goTo("/")}
					>
						<Image
							className={styles.logo_img}
							src={logo}
							alt='logo'
						/>
					</div>
					<nav className={styles.navigation}>
						{navbar.map((item) => {
							return (
								<Link
									className={styles.navigation_item}
									key={item.id}
									href={item.path}
								>
									{item.title}
								</Link>
							);
						})}
					</nav>
					<div className={styles.burger_menu}>
						<BurgerMenu />
					</div>
				</div>
			</Layout>
		</header>
	);
};
