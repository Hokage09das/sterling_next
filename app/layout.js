import { Header } from "@/widgets/header/Header";
import { Inter } from "next/font/google";
import { Footer } from "@/widgets/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const metadata = {
	title:
		"Строительная компания Стерлинг Групп — Лучшие квартиры только для Вас",
	description:
		"Строительная компания Стерлинг Групп — Лучшие квартиры только для Вас",
};

import classes from "./page.module.scss";
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta charset='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='theme-color'
					content='#000000'
				/>
				<meta
					name='keywords'
					content='Стерлинг kg, Sterling kg, Строительная компания Бишкек, Эркиндик Авенью, Жилой дом премиум класса, Стерлинг Групп, Лучшие квартиры'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
			</head>
			<body className={inter.className}>
				<div className={classes.layout}>
					<Header />
					<main className={classes.content}>{children}</main>
					<Footer className={classes.footer} />
				</div>
			</body>
		</html>
	);
}
