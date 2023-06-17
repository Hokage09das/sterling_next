import { Layout } from "@/components";

import classes from "./news_page.module.scss";

export const metadata = {
	title: "Стерлинг новости",
	description: "Жилой дом премиум класса",
};

export default function NewsPage() {
	return (
		<div className={classes.news_page_container}>
			<Layout>Страница новостей</Layout>
		</div>
	);
}
