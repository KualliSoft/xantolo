import Huejutla from '../images/places/huejutla.jpg'
import Tantoyuca from '../images/places/tantoyuca.jpg'
import SanMartin from '../images/places/san_martin_chalchicuautla.jpg'

export const getPlaces = () => {
    let places = [
        { slug: 'huejutla', name: 'Huejutla de Reyes', state: 'Hidalgo', image: Huejutla },
        { slug: 'tantoyuca', name: 'Tantoyuca', state: 'Veracruz', image: Tantoyuca },
        { slug: 'san-martin-chalchicuautla', name: 'San Martin Chalchicuautla', state: 'San Luis Potosí', image: SanMartin },
    ]
    return places
}