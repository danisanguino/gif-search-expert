import { useEffect, useState } from "react";
import { getGifs } from "../utils/callApi";


export const useFetchGif = (category) => {
  
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=> {
        const newImages = await getGifs(category);
        setimages(newImages)
        setIsLoading(false);
    }

    useEffect(() => {
        
      getImages()
      
    }, [ ])

    return {
        isLoading: isLoading,
        images: images
    }
    
}
