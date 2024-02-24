import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const apikey = "2da446680dddd5880fd3538b2629571c";
//https://api.themoviedb.org/3/trending/movie/day?api_key=2da446680dddd5880fd3538b2629571c
const getTrandingVideo = axios.get(
  movieBaseUrl + "/trending/movie/day?api_key=" + apikey
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrandingVideo,
  getMovieByGenreId,
};
