import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCompletedAnimeQueryVariables = Types.Exact<{
  userName?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.MediaType>;
  status?: Types.InputMaybe<Types.MediaListStatus>;
  format?: Types.InputMaybe<Types.ScoreFormat>;
}>;


export type GetCompletedAnimeQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', entries?: Array<{ __typename?: 'MediaList', score?: number | null, media?: { __typename?: 'Media', title?: { __typename?: 'MediaTitle', english?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', color?: string | null, large?: string | null } | null } | null, startedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, completedAt?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null } | null> | null } | null> | null } | null };


export const GetCompletedAnimeDocument = gql`
    query GetCompletedAnime($userName: String, $type: MediaType, $status: MediaListStatus, $format: ScoreFormat) {
  MediaListCollection(userName: $userName, type: $type, status: $status) {
    lists {
      entries {
        media {
          title {
            english
            userPreferred
          }
          coverImage {
            color
            large
          }
        }
        startedAt {
          year
          month
          day
        }
        completedAt {
          year
          month
          day
        }
        score(format: $format)
      }
    }
  }
}
    `;

/**
 * __useGetCompletedAnimeQuery__
 *
 * To run a query within a React component, call `useGetCompletedAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompletedAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompletedAnimeQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *      format: // value for 'format'
 *   },
 * });
 */
export function useGetCompletedAnimeQuery(baseOptions?: Apollo.QueryHookOptions<GetCompletedAnimeQuery, GetCompletedAnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompletedAnimeQuery, GetCompletedAnimeQueryVariables>(GetCompletedAnimeDocument, options);
      }
export function useGetCompletedAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompletedAnimeQuery, GetCompletedAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompletedAnimeQuery, GetCompletedAnimeQueryVariables>(GetCompletedAnimeDocument, options);
        }
export type GetCompletedAnimeQueryHookResult = ReturnType<typeof useGetCompletedAnimeQuery>;
export type GetCompletedAnimeLazyQueryHookResult = ReturnType<typeof useGetCompletedAnimeLazyQuery>;
export type GetCompletedAnimeQueryResult = Apollo.QueryResult<GetCompletedAnimeQuery, GetCompletedAnimeQueryVariables>;