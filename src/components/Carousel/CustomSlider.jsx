import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CustomSlider.scss";

const CustomSlider = ({ feedbacks }) => {
  return (
    <Swiper
      modules={[Pagination]} // Add
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        560: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      className="chapter-carousel"
    >
      {feedbacks.map((feedback) => (
        <SwiperSlide key={feedback.id}>
          <Card
            sx={{
              boxShadow: 3, // Shadow effect for depth
              transition: "transform 0.3s ease", // Smooth hover effect
              "&:hover": {
                transform: "scale(1.05)", // Hover zoom effect
              },
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fff", color: "text.secondary" }}>
                  {feedback.name.slice(0, 1)}
                </Avatar>
              }
              title={feedback.name}
              subheader="March 21, 2025"
              sx={{
                bgcolor: "primary.light",
                color: "white",
                textAlign: "center",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                {feedback.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {feedback.description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
                <Rating name="read-only" value={feedback.rating} readOnly />
              </Box>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSlider;
