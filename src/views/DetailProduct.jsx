import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetail } from '../redux/actions/store/getProductDetail';
import { clearDetailProduct } from '../redux/actions/store/clearProductDetail'

const DetailProduct = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetail(id))
    return () => dispatch(clearDetailProduct())
  },[dispatch, id])

  const p = useSelector((state)=> state.store.product)

  const backBtnOnClick = () => {
    navigate(-1)
  }

  return (
    <div className='w-1/2 flex p-4 m-5 border'>
        <div className='px-10 flex-col text-left w-2/3'>
          <button className='w-32 h-8 bg-slate-300 rounded border mb-4' onClick={backBtnOnClick}>Volver</button>
          <img className='w-128 rounded-md border m-0' src={p?.image_path} alt={p?.name} />
        </div>
        <div className='pt-10 ml-4 text-left'>
          <p className='m-2'>{p?.name}</p>
          <p className='m-2'>Marca: {p?.brandName}</p>
          <p className='m-2'>Descripción: {p?.description}</p>
          <p className='m-2'>Cantidad disponible: {p?.stock}</p>
          <p className='m-2'>$ {p?.price}</p>
          <button className='w-64 border p-2 rounded bg-blue-500 text-white font-sans font-medium'>Agregar al carrito</button>
        </div>
      </div>
  )
}

export default DetailProduct