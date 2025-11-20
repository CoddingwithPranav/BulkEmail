-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GUEST', 'USER', 'ADMIN', 'SUPERADMIN');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('INDIVIDUAL', 'ORGANIZATION');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('CSV', 'XLSX');

-- CreateEnum
CREATE TYPE "UploadStatus" AS ENUM ('PENDING', 'UPLOADED', 'FAILED');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('PENDING', 'CANCELLED', 'APPROVED');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "QuickSendStatus" AS ENUM ('PENDING', 'SENT', 'FAILED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "isGuest" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT,
    "phoneNumber" TEXT,
    "hashedPassword" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "organizationName" TEXT,
    "profileImage" TEXT,
    "accountType" "AccountType",
    "isAccountVerified" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "citizenshipNumber" TEXT,
    "citizenshipImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files_v1" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "numberOfReceivers" INTEGER,
    "sizeInBytes" BIGINT NOT NULL,
    "type" "FileType" NOT NULL,
    "uploadStatus" "UploadStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_v1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receiver_v1" (
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

    CONSTRAINT "receiver_v1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campaign_v1" (
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

    CONSTRAINT "campaign_v1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quick_sms_send_v1" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "toPhoneNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "QuickSendStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quick_sms_send_v1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "receiver_v1_fileId_phoneNumber_key" ON "receiver_v1"("fileId", "phoneNumber");

-- AddForeignKey
ALTER TABLE "files_v1" ADD CONSTRAINT "files_v1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receiver_v1" ADD CONSTRAINT "receiver_v1_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files_v1"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_v1" ADD CONSTRAINT "campaign_v1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_v1" ADD CONSTRAINT "campaign_v1_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "files_v1"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quick_sms_send_v1" ADD CONSTRAINT "quick_sms_send_v1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
