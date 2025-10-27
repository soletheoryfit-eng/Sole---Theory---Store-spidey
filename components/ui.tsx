export const ron = (n: number) =>
  new Intl.NumberFormat("ro-RO", { style: "currency", currency: "RON" }).format(n);

export const waOrderLink = (name: string, price: number) =>
  `https://wa.me/40721527147?text=${encodeURIComponent(
    `Salut! Vreau sa comand: ${name} (${price} RON).`
  )}`;
