import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Accounts } from "./Accounts";


@Entity('transactions')
export class Transactions{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Accounts, crediteaccount => crediteaccount.creditetransactions)
    @JoinColumn({name: 'creditedAccountId  '})
    crediteaccount : Accounts 

    @ManyToOne(() => Accounts, debitedaccount => debitedaccount.debitedtransactions)
    @JoinColumn({name: 'debitedAccountId '})
    debitedaccount : Accounts 
}