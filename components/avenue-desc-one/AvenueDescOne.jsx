import React from "react";
import Image from "next/image";

import { AvenueDesc } from "../avenue-desc/AvenueDesc";
import listBlueCircle from "@/assets/icons/list_item_blue_circle.svg";

import avenue_slider_image from "../../assets/images/avenue_slider_image.png";

import classes from "./avenue-desc-one.module.scss";

const details = [
	{
		id: 1,
		text: "15 этажей, 2 подъезда",
	},
	{
		id: 2,
		text: "Площади квартир: от 55 м2 до 350 м2",
	},
	{
		id: 3,
		text: "По 2 лифта в каждом подъезде",
	},
	{
		id: 4,
		text: "2 уровня подземного паркинга",
	},
	{
		id: 5,
		text: "Озеленённое дворовое пространство",
	},
];

export const AvenueDescOne = () => {
	return (
		<AvenueDesc>
			<div
				className={classes.container}
				style={{ backgroundImage: `url(${avenue_slider_image.src})` }}
			>
				<div className={classes.left}>
					<h2>ЖИЛОЙ ДОМ</h2>
					<h2 className={classes.title}>“ЭРКИНДИК АВЕНЮ”</h2>
					<p>В ДЕТАЛЯХ:</p>
					<ul>
						{details.map((detail) => (
							<li key={detail.id}>
								<Image
									src={listBlueCircle}
									alt='circle'
								/>{" "}
								<span>{detail.text}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</AvenueDesc>
	);
};
