// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2533IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2533Icon(props: Group2533IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 192 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"18"} cy={"18"} r={"18"} fill={"currentColor"}></circle>

      <circle cx={"56.7"} cy={"18"} r={"18"} fill={"currentColor"}></circle>

      <circle cx={"96.001"} cy={"18"} r={"18"} fill={"currentColor"}></circle>

      <circle cx={"135"} cy={"18"} r={"18"} fill={"currentColor"}></circle>

      <circle cx={"174"} cy={"18"} r={"18"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Group2533Icon;
/* prettier-ignore-end */
