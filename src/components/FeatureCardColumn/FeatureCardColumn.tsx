import React from 'react';
interface IProps {
    src: string;
    altText: string;
    title: string;
    text: string;
}
export const FeatureCardColumn = ({ src, altText = 'default alt text', title, text }: IProps): JSX.Element => {
    return (
        <div className="text-left">
            <img src={src} alt={altText} />
            <div className="-mt-6">
                <h3 className="py-2 text-lg font-medium">{title}</h3>
                <p className="leading-relaxed">{text}</p>
            </div>
        </div>
    );
};
