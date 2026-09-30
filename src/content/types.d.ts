export interface Role { hero: string; side: string }
export interface MenuItem { label: string; href: string }
export interface Link { label: string; href: string }
export interface Stat { value: string; label: string }
export interface Card { label?: string; title: string; text?: string }
export interface Image { src?: string; alt?: string; caption?: string }

export interface Block {
  eyebrow?: string;
  heading?: string;
  big?: boolean;
  image?: Image;
  stats?: Stat[];
  cards?: Card[];
  paragraphs?: string[];
  link?: Link;
}

export interface Chapter { id: string; label: string; blocks: Block[] }

export interface WorkPage {
  headline?: string;
  summary?: string;
  hero?: { src: string; alt?: string };
  role?: string[];
  skills?: string[];
  team?: string[];
  timeline?: string[];
  chapters?: Chapter[];
}

export interface Work {
  slug: string;
  name: string;
  type: string;
  tags: string[];
  page?: WorkPage;
}

export interface Site {
  title: string;
  description: string;
  name: string;
  greeting: string;
  headline: string;
  location: string;
  roles: Role[];
  email: string;
  linkedin: string;
  menu: MenuItem[];
  works: Work[];
}