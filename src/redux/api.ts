import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ProductData } from "../../typings";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/'}),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getAll: builder.query<ProductData[], void>({
            query: () => `products`,
            providesTags: [{type: "Products", id: "LIST"}]
        })
    })
})