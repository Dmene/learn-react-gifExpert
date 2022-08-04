import {useState} from 'react';
import {AddCategory} from './components/AddCategory.js'
import { GifGrid } from './components/GifGrid.js';

export const GifExpertApp = () =>{
   
    const [categories,setCategories] = useState(['oliver atom']);

    
    
    const onAddCategory = ( newCategory) => {
      if(categories.includes(newCategory)) return;
      
        setCategories([newCategory,...categories]);
       //setCategories( cat =>[...cat, 'Santoss']);
    }

    return (
    <> 
 
     <h1 >GifExpertApp</h1>

  
    <AddCategory 
    onNewCategory={(value) => onAddCategory (value)}
    />


    {
        categories.map((category) => (
            
            <GifGrid 
            key={ category } 
            category={category}/>
            )
    )
    }
       
    </>
    )

}



{/*En8HVW0FYdCgeEwETfHgPJOVru7XUKHN*/}

