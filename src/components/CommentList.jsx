import { Divider, Box, Typography, Stack, Paper } from "@mui/material";

function CommentList({ article }) {
  return (
    <>
      <Divider sx={{ my: { xs: 4, sm: 6 } }} />
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.6rem", sm: "2.125rem" },
            mb: { xs: 3, sm: 4 },
          }}
        >
          Comments ({article.comments.length})
        </Typography>

        <Stack spacing={2}>
          {article.comments.map((comment) => (
            <Paper
              key={comment.id}
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1" fontWeight={700}>
                  {comment.author}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {comment.date}
                </Typography>
              </Box>

              <Typography color="text.secondary">{comment.text}</Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
      <Divider sx={{ my: { xs: 4, sm: 6 } }} />
    </>
  );
}

export default CommentList;
