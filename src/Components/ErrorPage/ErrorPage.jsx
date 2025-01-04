import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate()
    const goBackHandler = () =>{
        navigate(-1)
    }
  return (
    <div>
        <div className="min-h-[80vh] flex gap-5 justify-center items-center flex-col">
            <h1 className="text-7xl font-semibold text-[#F27F20]">404</h1>
            <h1 className="text-5xl">Page Not Found</h1>
            <button onClick={goBackHandler} className="bg-[#F27F20] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#fa913c] active:scale-95 transition-all">Go Back</button>
        </div>
    </div>
  )
}

export default ErrorPage