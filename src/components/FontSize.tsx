interface FontSizeProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const FontSize = ({ isOpen, toggleOpen }: FontSizeProps) => {
	return (
		<section>
			<input
				type="checkbox" id="fontSizeId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="fontSizeId">font-size + text-align</label>
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-xs"
							data-tip="font-size: var(--text-xs); /* 0.75rem = 12px */
							line-height: var(--tw-leading, var(--text-xs--line-height));"
						>text-xs</li>
						<li className="text-sm"
							data-tip="font-size: var(--text-sm); /* 0.875rem = 14px */
							line-height: var(--tw-leading, var(--text-sm--line-height));"
						>text-sm</li>
						<li className="text-base"
							data-tip="font-size: var(--text-base); /* 1rem = 16px */
							line-height: var(--tw-leading, var(--text-base--line-height));"
						>text-base</li>
						<li className="text-lg"
							data-tip="font-size: var(--text-lg); /* 1.125rem = 18px */
							line-height: var(--tw-leading, var(--text-lg--line-height));"
						>text-lg</li>
						<li className="text-xl"
							data-tip="font-size: var(--text-xl); /* 1.25rem = 20px */
							line-height: var(--tw-leading, var(--text-xl--line-height));"
						>text-xl</li>
						<li className="text-2xl"
							data-tip="font-size: var(--text-2xl); /* 1.5rem = 24px */
							line-height: var(--tw-leading, var(--text-2xl--line-height));"
						>text-2xl</li>
						<li className="text-3xl"
							data-tip="font-size: var(--text-3xl); /* 1.875rem = 30px */
							line-height: var(--tw-leading, var(--text-3xl--line-height));"
						>text-3xl</li>
						<li className="text-4xl"
							data-tip="font-size: var(--text-4xl); /* 2.25rem = 36px */
							line-height: var(--tw-leading, var(--text-4xl--line-height));"
						>text-4xl</li>
						<li className="text-5xl"
							data-tip="font-size: var(--text-5xl); /* 3rem = 48px */
							line-height: var(--tw-leading, var(--text-5xl--line-height));"
						>text-5xl</li>
						<li className="text-6xl"
							data-tip="font-size: var(--text-6xl); /* 3.75rem = 60px */
							line-height: var(--tw-leading, var(--text-6xl--line-height));"
						>text-6xl</li>
						<li className="text-7xl"
							data-tip="font-size: var(--text-7xl); /* 4.5rem = 72px */
							line-height: var(--tw-leading, var(--text-7xl--line-height));"
						>text-7xl</li>
						<li className="text-8xl"
							data-tip="font-size: var(--text-8xl); /* 6rem = 96px */
							line-height: var(--tw-leading, var(--text-8xl--line-height));"
						>text-8xl</li>
						<li className="text-9xl"
							data-tip="font-size: var(--text-9xl); /* 8rem = 128px */
							line-height: var(--tw-leading, var(--text-9xl--line-height));"
						>text-9xl</li>
					</ul>
				</div>
			</div>
		</section>
	)
}