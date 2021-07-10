import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1625853491469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "author",
                        type: "varchar"
                    },
                    {
                        name: "publisher",
                        type: "varchar"
                    },
                    {
                        name: "publication",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    },
                    {
                        name: "borrowedBy",
                        type: "varchar"
                    },
                    {
                        name: "borrowedAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
