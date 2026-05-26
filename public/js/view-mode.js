const toggleButton = document.querySelector('[data-view-mode-toggle]');
const body = document.body;

const applyViewMode = (mode) => {
  if (mode === 'desktop') {
    body.classList.add('force-desktop');

    if (toggleButton) {
      toggleButton.textContent = 'Switch to mobile view';
    }
  } else {
    body.classList.remove('force-desktop');

    if (toggleButton) {
      toggleButton.textContent = 'Switch to desktop view';
    }
  }
};

const savedMode = localStorage.getItem('veume-view-mode') || 'mobile';
applyViewMode(savedMode);

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const nextMode = body.classList.contains('force-desktop') ? 'mobile' : 'desktop';

    localStorage.setItem('veume-view-mode', nextMode);
    applyViewMode(nextMode);
  });
}
