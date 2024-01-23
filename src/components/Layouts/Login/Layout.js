import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;