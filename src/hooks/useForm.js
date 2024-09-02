import { useState, useContext } from 'react';
import { ImageContext } from '../context/ImageContext';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useForm = ( initialForm = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );
    const { setImages } =  useContext(ImageContext);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

        fetch(`${BASE_URL}/api/images/${value}`)
            .then((response) => response.json())
            .then((data) => setImages(data))
            .catch((error) => console.log(error))
            .finally(() => console.log(false));
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}