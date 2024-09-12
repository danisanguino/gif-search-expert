import "./gifGrid.css"
import { CardGif } from "./cardGif";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {

  //Custom Hook cargar
  const {isLoading, images } = useFetchGif (category)

  

  return (
    <>  
        <h2>{category}</h2>
        {
          isLoading ? (<h4>IsLoading</h4>) : null
        }
        <div className="gif-total-cards">
          {images.map((e)=>  (
            
            <CardGif
            key={e.id}
            titulete={e.title}
            urlita={e.imagen}
            />
            
          )
        )} 
        </div>
        

    </>
  )
}
