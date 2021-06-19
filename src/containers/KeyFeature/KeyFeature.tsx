import React from 'react';
import { ContainerHeader, FeatureCardColumn } from '@/components';
import { data } from '@/data/key-features';

export const KeyFeature = (): JSX.Element => {
    return (
        <section id="feature" className="mt-32">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <ContainerHeader slogan="Whats the function" title="Meet the feature of product" />
                </div>
                <div className="grid grid-cols-4 gap-8 my-20">
                    {data.map((item) => (
                        <FeatureCardColumn
                            key={item.id}
                            src={item.imgSrc}
                            altText={item.altText}
                            title={item.title}
                            text={item.text}
                        ></FeatureCardColumn>
                    ))}
                </div>
            </div>
        </section>
    );
};
