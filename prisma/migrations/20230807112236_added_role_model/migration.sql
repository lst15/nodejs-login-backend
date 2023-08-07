/*
  Warnings:

  - You are about to drop the `login_has_permission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `login_has_permission` DROP FOREIGN KEY `Login_has_Permission_uuid_login_fkey`;

-- DropForeignKey
ALTER TABLE `login_has_permission` DROP FOREIGN KEY `Login_has_Permission_uuid_permission_fkey`;

-- AlterTable
ALTER TABLE `login` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `login_has_permission`;

-- CreateTable
CREATE TABLE `Role` (
    `uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(10) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Role_name_key`(`name`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleHasPermission` (
    `uuid` VARCHAR(191) NOT NULL,
    `uuid_role` VARCHAR(191) NOT NULL,
    `uuid_permission` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `roleHasPermission_uuid_role_uuid_permission_key`(`uuid_role`, `uuid_permission`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Login` ADD CONSTRAINT `Login_role_fkey` FOREIGN KEY (`role`) REFERENCES `Role`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roleHasPermission` ADD CONSTRAINT `roleHasPermission_uuid_role_fkey` FOREIGN KEY (`uuid_role`) REFERENCES `Role`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roleHasPermission` ADD CONSTRAINT `roleHasPermission_uuid_permission_fkey` FOREIGN KEY (`uuid_permission`) REFERENCES `Permission`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
