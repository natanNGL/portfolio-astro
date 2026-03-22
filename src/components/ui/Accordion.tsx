import React from 'react'
import { FaChevronDown } from "react-icons/fa";

type Props = {
    datas: Array<{title: React.ReactNode | React.JSX.Element, detail: React.ReactNode | React.JSX.Element}>
}

export default function Accordion({ datas } : Props) {
  return (
    <div className="space-y-2">
        {
            datas &&
                datas.length > 0 &&
                datas.map((val, idx) => (
                    <details key={idx} className="group [&_summary::-webkit-details-marker]:hidden w-full">
                        <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-700 px-4 py-3 font-medium text-gray-900">
                            {val.title}
                            <FaChevronDown className="text-putih size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 w-4 h-4"/>
                        </summary>

                        <div className="pl-4 py-4 w-full">{val.detail}</div>
                    </details>
                ))
        }
    </div>
  )
}
