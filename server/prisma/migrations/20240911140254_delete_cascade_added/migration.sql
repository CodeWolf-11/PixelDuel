-- DropForeignKey
ALTER TABLE "Duel" DROP CONSTRAINT "Duel_userId_fkey";

-- AddForeignKey
ALTER TABLE "Duel" ADD CONSTRAINT "Duel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
