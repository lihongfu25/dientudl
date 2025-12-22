import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
	content: React.ReactNode;
	children: (showTooltip: boolean) => React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const targetRef = useRef<HTMLDivElement | null>(null);
	const tooltipRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!isVisible || !targetRef.current || !tooltipRef.current) return;

		const updatePosition = () => {
			const rect = targetRef.current!.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const tooltipHeight = tooltipRef.current!.offsetHeight;

			const spaceAbove = rect.top;
			const spaceBelow = viewportHeight - rect.bottom;

			let topPosition;
			if (spaceAbove >= tooltipHeight) {
				topPosition = rect.top - tooltipHeight + window.scrollY;
			} else if (spaceBelow >= tooltipHeight) {
				topPosition = rect.bottom + window.scrollY;
			} else {
				topPosition = rect.bottom + window.scrollY;
			}

			tooltipRef.current!.style.left = `${rect.left + window.scrollX}px`;
			tooltipRef.current!.style.top = `${topPosition}px`;
		};

		// Cập nhật vị trí khi resize/scroll
		updatePosition();
		window.addEventListener('resize', updatePosition);
		window.addEventListener('scroll', updatePosition, true);

		return () => {
			window.removeEventListener('resize', updatePosition);
			window.removeEventListener('scroll', updatePosition, true);
		};
	}, [isVisible]);

	const showTooltip = () => setIsVisible(true);
	const hideTooltip = () => setIsVisible(false);

	return (
		<>
			<div className='flex' ref={targetRef} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
				{children(isVisible)}
			</div>

			{isVisible &&
				ReactDOM.createPortal(
					<div
						ref={tooltipRef}
						className='
              fixed z-50 bg-gray-800 text-white text-xs rounded px-2 py-1
              whitespace-nowrap pointer-events-none
              dark:bg-gray-100 dark:text-black
              transition-opacity duration-200
            '
					>
						{content}
					</div>,
					document.body,
				)}
		</>
	);
};

export default Tooltip;
