import { Pagination, Box } from "@mui/material";

function CustomPagination({ page, count, onChange }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", mt: { xs: 3, sm: 5 }, overflowX: "auto" }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={(event, value) => onChange(value)}
      />
    </Box>
  );
}

export default CustomPagination;
