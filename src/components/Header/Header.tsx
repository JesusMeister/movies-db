import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'
import { tableRoutes } from '../../pages/Table/Table'
import classNames from 'classnames';
import { useEffect, useState } from 'react';

function Header() {
  const [path , setPath] = useState<string>();
  const location = useLocation();
  useEffect(()=>{
    setPath(window.location.pathname);
  }, [path, location])
  return (
    <div className='bg-gray-100 h-full w-full flex justify-evenly items-center p-5 border-b-2 border-gray-400'>
      <div><Link to = {ROUTES.HOME} className='font-bold sm:text-xl md:text-2xl lg:text-3xl p-4' onClick={()=>setPath("")}>PELIMEISTER</Link></div>
      <div className='sm:text-base md:text-lg lg:text-xl space-x-4 flex justify-evenly items-center'>
      <div><Link to = {ROUTES.HOME} className={classNames({'text-red-400': path === ROUTES.HOME})}>HOME </Link></div>
      <div><Link to = {`${ROUTES.TABLE}/favorites`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/favorites`})}>FAVORITES </Link></div>
      <div><Link to = {`${ROUTES.TABLE}/${tableRoutes.nowPlaying.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.nowPlaying.name}`})}>NOW PLAYING </Link> </div>
      <div><Link to = {`${ROUTES.TABLE}/${tableRoutes.popular.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.popular.name}`})}>POPULAR </Link></div>   
      <div><Link to = {`${ROUTES.TABLE}/${tableRoutes.topRated.name}`} className={classNames({'text-red-400': path === `${ROUTES.TABLE}/${tableRoutes.topRated.name}`})}>TOP RATED </Link></div>          
      </div>
    </div>
  )
}

export default Header