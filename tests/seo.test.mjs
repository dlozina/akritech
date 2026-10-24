import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import { URL } from 'node:url';

const output = new URL('../out/', import.meta.url);
const html = await readFile(new URL('index.html', output), 'utf8');
const canonical = 'https://www.akritech.eu/';
const tags = (name) =>
  [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) =>
    Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [
        key.toLowerCase(),
        value,
      ]),
    ),
  );
const meta = (name) =>
  tags('meta').filter((tag) => tag.name === name || tag.property === name);

async function assertLocalAsset(url) {
  const path = new URL(url, canonical);
  assert.equal(path.origin, new URL(canonical).origin);
  const file = await stat(new URL(`.${path.pathname}`, output));
  assert.ok(file.size > 0, `${url} is empty`);
}

test('indexable, canonical page has unique metadata and readable HTML', () => {
  assert.match(html, /<html[^>]*lang="en"/);
  assert.equal([...html.matchAll(/<title\b/g)].length, 1);
  assert.match(html, /<title\b[^>]*>Akritech[^<]*Software Engineering/);
  assert.equal(meta('description').length, 1);
  assert.match(meta('description')[0].content, /Dino Lozina/);
  assert.deepEqual(
    tags('link')
      .filter((tag) => tag.rel === 'canonical')
      .map((tag) => tag.href),
    [canonical],
  );
  assert.equal(meta('robots').length, 1);
  assert.match(meta('robots')[0].content, /index,follow/);
  assert.doesNotMatch(meta('robots')[0].content, /noindex|nofollow/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /founder of Akritech/);
  assert.match(html, /I build applications end to end/);
});

test('social metadata points to a published image and the canonical URL', async () => {
  assert.equal(meta('og:type')[0].content, 'website');
  assert.equal(meta('og:url')[0].content, canonical);
  assert.equal(meta('twitter:card')[0].content, 'summary_large_image');
  assert.equal(meta('og:image')[0].content, meta('twitter:image')[0].content);
  assert.ok(meta('og:image:alt')[0].content);
  await assertLocalAsset(meta('og:image')[0].content);
});

test('structured data describes the business, founder, and website with valid references', async () => {
  const blocks = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
    ),
  ];
  assert.equal(blocks.length, 1);
  const data = JSON.parse(blocks[0][1]);
  assert.equal(data['@context'], 'https://schema.org');
  const graph = data['@graph'];
  const organization = graph.find((entry) => entry['@type'] === 'Organization');
  const person = graph.find((entry) => entry['@type'] === 'Person');
  assert.equal(organization.name, 'Akritech');
  assert.equal(organization.url, canonical);
  assert.equal(organization.founder['@id'], person['@id']);
  assert.equal(person.name, 'Dino Lozina');
  assert.equal(person.worksFor['@id'], organization['@id']);
  assert.ok(
    graph.some(
      (entry) => entry['@type'] === 'WebSite' && entry.url === canonical,
    ),
  );
  await assertLocalAsset(organization.logo.url);
});

test('robots and sitemap expose only real canonical pages', async () => {
  const robots = await readFile(new URL('robots.txt', output), 'utf8');
  assert.match(robots, /User-agent: \*\s+Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`));
  const sitemap = await readFile(new URL('sitemap.xml', output), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    ([, url]) => url,
  );
  assert.deepEqual(urls, [canonical]);
});

test('visible images have dimensions and alt text; links and local resources resolve', async () => {
  const images = tags('img');
  const hero = images.find((tag) => tag.src.includes('coastal-workshop'));
  assert.equal(hero.fetchpriority, 'high');
  assert.notEqual(hero.loading, 'lazy');
  for (const img of images) {
    assert.ok(Object.hasOwn(img, 'alt'), img.src);
    assert.ok(Number(img.width) > 0 && Number(img.height) > 0, img.src);
    await assertLocalAsset(img.src);
  }
  for (const link of tags('a').filter(
    (tag) => tag.href?.startsWith('#') && tag.href.length > 1,
  )) {
    assert.ok(html.includes(`id="${link.href.slice(1)}"`), link.href);
  }
  for (const link of tags('link').filter((tag) => tag.href?.startsWith('/')))
    await assertLocalAsset(link.href);
  for (const script of tags('script').filter((tag) => tag.src?.startsWith('/')))
    await assertLocalAsset(script.src);
});

test('404 page does not reuse the home page canonical or index directive', async () => {
  const missing = await readFile(join(output.pathname, '404.html'), 'utf8');
  assert.doesNotMatch(missing, /rel="canonical"/);
  assert.doesNotMatch(missing, /content="index,follow/);
});
