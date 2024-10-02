import Burger from "./Burger";
import Logo from "./Logo";
import Links from "./Links";

function Nav() {
  return (
      <nav className='flex items-center justify-center fixed top-0 z-50 w-full border-b-2 border-black-400 
      py-7 text-white bg-black-100'>
          <div className='flex justify-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
             <Logo/>
             <Burger/>
             <Links/>
          </div>
      </nav>
  )
}
export default Nav;