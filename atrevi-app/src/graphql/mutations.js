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
export const createCounter = /* GraphQL */ `
  mutation CreateCounter(
    $input: CreateCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    createCounter(input: $input, condition: $condition) {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateCounter = /* GraphQL */ `
  mutation UpdateCounter(
    $input: UpdateCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    updateCounter(input: $input, condition: $condition) {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteCounter = /* GraphQL */ `
  mutation DeleteCounter(
    $input: DeleteCounterInput!
    $condition: ModelCounterConditionInput
  ) {
    deleteCounter(input: $input, condition: $condition) {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const createCounted = /* GraphQL */ `
  mutation CreateCounted(
    $input: CreateCountedInput!
    $condition: ModelCountedConditionInput
  ) {
    createCounted(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateCounted = /* GraphQL */ `
  mutation UpdateCounted(
    $input: UpdateCountedInput!
    $condition: ModelCountedConditionInput
  ) {
    updateCounted(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteCounted = /* GraphQL */ `
  mutation DeleteCounted(
    $input: DeleteCountedInput!
    $condition: ModelCountedConditionInput
  ) {
    deleteCounted(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
