export default function formatCurrency(num) {
  return "₹" + Number(num.toFixed(2)).toLocaleString() + " ";
}
