interface TextOverflowProps {
	isOpen: boolean;
	toggleOpen: () => void;
}

export const TextOverflow = ({ isOpen, toggleOpen }: TextOverflowProps) => {
	return (
		<section>
			<input
				type="checkbox" id="textOverflowId"
				checked={isOpen}
				onChange={toggleOpen}
			/>
			<label htmlFor="textOverflowId">text-overflow</label>
			<div className={`toggleList
				${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
			`}>
				<div className="overflow-hidden">
					<ul className={`${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
						<li className="text-clip" data-tip="text-overflow: clip;">text-clip</li>
						<li className="text-ellipsis" data-tip="text-overflow: ellipsis;">text-ellipsis</li>
					</ul>
				</div>
			</div>
		</section>
	)
}