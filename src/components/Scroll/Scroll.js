import React from 'react';

const Scroll = ({ children }) => {
    return (
        <div className="tjk" style={{overflowY: 'scroll', height: '80vh'}}>
            {children}
        </div>
    );
};

export default Scroll;
