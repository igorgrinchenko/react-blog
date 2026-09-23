import { useState } from "react";
import { useArticlesStore } from "../store/articlesStore";
import { formatCommentDate } from "../utils/formatCommentDate";
import DeleteCommentModal from "./DeleteCommentModal";
import {
  Divider,
  Box,
  Typography,
  Stack,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function CommentList({ article }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const deleteComment = useArticlesStore((state) => state.deleteComment);

  const closeModal = () => setIsModalOpen(false);

  const onConfirm = () => {
    deleteComment(article.id, commentId);
    setIsModalOpen(false);
  };
  return (
    <>
      <DeleteCommentModal
        open={isModalOpen}
        onClose={closeModal}
        onConfirm={onConfirm}
      />
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
                <Tooltip
                  title="Delete comment"
                  onClick={() => {
                    setIsModalOpen(true);
                    setCommentId(comment.id);
                  }}
                >
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
