import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='navbar align_center'>
			{/* left */}
			<div className='align_center'>
				<h1 className='navbar_heading'>YangShop</h1>
				<form className='navbar_form align_center'>
					<input className='navbar_search' type='text' placeholder='Search Product' />
					<button className='search_button' type='submit'>
						Search
					</button>
				</form>
			</div>

			{/* right */}
			<div className=''>Right</div>
		</nav>
	);
};
export default Navbar;
