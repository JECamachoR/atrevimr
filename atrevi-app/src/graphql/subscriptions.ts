/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String!) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String!) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String!) {
    onDeleteUser(id: $id) {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal($owner: String!) {
    onCreateGoal(owner: $owner) {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal($owner: String!) {
    onUpdateGoal(owner: $owner) {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal($owner: String!) {
    onDeleteGoal(owner: $owner) {
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
export const onCreatePrebakedGoal = /* GraphQL */ `
  subscription OnCreatePrebakedGoal {
    onCreatePrebakedGoal {
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
export const onUpdatePrebakedGoal = /* GraphQL */ `
  subscription OnUpdatePrebakedGoal {
    onUpdatePrebakedGoal {
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
export const onDeletePrebakedGoal = /* GraphQL */ `
  subscription OnDeletePrebakedGoal {
    onDeletePrebakedGoal {
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
export const onCreateFund = /* GraphQL */ `
  subscription OnCreateFund($owner: String!) {
    onCreateFund(owner: $owner) {
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
export const onUpdateFund = /* GraphQL */ `
  subscription OnUpdateFund($owner: String!) {
    onUpdateFund(owner: $owner) {
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
export const onDeleteFund = /* GraphQL */ `
  subscription OnDeleteFund($owner: String!) {
    onDeleteFund(owner: $owner) {
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
export const onCreatePrebakedFund = /* GraphQL */ `
  subscription OnCreatePrebakedFund {
    onCreatePrebakedFund {
      id
      name
      category
      unsplashIMG
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrebakedFund = /* GraphQL */ `
  subscription OnUpdatePrebakedFund {
    onUpdatePrebakedFund {
      id
      name
      category
      unsplashIMG
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrebakedFund = /* GraphQL */ `
  subscription OnDeletePrebakedFund {
    onDeletePrebakedFund {
      id
      name
      category
      unsplashIMG
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String!) {
    onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String!) {
    onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String!) {
    onDeleteTransaction(owner: $owner) {
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
export const onCreateQuestions = /* GraphQL */ `
  subscription OnCreateQuestions {
    onCreateQuestions {
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
export const onUpdateQuestions = /* GraphQL */ `
  subscription OnUpdateQuestions {
    onUpdateQuestions {
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
export const onDeleteQuestions = /* GraphQL */ `
  subscription OnDeleteQuestions {
    onDeleteQuestions {
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
