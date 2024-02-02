import FeaturedCategory from "./components/FeaturedCategory";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-6 gap-y-4 px-7 pb-10 ">
				{[0, 1, 2, 3]?.map((item) => {
					return <FeaturedCategory categoryIndex={item} />;
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;
