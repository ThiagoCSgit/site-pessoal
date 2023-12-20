interface Image {
  url: string;
  alt: string
}

export interface Images extends Array<Image>{}

export interface Project {
  slug: string;
  name: string;
  images: Images;
  description?: string
}