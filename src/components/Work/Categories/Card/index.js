import React from "react";
import Link from "next/link";
import { Box, CardMedia, Typography } from "@mui/material/";
import { getStrapiMedia } from "./../../../../utils/media";

const CategoryCard = ({ category }) => {
  const { name, cover, title } = category.attributes;
  return (
    <Box
      position="relative"
      sx={{
        "&:hover": {
          opacity: 0.8,
          transition: "all 0.4s ease-in-out",
        },
      }}
    >
      <Link href={`/work/${name}`} passHref>
        <CardMedia
          component="a"
          image={getStrapiMedia(cover)}
          title={name}
          sx={{ height: 280, width: { xs: 350, md: 400 } }}
        />
      </Link>
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
