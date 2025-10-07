function openBookingForm(event: Event, houseTitle: string, img?: string) {
  // event.stopPropagation();

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
}

window.openBookingForm = openBookingForm;
