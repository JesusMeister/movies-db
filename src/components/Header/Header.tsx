import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'
import { tableRoutes } from '../../pages/Table/Table'
import classNames from 'classnames';
import { useEffect, useState } from 'react';

function Header() {
  const [path , setPath] = useState<string>();
  useEffect(()=>{
    setPath(window.location.pathname);
  }, [path])
  return (
    <div className='bg-gray-100 h-full w-full flex justify-evenly items-center p-5 border-b-2 border-gray-400'>
      <Link to = {ROUTES.HOME} className='font-bold sm:text-xl md:text-2xl lg:text-3xl' onClick={()=>setPath("")}>PELIMEISTER</Link>
      <p className='sm:text-base md:text-lg lg:text-xl space-x-4'>
      <Link to = {ROUTES.HOME} className={classNames({'text-red-400': path === ROUTES.HOME})} onClick={()=>setPath("")}>HOME </Link>
      <Link to = {`${ROUTES.TABLE}/favorites`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/favorites`})} onClick={()=>setPath("")}>FAVORITES </Link>
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.nowPlaying.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.nowPlaying.name}`})} onClick={()=>setPath("")}>NOW PLAYING </Link> 
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.popular.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.popular.name}`})} onClick={()=>setPath("")}>POPULAR </Link>   
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.topRated.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.topRated.name}`})} onClick={()=>setPath("")}>TOP RATED </Link>          
      </p>
    </div>
  )
}

export default Header