"use client";

import Link from "next/link";
import clsx
 from "clsx";

 interface MobileItemProps{
    icon:any;
    href:string;
    label:string;
    onClick?: () => void;
    active?: boolean;
}

const MobileItem: React.FC <MobileItemProps> = ({
    icon : Icon,
    href,
    label,
    onClick,
    active
}) => {
    const handleClick = () =>{
        if(onClick){
            return onClick();
        }
    };

    return (  
            <Link 
                onClick={onClick}
            href={href}
              className={clsx(`
              gap-x-1
              py-3
              mx-2
              `
            )}
            >
              <div className=" flex flex-col justify-center">  
                <div       className={clsx(`
        
              rounded-full
              ring-green-700
              ring-2
              py-2
              px-8
              text-sm
              leading-6
              w-full
              font-semibold
              text-green-400
              hover:text-black
              hover:bg-gray-100
              shadow-xl shadow-green-500/30
              `,
             active && 'bg-green-700 text-black'
                    )}
                >
                <Icon className="h-6 w-6 m-auto "/>
                </div>
                <p className="mt-2 text-white font-semibold mx-auto">{label}</p>
            </div>
            </Link>


    );
}
 
export default MobileItem;