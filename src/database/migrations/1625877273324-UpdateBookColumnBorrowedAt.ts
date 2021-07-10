import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateBookColumnBorrowedAt1625877273324 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const newColumn = new TableColumn 
        newColumn.name = "borrowedAt";
        newColumn.type = "timestamp";
        newColumn.isNullable = true;

        await queryRunner.changeColumn("books", "borrowedAt", newColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
