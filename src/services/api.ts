import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Game } from '../src/pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    })
  })
})

export const { useGetFeaturedGameQuery } = api

export default api
