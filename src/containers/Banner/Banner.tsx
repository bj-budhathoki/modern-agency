import { Button } from '@/components';
import React from 'react';
export const Banner = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center py-12 ">
            <div className="flex flex-col items-center justify-center w-2/4 gap-8 text-center">
                <h3 className="text-6xl font-medium leading-snug">Top Quality Digital Products To Explore</h3>
                <p className="text-2xl leading-relaxed">
                    Get your blood tests delivered at let home collect sample from the victory of the managements that
                    supplies best design system guidelines ever.
                </p>
                <div className="w-min">
                    <Button type="primary">Explore</Button>
                </div>
            </div>
        </div>
    );
};
