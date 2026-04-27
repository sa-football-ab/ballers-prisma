-- Drop old churn status on User and add subscription source
ALTER TABLE `User`
    DROP COLUMN `churnStatus`,
    ADD COLUMN `subscription` ENUM('ADMIN', 'STRIPE') NOT NULL DEFAULT 'ADMIN';

-- Remove old churn status index
DROP INDEX `User_churnStatus_idx` ON `User`;

-- Replace deprecated subscription table
DROP TABLE `PlayerSubscription`;

-- Update SessionBooking relation from playerUserId -> userId and remove unused attendance timestamps
ALTER TABLE `SessionBooking`
    DROP FOREIGN KEY `SessionBooking_playerUserId_fkey`;

DROP INDEX `SessionBooking_playerUserId_idx` ON `SessionBooking`;
DROP INDEX `SessionBooking_playerUserId_bookedAt_idx` ON `SessionBooking`;

ALTER TABLE `SessionBooking`
    CHANGE COLUMN `playerUserId` `userId` VARCHAR(191) NOT NULL,
    DROP COLUMN `joinedAt`,
    DROP COLUMN `leftAt`;

CREATE INDEX `SessionBooking_userId_idx` ON `SessionBooking`(`userId`);
CREATE INDEX `SessionBooking_userId_bookedAt_idx` ON `SessionBooking`(`userId`, `bookedAt`);

ALTER TABLE `SessionBooking`
    ADD CONSTRAINT `SessionBooking_userId_fkey`
        FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add churn event log table
CREATE TABLE `ChurnEvent` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `eventType` VARCHAR(191) NOT NULL,
    `eventDate` DATETIME(3) NOT NULL,
    `scoreImpact` INTEGER NOT NULL DEFAULT 0,
    `reasonText` TEXT NULL,
    `metaJson` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `ChurnEvent_userId_idx`(`userId`),
    INDEX `ChurnEvent_eventType_idx`(`eventType`),
    INDEX `ChurnEvent_eventDate_idx`(`eventDate`),
    INDEX `ChurnEvent_userId_eventDate_idx`(`userId`, `eventDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `ChurnEvent`
    ADD CONSTRAINT `ChurnEvent_userId_fkey`
        FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add per-user health summary cache table
CREATE TABLE `PlayerHealthSummary` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL,
    `lastTrainingAt` DATETIME(3) NULL,
    `lastLiveSessionAt` DATETIME(3) NULL,
    `lastFeedActivityAt` DATETIME(3) NULL,
    `trainingRiskPoints` INTEGER NOT NULL DEFAULT 0,
    `liveSessionRiskPoints` INTEGER NOT NULL DEFAULT 0,
    `feedRiskPoints` INTEGER NOT NULL DEFAULT 0,
    `totalRiskScore` INTEGER NOT NULL DEFAULT 0,
    `currentStatus` ENUM('HEALTHY', 'MIGHT_LEAVE_SOON', 'AT_RISK', 'CHURNED') NOT NULL DEFAULT 'HEALTHY',
    `lastCalculatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PlayerHealthSummary_userId_key`(`userId`),
    INDEX `PlayerHealthSummary_userId_idx`(`userId`),
    INDEX `PlayerHealthSummary_currentStatus_idx`(`currentStatus`),
    INDEX `PlayerHealthSummary_totalRiskScore_idx`(`totalRiskScore`),
    INDEX `PlayerHealthSummary_lastCalculatedAt_idx`(`lastCalculatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `PlayerHealthSummary`
    ADD CONSTRAINT `PlayerHealthSummary_userId_fkey`
        FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
