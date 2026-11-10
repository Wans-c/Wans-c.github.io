@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap');

:root {
  --ink: #20251f;
  --muted: #777d73;
  --paper: #f7f7f3;
  --white: #ffffff;
  --line: #e7e8e1;
  --green: #57765b;
  --green-dark: #354f39;
  --lime: #d9e8a4;
  --bg-gradient: linear-gradient(135deg, #f4efe6 0%, #edf7ed 100%);
  --header-bg: rgba(255, 255, 255, 0.75);
  --panel: rgba(255, 255, 255, 0.68);
  --shadow: rgba(53, 79, 57, 0.12);
  --hero-sun: #f8d98d;
  --hero-hill-back: #b9d7a6;
  --hero-hill-front: #89b784;
  --card-bg: rgba(255, 255, 255, 0.72);
  --card-hover: rgba(87, 118, 91, 0.08);
  --tag-bg: rgba(87, 118, 91, 0.08);
  --serif: Georgia, 'Noto Sans SC', serif;
  --sans: 'DM Sans', 'Noto Sans SC', sans-serif;
}

html[data-theme='spring'] {
  --ink: #223729;
  --muted: #5d7b67;
  --paper: #f6faf1;
  --white: #ffffff;
  --line: #dfead9;
  --green: #5d8b66;
  --green-dark: #355a42;
  --lime: #dff5a5;
  --bg-gradient: linear-gradient(135deg, #f4fbe7 0%, #eaf8e6 48%, #f9f1dd 100%);
  --header-bg: rgba(255, 255, 255, 0.72);
  --panel: rgba(255, 255, 255, 0.7);
  --shadow: rgba(53, 89, 67, 0.12);
  --hero-sun: #f7d480;
  --hero-hill-back: #bee0b2;
  --hero-hill-front: #8cc59a;
  --card-bg: rgba(255, 255, 255, 0.7);
  --card-hover: rgba(93, 139, 102, 0.08);
  --tag-bg: rgba(93, 139, 102, 0.08);
}

html[data-theme='summer'] {
  --ink: #1e2d3b;
  --muted: #5b7380;
  --paper: #edf8ff;
  --white: #ffffff;
  --line: #d8ebf7;
  --green: #4b9cc6;
  --green-dark: #1e6188;
  --lime: #d8f8ff;
  --bg-gradient: linear-gradient(135deg, #ebf8ff 0%, #def1ff 45%, #f6e9c6 100%);
  --header-bg: rgba(255, 255, 255, 0.72);
  --panel: rgba(255, 255, 255, 0.7);
  --shadow: rgba(30, 97, 136, 0.12);
  --hero-sun: #f7d76b;
  --hero-hill-back: #9ad6ea;
  --hero-hill-front: #6bb0d6;
  --card-bg: rgba(255, 255, 255, 0.72);
  --card-hover: rgba(75, 156, 198, 0.08);
  --tag-bg: rgba(75, 156, 198, 0.08);
}

html[data-theme='autumn'] {
  --ink: #2f241b;
  --muted: #7a6559;
  --paper: #f9f1ea;
  --white: #fffaf6;
  --line: #ead7c7;
  --green: #9c623f;
  --green-dark: #69452c;
  --lime: #f4d6a4;
  --bg-gradient: linear-gradient(135deg, #fbf0e4 0%, #f5dcca 45%, #eccf9d 100%);
  --header-bg: rgba(255, 255, 255, 0.72);
  --panel: rgba(255, 255, 255, 0.7);
  --shadow: rgba(105, 69, 43, 0.12);
  --hero-sun: #f0b15d;
  --hero-hill-back: #dca76d;
  --hero-hill-front: #b7784b;
  --card-bg: rgba(255, 255, 255, 0.7);
  --card-hover: rgba(156, 98, 63, 0.08);
  --tag-bg: rgba(156, 98, 63, 0.08);
}

html[data-theme='winter'] {
  --ink: #edf3f8;
  --muted: #b3c8d9;
  --paper: #0d1520;
  --white: #121d29;
  --line: #1d2d3d;
  --green: #a7d1ff;
  --green-dark: #d7ebff;
  --lime: #dfeaff;
  --bg-gradient: linear-gradient(135deg, #09131b 0%, #112635 42%, #1b3753 100%);
  --header-bg: rgba(15, 25, 35, 0.78);
  --panel: rgba(17, 29, 39, 0.78);
  --shadow: rgba(126, 164, 205, 0.16);
  --hero-sun: #dfeaff;
  --hero-hill-back: #3b657d;
  --hero-hill-front: #243d55;
  --card-bg: rgba(14, 22, 28, 0.7);
  --card-hover: rgba(167, 209, 255, 0.08);
  --tag-bg: rgba(167, 209, 255, 0.08);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: var(--sans);
  background: var(--bg-gradient);
  color: var(--ink);
  transition: background 0.35s ease, color 0.35s ease;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button, input {
  font: inherit;
}

.page-width {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 0;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: inline-flex;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  box-shadow: 0 10px 22px var(--shadow);
}

.brand-light {
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--ink);
}

.header-cta,
.text-link,
.about-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 999px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.header-cta {
  padding: 0.7rem 1rem;
  color: var(--white);
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  box-shadow: 0 16px 24px var(--shadow);
}

.theme-switcher {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--panel);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.35);
}

.theme-btn {
  border: none;
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-btn.active {
  background: var(--green);
  color: var(--white);
  box-shadow: 0 8px 18px var(--shadow);
}

main {
  padding-bottom: 48px;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 28px;
  min-height: 70vh;
  padding: 56px 0 28px;
}

.hero-copy {
  max-width: 560px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 18px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted);
}

.status-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 5px rgba(87, 118, 91, 0.12);
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.hero h1 span {
  color: var(--green-dark);
}

.hero-description {
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.8;
}

.text-link {
  margin-top: 24px;
  color: var(--green-dark);
  font-weight: 600;
}

.hero-art {
  position: relative;
  height: 390px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: 0 28px 60px var(--shadow);
}

.orbit {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 50%;
}

.orbit-one {
  width: 240px;
  height: 240px;
  top: 42px;
  right: 64px;
}

.orbit-two {
  width: 310px;
  height: 310px;
  bottom: 24px;
  left: 26px;
}

.sun {
  position: absolute;
  width: 104px;
  height: 104px;
  right: 84px;
  top: 70px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #fff7d4 0%, var(--hero-sun) 40%, rgba(247, 216, 128, 0.15) 100%);
  box-shadow: 0 0 60px rgba(247, 216, 128, 0.6);
}

.hill {
  position: absolute;
  left: -8%;
  width: 116%;
  border-radius: 50% 50% 0 0;
}

.hill-back {
  bottom: 70px;
  height: 160px;
  background: var(--hero-hill-back);
  opacity: 0.9;
}

.hill-front {
  bottom: -10px;
  height: 175px;
  background: var(--hero-hill-front);
}

.art-label {
  position: absolute;
  left: 28px;
  letter-spacing: 0.28em;
  color: rgba(255,255,255,0.8);
  font-size: 11px;
  font-weight: 700;
}

.label-top {
  top: 26px;
}

.label-bottom {
  bottom: 28px;
  left: auto;
  right: 28px;
}

.spark {
  position: absolute;
  color: rgba(255,255,255,0.9);
}

.spark-one { top: 32px; left: 120px; font-size: 30px; }
.spark-two { bottom: 72px; right: 130px; font-size: 22px; }

.hero-index {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  margin-top: 10px;
}

.index-line {
  display: inline-block;
  width: 120px;
  height: 1px;
  background: var(--line);
}

.content-section,
.about-section,
.site-footer {
  margin-top: 32px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.heading-period { color: var(--green); }
.section-note {
  margin: 0;
  color: var(--muted);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-button {
  border: 1px solid var(--line);
  background: var(--card-bg);
  color: var(--muted);
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button.selected {
  background: var(--green);
  color: var(--white);
  border-color: transparent;
}

.search-box {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 280px;
  padding: 0.72rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card-bg);
  color: var(--muted);
}

.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  color: var(--ink);
  outline: none;
}

.search-box input::placeholder {
  color: var(--muted);
}

.search-box kbd {
  padding: 0.2rem 0.45rem;
  border-radius: 8px;
  background: rgba(0,0,0,0.04);
  border: 1px solid var(--line);
  font-size: 0.72rem;
}

.results-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 0.95rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.post-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 18px;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--line);
  box-shadow: 0 14px 30px var(--shadow);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  cursor: pointer;
}

.post-card:hover,
.post-card:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(87, 118, 91, 0.22);
  background: var(--card-hover);
}

.card-top,
.card-bottom,
.results-line,
.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-top {
  gap: 10px;
  color: var(--muted);
}

.category-tag,
.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.28rem 0.6rem;
  border-radius: 999px;
  background: var(--tag-bg);
  color: var(--green-dark);
  font-size: 0.72rem;
}

