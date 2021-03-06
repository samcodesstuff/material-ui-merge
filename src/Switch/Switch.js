import React from "react";
import PropTypes from "prop-types";
import SwitchM from "@material-ui/core/Switch";

function Switch(props) {
  return <SwitchM {...props} />;
}

Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary", "default"]),

  defaultChecked: PropTypes.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),

  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * The input component property `type`.
   */
  type: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
};

export { Switch as default };
