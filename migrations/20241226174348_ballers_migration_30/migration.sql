-- CreateIndex
CREATE INDEX `PlayerTrainingLevel_playerTrainingProgramId_idx` ON `PlayerTrainingLevel`(`playerTrainingProgramId`);

-- CreateIndex
CREATE INDEX `PlayerTrainingLevel_trainingProgramLevelIndex_idx` ON `PlayerTrainingLevel`(`trainingProgramLevelIndex`);

-- CreateIndex
CREATE INDEX `PlayerTrainingLevel_playerTrainingProgramId_trainingProgramL_idx` ON `PlayerTrainingLevel`(`playerTrainingProgramId`, `trainingProgramLevelIndex`, `userId`);

-- CreateIndex
CREATE INDEX `PlayerTrainingProgram_userId_idx` ON `PlayerTrainingProgram`(`userId`);

-- CreateIndex
CREATE INDEX `PlayerTrainingProgram_trainingProgramId_idx` ON `PlayerTrainingProgram`(`trainingProgramId`);

-- CreateIndex
CREATE INDEX `PlayerTrainingProgram_userId_isLocked_idx` ON `PlayerTrainingProgram`(`userId`, `isLocked`);

-- CreateIndex
CREATE INDEX `PlayerTrainingWeek_playerTrainingProgramLevelId_idx` ON `PlayerTrainingWeek`(`playerTrainingProgramLevelId`);

-- CreateIndex
CREATE INDEX `PlayerTrainingWeek_playerTrainingProgramLevelId_isCompleted_idx` ON `PlayerTrainingWeek`(`playerTrainingProgramLevelId`, `isCompleted`);

-- RenameIndex
ALTER TABLE `Activity` RENAME INDEX `Activity_clubId_fkey` TO `Activity_clubId_idx`;

-- RenameIndex
ALTER TABLE `Activity` RENAME INDEX `Activity_coachUserId_fkey` TO `Activity_coachUserId_idx`;

-- RenameIndex
ALTER TABLE `User` RENAME INDEX `User_clubId_fkey` TO `User_clubId_idx`;

-- RenameIndex
ALTER TABLE `User` RENAME INDEX `User_teamId_fkey` TO `User_teamId_idx`;
