import '../css/main.css'
import NavBar from './components/NavBar'
import '../css/pruebas.css'
import Carousel from './components/Carousel'
import '../img/header/1.png'
function App() {
  const images = [
    "../img/header/1.png",
    "../img/header/2.png",
    "../img/header/3.png"
  ];
  return (
    <>
      <NavBar />
      <Carousel images={images} />
    </>
  )
}

export default App


