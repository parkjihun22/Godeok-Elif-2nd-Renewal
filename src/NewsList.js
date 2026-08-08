import { pressArticles } from "./pages/Promotion/pressArticles";

const NewsList = pressArticles.map((article) => ({
  id: article.id,
  title: article.title,
  image: article.image,
  excerpt: article.summary,
  date: article.date,
  link: `/Promotion/Press/${article.slug || article.id}`,
}));

export default NewsList;
