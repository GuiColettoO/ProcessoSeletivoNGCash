import { AppDataSource } from "../data-source";
import { Accounts } from "../entities/Accounts";

export const AcountRepository = AppDataSource.getRepository(Accounts)