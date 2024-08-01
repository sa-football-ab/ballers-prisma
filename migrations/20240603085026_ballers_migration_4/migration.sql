-- AlterTable
ALTER TABLE `PlayerTrainingProgram` MODIFY `subscriptionType` ENUM('RECURRING', 'ONE_OFF', 'FREE', 'CLUB', 'AI') NOT NULL;
