import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with:', { email, password, remember });
    };

    // Handle input change
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleRememberChange = () => setRemember(!remember);

    return (
        <div className='md:p-28 px-7 py-28 bg-[#06101C]'>

            <div className="max-w-[450px] mx-auto border  border-gray-700 rounded-md p-10 bg-[#050E18] text-white">
                <h1 className="text-3xl font-bold ">Sign in</h1>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#040E19]"
                            placeholder="your@email.com"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 ">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-[#040E19]"
                            placeholder="••••••"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="mt-4 flex items-center">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded  "
                            checked={remember}
                            onChange={handleRememberChange}
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm ">
                            Remember me
                        </label>
                    </div>

                    <div className="mt-6 flex flex-col gap-2 justify-between">
                        <button type="submit" className="border bg-white text-black font-semibold py-1 rounded-md" > Sign in </button>
                        <a className="text-center text-sm cursor-pointer transition-all text-gray-200 font-semibold hover:underline"> Forgot your password? </a>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 justify-between">
                        <button type="submit" className="border border-gray-600 hover:border-gray-500 transition-all bg-[#040E19] text-white py-1 rounded-md" > Sign in with Google </button>

                        <button type="submit" className="border border-gray-600 hover:border-gray-500 transition-all bg-[#040E19] text-white py-1 rounded-md"  > Sign in with Facebook</button>
                    </div>

                </form>

                <p className="mt-4 text-sm  text-center"> Dont have an account?
                    <a href="#" className="font-medium text-white hover:text-indigo-500 ml-1"> Sign up </a>
                </p>

            </div>
        </div>
    );
};

export default SignUp;
