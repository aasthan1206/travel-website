import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const iconStyle = "w-8 h-8 text-white cursor-pointer"

export const socialIconData = [
    {
        'id' : 1,
        'icon' : <FaFacebook className={`${iconStyle} hover:text-cyan-500`} />,
    },
    {
        'id' : 2,
        'icon' : <FaInstagram className={`${iconStyle} hover:text-pink-600`} />,
    },
    {
        'id' : 3,
        'icon' : <FaYoutube className={`${iconStyle} hover:text-red-500`} />,
    },
]

export const footerLink = [
    {
        'id' : 1,
        'link' : 'Destinations',
    },
    {
        'id' : 2,
        'link' : 'Packages',
    },
    {
        'id' : 3,
        'link' : 'About Us',
    },
    {
        'id' : 4,
        'link' : 'Contact Us',
    },
]