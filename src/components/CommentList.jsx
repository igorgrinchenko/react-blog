import {
  Divider,
  Box,
  Typography,
  Stack,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import "moment/locale/uk";

const formatCommentDate = (date) => {
  const parsedDate = moment(date);

  return parsedDate.isValid()
    ? parsedDate.locale("uk").format("D MMMM YYYY, HH:mm")
    : "Дата недоступна";
};

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
                  {formatCommentDate(comment.date)}
                </Typography>
              </Box>

              <Typography color="text.secondary">{comment.text}</Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 0.5,
                  mt: 1.5,
                }}
              >
                <Tooltip title="Edit comment">
                  <IconButton size="small" color="primary">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete comment">
                  <IconButton size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: { xs: 4, sm: 6 } }} />
    </>
  );
}

export default CommentList;
