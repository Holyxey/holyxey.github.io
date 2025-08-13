const isVisaHidden = localStorage.getItem("visaHidden");
const visaWrapper: HTMLElement | null =
  document.getElementById("tl-visa-wrapper");
const closeButton: HTMLElement | null =
  document.getElementById("tl-visa-close");
const pageAddress = window.location.href;

function hideSomeBlock(block: HTMLElement) {
  try {
    block.style.pointerEvents = "none";
    block.style.animation =
      "visa-module 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) reverse forwards";
  } catch (e) {
    console.error("Error hiding block:", e);
  }
  block.style.display = "none";
}
function showSomeBlock(block: HTMLElement) {
  try {
    block.style.pointerEvents = "auto";
    block.style.animation =
      "visa-module 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards";
  } catch (e) {
    console.error("Error showing block:", e);
  }
  block.style.display = "block";
}

//

function initVisaModule(lang: "ru" | "en") {
  if (!visaWrapper) {
    console.error("Visa wrapper element not found");
    return;
  }

  if (isVisaHidden !== "true" && !pageAddress.includes("weltonhotel.ru/visa")) {
    (function (w) {
      var q = [
        ["setContext", "TL-INT-IVISA_DEFAULT.large-light-default", lang],
        ["embed", "visa-support-block", {container: "tl-visa-support-block"}]
      ];
      // @ts-ignore
      var t = (w.travelline = w.travelline || {}),
        ti = (t.integration = t.integration || {});
      ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
      if (!ti.__loader) {
        ti.__loader = true;
        var d = w.document,
          p = d.location.protocol,
          s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src =
          (p == "https:" ? p : "http:") +
          "//ibe.tlintegration.com/integration/loader.js";
        (
          d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]
        ).appendChild(s);
      }
    })(window);
  }
  //
  else {
    hideSomeBlock(visaWrapper);
  }
  // Visa page
  if (pageAddress.includes("weltonhotel.ru/visa")) {
    hideSomeBlock(visaWrapper);
  }

  // Listner
  closeButton?.addEventListener("click", function () {
    hideSomeBlock(visaWrapper);

    localStorage.setItem("visaHidden", "true");
  });
}

window.addEventListener("load", () => initVisaModule("ru"));
