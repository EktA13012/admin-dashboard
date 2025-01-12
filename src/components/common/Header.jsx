const Header = ({ title }) => {
	return (
		<header className='bg-blue-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-blue-200'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-4xl font-semibold text-gray-100'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;