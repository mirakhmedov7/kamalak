import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="rounded-2xl bg-white relative mb-5 overflow-hidden">
      <Image
        src={'/assets/menu-bg.png'}
        sizes="100vw"
        alt="Food background image"
        width={0}
        height={0}
        className="rounded-2xl w-full h-auto object-cover absolute top-0 leading-0"
      />
      <div className="px-20 py-25 flex flex-col gap-6 relative z-10">
        <span className="text-yellow text-sm">👑 Five portions of food</span>
        <h1 className="font-bold text-5xl">Umumiy taom nomi</h1>
        <p className="text-grey font-semibold text-lg max-w-[500px] w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  )
}

export default Banner
