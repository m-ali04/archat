import { IconType } from "react-icons";

interface AuthSocialButtonProps{
    icon: IconType,
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon:Icon,
    onClick
}) => {
    return ( 
        <button
            type="button"
            onClick={onClick}
            className="
                inline-flex
                w-60
                mx-auto
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-orange-600
                font-bold
                ring-1
                ring-inset
                ring-gray-300
                hover:bg-gray-50
                focus:outline-offset-0
                shadow-lg shadow-green-100/50
            "
        >
               <Icon/> 
        </button>
    
    );
}
 
export default AuthSocialButton;