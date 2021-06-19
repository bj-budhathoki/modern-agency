import Image from 'next/image';
import { Button } from '@/components';
import styles from './Banner.module.css';
export const Banner = (): JSX.Element => {
    return (
        <section className={styles.banner}>
            <div className="flex flex-col items-center justify-center py-12 ">
                <div className="flex flex-col items-center justify-center w-2/4 gap-8 text-center">
                    <h3 className="text-5xl font-medium leading-tight tracking-wide">
                        Top Quality Digital Products To Explore
                    </h3>
                    <p className="text-xl leading-relaxed text-gray-600">
                        Get your blood tests delivered at let home collect sample from the victory of the managements
                        that supplies best design system guidelines ever.
                    </p>
                    <div className="w-min">
                        <Button type="primary">Explore</Button>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <img src="/assets/banner-thumb.png" className="relative h-auto top-20 " />
            </div>
        </section>
    );
};
