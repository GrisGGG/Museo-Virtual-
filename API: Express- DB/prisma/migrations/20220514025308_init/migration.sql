-- CreateTable
CREATE TABLE "animalesMarinos_api" (
    "id" SERIAL NOT NULL,
    "nameComun" TEXT NOT NULL,
    "nameScientis" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "habitad" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "urlImage" VARCHAR(255) NOT NULL,

    CONSTRAINT "animalesMarinos_api_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animalesMarinos_api_nameComun_key" ON "animalesMarinos_api"("nameComun");
