-- CreateTable
CREATE TABLE `Login` (
    `uuid` VARCHAR(191) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Login_email_key`(`email`),
    UNIQUE INDEX `Login_uuid_key`(`uuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
