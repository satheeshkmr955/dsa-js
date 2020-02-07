const strRev = str => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

const str = "Hi Satheesh Kumar";
const revStr = strRev(str);
console.log(str, str.length);
console.log(revStr, revStr.length);
