import React from "react";
import { TextField } from "@mui/material";

const TextInput = ({ disabled, label, variant, type, textInputStyle, ...props }) => {
    return (
        <TextField
          className={textInputStyle}
          disabled={disabled}
          label={label}
          variant={variant}
          type={type}
          {...props}
        />
    )
}

export default TextInput;
