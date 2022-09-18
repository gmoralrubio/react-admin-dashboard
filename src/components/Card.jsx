import React from 'react'

export default function Card({ children, className }) {
  return (
    <div className={`rounded-lg bg-white p-4 shadow-sm ${className}`}>{children}</div>
  )
}
