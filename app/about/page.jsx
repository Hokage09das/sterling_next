import { Layout } from "@/components";
import { HomeAboutSection } from "@/widgets/home_about_section/HomeAboutSection";

export const metadata = {
	title: "Стерлинг о Нас",
	description:
		"Цель нашей командыизменить строительный сектор, внедрить современные технологии международного стандарта, использовать инновационные методы в строительстве и вывести на рынок недвижимость высокого класса и качества",
};

export default function AboutPage() {
	return (
		<Layout>
			<div style={{ marginTop: "50px" }}>
				<HomeAboutSection />
			</div>
		</Layout>
	);
}
