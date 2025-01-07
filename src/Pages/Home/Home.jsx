
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { Outlet, useNavigation } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import LoaderSpiner from "../../Components/LoaderSpiner/LoaderSpiner"
import Hero from "../../Components/Hero/Hero"
import { UserContext } from "../../Components/UserContext"
import AddToCart from "../../Components/AddToCart/AddToCart"

const Home = () => {
  const [toggle, setToggle] = useState(true)

  const navigation = useNavigation();

  return (
    <div>
      <UserContext.Provider value={toggle}>


        <Helmet>
          <title>GADGETS | Home</title>
        </Helmet>
        <Header setToggle={setToggle} />

        <AddToCart/>

        {toggle ? <Hero /> : navigation.state == 'loading' ? <LoaderSpiner /> : <Outlet />}

        <Footer />
      </UserContext.Provider>
    </div>
  )
}

export default Home