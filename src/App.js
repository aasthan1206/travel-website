import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Place from './pages/Place'

function App() {
  return (
    <>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} ></Route>
					<Route path="/About" element={<About />} ></Route>
					<Route path="/Place" element={<Place />} ></Route>
				</Routes>
      		</Layout>
    	</Router>
    </>
  )
}

export default App;
