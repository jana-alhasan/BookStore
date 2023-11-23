import React from "react";
import { Skeleton,Card,CardContent ,Grid} from "@mui/material";

const SkeletonLoader = () => {
  
 
  const skeletons = Array.from({ length: 4 }, (_, index) => (
    <Grid key={index} item xs={12} sm={6} md={3}>
      <Card>
        <Skeleton variant="rect" height={200} />
        <CardContent>
          <Skeleton />
          <Skeleton width="60%" />
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
      {skeletons}
    </Grid>
  );
};
export default SkeletonLoader;