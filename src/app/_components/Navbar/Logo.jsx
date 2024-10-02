import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
<div className='logo-container'>
    <Link href="/">
        <Image
            src="/jsm-logo.svg"
            alt="logo"
            width={55}
            height={40}
        />
    </Link>
</div>
  )
}

export default Logo;