//Importing react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Home Page
import Home from 'Pages/Home/Home'
import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'

//Components
import Places from 'Pages/Places/Places'
import Background from 'Components/Background'
import ConnectWallet from 'Components/ConnectWallet'
import Sidebar from 'Components/Sidebar'

//Props Data
import { reuseData } from 'Components/componentData'
import { homeProps } from 'Pages/Home/homeData'
import { placeToStay } from 'Pages/Places/PlacesData'
import { connectData } from 'Components/connectWalletData'

function App() {
  return (
    <Router>
      <Navbar {...reuseData} />
      <Background />
      <Sidebar />
      <ConnectWallet {...connectData} />
      <Routes>
        <Route path='/places' element={<Places {...placeToStay} />} />
        <Route path='/' element={<Home {...homeProps} />} />
      </Routes>
      <Footer {...reuseData} />
    </Router>
  )
}

export default App
