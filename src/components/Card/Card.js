import React, { Fragment } from 'react';

import 'tachyons';

const Card = ({ name, email, id }) => (
    <Fragment>
        <div className="tc bg-light-green dib br3 pa3 grow ma2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?150×150`} />
            <div>
                <h4 className="b">{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    </Fragment>
);

export default Card;
