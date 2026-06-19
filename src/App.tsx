import { useState } from 'react';
import { FontSize } from './components/FontSize.tsx';
import { TextAlign } from './components/TextAlign.tsx';
import { TextWrap } from './components/TextWrap.tsx';
import { TextOverflow } from './components/TextOverflow.tsx';
import { Color } from './components/Color.tsx';
import { TextShadowColor } from './components/TextShadowColor.tsx';
import { TextShadow } from './components/TextShadow.tsx';
import { VerticalAlign } from './components/VerticalAlign.tsx';

type OpenStates = {
	textAlign: boolean;
	textWrap: boolean;
	textOverflow: boolean;
	color: boolean;
	textShadowColor: boolean;
	textShadow: boolean;
	verticalAlign: boolean;
	fontSize: boolean;
}

function App() {
	const [openStates, setOpenStates] = useState<OpenStates>({
		textAlign: false,
		textWrap: false,
		textOverflow: false,
		color: false,
		textShadowColor: false,
		textShadow: false,
		verticalAlign: false,
		fontSize: false,
	});
	const toggleOpen = (key: keyof OpenStates) => {
		setOpenStates((prevState) => ({
			...prevState,
			[key]: !prevState[key]
		}));
	};

	return (
		<>
			<header>
				<h1>Tailwind CSS <span className='font-thin font-stretch-125% tracking-widest'>Reference</span></h1>
			</header>
			<main>
				<div className='flex w-full sticky top-5 z-10 place-content-evenly gap-5'>
					<button onClick={() => {
						setOpenStates(prev => 
							Object.fromEntries(Object.keys(prev).map(key => [key, false])) as OpenStates
						);
					}}>Close All</button>
					<button onClick={() => {
						setOpenStates(prev => 
							Object.fromEntries(Object.keys(prev).map(key => [key, true])) as OpenStates
						);
					}}>Open All</button>
				</div>
				<TextAlign isOpen={openStates.textAlign} toggleOpen={() => toggleOpen('textAlign')} />
				<TextWrap isOpen={openStates.textWrap} toggleOpen={() => toggleOpen('textWrap')} />
				<TextOverflow isOpen={openStates.textOverflow} toggleOpen={() => toggleOpen('textOverflow')} />
				<Color isOpen={openStates.color} toggleOpen={() => toggleOpen('color')} />
				<TextShadowColor isOpen={openStates.textShadowColor} toggleOpen={() => toggleOpen('textShadowColor')} />
				<TextShadow isOpen={openStates.textShadow} toggleOpen={() => toggleOpen('textShadow')} />
				<VerticalAlign isOpen={openStates.verticalAlign} toggleOpen={() => toggleOpen('verticalAlign')} />
				<FontSize isOpen={openStates.fontSize} toggleOpen={() => toggleOpen('fontSize')} />
			</main>
			<footer>
				<small>Made by Azrul Saleh for personal development reference</small>
			</footer>
		</>
	)
}

export default App

// self-center
// self-center-safe
// place-items-center
// place-items-center-safe
// place-content-center
// place-content-center-safe
// snap-center
// text-center
// items-center
// items-center-safe
// object-center
// origin-center
// content-center
// content-center-safe
// justify-center
// justify-center-safe
// place-self-center
// place-self-center-safe
// justify-self-center
// justify-self-center-safe
// justify-items-center
// justify-items-center-safe
// mask-radial-at-center
// perspective-origin-center
// align-middle
// mask-center
// bg-center