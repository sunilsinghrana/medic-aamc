import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-wrap justify-around items-start bg-[#F7F8FC] dark:bg-[#11111D] p-24 ">
      <Link href={'/patient'} className="w-56 h-56 bg-gray-300 dark:bg-gray-700 flex flex-col justify-around items-center hover:bg-gray-900">
        <Image alt='register' src={"/register_icon.png"} width={100} height={100} />
        <h1 className='font-bold text-2xl'>Register</h1>
        </Link>
      <Link href={'/patient/consultation'} className="w-56 h-56 bg-gray-300 dark:bg-gray-700 flex flex-col justify-around items-center">
        <Image alt='register' src={"/consult_icon.png"} width={100} height={100} />
        <h1 className='font-bold text-2xl'>Consultation</h1>
        
        </Link>
      <Link href={'/medicine'} className="w-56 h-56 bg-gray-300 dark:bg-gray-700 flex flex-col justify-around items-center">
        <Image alt='register' src={"/inventory_icon.png"} width={100} height={100} />
        <h1 className='font-bold text-2xl'>Inventory</h1>
        
        </Link>
    </main>
  )
}
