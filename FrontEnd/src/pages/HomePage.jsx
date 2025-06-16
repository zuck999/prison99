
import CategoryItem from "../components/CategoryItem";


const categories = [
	{ href: "/Nike", name: "Nike", imageUrl: "/s5.jpeg" },
	{ href: "/Adidas", name: "Adidas", imageUrl: "/s1.avif" },
	{ href: "/Skechers", name: "Skechers", imageUrl: "/s2.jpeg" },
	{ href: "/Birkenstock", name: "Birkenstock", imageUrl: "/s3.jpeg" },
	{ href: "/Crocs", name: "Crocs", imageUrl: "/s4.jpeg" },
	{ href: "/NewBalance", name: "NewBalance", imageUrl: "/s6.jpg" },
];

const HomePage = () => {

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-zinc-700 mb-4'>
					Explore Our Categories of shoes
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
