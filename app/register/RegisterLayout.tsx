import Image from "next/image";
import { PropsWithChildren } from "react";

import "./RegisterLayout.css";

export default function RegisterLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="register-layout">
      <div className="register-layout__container">
        <div className="">
          <div className="">
            <Image
              priority
              width={750}
              height={750}
              alt=""
              src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
              className="register-layout__img"
            />
          </div>
        </div>
        <div className="">
          <div className="register-layout__card">{props.children}</div>
        </div>
        <svg
          viewBox="0 0 91 91"
          className="register-layout__swash register-layout__swash--top"
          fill="currentColor"
        >
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g fillRule="nonzero">
              <g>
                <g>
                  <circle cx="3.261" cy="3.445" r="2.72" />
                  <circle cx="15.296" cy="3.445" r="2.719" />
                  <circle cx="27.333" cy="3.445" r="2.72" />
                  <circle cx="39.369" cy="3.445" r="2.72" />
                  <circle cx="51.405" cy="3.445" r="2.72" />
                  <circle cx="63.441" cy="3.445" r="2.72" />
                  <circle cx="75.479" cy="3.445" r="2.72" />
                  <circle cx="87.514" cy="3.445" r="2.719" />
                </g>
                <g transform="translate(0 12)">
                  <circle cx="3.261" cy="3.525" r="2.72" />
                  <circle cx="15.296" cy="3.525" r="2.719" />
                  <circle cx="27.333" cy="3.525" r="2.72" />
                  <circle cx="39.369" cy="3.525" r="2.72" />
                  <circle cx="51.405" cy="3.525" r="2.72" />
                  <circle cx="63.441" cy="3.525" r="2.72" />
                  <circle cx="75.479" cy="3.525" r="2.72" />
                  <circle cx="87.514" cy="3.525" r="2.719" />
                </g>
                <g transform="translate(0 24)">
                  <circle cx="3.261" cy="3.605" r="2.72" />
                  <circle cx="15.296" cy="3.605" r="2.719" />
                  <circle cx="27.333" cy="3.605" r="2.72" />
                  <circle cx="39.369" cy="3.605" r="2.72" />
                  <circle cx="51.405" cy="3.605" r="2.72" />
                  <circle cx="63.441" cy="3.605" r="2.72" />
                  <circle cx="75.479" cy="3.605" r="2.72" />
                  <circle cx="87.514" cy="3.605" r="2.719" />
                </g>
                <g transform="translate(0 36)">
                  <circle cx="3.261" cy="3.686" r="2.72" />
                  <circle cx="15.296" cy="3.686" r="2.719" />
                  <circle cx="27.333" cy="3.686" r="2.72" />
                  <circle cx="39.369" cy="3.686" r="2.72" />
                  <circle cx="51.405" cy="3.686" r="2.72" />
                  <circle cx="63.441" cy="3.686" r="2.72" />
                  <circle cx="75.479" cy="3.686" r="2.72" />
                  <circle cx="87.514" cy="3.686" r="2.719" />
                </g>
                <g transform="translate(0 49)">
                  <circle cx="3.261" cy="2.767" r="2.72" />
                  <circle cx="15.296" cy="2.767" r="2.719" />
                  <circle cx="27.333" cy="2.767" r="2.72" />
                  <circle cx="39.369" cy="2.767" r="2.72" />
                  <circle cx="51.405" cy="2.767" r="2.72" />
                  <circle cx="63.441" cy="2.767" r="2.72" />
                  <circle cx="75.479" cy="2.767" r="2.72" />
                  <circle cx="87.514" cy="2.767" r="2.719" />
                </g>
                <g transform="translate(0 61)">
                  <circle cx="3.261" cy="2.846" r="2.72" />
                  <circle cx="15.296" cy="2.846" r="2.719" />
                  <circle cx="27.333" cy="2.846" r="2.72" />
                  <circle cx="39.369" cy="2.846" r="2.72" />
                  <circle cx="51.405" cy="2.846" r="2.72" />
                  <circle cx="63.441" cy="2.846" r="2.72" />
                  <circle cx="75.479" cy="2.846" r="2.72" />
                  <circle cx="87.514" cy="2.846" r="2.719" />
                </g>
                <g transform="translate(0 73)">
                  <circle cx="3.261" cy="2.926" r="2.72" />
                  <circle cx="15.296" cy="2.926" r="2.719" />
                  <circle cx="27.333" cy="2.926" r="2.72" />
                  <circle cx="39.369" cy="2.926" r="2.72" />
                  <circle cx="51.405" cy="2.926" r="2.72" />
                  <circle cx="63.441" cy="2.926" r="2.72" />
                  <circle cx="75.479" cy="2.926" r="2.72" />
                  <circle cx="87.514" cy="2.926" r="2.719" />
                </g>
                <g transform="translate(0 85)">
                  <circle cx="3.261" cy="3.006" r="2.72" />
                  <circle cx="15.296" cy="3.006" r="2.719" />
                  <circle cx="27.333" cy="3.006" r="2.72" />
                  <circle cx="39.369" cy="3.006" r="2.72" />
                  <circle cx="51.405" cy="3.006" r="2.72" />
                  <circle cx="63.441" cy="3.006" r="2.72" />
                  <circle cx="75.479" cy="3.006" r="2.72" />
                  <circle cx="87.514" cy="3.006" r="2.719" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          viewBox="0 0 91 91"
          className="register-layout__swash register-layout__swash--bottom"
          fill="currentColor"
        >
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <g fillRule="nonzero">
              <g>
                <g>
                  <circle cx="3.261" cy="3.445" r="2.72" />
                  <circle cx="15.296" cy="3.445" r="2.719" />
                  <circle cx="27.333" cy="3.445" r="2.72" />
                  <circle cx="39.369" cy="3.445" r="2.72" />
                  <circle cx="51.405" cy="3.445" r="2.72" />
                  <circle cx="63.441" cy="3.445" r="2.72" />
                  <circle cx="75.479" cy="3.445" r="2.72" />
                  <circle cx="87.514" cy="3.445" r="2.719" />
                </g>
                <g transform="translate(0 12)">
                  <circle cx="3.261" cy="3.525" r="2.72" />
                  <circle cx="15.296" cy="3.525" r="2.719" />
                  <circle cx="27.333" cy="3.525" r="2.72" />
                  <circle cx="39.369" cy="3.525" r="2.72" />
                  <circle cx="51.405" cy="3.525" r="2.72" />
                  <circle cx="63.441" cy="3.525" r="2.72" />
                  <circle cx="75.479" cy="3.525" r="2.72" />
                  <circle cx="87.514" cy="3.525" r="2.719" />
                </g>
                <g transform="translate(0 24)">
                  <circle cx="3.261" cy="3.605" r="2.72" />
                  <circle cx="15.296" cy="3.605" r="2.719" />
                  <circle cx="27.333" cy="3.605" r="2.72" />
                  <circle cx="39.369" cy="3.605" r="2.72" />
                  <circle cx="51.405" cy="3.605" r="2.72" />
                  <circle cx="63.441" cy="3.605" r="2.72" />
                  <circle cx="75.479" cy="3.605" r="2.72" />
                  <circle cx="87.514" cy="3.605" r="2.719" />
                </g>
                <g transform="translate(0 36)">
                  <circle cx="3.261" cy="3.686" r="2.72" />
                  <circle cx="15.296" cy="3.686" r="2.719" />
                  <circle cx="27.333" cy="3.686" r="2.72" />
                  <circle cx="39.369" cy="3.686" r="2.72" />
                  <circle cx="51.405" cy="3.686" r="2.72" />
                  <circle cx="63.441" cy="3.686" r="2.72" />
                  <circle cx="75.479" cy="3.686" r="2.72" />
                  <circle cx="87.514" cy="3.686" r="2.719" />
                </g>
                <g transform="translate(0 49)">
                  <circle cx="3.261" cy="2.767" r="2.72" />
                  <circle cx="15.296" cy="2.767" r="2.719" />
                  <circle cx="27.333" cy="2.767" r="2.72" />
                  <circle cx="39.369" cy="2.767" r="2.72" />
                  <circle cx="51.405" cy="2.767" r="2.72" />
                  <circle cx="63.441" cy="2.767" r="2.72" />
                  <circle cx="75.479" cy="2.767" r="2.72" />
                  <circle cx="87.514" cy="2.767" r="2.719" />
                </g>
                <g transform="translate(0 61)">
                  <circle cx="3.261" cy="2.846" r="2.72" />
                  <circle cx="15.296" cy="2.846" r="2.719" />
                  <circle cx="27.333" cy="2.846" r="2.72" />
                  <circle cx="39.369" cy="2.846" r="2.72" />
                  <circle cx="51.405" cy="2.846" r="2.72" />
                  <circle cx="63.441" cy="2.846" r="2.72" />
                  <circle cx="75.479" cy="2.846" r="2.72" />
                  <circle cx="87.514" cy="2.846" r="2.719" />
                </g>
                <g transform="translate(0 73)">
                  <circle cx="3.261" cy="2.926" r="2.72" />
                  <circle cx="15.296" cy="2.926" r="2.719" />
                  <circle cx="27.333" cy="2.926" r="2.72" />
                  <circle cx="39.369" cy="2.926" r="2.72" />
                  <circle cx="51.405" cy="2.926" r="2.72" />
                  <circle cx="63.441" cy="2.926" r="2.72" />
                  <circle cx="75.479" cy="2.926" r="2.72" />
                  <circle cx="87.514" cy="2.926" r="2.719" />
                </g>
                <g transform="translate(0 85)">
                  <circle cx="3.261" cy="3.006" r="2.72" />
                  <circle cx="15.296" cy="3.006" r="2.719" />
                  <circle cx="27.333" cy="3.006" r="2.72" />
                  <circle cx="39.369" cy="3.006" r="2.72" />
                  <circle cx="51.405" cy="3.006" r="2.72" />
                  <circle cx="63.441" cy="3.006" r="2.72" />
                  <circle cx="75.479" cy="3.006" r="2.72" />
                  <circle cx="87.514" cy="3.006" r="2.719" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
