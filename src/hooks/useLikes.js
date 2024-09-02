import { useState } from "react";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useLikes = (url) => {
    const [likes, setLikes] = useState(0);

    const likeImages = () => {
        fetch(`${BASE_URL}${url}`, {
            method: 'post',
            body: JSON.stringify({}),
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {
            incrementLikes();
        })
        .then((data) => {
            incrementLikes()
        })
        .catch((error) => console.log(error));
    }

    const incrementLikes = () => {
        setLikes(likes + 1);
    };

    const decrementLikes = () => {
        if (likes > 0){
            setLikes(likes - 1);
        }
    };

    return {
        likeImages,
        incrementLikes,
        decrementLikes,
        likes
    }
}