const body = document.body;

const footerToggle = document.querySelector('[data-view-mode-toggle]');

const floatingToggle = document.createElement('button');
floatingToggle.type = 'button';
floatingToggle.className = 'view-mode-floating-toggle';
floatingToggle.setAttribute('data-view-mode-floating-toggle', '');
floatingToggle.setAttribute('aria-label', 'Toggle desktop and mobile view');
document.body.appendChild(floatingToggle);

const getToggleLabel = () => (
  body.classList.contains('force-desktop') ? 'Switch to mobile view' : 'Switch to desktop view'
);

const syncToggleLabels = () => {
  const label = getToggleLabel();

  if (footerToggle) {
    footerToggle.textContent = label;
  }

  floatingToggle.textContent = label;
};

const applyViewMode = (mode) => {
  if (mode === 'mobile') {
    body.classList.remove('force-desktop');
  } else {
    body.classList.add('force-desktop');
  }

  syncToggleLabels();
};

const savedMode = localStorage.getItem('veume-view-mode') || 'desktop';
applyViewMode(savedMode);

const toggleViewMode = () => {
  const nextMode = body.classList.contains('force-desktop') ? 'mobile' : 'desktop';

  localStorage.setItem('veume-view-mode', nextMode);
  applyViewMode(nextMode);
};

if (footerToggle) {
  footerToggle.addEventListener('click', toggleViewMode);
}

floatingToggle.addEventListener('click', toggleViewMode);
