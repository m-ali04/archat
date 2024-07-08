'use client';

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps{
    label: string;
    icon:any;
    href:string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC <DesktopItemProps> = ({
    label,
    icon : Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () =>{
        if(onClick){
            return onClick();
        }
    };

    return (  
        <li onClick={handleClick}>
            <Link href={href}
              className={clsx(`
              group
              flex
              gap-x-3
              rounded-md
              p-3
              my-3
              text-sm
              leading-6
              font-semibold
              text-green-400
              shadow-xl shadow-green-700/50
              hover:text-black
              hover:bg-gray-100
              `,
             active && 'bg-green-800 text-black'
            )}
            >
                <Icon className="h-8 w-8 shrink-0"/>
                <span className="sr-only">{label}</span>
            </Link>

        </li>

    );
}
 
export default DesktopItem;