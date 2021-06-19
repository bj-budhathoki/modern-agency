import React, { ReactNode } from 'react';
import Header from './Header/Header';
interface Iprops {
    children: ReactNode;
}
const Layout = ({ children }: Iprops): JSX.Element => {
    return (
        <main>
            <Header />
            {children}
        </main>
    );
};

export default Layout;
