import { useNavigate } from "react-router-dom"

const FormForCash = () => {
    const navigate = useNavigate()
    const formHandler = e => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div>
            <form action="" className="flex flex-col text-xl gap-2">
                <label htmlFor="full-name">Full Name <span className="text-red-500">*</span></label>
                <input type="text" id="full-name" name="full-name" placeholder="Full Name" className="border px-4 py-2 rounded-md" />
                
                <label htmlFor="phone-number">Phone Number <span className="text-red-500">*</span></label>
                <input type="number" id="phone-number" name="phone-number" placeholder="Phone Number" className="border px-4 py-2 rounded-md" />
                
                <label htmlFor="address">Full Address <span className="text-red-500">*</span></label>
                <textarea type="text" id="address" name="address" placeholder="Address" className="border px-4 py-2 rounded-md" />
                
                <div className="flex md:flex-row flex-col gap-2 justify-between items-center mt-8">
                    <div className="text-lg flex items-center gap-2">
                        <input type="checkbox" />
                        <h1>I have read andd agree to the <a href="#confirm" className="text-[#F27F20]">Terms and Conditions</a> and <a href="#confirm" className="text-[#F27F20]">Privacy Policy</a></h1>
                    </div>
                    <button onClick={formHandler} className="bg-[#F27F20] font-medium text-white px-4 py-2 rounded-md hover:bg-transparent active:scale-95 border hover:border-black hover:text-black transition-all">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default FormForCash