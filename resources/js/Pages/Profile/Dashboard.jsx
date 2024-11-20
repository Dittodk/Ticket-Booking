import { Link } from "@inertiajs/react";

import MyAccount from "./MyAccount";

const Dashboard = () => {


	return (
		<MyAccount active="dashboard" title="Board">
			<div>
				 	From your account control panel, you can view your
				<Link href={route("profile.my_orders")} className="font-medium underline px-1 ">
					recent orders
				</Link>
					,
				<Link
					href={route("profile.account_details")}
					className="font-medium underline px-1 "
				>
					manage your account details 
				</Link>
					and
				<Link href="/" className="font-medium underline px-1 ">
					change your password
				</Link>
					...
			</div>
		</MyAccount>
	);
};

export default Dashboard;
