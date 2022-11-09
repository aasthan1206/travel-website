import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Place from './pages/Place'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Login from './pages/Login'
import Layout from './components/shared/Layout'

function App() {
  return (
    <>
		<Router basename={process.env.PUBLIC_URL} >
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/About" element={<About />} ></Route>
					<Route path="/Place" element={<Place />} ></Route>
					<Route path="/Destination" element={<Destination />} ></Route>
					<Route path="/Login" element={<Login />} ></Route>
					<Route path="/Booking" element={<Booking />} ></Route>
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App;
