export const getGifs = async (category) => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=sgTUiFIM8MZ0kkGHLsS8Tf87wmOZhHpg&q=${category}&limit=10`);
    const { data } = await response.json()

    const gifs = data.map( img=> ({
        id: img.id,
        title: img.title,
        imagen: img.images.downsized_medium.url
    }));

    return gifs;

}