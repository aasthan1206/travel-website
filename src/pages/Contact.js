import book from '../assets/images/book.jpg'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
        <div className='flex justify-end gap-32'>
            <div>
                <div className='text-darkblue text-5xl font-main font-extrabold my-4'>
                    Contact Us
                </div>
                <form action="" className='my-12 py-4 text-darkblue text-xl font-main font-semibold bg-lightpink text-center px-12'> 
                    <div className='pb-8'>
                        <label htmlFor="">Name</label><br />
                        <input type="text" className="border-b-2 bg-palewhite rounded-sm outline-darkblue border-darkblue mt-1 px-2 py-1" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="">Email</label><br />
                        <input type="email" className="border-b-2 bg-palewhite rounded-sm outline-darkblue border-darkblue mt-1 px-2 py-1" />
                    </div>
                    <div>
                        <label htmlFor="">Message</label><br />
                        <input type="textarea" className="border-b-2 outline-darkblue border-darkblue mt-1 px-2 py-1 bg-palewhite rounded-sm" />
                    </div>
                    <button className="bg-lightyellow mt-4 px-4 py-2 text-xl text-lightblue font-main font-semibold hover:bg-palewhite">Submit</button>
                </form>
                
            </div>
            
            <div className='relative'>
                <img src={book} alt="" className="rounded-l-full w-[60vw]" />
                <div className='absolute top-24 left-64 text-5xl font-special font-medium w-32'>With Our Experience We Will Serve You</div>
            </div>
        </div>
        <div  className='flex my-12 justify-center gap-24'>
            <div className='font-special text-5xl my-4'>
                    Get In Touch
            </div>
            <div className='flex gap-8'>
                <div>
                    <FaEnvelope className='h-8 w-8 text-darkpink ml-12'/>
                    <div className='text-darkpink text-lg font-main font-bold py-2'>travellog@gmail.com</div>
                </div>
                <div>
                    <FaPhoneAlt className='h-8 w-8 text-darkpink ml-12'/>
                    <div className='text-darkpink text-lg font-main font-bold py-2'>+91 1234567890</div>
                </div>
            </div>
                    
        </div>
      
    </div>
  )
}

export default Contact
