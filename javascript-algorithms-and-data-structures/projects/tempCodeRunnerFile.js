const regex = /[.!?]/g;

const str = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."

const replace = str.replace(regex,'');

const match = str.match(regex);

console.log(replace + '.');