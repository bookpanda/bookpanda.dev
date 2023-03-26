import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetWatchingAnimeQueryVariables = Types.Exact<{
  userName?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.MediaType>;
  status?: Types.InputMaybe<Types.MediaListStatus>;
}>;


export type GetWatchingAnimeQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', entries?: Array<{ __typename?: 'MediaList', progress?: number | null, media?: { __typename?: 'Media', title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', color?: string | null, large?: string | null } | null } | null } | null> | null } | null> | null } | null };


export const GetWatchingAnimeDocument = gql`
    query GetWatchingAnime($userName: String, $type: MediaType, $status: MediaListStatus) {
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
 * __useGetWatchingAnimeQuery__
 *
 * To run a query within a React component, call `useGetWatchingAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWatchingAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWatchingAnimeQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetWatchingAnimeQuery(baseOptions?: Apollo.QueryHookOptions<GetWatchingAnimeQuery, GetWatchingAnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWatchingAnimeQuery, GetWatchingAnimeQueryVariables>(GetWatchingAnimeDocument, options);
      }
export function useGetWatchingAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWatchingAnimeQuery, GetWatchingAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWatchingAnimeQuery, GetWatchingAnimeQueryVariables>(GetWatchingAnimeDocument, options);
        }
export type GetWatchingAnimeQueryHookResult = ReturnType<typeof useGetWatchingAnimeQuery>;
export type GetWatchingAnimeLazyQueryHookResult = ReturnType<typeof useGetWatchingAnimeLazyQuery>;
export type GetWatchingAnimeQueryResult = Apollo.QueryResult<GetWatchingAnimeQuery, GetWatchingAnimeQueryVariables>;