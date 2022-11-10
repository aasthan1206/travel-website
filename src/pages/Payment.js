import credit from '../assets/images/preview.png'
const Payment = () => {
  return (
    <div>
        <div className="bg-payment bg-cover h-screen">
            <div className='text-black bg-white opacity-50 text-6xl py-3 font-main font-extrabold text-center'>Payment Gateway</div>
            <div className='flex justify-center opacity-80 p-16 '>
                <form action="" className='w-1/2 bg-white p-8 rounded-sm text-2xl font-main shadow-md shadow-lightyellow text-darkblue'>
                    <div className='pb-8'>
                        <label htmlFor="">CARDHOLDER NAME</label><br />
                        <input type="text" name="" id="" className="border-b-2 border-darkblue outline-none px-2 mt-1" />
                    </div>
                    <div className='pb-8'>
                        <label htmlFor="">CARD NUMBER</label><br />
                        <input type="text" name="" id="" className="border-b-2 border-darkblue outline-none px-2 mt-1" />
                    </div>
                    <div className='flex gap-8'>
                        <div>
                            <label htmlFor="">EXPIRATION DATE</label><br />
                            <div className='flex gap-4'>
                                <input type="number" name="" id="" placeholder='Month' className="border-b-2 border-darkblue outline-none px-2 mt-1 w-32" />
                                <input type="number" name="" id="" placeholder='Year' className="border-b-2 border-darkblue outline-none px-2 mt-1 w-32" />
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="">CVV</label><br />
                            <input type="password" name="" id="" className="border-b-2 border-darkblue outline-none px-2 mt-1" />
                        </div>
                    </div>
                    <button className="bg-lightyellow mt-8 px-4 py-2 text-xl text-lightblue font-main font-semibold hover:bg-palewhite">Pay Now</button>
                </form>
                <div className='w-1/2 shadow-md shadow-lightyellow'>
                    <img src={credit} alt="" className=''/>
                </div>
            </div>
            
        </div>
        
      
    </div>
  )
}

export default Payment
