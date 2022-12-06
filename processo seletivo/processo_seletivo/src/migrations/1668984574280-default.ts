import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668984574280 implements MigrationInterface {
    name = 'default1668984574280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-20 19:47:21.786441'`);
    }

}
