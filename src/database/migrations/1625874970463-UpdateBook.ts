import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateBook1625874970463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const newColumn = new TableColumn 
        newColumn.name = "borrowedBy";
        newColumn.type = "varchar";
        newColumn.isNullable = true;

        await queryRunner.changeColumn("books", "borrowedBy", newColumn)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
