import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWatchingAnimeQueryQueryVariables = Types.Exact<{
  userName?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.MediaType>;
  status?: Types.InputMaybe<Types.MediaListStatus>;
}>;


export type GetWatchingAnimeQueryQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', entries?: Array<{ __typename?: 'MediaList', progress?: number | null, media?: { __typename?: 'Media', title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', color?: string | null, large?: string | null } | null } | null } | null> | null } | null> | null } | null };


export const GetWatchingAnimeQueryDocument = gql`
    query GetWatchingAnimeQuery($userName: String, $type: MediaType, $status: MediaListStatus) {
  MediaListCollection(userName: $userName, type: $type, status: $status) {
    lists {
      entries {
        progress
        media {
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            color
            large
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetWatchingAnimeQueryQuery__
 *
 * To run a query within a React component, call `useGetWatchingAnimeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchingAnimeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchingAnimeQueryQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetWatchingAnimeQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetWatchingAnimeQueryQuery, GetWatchingAnimeQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchingAnimeQueryQuery, GetWatchingAnimeQueryQueryVariables>(GetWatchingAnimeQueryDocument, options);
      }
export function useGetWatchingAnimeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchingAnimeQueryQuery, GetWatchingAnimeQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchingAnimeQueryQuery, GetWatchingAnimeQueryQueryVariables>(GetWatchingAnimeQueryDocument, options);
        }
export type GetWatchingAnimeQueryQueryHookResult = ReturnType<typeof useGetWatchingAnimeQueryQuery>;
export type GetWatchingAnimeQueryLazyQueryHookResult = ReturnType<typeof useGetWatchingAnimeQueryLazyQuery>;
export type GetWatchingAnimeQueryQueryResult = Apollo.QueryResult<GetWatchingAnimeQueryQuery, GetWatchingAnimeQueryQueryVariables>;