import { AppDataSource } from "../data-source";
import { Transactions } from "../entities/Transactions";

export const TransactionsRepository = AppDataSource.getRepository(Transactions)