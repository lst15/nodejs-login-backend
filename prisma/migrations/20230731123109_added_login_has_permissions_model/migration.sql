-- AlterTable
ALTER TABLE `permission` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Login_has_Permission` (
    `uuid` VARCHAR(191) NOT NULL,
    `uuid_login` VARCHAR(191) NOT NULL,
    `uuid_permission` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Login_has_Permission` ADD CONSTRAINT `Login_has_Permission_uuid_login_fkey` FOREIGN KEY (`uuid_login`) REFERENCES `Login`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Login_has_Permission` ADD CONSTRAINT `Login_has_Permission_uuid_permission_fkey` FOREIGN KEY (`uuid_permission`) REFERENCES `Permission`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
