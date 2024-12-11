-- AlterTable
ALTER TABLE `PlayerTrainingProgram` MODIFY `subscriptionType` ENUM('RECURRING', 'ONE_OFF', 'FREE', 'CLUB', 'AI', 'ACTIVITY') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `disability` BOOLEAN NOT NULL DEFAULT false;
