import Image from "next/image"

function Burger() {
  return (
    <div className='hamburger-container'>
        <Image
           src="/hamburger-menu.svg"
           alt="burger"
           width={30}
           height={30}
           className='block md:hidden'
        />
    </div>
  )
}

export default Burger
