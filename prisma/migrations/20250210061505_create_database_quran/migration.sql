-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sura` (
    `id` INTEGER NOT NULL,
    `name` TEXT NOT NULL,
    `translation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quran` (
    `id` INTEGER NOT NULL,
    `suraId` INTEGER NOT NULL,
    `verseID` INTEGER NOT NULL,
    `ayahText` TEXT NOT NULL,
    `indoText` TEXT NOT NULL,
    `readText` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Quran` ADD CONSTRAINT `Quran_suraId_fkey` FOREIGN KEY (`suraId`) REFERENCES `Sura`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
