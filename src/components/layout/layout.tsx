
import React, {ReactNode} from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
