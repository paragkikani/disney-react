import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apikey ="2da446680dddd5880fd3538b2629571c";
//https://api.themoviedb.org/3/trending/movie/day?api_key=2da446680dddd5880fd3538b2629571c
const getTrandingVideo = axios.get( movieBaseUrl + "/trending/movie/day?api_key=" +apikey);

export default {
    getTrandingVideo
}