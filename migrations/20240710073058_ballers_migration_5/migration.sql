-- AlterTable
ALTER TABLE `User` ADD COLUMN `activityId` VARCHAR(191) NULL,
    ADD COLUMN `userType` ENUM('PLAYER', 'COACH') NOT NULL DEFAULT 'PLAYER';

-- CreateTable
CREATE TABLE `Activity` (
    `id` VARCHAR(191) NOT NULL,
    `teamId` VARCHAR(191) NOT NULL,
    `clubId` VARCHAR(191) NOT NULL,
    `noOfReg` INTEGER NOT NULL,
    `coach` VARCHAR(191) NOT NULL,
    `activityDate` DATETIME(3) NOT NULL,
    `program` VARCHAR(191) NOT NULL,
    `minAge` INTEGER NOT NULL,
    `maxAge` INTEGER NOT NULL,
    `equipments` JSON NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateUpdated` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
