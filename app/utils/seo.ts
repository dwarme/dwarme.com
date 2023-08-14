export function getSeoMetas({
  url = 'https://dwarme.com',
  title = "Hi, I'm Daouda Warme, I'm a full stack developer.",
  description = 'I make the world a better place by making quality software for people.',
  keywords = '',
  image = 'https://cdn.shopify.com/s/files/1/0770/5690/1456/files/avatar.jpg?v=1691995193',
}: {
  image?: string;
  url?: string;
  title?: string;
  description?: string;
  keywords?: string;
}) {
  return [
    {title},
    {name: 'description', content: description},
    {name: 'keywords', content: keywords},
    {name: 'og:url', content: url},
    {name: 'og:title', content: title},
    {name: 'og:description', content: description},
    {name: 'twitter:card', content: image ? 'summary_large_image' : 'summary'},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:image', content: image},
    {name: 'twitter:image:alt', content: title},
  ];
}
