import "./App.css"
import Hero from "./Components/Hero"
import SecService from "./Components/SecService"
import Specialize from "./Components/Specialize"
import Offer from "./Components/Offer"
import Testimonial from "./Components/Testimonial"

function App() {
  return (
    <div className="App">
      <Hero />
      <SecService />
      <Specialize />
      <Offer />
      <Testimonial />
    </div>
  )
}

export default App
