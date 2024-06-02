import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const PhoneInput = (props: any) => { //TODO change any on PhoneInputProps type
    const { name, control, ...restProps } = props;
    const [telValue, setTelValue] = useState("+7 (999) 720 - 77 - 88");

    const handleTelChange = (tel: string) => {
        const validTel = tel
            .replace(/\D/g, "")
            .replace("+", "")
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/) || "";
        const maskedTel = !validTel[2]
            ? "+7 ("
            : `+7 (${validTel[2]}${`${
                validTel[3] ? `) ${validTel[3]}` : ''
                }`}${`${validTel[4] ? ` - ${validTel[4]}` : ''
                }`}${`${validTel[5] ? ` - ${validTel[5]}` : ''}`}`;
        setTelValue(maskedTel);
    };

    const onDisabledField = () => {
        console.log("we should send a code and open modal window")
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <TextField
                    onBlur={onDisabledField}
                    error={!!error}
                    onChange={(e) => {onChange(e); handleTelChange(e.target.value)}}
                    value={telValue}
                    InputProps={{ classes: { input: "browser-default" } }}
                    {...restProps}
                />
            )}
        />
    );
};

export default PhoneInput;