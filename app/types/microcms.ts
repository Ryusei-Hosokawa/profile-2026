// microCMS共通型
export interface MicroCMSImage {
  url: string;
  width: number;
  height: number;
}

export interface MicroCMSDate {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
}

// Portfolio型
export interface Portfolio extends MicroCMSDate {
  id: string;
  title: string;
  slug: string;
  thumbnail: MicroCMSImage;
  description: string;
  externalUrl?: string;
  techStack?: string[];
  category: Array<'web-development' | 'web-design' | 'ui-ux' | 'other'>;
  productionYear: number;
  featured?: boolean;
}

// Blog型
export interface Blog extends MicroCMSDate {
  id: string;
  title: string;
  slug: string;
  thumbnail?: MicroCMSImage;
  content: string;
  excerpt?: string;
  category?: string[];
  tags?: string[];
}

// About型
export interface About {
  profileImage: MicroCMSImage;
  mainText: string;
  interestText?: string;
}

// Skill型
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
  level: number;
  icon?: string;
}

export interface Skills {
  skills: Skill[];
}

// Career型
export interface CareerItem {
  yearMonth: string;
  company: string;
  position: string;
  description?: string;
}

export interface Career {
  careers: CareerItem[];
}

// microCMS APIレスポンス型
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
