export class PopUp {
  private container: HTMLDivElement;
  private contentElement: HTMLDivElement;

  private headerElement: HTMLDivElement;
  private titleElement: HTMLDivElement;
  private closeButton: HTMLButtonElement;

  private isOpen: boolean = false;

  //
  constructor(public title: string, public initialContent: HTMLDivElement) {
    this.container = document.createElement('div');
    this.container.classList.add('pop-up');

    this.contentElement = document.createElement('div');
    this.contentElement = initialContent;
    this.contentElement.classList.add('pop-up-content');

    // Header
    this.headerElement = document.createElement('div');
    this.headerElement.className = 'pop-up-header';

    this.closeButton = document.createElement('button');
    this.closeButton.textContent = 'Закрыть';
    this.closeButton.id = 'pop-up-close-button';

    this.titleElement = document.createElement('p');
    this.titleElement.className = 'pop-up-title';
    this.titleElement.textContent = this.title;

    this.headerElement.appendChild(this.titleElement);
    this.headerElement.appendChild(this.closeButton);
    // !Header

    this.container.appendChild(this.headerElement);
    this.container.appendChild(this.contentElement);

    this.closeButton.addEventListener('click', () => this.close());
    this.container.addEventListener('click', (event) => {
      if (event.target === this.container) {
        this.close();
      }
    });
  }

  //
  open(): void {
    document.addEventListener('keydown', this.handleKeyDown);
    if (!this.isOpen) {
      document.body.appendChild(this.container);
      this.isOpen = true;
    }
  }
  close(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
    if (this.isOpen) {
      document.body.removeChild(this.container);
      this.isOpen = false;
    }
  }

  //
  setTitle(newTitle: string) {
    this.title = newTitle;
    this.titleElement.textContent = newTitle;
  }
  setContent(newContent: HTMLDivElement) {
    this.contentElement.replaceWith(newContent);
    this.contentElement = newContent;
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }
  };
}
