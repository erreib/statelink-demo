// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bkfEqT6DY5fNHCcMi2xmXu
// Component: uJg1P0rumXP3

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_statelink_demo_v_2.module.css"; // plasmic-import: bkfEqT6DY5fNHCcMi2xmXu/projectcss
import sty from "./PlasmicToggleButton.module.css"; // plasmic-import: uJg1P0rumXP3/css

createPlasmicElementProxy;

export type PlasmicToggleButton__VariantMembers = {
  position2: "position2";
};
export type PlasmicToggleButton__VariantsArgs = {
  position2?: SingleBooleanChoiceArg<"position2">;
};
type VariantPropType = keyof PlasmicToggleButton__VariantsArgs;
export const PlasmicToggleButton__VariantProps = new Array<VariantPropType>(
  "position2"
);

export type PlasmicToggleButton__ArgsType = {};
type ArgPropType = keyof PlasmicToggleButton__ArgsType;
export const PlasmicToggleButton__ArgProps = new Array<ArgPropType>();

export type PlasmicToggleButton__OverridesType = {
  toggleButton?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultToggleButtonProps {
  position2?: SingleBooleanChoiceArg<"position2">;
  className?: string;
}

function PlasmicToggleButton__RenderFunc(props: {
  variants: PlasmicToggleButton__VariantsArgs;
  args: PlasmicToggleButton__ArgsType;
  overrides: PlasmicToggleButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "position2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.position2
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"toggleButton"}
      data-plasmic-override={overrides.toggleButton}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.toggleButton,
        {
          [sty.toggleButtonposition2]: hasVariant(
            $state,
            "position2",
            "position2"
          )
        }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["updatePosition2"] = true
          ? (() => {
              const actionArgs = {
                vgroup: "position2",
                operation: 2,
                value: "position2"
              };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = p.get($state, vgroup);
                p.set($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          typeof $steps["updatePosition2"] === "object" &&
          typeof $steps["updatePosition2"].then === "function"
        ) {
          $steps["updatePosition2"] = await $steps["updatePosition2"];
        }
        $steps["updateStateVariable"] = true
          ? (() => {
              const actionArgs = {};
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;
                undefined;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          typeof $steps["updateStateVariable"] === "object" &&
          typeof $steps["updateStateVariable"].then === "function"
        ) {
          $steps["updateStateVariable"] = await $steps["updateStateVariable"];
        }
      }}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxposition2]: hasVariant($state, "position2", "position2")
        })}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___83L1,
          {
            [sty.textposition2___83L1JonQg]: hasVariant(
              $state,
              "position2",
              "position2"
            )
          }
        )}
      >
        {"th"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__xf9Qz,
          {
            [sty.textposition2__xf9QZjonQg]: hasVariant(
              $state,
              "position2",
              "position2"
            )
          }
        )}
      >
        {"th-large"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  toggleButton: ["toggleButton", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  toggleButton: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicToggleButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicToggleButton__VariantsArgs;
    args?: PlasmicToggleButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicToggleButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicToggleButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicToggleButton__ArgProps,
          internalVariantPropNames: PlasmicToggleButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicToggleButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "toggleButton") {
    func.displayName = "PlasmicToggleButton";
  } else {
    func.displayName = `PlasmicToggleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleButton = Object.assign(
  // Top-level PlasmicToggleButton renders the root element
  makeNodeComponent("toggleButton"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicToggleButton
    internalVariantProps: PlasmicToggleButton__VariantProps,
    internalArgProps: PlasmicToggleButton__ArgProps
  }
);

export default PlasmicToggleButton;
/* prettier-ignore-end */
