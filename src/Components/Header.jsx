import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-xl'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/">
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-green-500'>P V H</span>
        <span className='text-green-700'> Developers</span>
      </h1>
      </Link>
      <form className='bg-green-200 p-3 rounded-md flex items-center'>
        <input type="search" placeholder='search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-green-300'/>
      </form>
      <ul className='flex gap-4'>
        <Link to="/">
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to="/about">
        <li  className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to="/sign-in">
        <li  className='sm:inline text-slate-700 hover:underline'>Sign In</li>
        </Link>
      </ul>
        </div>
    </header>
  )
}

export default Header
