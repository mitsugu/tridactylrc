const subDomain = window.location.hostname.replace(/\./g, "-");
const domain = `${subDomain}.translate.goog`;
const path = location.pathname;
const searchParamas = new URLSearchParams(location.search);
searchParamas.set("_x_tr_sl", "auto");
searchParamas.set("_x_tr_tl", "ja");
searchParamas.set("_x_tr_hl", "ja");
const url = `https://${domain}/${path}?${searchParamas.toString()}`;

window.open(url, "_blank");
