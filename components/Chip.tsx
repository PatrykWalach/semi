import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export const Chip = (props: PropsWithChildren<{}>) => {
  return (
    <span
      className="bg-secondary-container inline-flex items-center leading-none text-sm font-medium text-on-secondary-container pt-1.5 pe-3 pb-1.5 ps-3
  rounded-full uppercase gap-2"
    >
      {props.children}
    </span>
  );
};


export const ChipIcon = (props:ComponentPropsWithoutRef<'div'>)=>{
  return <div {...props}  className="last:-me-1 first:-ms-1"> 
  </div>
}