import React, { ReactNode } from 'react';

interface IPprops {
    children: ReactNode;
    type?: 'primary' | 'secondary' | undefined;
    htmlType?: 'submit' | 'button' | 'reset' | undefined;
}
export const Button = ({ children, type, htmlType }: IPprops): JSX.Element => {
    const primaryBtnStyle = type === 'primary' ? `bg-red-500 text-white` : `bg-transparent text-red-500`;
    return (
        <button
            className={`px-8 py-3 font-medium  border-2 border-red-500 rounded-full ${primaryBtnStyle}  `}
            type={htmlType || 'button'}
        >
            {children}
        </button>
    );
};
