import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Login from './pages/Login'
import Payment from './pages/Payment'
import Layout from './components/shared/Layout'
import PackageSection from './components/PackageSection'

import Goa from '../src/pages/Goa'
import Puducherry from '../src/pages/Puducherry'
import Udaipur from '../src/pages/Udaipur'
import Leh from '../src/pages/Leh'
import Jim from '../src/pages/Jim'
import Bandhavgarh from '../src/pages/Bandhavgarh'
import Mumbai from '../src/pages/Mumbai'
import Pune from '../src/pages/Pune'
import Delhi from '../src/pages/Delhi'

function App() {
  return (
    <>
		<Router basename={process.env.PUBLIC_URL} >
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/About" element={<About />} ></Route>
					<Route path="/Contact" element={<Contact />} ></Route>
					<Route path="/Destination" element={<Destination />} ></Route>
					<Route path="/PackageSection" element={<PackageSection />} ></Route>
					<Route path="/Login" element={<Login />} ></Route>
					<Route path="/Booking" element={<Booking />} ></Route>
					<Route path="/Payment" element={<Payment />} ></Route>

					<Route path="/Goa" element={<Goa />} ></Route>
					<Route path="/Udaipur" element={<Udaipur />} ></Route>
					<Route path="/Jim" element={<Jim />} ></Route>
					<Route path="/Bandhavgarh" element={<Bandhavgarh />} ></Route>
					<Route path="/Puducherry" element={<Puducherry />} ></Route>
					<Route path="/Leh" element={<Leh />} ></Route>
					<Route path="/Mumbai" element={<Mumbai />} ></Route>
					<Route path="/Pune" element={<Pune />} ></Route>
					<Route path="/Delhi" element={<Delhi />} ></Route>
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App;
