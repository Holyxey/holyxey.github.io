class DocViewer {
  private container: HTMLDivElement;
  private iframe: HTMLIFrameElement;
  private button: HTMLDivElement;

  constructor(
    public link: string,
    public onCloseOrHref?: string | (() => void)
  ) {
    this.container = document.createElement("div");

    this.iframe = document.createElement("iframe");
    this.iframe.src = link;
    this.iframe.referrerPolicy = "no-referrer";

    this.button = document.createElement("div");
    this.button.textContent = "Закрыть";
    this.button.addEventListener("click", () => this.close());
    this.container.addEventListener("click", () => this.close());

    this.setStyles();
  }

  //
  private styles = {
    container: {
      position: "fixed",
      display: "flex",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "995595607309",
      backgroundColor: "#ebe3deb2",
      padding: "10px",
      backdropFilter: "blur(5px)"
    } as CSSStyleDeclaration,
    iframe: {
      maxWidth: "1024px",
      position: "relative",
      width: "100%",
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
  private setStyles() {
    Object.assign(this.container.style, this.styles.container);
    Object.assign(this.iframe.style, this.styles.iframe);
    Object.assign(this.button.style, this.styles.button);
  }

  //

  //
  open() {
    this.container.appendChild(this.iframe);
    this.container.appendChild(this.button);
    document.body.appendChild(this.container);
  }
  close() {
    this.container.remove();

    const url = new URL(window.location.href);
    url.searchParams.delete("doc");
    window.history.replaceState(null, "", url.toString());

    if (this.onCloseOrHref) {
      typeof this.onCloseOrHref === "string"
        ? (window.location.href = this.onCloseOrHref)
        : this.onCloseOrHref();
    }
  }
}

const DocMenus: Record<string, {ru: string; en?: string}> = {
  main: {
    ru: "https://drive.google.com/file/d/1FcPW_zTeCQlxdSIqA5GOpTC94l9dUFtt/preview",
    en: "https://drive.google.com/file/d/1NaT8YAv8GK7qa5Y6Yy3V67LaGebpyViU/preview"
  } as const,

  bar: {
    ru: "https://drive.google.com/file/d/13FNjt78ih6l64Xh6ULZnSt-PPcYQCVbu/preview"
  } as const,

  kids: {
    ru: "https://drive.google.com/file/d/1QKHE94fY2i1Cck1MEaxRD4qHnrhKNVAU/preview"
  } as const,

  night: {
    ru: "https://drive.google.com/file/d/10OXH66mlYh2Nebmw9c7FcxrG61oWbdNb/preview",
    en: "https://drive.google.com/file/d/127t3eWiFf2D9mUPVNas0K20tcGLEtWTk/preview"
  } as const,

  pizza: {
    ru: "https://drive.google.com/file/d/1f-39DkwPF9r-6QOZSO0GlQZbTonPY8Wy/preview"
  } as const
};

//
function docMenusBySearchParams(): string | undefined {
  let params = new URLSearchParams(window.location.search);
  let doc = params.get("doc");
  let lang = params.get("lang");
  let onclose = params.get("onclose");

  if (!doc) return;
  if (!lang || !DocMenus[doc][lang]) {
    lang = "ru";
  }

  const link = DocMenus[doc][lang];
  const viewer = new DocViewer(link, onclose || undefined);
  viewer.open();
  return link;
}
function docMenusFromHtmlData() {
  const elems = document.querySelectorAll<HTMLAnchorElement>("[data-doc]");

  if (elems.length > 0) {
    elems.forEach(el => {
      const doc = el.getAttribute("data-doc");
      const lang = el.getAttribute("data-doc-lang") || "ru";
      const onclose = el.getAttribute("data-doc-onclose");
      el.style.cursor = "pointer";

      if (!doc || !DocMenus[doc])
        return console.warn(`Doc "${doc}" not found in DocMenus`);

      el.addEventListener("click", e => {
        e.preventDefault();
        const link = DocMenus[doc][lang]
          ? DocMenus[doc][lang]
          : DocMenus[doc]["ru"];
        console.log(link);

        const viewer = new DocViewer(link, onclose || undefined);
        viewer.open();
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  docMenusBySearchParams();
  docMenusFromHtmlData();
});

// ((menu = "main") => {
//   const params = new URLSearchParams(window.location.search);
//   if (params.has("doc")) return;

//   if (!params.has("lang")) {
//     params.set("lang", "ru");
//   }
//   if (!params.has("onclose")) {
//     params.set("onclose", "/restaurant");
//   }
//   params.set("doc", menu);

//   window.history.replaceState(null, "", `?${params.toString()}`);
//   window.location.reload();
// })();

//
// bun build docViewer.ts --outfile=docViewer.js --target=browser --format=esm --minify  --banner="// $(date +%s)"
