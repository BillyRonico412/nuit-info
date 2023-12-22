import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Nuit de l'info",
	description: "Questionnaire pour le climat",
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout = (props: RootLayoutProps) => {
	return (
		<html lang="fr">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={inter.className}>{props.children}</body>
		</html>
	)
}

export default RootLayout
