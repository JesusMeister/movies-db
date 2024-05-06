import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'
import { tableRoutes } from '../../pages/Table/Table'

function Header() {
  return (
    <div className='bg-gray-100 h-full w-full flex justify-evenly items-center p-5 border-b-2 border-gray-400'>
      <Link to = {ROUTES.HOME} className='font-bold sm:text-xl md:text-2xl lg:text-3xl'>PELIMEISTER</Link>
      <p className='sm:text-base md:text-lg lg:text-xl space-x-4'>
      <Link to = {ROUTES.HOME}>HOME </Link>
      <Link to = {`${ROUTES.TABLE}/favorites`}>FAVORITES </Link>
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.nowPlaying.name}`}>NOW PLAYING </Link>
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.popular.name}`}>POPULAR </Link>   
      <Link to = {`${ROUTES.TABLE}/${tableRoutes.topRated.name}`}>TOP RATED </Link>          
      </p>
    </div>
  )
}

export default Header