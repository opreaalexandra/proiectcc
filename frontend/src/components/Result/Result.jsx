import React from "react";
import { Box, Typography } from "@material-ui/core";
import styles from "./Result.module.css";

const Result = ({ weather, getDate }) => {
  return (
    <Box my="2rem">
      <Box className={styles.locContainer}>
        <Typography
          variant="h3"
          component="p"
          align="center"
          className={`${styles.loc} ${styles.text}`}
        >
          {weather.name}, {weather.sys.country}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          className={`${styles.date} ${styles.text}`}
        >
          {getDate(new Date())}
        </Typography>
      </Box>
      <Box className={styles.weatherContainer}>
        <Box my={3} display="flex" justifyContent="center">
          <Typography
            variant="h1"
            component="p"
            align="center"
            className={`${styles.temp} ${styles.text}`}
          >
            {Math.round(weather.main.temp)}&deg;C
          </Typography>
        </Box>
        <Typography
          variant="h3"
          component="p"
          align="center"
          className={`${styles.weather} ${styles.text}`}
        >
          {weather.weather[0].main}
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
