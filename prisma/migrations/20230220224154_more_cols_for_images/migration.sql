/*
  Warnings:

  - You are about to drop the column `pictures` on the `Posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[img]` on the table `Images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "pictures";

-- CreateIndex
CREATE UNIQUE INDEX "Images_img_key" ON "Images"("img");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
