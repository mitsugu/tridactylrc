const selected = window.getSelection().toString();
const encodedSelected = encodeURIComponent(selected.split(".").join(".\n\n\n"));
const url = `https://translate.google.co.jp/?sl=auto&tl=ja&text=${encodedSelected}`;
window.open(url, "_blank");
