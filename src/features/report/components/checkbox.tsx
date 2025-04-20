import React from 'react'
import { Minus, Check } from 'lucide-react'

type Props = {
  checked: boolean
  onChange: () => boolean
}

const Checkbox = ({ checked, onChange }: Props) => {
  return (
    <label className="relative w-[30px] h-[30px] block mx-auto active:scale-90 transition duration-300">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className={`w-[30px] h-[30px] rounded-[7px] flex items-center justify-center text-[24px] font-bold border-3 transition-all duration-300 
          ${
            checked
              ? 'border-[#85c99c] text-[#4caf50] bg-transparent'
              : 'border-[#d9534f] text-[#d9534f]'
          }`}
      >
        {checked ? <Check className="w-4" /> : <Minus className="w-4" />}
      </div>
    </label>
  )
}

export default Checkbox
