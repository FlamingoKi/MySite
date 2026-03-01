interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Vite',
    description: 'Молниеносная сборка и HMR для комфортной разработки.',
  },
  {
    title: 'TypeScript',
    description: 'Строгая типизация — меньше багов, больше уверенности.',
  },
  {
    title: 'Tailwind CSS',
    description: 'Утилитарные классы для быстрой и консистентной вёрстки.',
  },
];

function featureCard(feature: Feature): string {
  return `
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 class="text-lg font-semibold text-gray-900">${feature.title}</h3>
      <p class="mt-2 text-sm text-gray-600 leading-relaxed">${feature.description}</p>
    </div>
  `;
}

export function createFeatures(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'features';
  section.className = 'mx-auto max-w-5xl px-4 py-16';

  section.innerHTML = `
    <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900">Стек</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${features.map(featureCard).join('')}
    </div>
  `;

  return section;
}
