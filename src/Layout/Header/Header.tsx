import { Link } from 'react-scroll';
import Image from 'next/image';
import menuItems from '@/data/header.data';
import { Button } from '@/components/';
const Header = (): JSX.Element => {
    return (
        <header className="sticky top-0 bg-white border-b-2">
            <div className="container flex items-center justify-between max-w-6xl py-3 mx-auto">
                <Image src={`/assets/logo.svg`} height={50} width={200} />
                <nav className="flex justify-between gap-20">
                    {menuItems.map(({ path, label }, i) => (
                        <Link
                            to={path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            key={i}
                            className={i === 0 ? 'text-red-600' : ''}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                <Button>Get started</Button>
            </div>
        </header>
    );
};

export default Header;
