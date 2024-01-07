import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import './Chip.css';

export const Chip = (props: PropsWithChildren<{}>) => {
  return (
    <span
      className="chip"
    >
      {props.children}
    </span>
  );
};


export const ChipIcon = (props:ComponentPropsWithoutRef<'div'>)=>{
  return <div {...props}  className="chip__icon"> 
  </div>
}