import login from '../images/login.svg'
export const Header = ({
    text
}) => {
    return (
        <div className="flex bg-basic-green justify-between p-4 shadow-lg">
            <div className="font-jaldi text-3xl font-normal text-medic-green">
                Medic
            </div>
            <button type="submit" className="flex px-4 py-2 items-center gap-2 bg-white rounded-md hover:bg-green-200 text-medic-green shadow-md">
                {text}
                <img src={login} alt="User Icon" className="w-5 h-5"/>
            </button>
        </div>
    );
}