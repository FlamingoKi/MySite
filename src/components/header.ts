export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'bg-white shadow-sm';

  header.innerHTML = `
    <div class="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-bold tracking-tight text-gray-900">mysite</a>
      <nav class="hidden sm:flex gap-6 text-sm font-medium text-gray-600">
        <a href="#about" class="hover:text-gray-900 transition-colors">О проекте</a>
        <a href="#features" class="hover:text-gray-900 transition-colors">Возможности</a>
        <a href="#contact" class="hover:text-gray-900 transition-colors">Контакты</a>
      </nav>
      <button id="menu-toggle" class="sm:hidden p-2 text-gray-600" aria-label="Меню">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    <nav id="mobile-menu" class="hidden sm:hidden border-t border-gray-100 px-4 pb-4 pt-2 space-y-2 text-sm font-medium text-gray-600">
      <a href="#about" class="block hover:text-gray-900 transition-colors">О проекте</a>
      <a href="#features" class="block hover:text-gray-900 transition-colors">Возможности</a>
      <a href="#contact" class="block hover:text-gray-900 transition-colors">Контакты</a>
    </nav>
  `;

  return header;
}

export function initMobileMenu(): void {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}
