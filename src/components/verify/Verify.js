let cryprion = require("crypto-js");
export function sentusertolocal(key, data) {
  if (key !== false && data !== false) {
    localStorage.setItem(
      key,
      cryprion.AES.encrypt(
        JSON.stringify(data),
        "handleuserbysorobindu"
      ).toString()
    );
  }
}
export function getusertolocal(key) {
  let data = JSON.parse(
    cryprion.AES.decrypt(
      localStorage.getItem(key),
      "handleuserbysorobindu"
    ).toString(cryprion.enc.Utf8)
  );
  if (data) {
    return data;
  } else {
    return false;
  }
}
