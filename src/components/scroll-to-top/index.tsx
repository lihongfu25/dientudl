import { ArrowUp01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};
const ScrollToTop = () => {
	const { pathname } = useLocation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = () => {
		scrollToTop();
	};

	return (
		<button
			onClick={handleClick}
			className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#2074be] text-white p-3 shadow-lg transition-all ease duration-500 ${
				visible ? 'opacity-100 hover:bg-sky-700' : 'opacity-0 pointer-events-none'
			}`}
			aria-label='Scroll to top'
		>
			<HugeiconsIcon icon={ArrowUp01Icon} className='' />
		</button>
	);
};

export default ScrollToTop;
