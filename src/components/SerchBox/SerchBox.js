import React from 'react';
import { connect } from 'react-redux';

import { initiatSearch } from '../../store/modules/serchox/index';

import 'tachyons';

const SearchBox = ({ initiatSearch: initSearch }) => {
    const HandleChange = (e) => initSearch(e.target.value)

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

const mapDispatchToProps = {
    initiatSearch
};

export default connect(null, mapDispatchToProps)(SearchBox);
