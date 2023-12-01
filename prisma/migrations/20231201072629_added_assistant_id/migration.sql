/*
  Warnings:

  - The primary key for the `threads` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `assistantId` to the `Threads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Threads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `threads` DROP PRIMARY KEY,
    ADD COLUMN `assistantId` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
