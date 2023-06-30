import Head from "next/head";
import Calculator from "../../components/Calculator";

export default function Home() {
	return (
		<>
			<Head>
				<title>Calculator App</title>
				<meta name="description" content="A Web-Calculator" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<Calculator></Calculator>
			</main>
		</>
	);
}
