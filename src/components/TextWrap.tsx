interface TextWrapProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const TextWrap = ({ isOpen, toggleOpen }: TextWrapProps) => {
	return (
		<section>
			<input
				type="checkbox" id="textWrapId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="textWrapId">text-wrap</label>
			<div className={`toggleList
				${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
			`}>
				<div className="overflow-hidden">
					<ul className={`${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
						<li className="text-balance" data-tip="text-wrap: balance;">text-balance</li>
						<li className="text-nowrap" data-tip="text-wrap: nowrap;">text-nowrap</li>
						<li className="text-pretty" data-tip="text-wrap: pretty;">text-pretty</li>
						<li className="text-wrap" data-tip="text-wrap: wrap;">text-wrap</li>
					</ul>
				</div>
			</div>
		</section>
	)
}