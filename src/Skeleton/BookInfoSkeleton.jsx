import React from "react";
import { Box,Skeleton } from "@mui/material";

const BookInfoSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={200} />
    </Box>
  );
};

export default BookInfoSkeleton;
