import { useLoaderData } from "react-router-dom";
import Phone from "./Phone"
import { Helmet } from "react-helmet-async";



const Phones = () => {
  const iphones = useLoaderData();


  return (
    <div className="max-w-screen-2xl md:mx-auto py-10 mx-10">
      <Helmet>
        <title>Gadgets | Phones</title>
      </Helmet>
      <h1 className="text-center text-3xl font-semibold ">Phones</h1>
      <div className="m-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-2">
        {
          iphones.map((iphone, idx) => <Phone key={idx} iphone={iphone} />)
        }
      </div>
    </div>
  )
}

export default Phones