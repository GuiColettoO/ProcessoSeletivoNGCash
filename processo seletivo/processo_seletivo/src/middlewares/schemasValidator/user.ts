import * as yup from 'yup';
import { pt } from 'yup-locale-pt';

yup.setLocale(pt);

export const bodyCreateUser = yup.object({
    body: yup.object({
        username: yup.string().min(3).required(),
        password: yup.string().matches(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/).required(),
    })
})

