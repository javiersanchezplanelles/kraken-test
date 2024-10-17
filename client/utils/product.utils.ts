export const formatPrice = (total: number) =>
  Intl.NumberFormat('en-GB', { style: 'currency', currency: 'gbp' }).format(
    total
  );