/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      phone
      email
      balance
      frequency
      DOTW
      name
      profileIMG
      goals {
        items {
          id
          owner
          name
          ammount
          date
          unsplashIMG
          category
          createdAt
          updatedAt
        }
        nextToken
      }
      funds {
        items {
          id
          owner
          name
          balance
          recurringAmmount
          category
          unsplashIMG
          createdAt
          updatedAt
        }
        nextToken
      }
      transactions {
        items {
          id
          fundID
          owner
          ammount
          concept
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        email
        balance
        frequency
        DOTW
        name
        profileIMG
        goals {
          nextToken
        }
        funds {
          nextToken
        }
        transactions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      owner
      name
      ammount
      date
      unsplashIMG
      category
      createdAt
      updatedAt
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        ammount
        date
        unsplashIMG
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFund = /* GraphQL */ `
  query GetFund($id: ID!) {
    getFund(id: $id) {
      id
      owner
      name
      balance
      recurringAmmount
      category
      unsplashIMG
      transactions {
        items {
          id
          fundID
          owner
          ammount
          concept
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFunds = /* GraphQL */ `
  query ListFunds(
    $filter: ModelFundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        balance
        recurringAmmount
        category
        unsplashIMG
        transactions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      fundID
      owner
      ammount
      concept
      fund {
        id
        owner
        name
        balance
        recurringAmmount
        category
        unsplashIMG
        transactions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fundID
        owner
        ammount
        concept
        fund {
          id
          owner
          name
          balance
          recurringAmmount
          category
          unsplashIMG
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCounter = /* GraphQL */ `
  query GetCounter($id: ID!) {
    getCounter(id: $id) {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const listCounters = /* GraphQL */ `
  query ListCounters(
    $filter: ModelCounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCounted = /* GraphQL */ `
  query GetCounted($id: ID!) {
    getCounted(id: $id) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCounteds = /* GraphQL */ `
  query ListCounteds(
    $filter: ModelCountedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCounteds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
