import { DMSerifDisplay } from "../fonts/fonts"
import ArrowIcon from "./Icons/ArrowIcon"
import CartIcon from "./Icons/CartIcon"
import SearchIcon from "./Icons/SearchIcon"

function Navbar() {
    return (
        <nav className="flex sticky top-0 z-[999] bg-white justify-between p-3  items-center">
            <ArrowIcon />
            <p className={`${DMSerifDisplay.className} ml-4 text-primary text-2xl `}>THAT GIRL</p>
            <div className="flex gap-6">
                <SearchIcon />
                <CartIcon />
            </div>
        </nav>
    )
}

export default Navbar