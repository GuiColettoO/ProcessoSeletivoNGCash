import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Accounts } from "./Accounts"

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ 
        type: 'varchar',
        length: 150,
        unique: true
    })
    username: string 

    @Column({ 
        type: 'varchar',
        length: 150
})
    password: string 

    @OneToOne(() => Accounts, (accountuser) => accountuser.userid)
    accontuser: Users
}
