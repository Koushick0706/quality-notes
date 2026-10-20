function currentUrl() {
  return window.location.href.split('#')[0];
}

function linkedInShare(url, title) {
  const shareUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
  shareUrl.searchParams.set('url', url);
  if (title) shareUrl.searchParams.set('title', title);
  window.open(shareUrl.toString(), '_blank', 'noopener,noreferrer,width=720,height=650');
}

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#share-site').addEventListener('click', () => linkedInShare(currentUrl(), document.title));

document.querySelectorAll('.filter-chip').forEach((chip) => chip.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach((item) => item.classList.toggle('active', item === chip));
  document.querySelectorAll('.article-card').forEach((card) => {
    card.hidden = chip.dataset.filter !== 'all' && card.dataset.category !== chip.dataset.filter;
  });
}));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));
