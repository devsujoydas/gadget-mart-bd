
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { Outlet } from "react-router-dom"
import Hero from "../../Components/Hero/Hero"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <Helmet>
        <title>GADGET-MART-BD | Home</title>
      </Helmet>

      <Header setToggle={setToggle} />
      {toggle ? <Hero /> : <Outlet />}
      <Footer />

    </div>
  )
}

export default Home