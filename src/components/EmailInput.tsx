import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const EmailInput = (props: any) => { //TODO change any on EmailInputProps type
    const { name, control, setError, ...restProps } = props;

    const handleEmail = (email: string) => {
        if (email.match(/\S+@\S+\.\S+/) === null) {
            setError("email", { type: "custom", message: "Введите корректный email в формате ****@**.** " })
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    onBlur={(e) => { handleEmail(e.target.value);}}
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={(e) => {onChange(e)}}
                    value={value}
                    InputProps={{ classes: { input: "browser-default" } }}
                    inputProps={name === "name" ? { maxLength: 64 } : {}}
                    type="email"
                    {...restProps}
                />
            )}
        />
    );
};

export default EmailInput;