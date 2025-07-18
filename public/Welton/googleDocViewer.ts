function initGoogleDocViewer() {
  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
    "a[href*='drive.google.com']"
  );

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      openGooglePopUp(link.href.replace("/view", "/preview"));
    });
    link.setAttribute("data-google-popup", "true");
  });
}
function closeGooglePopUp() {
  const widgets: NodeListOf<HTMLElement> =
    document.querySelectorAll("*[class*='widget']");

  document.querySelectorAll("#popGoogle").forEach(popup => {
    // Вход по qr или из нового окна
    if (!document.referrer || history.length === 1) {
      const lang = navigator.language;
      lang.includes("en")
        ? window.location.replace("https://en.weltonhotel.ru/")
        : window.location.replace("https://weltonhotel.ru/");
    }
    // Открытие внутри сайта
    else popup.remove();
  });
  widgets.forEach(widget => {
    widget.style.opacity = "initial";
    widget.style.pointerEvents = "initial";
  });
}
function openGooglePopUp(link: string) {
  const widgets: NodeListOf<HTMLElement> =
    document.querySelectorAll("*[class*='widget']");
  widgets.forEach(widget => {
    widget.style.opacity = "0";
    widget.style.pointerEvents = "none";
  });

  const popNode = document.createElement("div");
  popNode.style.position = "fixed";
  popNode.style.display = "flex";
  popNode.style.alignItems = "center";
  popNode.style.justifyContent = "center";
  popNode.style.backgroundColor = "#00000020";
  popNode.style.top = "0";
  popNode.style.padding = "1rem";
  popNode.style.left = "0";
  popNode.style.bottom = "0";
  popNode.style.right = "0";
  popNode.style.zIndex = "99999";
  popNode.style.backdropFilter = "blur(10px)";

  popNode.setAttribute("id", "popGoogle");
  popNode.onclick = closeGooglePopUp;

  const iframe = document.createElement("iframe");
  iframe.src = link;
  iframe.referrerPolicy = "no-referrer";
  iframe.style.height = "100%";
  iframe.style.width = "100%";
  iframe.style.maxWidth = "600px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";

  const closeButton = document.createElement("button");
  closeButton.style.position = "fixed";
  closeButton.style.top = "0";
  closeButton.style.right = "0";
  closeButton.style.zIndex = "999999";
  closeButton.style.width = "2.5rem";
  closeButton.style.height = "2.5rem";
  closeButton.style.background =
    'url("https://api.iconify.design/hugeicons:cancel-01.svg")';
  closeButton.style.backgroundSize = "cover";
  closeButton.style.backgroundPosition = "center";
  closeButton.style.backgroundColor = "#EBE3DE";
  closeButton.style.borderRadius = "1rem";
  closeButton.onclick = closeGooglePopUp;

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeGooglePopUp();
    }
  });

  popNode.appendChild(iframe);
  popNode.appendChild(closeButton);
  document.body.appendChild(popNode);
}
document.addEventListener("DOMContentLoaded", initGoogleDocViewer);

// bun build googleDocViewer.ts --outfile googleDocViewer.js --target browser --minify-syntax --minify-whitespace --banner "// $(date +%s)"
