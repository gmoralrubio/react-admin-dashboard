import React from 'react'

export default function Button({ text, type, size }) {
  return (
    <button
      type={type ? type : ''}
      className={`rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 text-${size}`}
    >
      {text}
    </button>
  )
}
