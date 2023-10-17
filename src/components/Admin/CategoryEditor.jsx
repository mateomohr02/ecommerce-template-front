import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategoryImage } from '../../redux/actions/store/updateCategoryImage'

const CategoryEditor = ( { id, onClose } ) => {
  
    const dispatch = useDispatch()
    
    const [imgUrl, setImgUrl] = useState("")
    const [isClosed, setIsClosed] = useState(false);

    const handleSubmit = async(e) => {
      e.preventDefault();
      await dispatch(updateCategoryImage(id, imgUrl))
      setIsClosed(true);
    }

    const handleInputChange = (e) => {
      setImgUrl(e.target.value);
    };

    useEffect(() => {
      // Puedes utilizar el prop 'onClose' para notificar al componente padre que debe cerrar este componente
      if (isClosed && typeof onClose === 'function') {
        onClose();
      }
    }, [isClosed, onClose]);
  
    // Si 'isClosed' es true, no renderiza nada
    if (isClosed) {
      return null;
    }
  
    return (
      <div>
        <label htmlFor="url">Ingrese la URL de la imagen: </label>
        <input type="text" name="url" value={imgUrl} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Aplicar cambios</button>
      </div>
    );
  };

export default CategoryEditor