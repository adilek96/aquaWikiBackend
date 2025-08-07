import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { createMiddleware } from "hono/factory";
// Импорт роутеров для категорий
import postCategory from "../src/routes/categories/category/post.category.js";
import getCategories from "../src/routes/categories/get.categories.js";
import patchCategory from "../src/routes/categories/category/patch.category.js";
import deleteCategory from "../src/routes/categories/category/delete.category.js";
// Импорт роутеров для подкатегорий
import postSubCategory from "../src/routes/subcategories/subcategory/post.subcategory.js";
import getSubCategories from "../src/routes/subcategories/get.subcategories.js";
import patchSubCategory from "../src/routes/subcategories/subcategory/patch.subcategory.js";
import deleteSubCategory from "../src/routes/subcategories/subcategory/delete.subcategory.js";
// Импорт роутеров для статей
import postArticle from "../src/routes/articles/article/post.article.js";
import getArticles from "../src/routes/articles/get.articles.js";
import getArticle from "../src/routes/articles/article/get.article.js";
import patchArticle from "../src/routes/articles/article/patch.article.js";
import deleteArticle from "../src/routes/articles/article/delete.article.js";
// Импорт Swagger
import swaggerRouter from "../src/routes/swagger.js";
// Импорт роутера для токенов
import tokenRouter from "../src/routes/tokens/generate.tokens.js";
const app = new Hono();
const prisma = new PrismaClient();
const prismaMidleware = createMiddleware(async (c, next) => {
  c.set("prisma", prisma);
  await next();
});
app.use(prismaMidleware);
app.get("/", (c) => {
  return c.text(
    "AquaWiki API - Добро пожаловать! Документация доступна по адресу: /docs"
  );
});
// Swagger документация
app.route("/", swaggerRouter);
// Генерация токенов
app.route("/", tokenRouter);
// Роутеры для категорий
app.route("/", postCategory);
app.route("/", getCategories);
app.route("/", patchCategory);
app.route("/", deleteCategory);
// Роутеры для подкатегорий
app.route("/", postSubCategory);
app.route("/", getSubCategories);
app.route("/", patchSubCategory);
app.route("/", deleteSubCategory);
// Роутеры для статей
app.route("/", postArticle);
app.route("/", getArticles);
app.route("/", getArticle);
app.route("/", patchArticle);
app.route("/", deleteArticle);
// Отключение Prisma Client при завершении работы приложения
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

serve(app);
