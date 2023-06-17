import { WelcomingSection } from "../../widgets/welcoming_section/WelcomingSection";

import classes from "./avenu_page.module.scss";
import { Layout } from "@/components";
import { ImprovementAvenue } from "@/widgets/improvement_avenue/ImprovementAvenue";
import { AvenueCarousel } from "@/widgets/avenue-carousel/AvenueCarousel";

export const metadata = {
	title: "Эркиндик Авенью",
	description: "Жилой дом премиум класса",
};

export default function Avenue() {
	return (
		<div className={classes.main_container}>
			<Layout>
				<WelcomingSection />
				<AvenueCarousel />
				<ImprovementAvenue />
			</Layout>
		</div>
	);
}
