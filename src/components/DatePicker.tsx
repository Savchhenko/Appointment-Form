"use client";

import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type DateType = {
    name: string,
    control: any,
};

const DatePickerForm = (props: DateType) => {
    const { name = "date", control } = props;

    // const handleChangeStart = (onChange, newValue) => {
    //     onChange(newValue)
    //     setDate && setDate(newValue)
    // };

    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={ AdapterDayjs } >
                    <DatePicker />
                </LocalizationProvider >
            ) }
        />
    );
};

export default DatePickerForm;