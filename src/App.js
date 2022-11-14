//Importing react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Home Page
import Home from 'Pages/Home/Home'
import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'

//Props Data
import { reuseData } from 'Components/componentData'
import { homeProps } from 'Pages/Home/homeData'
import Places from 'Pages/Places/Places'
import { placeToStay } from 'Pages/Places/PlacesData'

function App() {
  return (
    <Router>
      <Navbar {...reuseData} />
      <Routes>
        <Route path='/places' element={<Places {...placeToStay} />} />
        <Route path='/' element={<Home {...homeProps} />} />
      </Routes>
      <Footer {...reuseData} />
    </Router>
  )
}

export default App
