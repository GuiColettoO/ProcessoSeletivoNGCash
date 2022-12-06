import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transactions } from "./Transactions";
import { Users } from "./Users";

@Entity('accounts')
export class Accounts{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    balance: number

    @OneToOne(() => Users, useraccount => useraccount.id)
    @JoinColumn({name: 'userid '})
    userid: number 

    @OneToMany(() => Transactions, (debitedtransaction) => debitedtransaction.debitedaccount)
    debitedtransactions: Transactions[]

    @OneToMany(() => Transactions, (creditetransaction) => creditetransaction.crediteaccount)
    creditetransactions: Transactions[]

    
}
