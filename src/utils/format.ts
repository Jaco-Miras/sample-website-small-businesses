export function formatPrice(amount: number): string {
  const formatted = Number.isInteger(amount)
    ? amount.toLocaleString('en-PH')
    : amount.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })

  return `₱${formatted}`
}
