import * as React from "react"
import CarrouselItem1 from "./CarrouselItem1"
import CarrouselItem2 from "./CarrouselItem2"
import CarrouselItem3 from "./CarrouselItem3"

type Props = {
    itemNumber: number
}

const CarrouselItem = ({itemNumber}: Props): React.ReactElement => {
	switch(itemNumber) {
	case 1: 
		return <CarrouselItem1 />
	case 2: 
		return <CarrouselItem2 />
	case 3: 
		return <CarrouselItem3 />
	default:
		return <CarrouselItem1 />
	}
}

export default CarrouselItem