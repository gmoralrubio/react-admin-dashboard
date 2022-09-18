export function formatCurrency(value) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    value
  )
}
export function formatNumber(value) {
  return new Intl.NumberFormat('de-DE').format(value)
}