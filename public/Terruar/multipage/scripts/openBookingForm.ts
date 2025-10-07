interface Window {
  multipage?: {
    remPopup: () => void;
  };
}

function openBookingForm(event: Event, houseTitle: string, img?: string) {
  try {
    window.multipage?.remPopup();

    let node = document.querySelector('.uc-openBookingForm');
    let form = node?.querySelector('form');
    let variant: HTMLInputElement | null | undefined =
      form?.querySelector('[name="variant"]');
    let image = node?.querySelector('img');

    if (variant) {
      variant.value = houseTitle;
      variant.disabled = true;
      variant.style.opacity = '0.5';
      variant.style.cursor = 'not-allowed';
    } else return;

    if (img && image) setTimeout((image.src = img), 500);
  } catch (error) {
    console.warn(error);
  }
}

window.openBookingForm = openBookingForm;
