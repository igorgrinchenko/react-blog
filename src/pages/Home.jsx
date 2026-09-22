import { useState, useEffect } from "react";
import { useArticlesStore } from "../store/articlesStore";

import { Container, Grid, Alert } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import CustomPagination from "../components/CustomPagination";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [page, setPage] = useState(1);

  const articles = useArticlesStore((state) => state.articles);
  const error = useArticlesStore((state) => state.error);
  const getArticles = useArticlesStore((state) => state.getArticles);
  const articlesPerPage = 10;
  const pageCount = Math.max(1, Math.ceil(articles.length / articlesPerPage));
  const currentPage = Math.min(page, pageCount);
  const currentArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <Container maxWidth="lg" sx={{ pt: 10 }}>
      {error && <Alert severity="error">{error}</Alert>}

      <CategoryFilter />

      <Grid container spacing={3}>
        {currentArticles.map((article) => (
          <Grid key={article.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>

      <CustomPagination
        page={currentPage}
        count={pageCount}
        onChange={setPage}
      />
    </Container>
  );
}

export default Home;
