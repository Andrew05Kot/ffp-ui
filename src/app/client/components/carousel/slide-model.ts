export interface SlideModel {
  title: string;
  subtitle?: string;
  description?: string;
  label?: string;
  imageUrl: string;
  labels?: string[]
  oldPrice: number;
  newPrice: number;
}
