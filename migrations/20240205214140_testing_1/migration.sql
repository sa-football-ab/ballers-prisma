/*
  Warnings:

  - You are about to drop the column `lastUserId` on the `Install` table. All the data in the column will be lost.
  - You are about to drop the column `linkId` on the `LinkedUserId` table. All the data in the column will be lost.
  - You are about to drop the `LinkedAccounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Install_userId_key` ON `Install`;

-- AlterTable
ALTER TABLE `Install` DROP COLUMN `lastUserId`,
    ADD COLUMN `installId` VARCHAR(191) NULL,
    ADD COLUMN `latestUserId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `LinkedUserId` DROP COLUMN `linkId`;

-- DropTable
DROP TABLE `LinkedAccounts`;

-- DropTable
DROP TABLE `User`;
