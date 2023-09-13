// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.702.01c-3.971-.187-7.656 2.41-9.68 5.93C.99 7.61.302 9.65 0 11.502c.65-.185 1.167.186 1.755-.556 1.223-1.112 1.766-2.039 2.21-3.522.759-1.668 2.417-4.263 3.888-3.707 1.347.37 1.944 1.112 3.888 1.112s2.54-.741 3.888-1.112c1.472-.556 3.13 2.039 3.888 3.707.443 1.483.91 2.41 2.132 3.522.59.742 1.105.37 1.756.556-.303-1.853-.992-3.893-2.022-5.56-2.023-3.523-5.71-6.118-9.68-5.933z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
