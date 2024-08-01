/*
  Warnings:

  - You are about to drop the column `activityId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_activityId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `activityId`;

-- CreateTable
CREATE TABLE `_ActivityToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ActivityToUser_AB_unique`(`A`, `B`),
    INDEX `_ActivityToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ActivityToUser` ADD CONSTRAINT `_ActivityToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Activity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ActivityToUser` ADD CONSTRAINT `_ActivityToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
