const files = import.meta.glob('./site*.js', { eager: true });
const chosen = files['./site.js'] ?? files['./site.example.js'];

/** @type {import('./types').Site} */
export const site = chosen.site;