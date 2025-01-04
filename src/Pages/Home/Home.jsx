
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { Outlet } from "react-router-dom"
import Hero from "../../Components/Hero/Hero"
import { useState } from "react"

const Home = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <Header setToggle={setToggle}/>
      <div>
        {
          toggle ? <Hero/> : <Outlet/>
        }
      </div>
      
      
      <Footer />
    </div>
  )
}

export default Home