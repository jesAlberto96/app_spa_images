import { useState, useEffect, useContext } from "react";
import { ImageContext } from '../context/ImageContext';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useImages = (url) => {
    const [data] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setImages } =  useContext(ImageContext);
    const abortController = new AbortController();

    useEffect(() => {
        getDataImages();
    }, []);

    const getDataImages = () => {
        setLoading(true);
        fetch(`${BASE_URL}${url}`)
        .then((response) => response.json())
        .then((data) => setImages(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

        return () => abortController.abort();
    }

    return { data, loading, error };
}