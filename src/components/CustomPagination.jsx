import { useState, useEffect } from "react";
import { Pagination, Box } from "@mui/material";

function CustomPagination({ articles, setCurrentArticles }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const startIndex = (page - 1) * articlesPerPage;

    const currentArticles = articles.slice(
      startIndex,
      startIndex + articlesPerPage,
    );

    setCurrentArticles(currentArticles);
  }, [page, articles, setCurrentArticles]);

  const articlesPerPage = 10;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Pagination
        count={Math.ceil(articles.length / articlesPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </Box>
  );
}

export default CustomPagination;
