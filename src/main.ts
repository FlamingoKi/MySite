import './styles/main.css';
import { createHeader, initMobileMenu } from './components/header';
import { createHero } from './components/hero';
import { createFeatures } from './components/features';
import { createFooter } from './components/footer';

function mount(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.appendChild(createHeader());
  app.appendChild(createHero());
  app.appendChild(createFeatures());
  app.appendChild(createFooter());

  initMobileMenu();
}

mount();
