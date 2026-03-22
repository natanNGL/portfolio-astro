import React from 'react'

type Props = {
    icon: any;
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, icon, children} : Props) {
  return (
    <section className="bg-section rounded-xl p-4 flex flex-col ">
        <div className="flex gap-2 items-center border-b border-gray-700 pb-4 mb-4 ">
            <span className='text-hijau text-2xl'>{icon}</span>
            <h3 className="text-lg text-white font-semibold">{title}</h3>
        </div>

        {children && <>{children}</>}
    </section>
  )
}
