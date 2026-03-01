export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'border-t border-gray-200 mt-16';

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-gray-500">
      &copy; ${year} mysite. Все права защищены.
    </div>
  `;

  return footer;
}
