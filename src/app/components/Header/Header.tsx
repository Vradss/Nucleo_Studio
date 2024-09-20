import Link from 'next/link'
import Image from 'next/image';

export const Header = () => {
    return (
        <header>
          <nav className="items-center flex"> 
            <div>
              <Image src="/logo-blanc.png" alt="Logo_nucleo" width={150} height={50}/>
            </div>
            <div className="bg-black h-24 flex items-center space-x-20">
              <ul className= "text-white flex space-x-10">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/meetings">Meetings</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    )
}