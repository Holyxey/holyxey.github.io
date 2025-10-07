function openBookingForm(event: Event, houseTitle: string, img?: string) {
  try {
    if (document.getElementById('popup-block')) {
      multipage.remPopup();
      multipage.changeScroll();
    }
  } catch (error) {}

  try {
    let node = document.querySelector('.uc-openBookingForm');
    let form = node?.querySelector('form');
    let image = node?.querySelector('img');
    let inputNode: HTMLElement | null | undefined = node?.querySelector(
      '[data-field-name="variant"]'
    );
    let input: HTMLInputElement | null | undefined =
      form?.querySelector('[name="variant"]');
    let titleDiv: HTMLElement | null | undefined =
      node?.querySelector('.t-title');

    if (inputNode) inputNode.style.display = 'none';
    if (titleDiv) titleDiv.innerHTML = houseTitle;
    // if (input) {
    //   input.value = houseTitle;
    //   input.disabled = true;
    //   input.style.opacity = '0.5';
    //   input.style.cursor = 'not-allowed';
    // } else return;

    if (img && image) setTimeout((image.src = img), 500);
  } catch (error) {
    console.warn(error);
  }
}

window.openBookingForm = openBookingForm;
