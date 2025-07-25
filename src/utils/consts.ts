export const TABLET_WIDTH = 1024

export const MIN_EXPERIENCE_YEAR = 2011

export const PROJECT_TYPES = [
  'wasm',
  'full-stack',
  'backend',
  'frontend',
  'devops',
  'general programming',
  'machine learning',
  'other',
]

export const serverURL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const VIDEO_EXTENSIONS = ['mp4', 'webm', 'ogg', 'mov', 'avi', 'wmv', 'flv', 'mkv', 'm4v']
export const IMAGE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'webp',
  'svg',
  'bmp',
  'tiff',
  'pdf', // cloudinary treats pdf as images
]
export const RAW_EXTENSIONS = [
  // Documents
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  'txt',
  // Archives
  'zip',
  'rar',
  '7z',
  'tar',
  'gz',
  // Other
  'csv',
  'json',
  'xml',
  'md',
]

export const STATIC_PAGES = ['experience']
