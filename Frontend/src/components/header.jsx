import login from '../images/login.svg'
import logo from '../images/Logo.svg'
export const Header = ({
    text
}) => {
    return (
        <div className="flex bg-[#f6fffb] justify-between p-4 shadow-lg">
            <a className="font-jaldi text-3xl font-normal text-medic-green">
                <img className="w-20 h-10" src={logo} alt="logo" />
            </a>
            <button type="submit" className="flex px-4 py-2 items-center gap-2 bg-white rounded-md hover:bg-green-100 text-medic-green shadow-md">
                {text}
                <img src={login} alt="User Icon" className="w-5 h-5"/>
            </button>
        </div>
    );
}