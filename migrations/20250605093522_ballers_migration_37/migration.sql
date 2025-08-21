-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_clubId_fkey`;

-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_clubId_fkey`;

-- AlterTable
ALTER TABLE `Activity` MODIFY `clubId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `clubId` VARCHAR(191) NULL,
    MODIFY `clubOnboarding` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
