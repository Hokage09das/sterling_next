"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { burderNavbar } from "./constants";
import classes from "./burger_menu.module.scss";
import logo from "../../assets/images/logo.png";
import burger from "@/assets/icons/burger_icon.svg";

export const BurgerMenu = () => {
	const [isBurgerVisible, setIsBurgerVisible] = useState(false);

	const toggleBergerMenu = () => {
		setIsBurgerVisible((prev) => !prev);
	};

	return (
		<div>
			{isBurgerVisible ? (
				<div
					onClick={toggleBergerMenu}
					className={classes.burger_menu_active}
				>
					<div className={classes.logo}>
						<Image
							alt='logo_bergerMenu'
							src={logo}
						/>
					</div>
					{burderNavbar.map((el) => (
						<Link
							key={el.id}
							href={el.path}
						>
							{el.title}
						</Link>
					))}
				</div>
			) : (
				<div onClick={toggleBergerMenu}>
					<Image
						src={burger}
						alt='burgerMenu'
						width='30px'
						height='30px'
					/>
				</div>
			)}
		</div>
	);
};
