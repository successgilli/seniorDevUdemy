import React from 'react';

import 'tachyons';

const SearchBox = ({ changeEvent }) => {
    const HandleChange = (e) => changeEvent(e.target.value);

    return (
        <div className="pa2">
            <input
                onChange={HandleChange}
                className="pa3 ba b---green bg-lightest-blue"
                type="search"
                placeholder="Search robo"
            />
        </div>
    );
};

export default SearchBox;
