import React from 'react';
import Image from 'next/image';
const data = {
    subTitle: 'our services',
    title: 'Business Goals Achieved with Design',
    features: [
        {
            id: 1,
            imgSrc: '/assets/services/smart.svg',
            altText: 'Smart Features',
            title: 'Smart Features',
            text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
        },
        {
            id: 2,
            imgSrc: '/assets/services/smart.svg',
            altText: 'Secure Contents',
            title: 'Secure Contents',
            text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
        },
    ],
};
export const ServiceContainer = (): JSX.Element => {
    return (
        <section className="py-20">
            <div className="flex justify-between max-w-6xl gap-16 mx-auto">
                <div className="flex-2">
                    <img src="/assets/service-thumb.png" loading="lazy" />
                </div>
                <div className="flex-1">
                    <div>
                        <h5 className="font-medium text-red-500 uppercase">{data?.subTitle}</h5>
                        <h3 className="py-5 text-5xl font-normal leading-tight">{data?.title}</h3>
                    </div>
                    {data?.features?.map((feature, i) => (
                        <div key={i}>
                            <div className="flex gap-4 py-4">
                                <div className="justify-start mt-3">
                                    <img src={feature.imgSrc} alt={feature?.altText} width="100px" height="100px" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">{feature?.title}</h3>
                                    <p className="leading-loose">{feature?.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
