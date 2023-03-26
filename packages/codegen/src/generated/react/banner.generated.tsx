import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetBannerQueryVariables = Types.Exact<{
  userName?: Types.InputMaybe<Types.Scalars['String']>;
  type?: Types.InputMaybe<Types.MediaType>;
  status?: Types.InputMaybe<Types.MediaListStatus>;
}>;


export type GetBannerQuery = { __typename?: 'Query', MediaListCollection?: { __typename?: 'MediaListCollection', lists?: Array<{ __typename?: 'MediaListGroup', entries?: Array<{ __typename?: 'MediaList', progress?: number | null, media?: { __typename?: 'Media', bannerImage?: string | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null, userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', color?: string | null, large?: string | null } | null } | null } | null> | null } | null> | null } | null };


export const GetBannerDocument = gql`
    query GetBanner($userName: String, $type: MediaType, $status: MediaListStatus) {
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
          bannerImage
        }
      }
    }
  }
}
    `;

/**
 * __useGetBannerQuery__
 *
 * To run a query within a React component, call `useGetBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBannerQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetBannerQuery(baseOptions?: Apollo.QueryHookOptions<GetBannerQuery, GetBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBannerQuery, GetBannerQueryVariables>(GetBannerDocument, options);
      }
export function useGetBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBannerQuery, GetBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBannerQuery, GetBannerQueryVariables>(GetBannerDocument, options);
        }
export type GetBannerQueryHookResult = ReturnType<typeof useGetBannerQuery>;
export type GetBannerLazyQueryHookResult = ReturnType<typeof useGetBannerLazyQuery>;
export type GetBannerQueryResult = Apollo.QueryResult<GetBannerQuery, GetBannerQueryVariables>;