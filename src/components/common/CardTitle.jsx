import React from 'react'

export default function CardTitle({ children, className }) {
  return (
    <div className="flex justify-between">
      <span className={`tracking-wide text-gray-400 ${className}`}>{children}</span>
    </div>
  )
}
