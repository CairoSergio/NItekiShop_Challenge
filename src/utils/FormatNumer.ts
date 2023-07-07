export function FormatNumber(numero: number) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 