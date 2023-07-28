-- CreateTable
CREATE TABLE `Permission` (
    `uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `Permission_name_key`(`name`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
