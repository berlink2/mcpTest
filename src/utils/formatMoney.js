export const formatMoney = (money) =>{
    return Intl.NumberFormat('in', {currency:'IDR',style: 'currency'}).format(money);
}