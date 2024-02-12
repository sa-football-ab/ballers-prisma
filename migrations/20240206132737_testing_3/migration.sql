/*
  Warnings:

  - You are about to drop the column `installId` on the `Install` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Install_installId_key` ON `Install`;

-- AlterTable
ALTER TABLE `Install` DROP COLUMN `installId`;

-- CreateTable
CREATE TABLE `LinkedAccounts` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `externalAccountType` VARCHAR(191) NOT NULL,
    `externalAccountId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
