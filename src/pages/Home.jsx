import { useState, useEffect } from "react";
import { useArticlesStore } from "../store/articlesStore";

import { Container, Grid, Alert } from "@mui/material";
import ArticleCard from "../components/ArticleCard";
import CustomPagination from "../components/CustomPagination";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
  const [currentArticles, setCurrentArticles] = useState([]);

  const articles = useArticlesStore((state) => state.articles);
  const error = useArticlesStore((state) => state.error);
  const getAllArticles = useArticlesStore((state) => state.getAllArticles);

  useEffect(() => {
    getAllArticles();
  }, [getAllArticles]);

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
        articles={articles}
        setCurrentArticles={setCurrentArticles}
      />
    </Container>
  );
}

export default Home;
