import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const BrandEditor = () => {
  
    const dispatch = useDispatch()

    const {id} = useParams()
    
    const [imgUrl, setImgUrl] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      
    }

    const handleInputChange = (e) => {
      const { value } = e.target;
      setImgUrl(value);
    };

    return (
    
    <div>
        <label htmlFor="url">Ingrese la URL de la imágen: </label>
        <input type="text" name='url' value={imgUrl}/>
        <button onClick={handleSubmit}> Aplicar cambios </button>
    </div>
  )
}

export default BrandEditor