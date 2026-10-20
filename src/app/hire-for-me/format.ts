export function formatSalaryRange(value: string) {
  const parts = value.replace(/–/g, "-").replace(/[^\d-]/g, "").split("-");
  const formatAmount = (amount: string) => amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.length > 1
    ? `${formatAmount(parts[0])} – ${formatAmount(parts.slice(1).join(""))}`
    : formatAmount(parts[0]);
}
