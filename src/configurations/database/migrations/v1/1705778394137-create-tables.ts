import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1705778394137 implements MigrationInterface {
  name = 'CreateTables1705778394137';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "Users" (
                "id" SERIAL NOT NULL,
                "status" character varying NOT NULL DEFAULT 'true',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "Tickets" (
                "id" SERIAL NOT NULL,
                "user_id" integer NOT NULL,
                "status" boolean NOT NULL DEFAULT '1',
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_6533595a87a7d0e3b7ed082b2aa" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "Tickets"
            ADD CONSTRAINT "FK_74006d3bf0a58b2f54486b9ec5a" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "Tickets" DROP CONSTRAINT "FK_74006d3bf0a58b2f54486b9ec5a"
        `);
    await queryRunner.query(`
            DROP TABLE "Tickets"
        `);
    await queryRunner.query(`
            DROP TABLE "Users"
        `);
  }
}
