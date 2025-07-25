-- CreateTable
CREATE TABLE "EmotionRating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "emotion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmotionRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmotionRating" ADD CONSTRAINT "EmotionRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
