import Image from "next/image";

import ListBlueCircle from "@/assets/icons/list_item_blue_circle.svg";

import styles from "./aparment_item.module.scss";

export const ApartmentItem = ({
	img,
	desc,
	area,
	holl,
	subImg,
	bg_image,
	loggia,
	kitchen,
	bedroom,
	bathroom,
	terrace,
	wardrobe,
	toilet,
	kabinet,
	planning,
	number,
	countOfFloor,
	toiletSecond,
	loggiaSecond,
	loggiaThird,
	bedroomSecond,
	bedroomThird,
	wardrobeSecond,
	wardrobeThird,
	bathroomSecond,
	areaOfFloor,
}) => {
	return (
		<div className={styles.aparment_item}>
			<div className={styles.image_container}>
				<div className={styles.aparment_item_first_container}>
					<Image
						src={img}
						alt='1photo'
						className={styles.first_photo}
					/>
				</div>
				<div className={styles.aparment_item_second_container}>
					<Image
						src={subImg}
						alt='2photo'
						className={styles.second_photo}
					/>
				</div>
			</div>
			<div
				className={styles.aparment_item_third_container}
				style={{ background: `url(${bg_image.src})` }}
			>
				<div className={styles.planning}>
					<p>{planning}</p>
					<p className={styles.floor_desc}>{countOfFloor}</p>
				</div>

				<div className={styles.title}>{desc}</div>
				{areaOfFloor ? (
					<div style={{ marginTop: "10px" }}>
						<p>{area}</p>
						<p className={styles.floor}>{areaOfFloor}</p>
						<div className={styles.numberofArea}>{number}</div>
					</div>
				) : (
					<div style={{ marginTop: "10px" }}>
						<p className={styles.area}>{area}</p>
						<div className={styles.numberofArea}>{number}</div>
					</div>
				)}

				<ul>
					<li style={{ display: holl ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>{" "}
						{holl}
					</li>
					<li style={{ display: kitchen ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{kitchen}
					</li>
					<li style={{ display: bedroom ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{bedroom}
					</li>
					<li style={{ display: kabinet ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{kabinet}
					</li>
					<li style={{ display: bedroomSecond ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{bedroomSecond}
					</li>
					<li style={{ display: bedroomThird ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{bedroomThird}
					</li>
					<li style={{ display: bathroom ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{bathroom}
					</li>
					<li style={{ display: loggia ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{loggia}
					</li>
					<li style={{ display: loggiaSecond ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{loggiaSecond}
					</li>
					<li style={{ display: loggiaThird ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{loggiaThird}
					</li>
					<li style={{ display: wardrobe ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{wardrobe}
					</li>
					<li style={{ display: toilet ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{toilet}
					</li>
					<li style={{ display: toiletSecond ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{toiletSecond}
					</li>
					<li style={{ display: terrace ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{terrace}
					</li>
					<li style={{ display: wardrobeSecond ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{wardrobeSecond}
					</li>
					<li style={{ display: wardrobeThird ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{wardrobeThird}
					</li>
					<li style={{ display: bathroomSecond ? "flex" : "none" }}>
						<Image
							src={ListBlueCircle}
							alt='circle'
						/>
						{bathroomSecond}
					</li>
				</ul>
			</div>
		</div>
	);
};
