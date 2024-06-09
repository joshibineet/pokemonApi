import { apiPaths } from '@/core/api/apiConstants';
import { baseApi } from '@/core/api/apiQuery';
import { Pokemon } from './types';

const pokemonApi = baseApi
    .enhanceEndpoints({ addTagTypes: ['Pokemon'] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getPokemon: builder.query<Pokemon, string>({
                query: (arg) => `${apiPaths.baseUrl}/${arg}/`,
                // providesTags: (response) =>
                //     response
                //         ? [
                //             ...response.map(({ id }) => ({ type: 'Pokemon', id } as const)),
                //             { type: 'Pokemon', id: 'LIST' },
                //         ]
                //         : [{ type: 'Pokemon', id: 'LIST' }],
                serializeQueryArgs: ({ endpointName }) => {
                    return endpointName;
                },
                forceRefetch({ currentArg, previousArg }) {
                    return currentArg !== previousArg;
                },
                transformResponse: (response: any) => {
                    console.log(response);
                    return response as Pokemon;
                },
            }),
        }),
        overrideExisting: true,
    });

export default pokemonApi;