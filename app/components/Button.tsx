'use client';

import clsx from 'clsx';

interface ButtonProps{
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return ( 
        <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={clsx(
                    `flex
                    justify-center
                    rounded-md
                    px-3
                    py-2 text-sm font-semibold 
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    `,
                    disabled && "opacity-50 cursor-default",
                    fullWidth && "w-full",
                    secondary? 'bg-slate-100 shadow-lg shadow-slate-500/100 text-gray-900' : 'text-white',
                    danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600 shadow-lg shadow-red-500/100",
                    !secondary && !danger && "bg-green-500 hover:bg-green-600 focus-visible:outline-green-600 shadow-lg shadow-green-500/100"
                )}
        >   
                {children}
        </button>

     );
}
 
export default Button;