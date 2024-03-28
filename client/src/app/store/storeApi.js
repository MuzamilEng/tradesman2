import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL }`}),
  endpoints: (builder) => ({
    getAllTradesmen: builder.query({
      query: () => `/tradesman`,
      providesTags: (result, error, id) => [{ type: 'Tradesman', id }],
    }),
    getTrademanById: builder.query({
      query: (id) => `/tradesman/${id}`,
      providesTags: (result, error, id) => [{ type: 'Tradesman', id }],
    }),
    getTrademanByEmail: builder.query({
      query: (email) => `/tradesman/getProfile/${email}`,
      providesTags: (result, error, email) => [{ type: 'Tradesman', email }],
    }),
    addTradesman: builder.mutation({
      query: (data) => ({
        url: '/tradesman/createTrademanProfile',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Tradesman', id: 'LIST' }], // Invalidate the 'Tradesman' tag on success
    }),
    updateTradesman: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tradesman/update/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tradesman', id }],
    }),
    deleteTradesman: builder.mutation({
      query: (id) => ({
        url: `/tradesman/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Tradesman', id }],
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }], // Invalidate the 'User' tag on success
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }], // Invalidate the 'User' tag on success
    }),
    signUpUser: builder.mutation({
      query: (data) => ({
        url: '/signUp',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }], // Invalidate the 'User' tag on success
    }),
    editUser: builder.mutation({
      query: ({ userID, data }) => ({
        url: `/uploads${userID}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userID) => ({
        url: `/uploads${userID}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllTradesmenQuery,
  useGetTrademanByIdQuery,
  useGetTrademanByEmailQuery,
  useAddTradesmanMutation,
  useUpdateTradesmanMutation,
  useDeleteTradesmanMutation,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useLoginUserMutation,
  useSignUpUserMutation,
} = storeApi;
