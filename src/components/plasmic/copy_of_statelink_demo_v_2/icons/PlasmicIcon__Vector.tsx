// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 15"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.576 0C11.136 2.04 6.688 4.078 2.25 6.303.51 7.23-.14 9.269.026 11.123c.081 1.112-.352 2.594.857 3.336 1.149.556 2.496.185 3.743.37h40.309c1.495-.185 1.892-1.668 1.746-2.78.027-1.854.132-3.707-1.28-5.005-1.148-1.112-2.789-1.668-4.192-2.41-3.36-1.483-6.72-3.151-10.08-4.634H15.576z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
