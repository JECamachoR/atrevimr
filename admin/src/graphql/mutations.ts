/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createPremadeGoal = /* GraphQL */ `
  mutation CreatePremadeGoal(
    $input: CreatePremadeGoalInput!
    $condition: ModelPremadeGoalConditionInput
  ) {
    createPremadeGoal(input: $input, condition: $condition) {
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
export const updatePremadeGoal = /* GraphQL */ `
  mutation UpdatePremadeGoal(
    $input: UpdatePremadeGoalInput!
    $condition: ModelPremadeGoalConditionInput
  ) {
    updatePremadeGoal(input: $input, condition: $condition) {
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
export const deletePremadeGoal = /* GraphQL */ `
  mutation DeletePremadeGoal(
    $input: DeletePremadeGoalInput!
    $condition: ModelPremadeGoalConditionInput
  ) {
    deletePremadeGoal(input: $input, condition: $condition) {
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
export const createFund = /* GraphQL */ `
  mutation CreateFund(
    $input: CreateFundInput!
    $condition: ModelFundConditionInput
  ) {
    createFund(input: $input, condition: $condition) {
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
  }
`;
export const updateFund = /* GraphQL */ `
  mutation UpdateFund(
    $input: UpdateFundInput!
    $condition: ModelFundConditionInput
  ) {
    updateFund(input: $input, condition: $condition) {
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
  }
`;
export const deleteFund = /* GraphQL */ `
  mutation DeleteFund(
    $input: DeleteFundInput!
    $condition: ModelFundConditionInput
  ) {
    deleteFund(input: $input, condition: $condition) {
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
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
  }
`;
export const createQuestions = /* GraphQL */ `
  mutation CreateQuestions(
    $input: CreateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    createQuestions(input: $input, condition: $condition) {
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
export const updateQuestions = /* GraphQL */ `
  mutation UpdateQuestions(
    $input: UpdateQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    updateQuestions(input: $input, condition: $condition) {
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
export const deleteQuestions = /* GraphQL */ `
  mutation DeleteQuestions(
    $input: DeleteQuestionsInput!
    $condition: ModelQuestionsConditionInput
  ) {
    deleteQuestions(input: $input, condition: $condition) {
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
