import { getSession } from "@auth0/nextjs-auth0"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { redirect } from "next/navigation"

interface DashboardLayout {
	children: React.ReactNode
}

const DashboardLayout = async (props: DashboardLayout) => {
	const session = await getSession()
	if (!session) {
		return redirect("/api/auth/login")
	}
	return (
		<UserProvider>
			<main className="container mx-auto">
				<nav className="flex items-center gap-x-4">
					<p>Dashboard</p>
				</nav>
				{props.children}
			</main>
		</UserProvider>
	)
}

export default DashboardLayout
