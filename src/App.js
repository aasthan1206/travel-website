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
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App;
