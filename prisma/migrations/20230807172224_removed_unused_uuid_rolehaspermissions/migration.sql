/*
  Warnings:

  - The primary key for the `rolehaspermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `rolehaspermission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `rolehaspermission` DROP PRIMARY KEY,
    DROP COLUMN `uuid`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
