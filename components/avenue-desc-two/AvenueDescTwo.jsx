import React from "react";
import { AvenueDesc } from "../avenue-desc/AvenueDesc";

import AvenueIcon1 from "../../assets/icons/avenue_icon_1.svg";
import AvenueIcon2 from "../../assets/icons/avenue_icon_2.svg";
import AvenueIcon3 from "../../assets/icons/avenue_icon_3.svg";
import AvenueIcon4 from "../../assets/icons/avenue_icon_4.svg";
import AvenueIcon5 from "../../assets/icons/avenue_icon_5.svg";
import AvenueIcon6 from "../../assets/icons/avenue_icon_6.svg";
import AvenueIcon7 from "../../assets/icons/avenue_icon_7.svg";
import AvenueIcon8 from "../../assets/icons/avenue_icon_8.svg";
import AvenueIcon9 from "../../assets/icons/avenue_icon_9.svg";
import AvenueIcon10 from "../../assets/icons/avenue_icon_10.svg";

import classes from "./style.module.scss";
import Image from "next/image";

const details1 = [
	{
		id: 1,
		text: "Бульвар Эркиндик",
		icon: AvenueIcon1,
	},
	{
		id: 2,
		text: " Большой выбор гос. и частных детских садов",
		icon: AvenueIcon2,
	},
	{
		id: 3,
		text: "АУВК школа-гимназия №6 и средняя школа-лицей №28",
		icon: AvenueIcon3,
	},
	{
		id: 4,
		text: " Медицинские центры, клиники, стоматологии",
		icon: AvenueIcon4,
	},
	{
		id: 5,
		text: "Культурно-исторические достопримечательности",
		icon: AvenueIcon5,
	},
];

const details2 = [
	{
		id: 6,
		text: "15+ кофеен и ресторанов",
		icon: AvenueIcon6,
	},
	{
		id: 7,
		text: "5+ банков",
		icon: AvenueIcon7,
	},
	{
		id: 8,
		text: "9+ магазинов и супермаркетов",
		icon: AvenueIcon8,
	},
	{
		id: 9,
		text: "5+ салонов красоты",
		icon: AvenueIcon9,
	},
	{
		id: 10,
		text: "9+ бутиков и магазинов одежды",
		icon: AvenueIcon10,
	},
];

export const AvenueDescTwo = () => {
	return (
		<AvenueDesc>
			<div className={classes.container}>
				<div className={classes.left}>
					<p>
						Жилой дом “Эркиндик авеню” расположен на пересечении улиц Раззакова
						и Чуйкова
					</p>
					<h2>в Золотом квадрате</h2>
					<p>
						<span>100м</span> от Бульвара Эркиндик (парк имени Дзержинского) в
						тихом уютном уголке <br />
						Это дом премиум-класса,{" "}
						<span>новейший формат современного жилья</span>
					</p>

					<div>
						<p className={classes.list_title}>В шаговой доступности:</p>
						<div className={classes.details}>
							<ul>
								{details1.map((item) => (
									<li key={item.id}>
										<Image
											src={item.icon}
											alt={item.text}
										/>
										{item.text}
									</li>
								))}
							</ul>
							<ul>
								{details2.map((item) => (
									<li key={item.id}>
										<Image
											src={item.icon}
											alt={item.text}
										/>
										{item.text}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className={classes.right}>
					{/*<img*/}
					{/*  src={avenue_map_image}*/}
					{/*  alt='building on the map'*/}
					{/*/>*/}
				</div>
			</div>
		</AvenueDesc>
	);
};
