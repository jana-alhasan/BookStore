import React, { useEffect, useState, useMemo } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { LocalShipping, Star } from "@mui/icons-material";
import BookImage from "../../components/Book/BookImage";
import BookInfo from "../../components/Book/BookInfo";
import Discount from "../../components/Book/Discount";
import Scoll from "../../components/Book/Scoll";
import Carousels from "../../components/common/Carousels/Carousels";
import Benifict from "../../components/Book/Benefict";
import { fetchData } from "../../utilities/fetchData";
import SkeletonLoader from "../../Skeleton/Skeleton";
import useStyles from "../../components/Book/styles";

const HomePage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const benefits = [
    {
      icon: <LocalShipping className={classes.icon} />,
      text: "Free shipping over 50$",
    },
    {
      icon: <Star className={classes.icon} />,
      text: "Save with loyalty points",
    },
    {
      icon: (
        <img
          src="../../assets/images/main-page/Book open.svg"
          alt="Book Open Icon"
        />
      ),
      text: "Read a few pages",
    },
  ];
  const fetchRandomBook = async () => {
    try {
      setIsLoading(true);
      const fetchedBooks = await fetchData();
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error in FetchData:", error);
    }finally{
      setIsLoading(false);
    }
  };

  useEffect(() => {   
    fetchRandomBook();
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={6}>
            <Stack direction={"row"} spacing={5} marginTop={"80px"}>
              <Scoll />
              <BookInfo />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              marginTop={{ xs: "43px", sm: "43px", md: "0" }}
            >
              <Discount />
              <BookImage />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="start">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Benifict {...benefit} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <stack>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <Carousels carusalTitle={"Selected For You"} books={books} />
            <Carousels carusalTitle={"You Must buy it now"} books={books} />
          </>
        )}
      </stack>
    </>
  );
};

export default HomePage;
