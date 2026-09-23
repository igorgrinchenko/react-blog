import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useArticlesStore } from "../store/articlesStore";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { Box, Chip, Container, Typography } from "@mui/material";

function ArticleDetails() {
  const { id } = useParams();
  const allArticles = useArticlesStore((state) => state.allArticles);
  const loading = useArticlesStore((state) => state.loading);
  const getArticles = useArticlesStore((state) => state.getArticles);
  const article = allArticles.find((article) => String(article.id) === id);

  useEffect(() => {
    if (!allArticles.length) {
      getArticles();
    }
  }, [allArticles.length, getArticles]);

  if (loading || !allArticles.length) {
    return (
      <Container maxWidth="md" sx={{ pt: { xs: 10, sm: 12 }, pb: 8 }}>
        Loading...
      </Container>
    );
  }

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ pt: { xs: 10, sm: 12 }, pb: 8 }}>
        Article not found.
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{ pt: { xs: 10, sm: 12 }, pb: { xs: 5, sm: 8 } }}
    >
      <Box>
        <Chip label={article.category} color="primary" sx={{ mb: 2 }} />

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-1px",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.75rem" },
            mb: 2,
          }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: { xs: "1.05rem", sm: "1.25rem" },
            mb: { xs: 2, sm: 3 },
          }}
        >
          {article.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          By {article.author} · {article.date}
        </Typography>

        <Box
          component="img"
          src={article.image}
          alt={article.title}
          sx={{
            width: "100%",
            height: { xs: 220, sm: 320, md: 400 },
            objectFit: "cover",
            borderRadius: 2,
            mb: { xs: 3, sm: 5 },
          }}
        />

        <Box>
          {article.content.split("\n\n").map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>

      <CommentList article={article} />
      <CommentForm article={article} />
    </Container>
  );
}

export default ArticleDetails;
