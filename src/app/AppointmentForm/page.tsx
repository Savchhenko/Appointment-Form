"use client";

import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Image from "next/image";

import EmailInput from "@/components/EmailInput";
import PhoneInput from "@/components/PhoneInput";

import { useForm, Controller } from "react-hook-form";

import styles from "./appointment.form.module.css";

const AppointmentForm: React.FC = () => {
    const defaultValues = {
        nickname: "Иван Константинов",
        email: "example@email.ru",
        phone: "+79997207788",
        promocode: "",
    };

    const { handleSubmit, control, setError, } = useForm({ defaultValues });

    const onSubmit = (data: Object) => {
        console.log(data)
    };


    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Modal
                open={true}
                // onClose={handleClose}
                className={styles.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Card style={{height: "95vh"}}>
                    <CardContent style={{height: "100%"}}>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" gutterBottom
                                        sx={{textDecoration: "underline 3px #1976d2", textDecorationSkipInk: "none"}}
                                    >
                                        Специалист
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Stack direction="row" sx={{alignItems: "center"}}>
                                        <Image
                                            src="/person.png"
                                            alt="person"
                                            width={48}
                                            height={48}
                                        />
                                        <Typography variant="h6" gutterBottom sx={{marginLeft: "12px", marginBottom: "0"}}>
                                            Петрушенко Евгения
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        Дата и время
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" gutterBottom>
                                        there should be Date and Time pckers
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" gutterBottom>
                                        Длительность сеанса - 2 часа
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        Имя или псевдоним
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Controller
                                        control={ control }
                                        name="nickname"
                                        render={({ field: { onChange, value }}) => (
                                            <TextField
                                                fullWidth={true}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    <Typography
                                        variant="body2"
                                        className={styles.nicknameTooltip}
                                        sx={{marginTop: "4px"}}
                                    >
                                        Сгенерировать псевдоним
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" gutterBottom>
                                        Можете указать псевдоним, если не хотите раскрывать имя. Ваши данные строго конфиденциальны
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        EMAIL
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <EmailInput
                                        name="email"
                                        control={control}
                                        setError={setError}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        Телефон
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <PhoneInput
                                        name="phone"
                                        control={control}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2} sx={{display: "flex", alignItems: "center"}}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        Промокод
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Controller
                                        control={ control }
                                        name="promocode"
                                        render={({ field: { onChange, value }}) => (
                                            <TextField
                                                fullWidth={true}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" gutterBottom>
                                        Код из подарочного сертификата тоже сюда
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        Согласия
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Принять пользовательское соглашение и договор оферты"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked />}
                                            label="Согласие на обработку данных"
                                        />
                                    </FormGroup>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} className={styles.totalContainer}>
                                <Grid item xs={2}>
                                    <Typography variant="overline" display="block" sx={{marginTop: "2px"}}>
                                        Итого
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack direction="row">
                                        <span className={styles.totalPrice}>4 965</span>
                                        <Button
                                            variant="contained"
                                            sx={{borderRadius: "20px", width: "50%"}}
                                            type="submit"
                                        >
                                            Оплатить
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" gutterBottom>
                                        После оплаты мы пришлем вам доступ на платформу
                                    </Typography>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Modal>
        </div>
    )
};

export default AppointmentForm;