/* tslint:disable */
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
      premadeGoalID
      PremadeGoal {
        id
        name
        ammount
        unsplashIMG
        category
        createdAt
        updatedAt
      }
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
        premadeGoalID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrebakedGoal = /* GraphQL */ `
  query GetPrebakedGoal($id: ID!) {
    getPrebakedGoal(id: $id) {
      id
      name
      ammount
      unsplashIMG
      category
      createdAt
      updatedAt
    }
  }
`;
export const listPrebakedGoals = /* GraphQL */ `
  query ListPrebakedGoals(
    $filter: ModelPrebakedGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrebakedGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ammount
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
      prebakedFundID
      prebakedFund {
        id
        name
        category
        unsplashIMG
        createdAt
        updatedAt
      }
      transactions {
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
        prebakedFundID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrebakedFund = /* GraphQL */ `
  query GetPrebakedFund($id: ID!) {
    getPrebakedFund(id: $id) {
      id
      name
      category
      unsplashIMG
      createdAt
      updatedAt
    }
  }
`;
export const listPrebakedFunds = /* GraphQL */ `
  query ListPrebakedFunds(
    $filter: ModelPrebakedFundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrebakedFunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        unsplashIMG
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
        prebakedFundID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestions = /* GraphQL */ `
  query GetQuestions($id: ID!) {
    getQuestions(id: $id) {
      id
      birthdate
      age
      gender
      ocupation
      monthlyIncome
      monthlySpend
      frequency
      yearlySavings
      keepsSavings
      recordKeepingPlace
      selfRating
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        birthdate
        age
        gender
        ocupation
        monthlyIncome
        monthlySpend
        frequency
        yearlySavings
        keepsSavings
        recordKeepingPlace
        selfRating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
