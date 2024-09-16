/*
  Warnings:

  - You are about to drop the `ClashComment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClashComment" DROP CONSTRAINT "ClashComment_duelId_fkey";

-- DropTable
DROP TABLE "ClashComment";

-- CreateTable
CREATE TABLE "DuelComment" (
    "id" SERIAL NOT NULL,
    "duelId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DuelComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DuelComment" ADD CONSTRAINT "DuelComment_duelId_fkey" FOREIGN KEY ("duelId") REFERENCES "Duel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
