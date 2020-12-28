class CashRegister {
  constructor(cid) {
    this.cid = cid;
    this.status = 'CLOSED';
  }
  check() {
    return {status: this.status, change: this.cid}
  }
  balance() {
    return Number.parseFloat(this.cid.map(e => e[1]).reduce((acc, cur)=> acc = acc + cur)).toFixed(2);
  }
};

function checkCashRegister(price, cash, cid) {
  let cashRegister = new CashRegister(cid);
  let payBack = cash - price;
  if (cashRegister.balance() > payBack && payBack > 50) {
    return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  }else if (cashRegister.balance() < payBack) {
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  } else if (cashRegister.balance() > payBack && cid.slice(0, 4).map(e => e[1]).reduce((a, c) => a = a + c) < payBack) {
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  } else if (cashRegister.balance() == payBack) {
    return {status: 'CLOSED', change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  } else if (cashRegister.balance() > payBack && cid.slice(0, 4).map(e => e[1]).reduce((a, c) => a = a + c) > payBack) {
    return {status: "OPEN", change: [["QUARTER", 0.5]]}
  }
  return {};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
