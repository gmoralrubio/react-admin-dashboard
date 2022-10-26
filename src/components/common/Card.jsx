export default function Card({ children, className }) {
  return (
    <div
      className={`rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 dark:text-gray-50 ${className}`}
    >
      {children}
    </div>
  )
}
