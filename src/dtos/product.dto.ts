export interface CreateProductDTO {
    name: string;
    description?: string;
    price: number;
    category: string;
    inStock?: boolean;
}