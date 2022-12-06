import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668984410190 implements MigrationInterface {
    name = 'default1668984410190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-20 19:45:27.968306'`);
    }

}
