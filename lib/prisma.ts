import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import PG from "pg";

//1.Connection pool uusgeh
const pool = new PG.Pool({
  connectionString: process.env.PRISMA_DB_URL,
});

// 2. adapter aa beldeh
const adapter = new PrismaPg(pool);

// 3. Prisma client aa adaptertaigaa uusgeh
const prisma = new PrismaClient({
  adapter,
});
export default prisma;
