import { api } from './api'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getProducts: build.query({
            query: ({ params, category }) => ({
                url: category ? `/products/${category}` : '/products',
                params
            }),
            providesTags: ["Product"]
        }),
        getProductsCategory: build.query({
            query: () => ({
                url: '/products/category-list',
            }),
            providesTags: ["Product"]
        }),
    }),
})
export const {
    useGetProductsQuery,
    useGetProductsCategoryQuery
} = productApi