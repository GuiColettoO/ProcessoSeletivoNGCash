import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668986169055 implements MigrationInterface {
    name = 'default1668986169055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-20 20:15:10.506823'`);
    }

}
