/* Extend Chirpy's theme API with the light-based Primary palette. */
var Theme = (() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'chirpy-theme';
  const Mode = Object.freeze({ LIGHT: 'light', DARK: 'dark', SYSTEM: 'system', PRIMARY: 'primary' });
  const isToggleable = !root.hasAttribute('data-bs-theme');
  const validMode = (value) => Object.values(Mode).includes(value);
  let selected = root.dataset.bsTheme || Mode.SYSTEM;

  if (isToggleable) {
    try {
      const stored = localStorage.getItem(storageKey) || localStorage.getItem('theme') || sessionStorage.getItem('mode');
      if (validMode(stored)) selected = stored;
    } catch (_) {}
  }

  const resolvedTheme = () => {
    if (selected === Mode.SYSTEM) return system.matches ? Mode.DARK : Mode.LIGHT;
    return selected === Mode.DARK ? Mode.DARK : Mode.LIGHT;
  };
  let previousTheme = resolvedTheme();

  function renderMenu() {
    const toggle = document.getElementById('mode-toggle');
    if (!toggle) return;
    const label = selected.charAt(0).toUpperCase() + selected.slice(1);
    toggle.setAttribute('aria-label', `Color theme: ${label}`);
    toggle.setAttribute('title', `Color theme: ${label}`);
    document.querySelectorAll('#mode-toggle + .dropdown-menu .dropdown-item').forEach((button) => {
      const active = button.dataset.themeMode === selected;
      button.classList.toggle('active', active);
      button.setAttribute('aria-checked', String(active));
    });
  }

  function apply() {
    const current = resolvedTheme();
    root.dataset.bsTheme = current;
    root.toggleAttribute('data-theme-persisted', selected !== Mode.SYSTEM);
    if (selected === Mode.PRIMARY) root.dataset.theme = Mode.PRIMARY;
    else root.removeAttribute('data-theme');
    root.style.colorScheme = current;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = selected === Mode.PRIMARY ? '#f8f5f1' : current === Mode.DARK ? '#1b1b1e' : '#f7f7f7';
    });
    renderMenu();
    if (current !== previousTheme) window.postMessage({ id: 'theme-updated' }, '*');
    previousTheme = current;
  }

  function update(mode) {
    if (!isToggleable || !validMode(mode)) return;
    selected = mode;
    try {
      localStorage.setItem(storageKey, selected);
      localStorage.removeItem('theme');
      sessionStorage.removeItem('mode');
    } catch (_) {}
    apply();
  }

  apply();
  document.addEventListener('DOMContentLoaded', renderMenu);
  system.addEventListener('change', () => {
    if (selected === Mode.SYSTEM) apply();
  });
  window.addEventListener('storage', (event) => {
    if (!isToggleable || (event.key !== storageKey && event.key !== null)) return;
    selected = validMode(event.newValue) ? event.newValue : Mode.SYSTEM;
    apply();
  });

  return {
    Mode,
    isToggleable,
    eventId: 'theme-updated',
    get resolvedTheme() { return resolvedTheme(); },
    get isSystemTheme() { return selected === Mode.SYSTEM; },
    get isDark() { return resolvedTheme() === Mode.DARK; },
    newThemeMap: (light, dark) => ({ light, dark }),
    update
  };
})();
