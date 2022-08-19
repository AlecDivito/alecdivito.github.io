import React from 'react';
import Proptypes from 'prop-types';
import Title from './title';
import './section.scss';

const Section = ({ title, varient, children, className }) => (
    <>
        <section className={`section ${className ?? ""}`}>
            <Title className="mb" varient={varient ?? "h2"}>{title}</Title>
            {children}
        </section>
    </>
);

Section.prototype = {
    children: Proptypes.node,
    title: Proptypes.string.isRequired,
    varient: Proptypes.string,
    className: Proptypes.string,
}

export default Section;