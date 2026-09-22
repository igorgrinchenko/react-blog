import { Pagination, Box } from "@mui/material";

function CustomPagination({ page, count, onChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Pagination
        count={count}
        page={page}
        onChange={(event, value) => onChange(value)}
      />
    </Box>
  );
}

export default CustomPagination;
