import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ArticleCard({ article, onClick }) {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Box
        component="img"
        src={article.image}
        alt={article.title}
        sx={{
          width: "100%",
          height: { xs: 180, sm: 220 },
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Chip
          label={article.category}
          size="small"
          sx={{
            alignSelf: "flex-start",
            mb: { xs: 1.5, sm: 2 },
            fontWeight: 600,
            borderRadius: 1,
          }}
        />

        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.4px",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            mb: { xs: 1, sm: 1.5 },
          }}
        >
          {article.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            mb: { xs: 2, sm: 3 },
          }}
        >
          {article.description}
        </Typography>

        <Box
          sx={{
            mt: "auto",
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {article.date}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "text.primary",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            Read article
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
