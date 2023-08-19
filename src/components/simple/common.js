import React from 'react';
import Proptypes from 'prop-types';
import Box from './box';
import './common.scss';

const Common = ({ children, className }) => (
    <div className={`common common--max-width ${className ? className : ""}`}>
        {children}
    </div>
);

const CommonCenter = ({ children }) => (
    <div className="common__center common__center--max-width">
        {children}
    </div>
);

const CommonRight = ({ children }) => (
    <div className="common__right common__right--max-width">
        {children}
    </div>
);

const CommonLeft = ({ children }) => (
    <aside className="common__left">
        <Box className="common__left--sticky">
            {children}
        </Box>
    </aside>
);

Common.prototype = {
    className: Proptypes.string,
    children: Proptypes.node.isRequired,
}

CommonRight.prototype = {
    children: Proptypes.node.isRequired,
}


CommonLeft.prototype = {
    children: Proptypes.node.isRequired,
}

CommonCenter.prototype = {
    children: Proptypes.node.isRequired,
}

export {
    Common,
    CommonRight,
    CommonLeft,
    CommonCenter
};