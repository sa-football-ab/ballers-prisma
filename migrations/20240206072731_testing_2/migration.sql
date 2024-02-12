/*
  Warnings:

  - A unique constraint covering the columns `[installId]` on the table `Install` will be added. If there are existing duplicate values, this will fail.
  - Made the column `installId` on table `Install` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latestUserId` on table `Install` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Install` MODIFY `installId` VARCHAR(191) NOT NULL,
    MODIFY `latestUserId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Install_installId_key` ON `Install`(`installId`);
