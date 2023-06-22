import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      profileImgURL
      email
      firstName
      lastName
      recommendedUsers {
        id
        firstName
        lastName
        profileImgURL
      }
      followers {
        id
        firstName
        lastName
        profileImgURL
      }
      following {
        id
        firstName
        lastName
        profileImgURL
      }
      tweets {
        id
        content
        author {
          id
          firstName
          lastName
          profileImgURL
        }
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query GetuserById($id: ID!) {
    getUserById(id: $id) {
      id
      firstName
      lastName
      profileImgURL

      followers {
        id
        firstName
        lastName
        profileImgURL
      }
      following {
        id
        firstName
        lastName
        profileImgURL
      }
      tweets {
        content
        id
        author {
          id
          firstName
          lastName
          profileImgURL
        }
      }
    }
  }
`);
