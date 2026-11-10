const state = { posts: [], category: '全部', query: '' };
const grid = document.querySelector('#post-grid');
const filters = document.querySelector('#filters');
const search = document.querySelector('#search');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty-state');
const error = document.querySelector('#load-error');
const dialog = document.querySelector('#article-dialog');
const dialogContent = document.querySelector('#dialog-content');
const themeButtons = [...document.querySelectorAll('.theme-option')];
const themeDropdown = document.querySelector('#theme-dropdown');

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function getSeasonByMonth() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

const themes = {
  spring: { label: '春季', icon: '🌱', color: '#f4fbe7' },
  summer: { label: '夏季', icon: '☀️', color: '#ebf8ff' },
  autumn: { label: '秋季', icon: '🍂', color: '#fbf0e4' },
  winter: { label: '冬季', icon: '❄️', color: '#09131b' }
};

function applyTheme(themeName) {
  const theme = Object.hasOwn(themes, themeName) ? themeName : getSeasonByMonth();
  const details = themes[theme];
  document.documentElement.setAttribute('data-theme', theme);
  themeButtons.forEach(button => {
    const selected = button.dataset.theme === theme;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  const icon = document.querySelector('.theme-current-icon');
  const label = document.querySelector('#theme-current-label');
  if (icon) icon.textContent = details.icon;
  if (label) label.textContent = details.label;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', details.color);
  try { localStorage.setItem('blog-theme', theme); } catch {}
}

function renderFilters() {
  const categories = ['全部', ...new Set(state.posts.map(post => post.category).filter(Boolean))];
  filters.innerHTML = categories.map(category => `
    <button class="filter-button${state.category === category ? ' selected' : ''}" type="button" data-category="${escapeHTML(category)}" aria-pressed="${state.category === category}">
      ${escapeHTML(category)}
    </button>
  `).join('');
}

function renderPosts() {
  const normalizedQuery = state.query.trim().toLocaleLowerCase();
  const visible = state.posts.filter(post => {
    const matchesCategory = state.category === '全部' || post.category === state.category;
    const searchable = [post.title, post.excerpt, post.category, ...(post.tags || [])].join(' ').toLocaleLowerCase();
    return matchesCategory && searchable.includes(normalizedQuery);
  });

  count.textContent = `共 ${visible.length} 篇文章`;
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible.map(post => `
    <article class="post-card" tabindex="0" role="button" data-post-id="${escapeHTML(post.id)}" aria-label="阅读：${escapeHTML(post.title)}">
      <div class="card-top"><span class="category-tag">${escapeHTML(post.category)}</span><time class="post-date" datetime="${escapeHTML(post.date)}">${escapeHTML((post.date || '').replaceAll('-', '.'))}</time></div>
      <h3>${escapeHTML(post.title)}</h3><p class="post-excerpt">${escapeHTML(post.excerpt)}</p>
      <div class="card-bottom"><div class="tag-list">${(post.tags || []).slice(0, 2).map(tag => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}</div><span class="read-time">${escapeHTML(post.readTime)} 分钟阅读</span></div>
    </article>
  `).join('');
}

function openPost(id) {
  const post = state.posts.find(item => String(item.id) === String(id));
  if (!post) return;
  dialogContent.innerHTML = `
    <span class="dialog-meta">${escapeHTML(post.category)} · ${escapeHTML((post.date || '').replaceAll('-', '.'))} · ${escapeHTML(post.readTime)} 分钟阅读</span>
    <h2>${escapeHTML(post.title)}</h2>
    ${post.content ? `<div class="dialog-body">${post.content}</div>` : ''}
  `;
  dialog.showModal();
}

themeButtons.forEach(button => button.addEventListener('click', () => {
  applyTheme(button.dataset.theme);
  if (themeDropdown) themeDropdown.open = false;
}));
let savedTheme;
try { savedTheme = localStorage.getItem('blog-theme'); } catch {}
applyTheme(savedTheme || getSeasonByMonth());

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderPosts();
});
search.addEventListener('input', () => { state.query = search.value; renderPosts(); });
grid.addEventListener('click', event => {
  const card = event.target.closest('[data-post-id]');
  if (card) openPost(card.dataset.postId);
});
grid.addEventListener('keydown', event => {
  const card = event.target.closest('[data-post-id]');
  if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openPost(card.dataset.postId); }
});
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); search.focus(); }
});

fetch('./posts.json')
  .then(response => { if (!response.ok) throw new Error('文章数据加载失败'); return response.json(); })
  .then(posts => { state.posts = posts.sort((a, b) => b.date.localeCompare(a.date)); renderFilters(); renderPosts(); })
  .catch(() => { count.textContent = '文章加载失败'; error.hidden = false; });
