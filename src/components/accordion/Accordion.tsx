import React, { useState } from 'react';
import './Accordion.scss';

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<IAccordion> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const onClickAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className={`accordion ${open ? 'accordion_active' : ''}`}>
      <div className="accordion__title">
        {title} <i className="accordion__icon" onClick={onClickAccordion} />
      </div>
      <div className="accordion__child">
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};
