let hx_wc_spaRowSettings = document.getElementsByClassName("t868__td");
for (let i = 0; i < hx_wc_spaRowSettings.length; i++) {
  if (i % 2 === 0) {
    hx_wc_spaRowSettings[i].style.borderRadius = "5px 0 0 5px";
  } else {
    hx_wc_spaRowSettings[i].style.borderRadius = "0 5px 5px 0";
  }
}
