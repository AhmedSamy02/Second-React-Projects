//! use effect =  React hook that tells react to the code when (Pick one):
//*              This component re-renders
//*              This component mounts
//*              This state of the value
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^ 1. useEffect(()=>{})             // Runs after every re-render
//^ 2. useEffect(()=>{}, [])         // Runs only on mount
//^ 3. useEffect(()=>{}, [value])    // Runs on mount + when value changes
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
//~ Uses:
//& #1 Event Listener
//& #2 DOM manipulation
//& #3 Subscriptions (real-time updates)
//& #4 Fetching data from an API
//& #5 Clean up when a component unmounts

import { useEffect, useState } from 'react'

function UseEffectComponent() {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)
	const handleResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		console.log('Event occured')
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	useEffect(() => {
		document.title = `Size = ${width} x ${height}`
	}, [width, height])

	return (
		<>
			<p>
				Width : <b> {width}</b>px
			</p>
			<p>
				Height : <b>{height}</b>px
			</p>
		</>
	)
}
export default UseEffectComponent
