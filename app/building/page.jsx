import { Layout, ApartmenList } from "@/components";

export const metadata = {
	title: "Эркиндик Авенью планировки",
	description: "Жилой дом премиум класса планировки",
};

export default function BuildPage() {
	return (
		<Layout>
			<div style={{ marginTop: "50px" }}>
				<ApartmenList />
			</div>
		</Layout>
	);
}
