import Huejutla from '../images/places/huejutla.jpg'
import Tantoyuca from '../images/places/tantoyuca.jpg'
import SanMartin from '../images/places/san_martin_chalchicuautla.jpg'

export const getEvents = () => {
    let events = []

    for (let index = 0; index < 10; index++) {
        events.push({
            id: index,
            name: `Evento No. ${index}`
        })
    }

    return events

}

export const getPlaces = () => {
    let places = [
        { name: 'Huejutla de Reyes', state: 'Hidalgo', image: Huejutla },
        { name: 'Tantoyuca', state: 'Veracruz', image: Tantoyuca },
        { name: 'San Martin Chalchicuautla', state: 'San Luis Potosí', image: SanMartin },
    ]
    return places
}