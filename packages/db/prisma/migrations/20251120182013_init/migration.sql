/*
  Warnings:

  - You are about to drop the `campaign_v1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `files_v1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quick_sms_send_v1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `receiver_v1` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "campaign_v1" DROP CONSTRAINT "campaign_v1_fileId_fkey";

-- DropForeignKey
ALTER TABLE "campaign_v1" DROP CONSTRAINT "campaign_v1_userId_fkey";

-- DropForeignKey
ALTER TABLE "files_v1" DROP CONSTRAINT "files_v1_userId_fkey";

-- DropForeignKey
ALTER TABLE "quick_sms_send_v1" DROP CONSTRAINT "quick_sms_send_v1_userId_fkey";

-- DropForeignKey
ALTER TABLE "receiver_v1" DROP CONSTRAINT "receiver_v1_fileId_fkey";

-- DropTable
DROP TABLE "campaign_v1";

-- DropTable
DROP TABLE "files_v1";

-- DropTable
DROP TABLE "quick_sms_send_v1";

-- DropTable
DROP TABLE "receiver_v1";

-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfReceivers" INTEGER,
    "sizeInBytes" BIGINT NOT NULL,
    "type" "FileType" NOT NULL,
    "uploadStatus" "UploadStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receiver" (
    "id" SERIAL NOT NULL,
    "fileId" INTEGER NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "province" TEXT,
    "district" TEXT,
    "municipality" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "receiver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "messageText" TEXT NOT NULL,
    "status" "CampaignStatus" NOT NULL DEFAULT 'PENDING',
    "deliveryStatus" "DeliveryStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "province" TEXT,
    "district" TEXT,
    "municipality" TEXT,
    "fileId" INTEGER,
    "recipientsNumber" INTEGER,
    "deliveredNumber" INTEGER NOT NULL DEFAULT 0,
    "failedNumber" INTEGER NOT NULL DEFAULT 0,
    "deliveryRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalSmsCost" DOUBLE PRECISION,
    "paymentReceiptImage" TEXT,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "isEmailSent" BOOLEAN NOT NULL DEFAULT false,
    "submitDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quick_sms_send" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "toPhoneNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "QuickSendStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quick_sms_send_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "receiver_fileId_phoneNumber_key" ON "receiver"("fileId", "phoneNumber");

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receiver" ADD CONSTRAINT "receiver_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign" ADD CONSTRAINT "campaign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign" ADD CONSTRAINT "campaign_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quick_sms_send" ADD CONSTRAINT "quick_sms_send_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
