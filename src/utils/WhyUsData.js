import { FaTags } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'

const iconStyle = "text-darkpink w-10 h-10 pt-2 pr-2"

export const WhyUsData =[
    {
        'id' : 1,
        'title' : 'GREAT PRICES',
        'desc' : 'Flights and hotels up to 30% off in packages',
        'icon' : <FaTags className={iconStyle} />, 
    },
    {
        'id' : 2,
        'title' : 'EXTENSIVE OFFERS',
        'desc' : 'Tickets and extra services all in one place',
        'icon' : <FaMapMarkerAlt className={iconStyle} />, 
    },
    {
        'id' : 3,
        'title' : 'SECURE BOOKINGS',
        'desc' : 'Your data is always safe with us',
        'icon' : <FaLock className={iconStyle} />, 
    },
]