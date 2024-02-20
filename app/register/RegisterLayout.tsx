const Image = "img"
import { PropsWithChildren } from "react";

export default function RegisterLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="relative lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center w-full pt-5 pb-20 lg:pt-20 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pe-10">
              <Image
              priority
                width={750}
                height={750}
                alt=""
                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                className="mix-blend-multiply rtl:-scale-x-100"
              />
            </div>
          </div>
          <div className="w-full mt-20 me-0 mb-0 ms-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="flex flex-col items-start justify-start pt-10 pe-10 pb-10 pl-10 bg-surface rounded-xl
          relative z-10"
            >
              {props.children}
            </div>
          </div>
          <svg
            viewBox="0 0 91 91"
            className="absolute top-0 start-0 z-0 w-32 h-32 text-tertiary-container
          fill-current"
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
            className="absolute bottom-0 end-0 z-0 w-32 h-32 text-primary-container
          fill-current"
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
    </div>
  );
}
