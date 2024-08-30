-- AlterTable
ALTER TABLE `PlayerTraining` ADD COLUMN `trainingIndex` INTEGER NOT NULL DEFAULT -1;

-- AlterTable
ALTER TABLE `PlayerTrainingLevel` ADD COLUMN `trainingProgramLevelIndex` INTEGER NOT NULL DEFAULT -1;

-- AlterTable
ALTER TABLE `PlayerTrainingWeek` ADD COLUMN `trainingProgramWeekIndex` INTEGER NOT NULL DEFAULT -1;
