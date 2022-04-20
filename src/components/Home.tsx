import React, { Suspense } from "react";

const CmpDeClase = React.lazy(() => import("./CmpDeClase"));
const CmpFuncion = React.lazy(() => import("./CmpFuncion"));

//Instead of regular import statements, we will use the above approach for lazy loading

const Home = (props: any) => {
	if (props.user === "admin") {
		return (
			// fallback component is rendered until our main component is loaded
			<Suspense fallback={<div>Loading</div>}>
				<CmpDeClase />
			</Suspense>
		);
	} else if (props.user === "customer") {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<CmpFuncion />
			</Suspense>
		);
	} else {
		return <div> Invalid User </div>;
	}
};

export default Home;