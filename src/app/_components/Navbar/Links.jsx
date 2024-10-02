import Link from "next/link"

function Links() {
  return (
<ul className="flex items-center gap-x-3 max-md:hidden md:gap-x-10 text-md"> 
                {/* md tak hiddne rahay (we achieved reverse behaviour through max) === hidden md:flex*/}
                <li className="bg-clip-text text-transparent bg-gradient-to-r from-[#5F9CFE] to-[#AB78F9]
                font-bold">
                    <Link href="https://jsmastery.pro/next13" target="_blank">
                       Next.js 13.4 Course
                    </Link>
                </li>
                <li className="text-white-100 font-light">
                    <Link href="https://jsmastery.pro/masterclass" target="_blank">
                       Masterclass
                    </Link>
                </li>
</ul>
  )
}

export default Links
