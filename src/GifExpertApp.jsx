import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    //almacenar información y cambiar el HTML
const [categories, setCategories] = useState(["Dragon ball Z"]);
    
const onAddCategory = (onNewCategory)=> {

  if ( categories.includes(onNewCategory) ) {
    return ;
  }

  setCategories([onNewCategory, ...categories]);
}

  return (
    <>
    <h1>App GifExpert</h1>
    <AddCategory
      //  propCalabazaFromComponent= {setCategories} 
      onNewCategory = { onAddCategory }
    />

    {/* Conmponent de muestra 1 categoria */}
    
      {categories.map((category) => {
              return <GifGrid
                        key= {category}
                        category = {category}
                        />
      })}

    
    </>
  )
}
