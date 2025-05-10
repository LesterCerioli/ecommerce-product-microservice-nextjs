export interface CreateBrandDTO {
    name: string;
    logoUrl?: string;
  }
  
export interface UpdateBrandDTO {
    name?: string;
    logoUrl?: string;
}