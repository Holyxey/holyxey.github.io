class DocViewer {
  private container: HTMLDivElement;
  private iframe: HTMLIFrameElement;
  private button: HTMLDivElement;

  private styles = {
    container: {
      position: "fixed",
      display: "flex",
      top: "0",
      left: "0",
      zIndex: "995595607309",
      width: "100%",
      height: "100%",
      backgroundColor: "#ebe3deb2",
      backdropFilter: "blur(5px)"
    } as CSSStyleDeclaration,
    iframe: {
      maxWidth: "1024px",
      position: "relative",
      width: "100%",
      margin: "10px",
      marginInline: "auto",
      borderRadius: "10px",
      border: "none"
    } as CSSStyleDeclaration,
    button: {
      position: "absolute",
      fontFamily: '"CeraPro", "Helvetica Neue", Helvetica, Arial, sans-serif',
      top: "10px",
      right: "10px",
      padding: "10px 15px",
      backgroundColor: "#334e3e",
      borderRadius: "10px",
      color: "#fff",
      cursor: "pointer"
    } as CSSStyleDeclaration
  };

  //
  constructor(public link: string) {
    this.container = document.createElement("div");

    this.iframe = document.createElement("iframe");
    this.iframe.src = link;

    this.button = document.createElement("div");
    this.button.textContent = "Закрыть";
    this.button.addEventListener("click", () => this.close());

    this.setStyles();
  }

  //
  private setStyles() {
    Object.assign(this.container.style, this.styles.container);
    Object.assign(this.iframe.style, this.styles.iframe);
    Object.assign(this.button.style, this.styles.button);
  }

  //
  open() {
    this.container.appendChild(this.iframe);
    this.container.appendChild(this.button);
    document.body.appendChild(this.container);

    window.addEventListener("keydown", this.handleEscapeKey);
  }
  close(onCloseOrHref?: () => void | string) {
    this.container.remove();
    window.removeEventListener("keydown", this.handleEscapeKey);

    const url = new URL(window.location.href);
    url.searchParams.delete("doc");
    window.history.replaceState(null, "", url.toString());

    if (onCloseOrHref) {
      typeof onCloseOrHref === "string"
        ? (window.location.href = onCloseOrHref)
        : onCloseOrHref();
    }
  }

  private handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.close();
    }
  };
}

export enum DocMenus {
  main = "https://drive.google.com/file/d/1NaT8YAv8GK7qa5Y6Yy3V67LaGebpyViU/preview",
  bar = "https://drive.google.com/file/d/13FNjt78ih6l64Xh6ULZnSt-PPcYQCVbu/preview",
  kids = "https://drive.google.com/file/d/1QKHE94fY2i1Cck1MEaxRD4qHnrhKNVAU/preview",
  night = "https://drive.google.com/file/d/10OXH66mlYh2Nebmw9c7FcxrG61oWbdNb/preview"
}

function docMenusBySearchParams() {
  const params = new URLSearchParams(window.location.search);
  const doc = params.get("doc");
  if (doc && DocMenus[doc]) {
    console.log(`Opening document: ${doc}`);

    return doc as DocMenus;
  }
  console.warn(`Document not found: ${doc}`);
  return null;
}
function docMenusMyHtmlData() {
  const elems =
    document.querySelectorAll<HTMLAnchorElement>("[data-doc-viewer]");
  if (elems.length > 0) {
    elems.forEach(el => {
      const doc = el.getAttribute("data-doc-viewer");
      if (!doc) return;

      el.addEventListener("click", e => {
        e.preventDefault();
        const viewer = new DocViewer(doc);
        viewer.open();
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  docMenusMyHtmlData();
  const docSearchParam = docMenusBySearchParams();
  if (docSearchParam) {
    const viewer = new DocViewer(DocMenus[docSearchParam]);
    viewer.open();
  }
});

// bun build docViewer.ts --outfile=docViewer.js --target=browser --format=esm --minify  --banner="// $(date +%s)"
