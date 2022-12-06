import { NextFunction, Request, Response } from "express";
import { AnyObject } from 'yup/lib/types'
import { ValidationError } from 'yup'

interface yupErrors {
    errors: string[];
}
export const validate = (schema: AnyObject) => async (req: Request, res: Response, next: NextFunction ) => { 
    try {
        console.log('to no middlleware')
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        },
        {
            abortEarly: false,
        });
        return next();
    } catch (error: any) {
        return res.status(400).json({ errors: error.errors })
    }
}
