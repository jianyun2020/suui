import React, { HTMLAttributes, useState } from "react";
import classNames from "classnames";

type AlertType = "success" | "default" | "danger" | "warning";

interface AlertProps {
  type?: AlertType;
  message?: string;
  description?: string;
  className?: string;
}

const Alert = (props: AlertProps) => {
  const { type, message, description, className } = props;
  const [close, setClose] = useState(false)

  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });

  return (
    <div className={classes} style={{ display: close ? 'none' : 'flex'}}>
      <div>
        { message ? <div className="alert-message">{message}</div> : null }
        { description ? <div className="alert-description">{description}</div> : null }
      </div>
      <button className="alert-btn" onClick={() => setClose(true)}>X</button>
    </div>
  );
};

Alert.defaultProps = {
  type: "default",
};

export default Alert;
