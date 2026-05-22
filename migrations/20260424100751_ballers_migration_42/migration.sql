/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `churnStatus` ENUM('HEALTHY', 'MIGHT_LEAVE_SOON', 'AT_RISK', 'CHURNED') NOT NULL DEFAULT 'HEALTHY',
    ADD COLUMN `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `lastActivityAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `PlayerSubscription` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `tier` ENUM('FREE', 'PREMIUM') NOT NULL DEFAULT 'FREE',
    `status` ENUM('ACTIVE', 'EXPIRED', 'CANCELED') NOT NULL DEFAULT 'ACTIVE',
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NULL,
    `autoRenew` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `PlayerSubscription_userId_idx`(`userId`),
    INDEX `PlayerSubscription_tier_idx`(`tier`),
    INDEX `PlayerSubscription_status_idx`(`status`),
    INDEX `PlayerSubscription_endDate_idx`(`endDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionBooking` (
    `id` VARCHAR(191) NOT NULL,
    `playerUserId` VARCHAR(191) NOT NULL,
    `activityId` VARCHAR(191) NOT NULL,
    `bookedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bookingStatus` ENUM('BOOKED', 'NO_BOOKING') NOT NULL DEFAULT 'BOOKED',
    `attendanceStatus` ENUM('ATTENDED', 'NO_SHOW') NOT NULL DEFAULT 'NO_SHOW',
    `joinedAt` DATETIME(3) NULL,
    `leftAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `SessionBooking_playerUserId_idx`(`playerUserId`),
    INDEX `SessionBooking_activityId_idx`(`activityId`),
    INDEX `SessionBooking_bookedAt_idx`(`bookedAt`),
    INDEX `SessionBooking_attendanceStatus_idx`(`attendanceStatus`),
    INDEX `SessionBooking_playerUserId_bookedAt_idx`(`playerUserId`, `bookedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonthlyChurnMetric` (
    `id` VARCHAR(191) NOT NULL,
    `monthStartDate` DATETIME(3) NOT NULL,
    `clubId` VARCHAR(191) NULL,
    `healthyCount` INTEGER NOT NULL DEFAULT 0,
    `mightLeaveSoonCount` INTEGER NOT NULL DEFAULT 0,
    `atRiskCount` INTEGER NOT NULL DEFAULT 0,
    `churnedCount` INTEGER NOT NULL DEFAULT 0,
    `newPlayers` INTEGER NOT NULL DEFAULT 0,
    `netGrowth` INTEGER NOT NULL DEFAULT 0,
    `retentionRate` DECIMAL(5, 2) NULL,
    `churnRate` DECIMAL(5, 2) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `MonthlyChurnMetric_monthStartDate_idx`(`monthStartDate`),
    INDEX `MonthlyChurnMetric_clubId_monthStartDate_idx`(`clubId`, `monthStartDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Activity_activityDate_idx` ON `Activity`(`activityDate`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- CreateIndex
CREATE INDEX `User_churnStatus_idx` ON `User`(`churnStatus`);

-- CreateIndex
CREATE INDEX `User_joinedAt_idx` ON `User`(`joinedAt`);

-- CreateIndex
CREATE INDEX `User_lastActivityAt_idx` ON `User`(`lastActivityAt`);

-- AddForeignKey
ALTER TABLE `PlayerSubscription` ADD CONSTRAINT `PlayerSubscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionBooking` ADD CONSTRAINT `SessionBooking_playerUserId_fkey` FOREIGN KEY (`playerUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionBooking` ADD CONSTRAINT `SessionBooking_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MonthlyChurnMetric` ADD CONSTRAINT `MonthlyChurnMetric_clubId_fkey` FOREIGN KEY (`clubId`) REFERENCES `Club`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
