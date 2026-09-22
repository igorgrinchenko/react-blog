import { useState } from "react";
import { useArticlesStore } from "../store/articlesStore";

import { Box, Chip, Typography } from "@mui/material";

function CategoryFilter() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = useArticlesStore((state) => state.categories);
  const getArticles = useArticlesStore((state) => state.getArticles);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    getArticles({ category });
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 1.5, fontWeight: 500 }}
      >
        Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            clickable
            onClick={() => handleCategoryClick(category)}
            variant={category === currentCategory ? "filled" : "outlined"}
            color={category === currentCategory ? "primary" : "default"}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryFilter;
