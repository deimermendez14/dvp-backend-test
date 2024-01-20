import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRows1705778414213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
            INSERT INTO "Users" ( status, created_at, updated_at)
            VALUES
              ( 'true', now(), now()),
              ( 'true', now(), now()),
              ( 'true', now(), now());
            
            
            INSERT INTO "Tickets" ( user_id, status, created_at, updated_at)
            VALUES
              ( (SELECT id FROM "Users" LIMIT 1), true, now(), now()),
              ( (SELECT id FROM "Users" LIMIT 1), true, now(), now()),
              ( (SELECT id FROM "Users" LIMIT 1), true, now(), now());
            
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
          DELETE FROM "Tickets";
          DELETE FROM "Users";
          
            
            `,
    );
  }
}
