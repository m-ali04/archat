'use client';

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps{
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    const{ members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;
    return ( 
        <div className="relative
        ">
                <div className="
                    relative
                    inline-block
                    rounded-full
                    overflow-hidden
                    shadow-lg 
                    shadow-green-500/40
                    h-9
                    w-9
                    md:h-11
                    md:w-11
                ">
                        <Image
                            alt="Picture" 
                            src={user?.image || '/images/placeholder.jpg'}
                            fill
                        />
                </div>
                {isActive && (
                <span className="
                    absolute
                    block
                    rounded-full
                    bg-green-400
                    shadow-lg 
                    shadow-green-500/50
                    ring-2
                    top-0
                    right-0
                    h-2
                    w-2
                    md:h-3
                    md:w-3
                "
                />
            )}
        </div>
     );
}
 
export default Avatar;