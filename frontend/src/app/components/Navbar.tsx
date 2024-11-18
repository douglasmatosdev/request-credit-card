import { APP_NAME } from "../utils/constants"

export const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center border-2 py-4 px-6">
                <h1 className="flex-1">{APP_NAME}</h1>
                <ul className="flex items-center">
                    <li className="cursor-pointer">SignIn</li>
                    <li className="cursor-pointer ml-6">SignUp</li>
                </ul>
            </nav>

        </header>
    )
}