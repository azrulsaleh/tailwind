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
			<div className={`toggleList ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
				<div className={`${isOpen ? "overflow-visible" : "overflow-hidden"}`}>
					<ul className={`${isOpen ? "scale-none" : "scale-0"}`}>
						<li className="text-clip" data-tip="text-overflow: clip;">text-clip</li>
						<li className="text-ellipsis" data-tip="text-overflow: ellipsis;">text-ellipsis</li>
					</ul>
				</div>
			</div>
		</section>
	)
}