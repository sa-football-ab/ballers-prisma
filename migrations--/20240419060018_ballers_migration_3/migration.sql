/*
  Warnings:

  - You are about to drop the column `trainingId` on the `PlayerTraining` table. All the data in the column will be lost.
  - You are about to drop the column `trainingProgramLevelId` on the `PlayerTrainingLevel` table. All the data in the column will be lost.
  - You are about to drop the column `trainingProgramWeekId` on the `PlayerTrainingWeek` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PlayerTraining` DROP COLUMN `trainingId`;

-- AlterTable
ALTER TABLE `PlayerTrainingLevel` DROP COLUMN `trainingProgramLevelId`;

-- AlterTable
ALTER TABLE `PlayerTrainingWeek` DROP COLUMN `trainingProgramWeekId`;
