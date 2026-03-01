export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'mx-auto max-w-5xl px-4 py-20 sm:py-32 text-center';

  section.innerHTML = `
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
      Добро пожаловать
    </h1>
    <p class="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Минимальный и быстрый сайт на Vite&nbsp;+&nbsp;TypeScript&nbsp;+&nbsp;Tailwind&nbsp;CSS.
      Готов к деплою на статический хостинг.
    </p>
    <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#features"
         class="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-700 transition-colors">
        Возможности
      </a>
      <a href="#contact"
         class="inline-block rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors">
        Связаться
      </a>
    </div>
  `;

  return section;
}
