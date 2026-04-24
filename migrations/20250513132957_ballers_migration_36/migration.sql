/*
  Warnings:

  - You are about to alter the column `subscriptionStatus` on the `Club` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `Club` MODIFY `subscriptionStatus` ENUM('FREE', 'PREMIUM') NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE `PlayerTrainingProgram` MODIFY `subscriptionType` ENUM('RECURRING', 'ONE_OFF', 'FREE', 'PREMIUM', 'CLUB', 'AI', 'ACTIVITY') NOT NULL;
