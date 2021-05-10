import axios from "axios";

const api = {
  url: "https://api.openweathermap.org/data/2.5/",
  key: "2da235f212a8d9ffc6139e0b2671113d",
};

const backend = {
  url: "https://weather-app-backend.azurewebsites.net/api/cities"
}

export const getData = async (location) => {
  try {
    const { data } = await axios.get(
      `${api.url}weather?q=${location}&units=metric&APPID=${api.key}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getCities = async () => {
  try {
    const { data } = await axios.get(
      `${backend.url}`
    );
    var cities = data.map(city => city.name);

    return cities;
  } catch (error) {
    return error;
  }
};
