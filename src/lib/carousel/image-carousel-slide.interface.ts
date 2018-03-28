export interface CarouselSlide {
  imageUrl: string;
  text?: {
    title?: string;
    content?: string;
  };
  actions?: {
    primary?: string;
    secondary?: string;
  }
}