.post-card h3 {
  margin: 0;
  font-size: 1.3rem;
  letter-spacing: -0.04em;
  line-height: 1.4;
}

.post-excerpt {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.read-time {
  color: var(--muted);
}

.empty-state,
.load-error {
  margin-top: 20px;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  background: rgba(255,255,255,0.2);
  border: 1px solid var(--line);
  color: var(--muted);
}

.about-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 24px 28px;
  border-radius: 24px;
  background: var(--card-bg);
  border: 1px solid var(--line);
  box-shadow: 0 18px 36px var(--shadow);
}

.about-icon {
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--tag-bg);
  color: var(--green-dark);
  font-size: 1.3rem;
}

.about-section h2 {
  margin: 0 0 8px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.04em;
}

.about-section p {
  margin: 0;
  color: var(--muted);
}

.about-link {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--green);
  color: var(--white);
  font-size: 1.4rem;
}

.site-footer {
  gap: 16px;
  color: var(--muted);
  padding: 24px 0 48px;
  border-top: 1px solid var(--line);
}

.article-dialog {
  width: min(760px, calc(100vw - 32px));
  border: none;
  border-radius: 26px;
  background: var(--paper);
  color: var(--ink);
  padding: 26px 26px 20px;
  box-shadow: 0 22px 70px rgba(0,0,0,0.28);
}

.article-dialog::backdrop {
  background: rgba(8, 12, 17, 0.52);
}

.dialog-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}

#dialog-content {
  margin-top: 18px;
  line-height: 1.8;
}

.dialog-meta {
  display: block;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.85rem;
}

#dialog-content h2 {
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

@media (max-width: 840px) {
  .site-header {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero-art {
    height: 300px;
  }

  .about-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .search-box {
    width: 100%;
    min-width: 0;
  }

  .toolbar {
    align-items: stretch;
  }

  .theme-switcher {
    width: 100%;
    justify-content: center;
  }
}
