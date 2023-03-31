import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAnimeQueryVariables = Types.Exact<{
  userName?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.MediaType>;
  status?: Types.InputMaybe<Types.MediaListStatus>;
}>;


export type GetAnimeQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', entries?: Array<{ __typename?: 'MediaList', progress?: number | null, media?: { __typename?: 'Media', episodes?: number | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', color?: string | null, large?: string | null } | null } | null } | null> | null } | null> | null } | null };


export const GetAnimeDocument = gql`
    query GetAnime($userName: String, $type: MediaType, $status: MediaListStatus) {
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
          episodes
        }
      }
    }
  }
}
    `;

/**
 * __useGetAnimeQuery__
 *
 * To run a query within a React component, call `useGetAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimeQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetAnimeQuery(baseOptions?: Apollo.QueryHookOptions<GetAnimeQuery, GetAnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnimeQuery, GetAnimeQueryVariables>(GetAnimeDocument, options);
      }
export function useGetAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnimeQuery, GetAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnimeQuery, GetAnimeQueryVariables>(GetAnimeDocument, options);
        }
export type GetAnimeQueryHookResult = ReturnType<typeof useGetAnimeQuery>;
export type GetAnimeLazyQueryHookResult = ReturnType<typeof useGetAnimeLazyQuery>;
export type GetAnimeQueryResult = Apollo.QueryResult<GetAnimeQuery, GetAnimeQueryVariables>;