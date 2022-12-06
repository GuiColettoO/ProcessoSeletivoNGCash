import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668729051651 implements MigrationInterface {
    name = 'default1668729051651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT 'now()', "creditedAccountId  " integer, "debitedAccountId " integer, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(150) NOT NULL, "password" character varying(40) NOT NULL, "accountId " integer, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "REL_f24515f35a6ce09a863733cc8d" UNIQUE ("accountId "), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" SERIAL NOT NULL, "balance" integer NOT NULL, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_4fd68587da27c8f617470f827ea" FOREIGN KEY ("creditedAccountId  ") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_aa7502c1f3c7c6c5872ac97d9eb" FOREIGN KEY ("debitedAccountId ") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f24515f35a6ce09a863733cc8d0" FOREIGN KEY ("accountId ") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f24515f35a6ce09a863733cc8d0"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_aa7502c1f3c7c6c5872ac97d9eb"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_4fd68587da27c8f617470f827ea"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
    }

}
