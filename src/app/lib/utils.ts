// lib/utils.ts

export function formatCurrency(amount: number, currency = 'USD', locale = 'es-VE'): string {
  const numericAmount = Number(amount);
  if (isNaN(numericAmount)) return currency === 'USD' ? '$ 0.00' : '0,00 Bs.';
  if (currency === 'USD') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericAmount);
  } else {
    return new Intl.NumberFormat(locale, { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericAmount) + ' Bs.';
  }
}

export function formatDate(dateStringOrObject: string | Date | null | undefined, format = 'dd/mm/yy'): string {
  if (!dateStringOrObject) return '';
  let dateObj: Date;
  if (typeof dateStringOrObject === 'string') {
    // Asegurarse de que la cadena de fecha se interprete correctamente como UTC para evitar problemas de zona horaria si solo es YYYY-MM-DD
    dateObj = new Date(dateStringOrObject.includes('T') ? dateStringOrObject : dateStringOrObject + 'T00:00:00');
  } else if (dateStringOrObject instanceof Date) {
    dateObj = dateStringOrObject;
  } else {
    return 'Fecha inválida';
  }

  if (isNaN(dateObj.getTime())) return 'Fecha inválida';

  const day = String(dateObj.getUTCDate()).padStart(2, '0'); // Usar getUTCDate para consistencia
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); // Usar getUTCMonth
  const year = dateObj.getUTCFullYear().toString(); // Usar getUTCFullYear

  if (format === 'dd/mm/yy') return `${day}/${month}/${year.slice(-2)}`;
  if (format === 'yyyy-mm-dd') return `${year}-${month}-${day}`; // Este formato es útil para inputs de fecha
  return dateObj.toLocaleDateString(navigator.language || 'es-VE', { timeZone: 'UTC' }); // Mostrar en formato local pero basado en fecha UTC
}