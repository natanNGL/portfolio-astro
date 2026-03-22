import React from 'react'

type Props = {
    items: Array<React.ReactNode> | Array<React.JSX.Element>
}

export default function Timeline({items}: Props) {
  return (
    <ol className="relative space-y-8 before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 w-full">
       
        {items.map((item, idx) => (
            <li key={idx} className="relative -ms-1.5 flex items-start gap-4">
                <span className="size-3 shrink-0 rounded-full bg-hijau"></span>

                <div className="-mt-2 w-full">
                    {item}
                </div>
            </li>
        ))}
    </ol>
  )
}
