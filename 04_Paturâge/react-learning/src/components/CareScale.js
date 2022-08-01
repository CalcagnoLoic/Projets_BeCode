import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantity = {
	1 : "peu",
	2 : "modérement",
	3 : "beaucoup"
}

const event = (x, y, z) => {
	alert(
		`Cette plante requiert ${x[y]} ${z === 'light' ? 'de lumière' : "d'arrosage"}`
	)
} 

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() => event(quantity, scaleValue, scaleType)}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale