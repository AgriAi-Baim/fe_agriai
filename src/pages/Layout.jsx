import clsx from 'clsx';
import React from 'react';

const Layout = (props) => {
    return (
        <div className = {clsx('container-sm', 'mt-5')}>
            {props.children}
        </div>
    );
}

export default Layout;
