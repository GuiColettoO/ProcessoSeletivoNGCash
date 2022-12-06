import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668973633397 implements MigrationInterface {
    name = 'default1668973633397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DEFAULT '2022-11-20 16:46:43.269376'`);
    }

}
