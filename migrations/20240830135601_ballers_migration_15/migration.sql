-- DropForeignKey
ALTER TABLE `Activity` DROP FOREIGN KEY `Activity_teamId_fkey`;

-- AlterTable
ALTER TABLE `Activity` MODIFY `teamId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Activity` ADD CONSTRAINT `Activity_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
