import axios from 'axios';

import { Constant } from '../constants';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const API_URL = Constant.BASE_URL_API;

const getNowPlayingMovie = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/now_playing?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getUpcomingMovie = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/upcoming?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getTopRatedMovie = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/top_rated?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getSimilarMovie = async (id: string | any): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie//${id}/similar?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getMovieDetail = async (id: string | any): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/${id}?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getPopularMovie = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/movie/popular?api_key=${API_KEY}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

const getMovieGenres = async (): Promise<any> => {
    try {
        const response = await axios.get(
            `${API_URL}/genre/movie/list?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const movieService = {
    getNowPlayingMovie,
    getUpcomingMovie,
    getMovieDetail,
    getMovieGenres,
    getSimilarMovie,
    getPopularMovie,
    getTopRatedMovie,
};
