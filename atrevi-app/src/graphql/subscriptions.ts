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
export const onCreateCounter = /* GraphQL */ `
  subscription OnCreateCounter {
    onCreateCounter {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCounter = /* GraphQL */ `
  subscription OnUpdateCounter {
    onUpdateCounter {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCounter = /* GraphQL */ `
  subscription OnDeleteCounter {
    onDeleteCounter {
      id
      owner
      count
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCounted = /* GraphQL */ `
  subscription OnCreateCounted {
    onCreateCounted {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCounted = /* GraphQL */ `
  subscription OnUpdateCounted {
    onUpdateCounted {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCounted = /* GraphQL */ `
  subscription OnDeleteCounted {
    onDeleteCounted {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
