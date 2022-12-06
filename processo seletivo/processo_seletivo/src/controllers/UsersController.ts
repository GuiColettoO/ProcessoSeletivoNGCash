import { Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { UsersRepository } from "../repositories/UsersRepositories";
import bcrypt from "bcrypt";
import { AcountRepository } from "../repositories/AccountsRepositories";
import 'dotenv/config'
import jwt from "jsonwebtoken";

export class UsersController{

    async create(req: Request, res: Response){
        const { username, password } = req.body

        console.log(password);
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        console.log(hashPassword)

        const newUser = UsersRepository.create({
            username,
            password: hashPassword
        })

        await UsersRepository.save(newUser)

        const {password: _, ...user} = newUser
        
        const newAccount = AcountRepository.create({
            balance:  100,
            userid: user.id
        })

        await AcountRepository.save(newAccount)
        return res.status(201).json(user)
    }

    async login(req: Request, res: Response) {
        const {username, password} = req.body
        
        const usertoken = await UsersRepository.findOneBy({ username })
        const verifyPass = await bcrypt.compare(password, usertoken?.password ?? '')

        if (!usertoken || !verifyPass ){
            throw new BadRequestError('Username ou Password inválidos')
        }

        const token = jwt.sign({ id: usertoken.id}, process.env.JWT_PASS ?? '', { expiresIn: '24h'})

        const {password: _, ...userlogin} = usertoken

        return res.json({
            user: userlogin,
            token: token
        })
    } 

    async getProfile(req: Request, res: Response){
    return res.json(req.user)
    }

}
