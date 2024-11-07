import login from '../images/login.svg'
import logo from '../images/Logo.svg'
import {Link} from "react-router-dom";
export const Header = ({
    text
}) => {
    return (
        
        <div className="flex bg-[#f6fffb] justify-between p-2.5 sm:p-3 md:p-3.5 lg:p-4 shadow-lg">
            <a className="font-jaldi text-3xl font-normal text-medic-green">
                <img className="w-14 h-7 sm:w-16 sm:h-8 md:w-20 md:h-10" src={logo} alt="logo" />
            </a>
            <Link to='/signup'>
            <button type="submit" className="flex px-2 py-0.5 md:px-3 md:py-1 lg:px-4 lg:py-2 text-xs md:text-sm lg:text-base items-center gap-2 bg-white rounded-md hover:bg-green-100 text-medic-green shadow-md">
                {text}
                <img src={login} alt="User Icon" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"/>
            </button>
            </Link>
        </div>
    );
}