const body = document.body;

const railIcons = {
  Home: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.8 12 4l8 6.8"/><path d="M6.5 10.2V20h11v-9.8"/><path d="M9.5 20v-5h5v5"/></svg>',
  Discover: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m14.8 9.2-1.9 4.1-4.1 1.9 1.9-4.1 4.1-1.9Z"/></svg>',
  Collections: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5h16"/><path d="M6 5h12"/><rect x="5" y="10" width="14" height="9" rx="2"/><path d="M10 13.5h4"/></svg>',
  Following: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 19v-1.4c0-2.1-1.7-3.8-3.8-3.8H7.8C5.7 13.8 4 15.5 4 17.6V19"/><circle cx="10" cy="8" r="3.2"/><path d="M17 8.5h4"/><path d="M19 6.5v4"/></svg>',
  Vault: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="7" width="14" height="12" rx="2"/><path d="M8 7V5.8C8 4.8 8.8 4 9.8 4h4.4c1 0 1.8.8 1.8 1.8V7"/><path d="M9 12h6"/></svg>',
  Studio: '<svg class="rail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 .9-1.5V3a2 2 0 0 1 4 0v.2a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5.9H21a2 2 0 0 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"/></svg>'
};

document.querySelectorAll('.rail-link').forEach((link) => {
  const label = link.getAttribute('aria-label');

  if (label && railIcons[label]) {
    link.innerHTML = railIcons[label];
  }
});

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
