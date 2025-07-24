export const formatSlug = (slug: string) => {
  if (!slug) return '/'
  if (slug.startsWith('/')) return slug
  return `/${slug}`
}
