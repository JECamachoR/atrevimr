/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  phone: string,
  email?: string | null,
  balance?: number | null,
  frequency?: string | null,
  DOTW?: string | null,
  name?: string | null,
  profileIMG?: string | null,
};

export type ModelUserConditionInput = {
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  frequency?: ModelStringInput | null,
  DOTW?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profileIMG?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id?: string | null,
  phone: string,
  email?: string | null,
  balance?: number | null,
  frequency?: string | null,
  DOTW?: string | null,
  name?: string | null,
  profileIMG?: string | null,
  goals?: ModelGoalConnection | null,
  funds?: ModelFundConnection | null,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGoalConnection = {
  __typename: "ModelGoalConnection",
  items?:  Array<Goal | null > | null,
  nextToken?: string | null,
};

export type Goal = {
  __typename: "Goal",
  id: string,
  owner?: string | null,
  name: string,
  ammount: number,
  date: string,
  unsplashIMG?: string | null,
  category: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelFundConnection = {
  __typename: "ModelFundConnection",
  items?:  Array<Fund | null > | null,
  nextToken?: string | null,
};

export type Fund = {
  __typename: "Fund",
  id: string,
  owner?: string | null,
  name: string,
  balance: number,
  recurringAmmount?: number | null,
  category?: string | null,
  unsplashIMG?: string | null,
  transactions?: ModelTransactionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items?:  Array<Transaction | null > | null,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  fundID: string,
  owner?: string | null,
  ammount: number,
  concept: string,
  fund?: Fund | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  phone?: string | null,
  email?: string | null,
  balance?: number | null,
  frequency?: string | null,
  DOTW?: string | null,
  name?: string | null,
  profileIMG?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateGoalInput = {
  id?: string | null,
  owner?: string | null,
  name: string,
  ammount: number,
  date: string,
  unsplashIMG?: string | null,
  category: string,
};

export type ModelGoalConditionInput = {
  name?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
};

export type UpdateGoalInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  ammount?: number | null,
  date?: string | null,
  unsplashIMG?: string | null,
  category?: string | null,
};

export type DeleteGoalInput = {
  id: string,
};

export type CreateFundInput = {
  id?: string | null,
  owner?: string | null,
  name: string,
  balance: number,
  recurringAmmount?: number | null,
  category?: string | null,
  unsplashIMG?: string | null,
};

export type ModelFundConditionInput = {
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  recurringAmmount?: ModelFloatInput | null,
  category?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  and?: Array< ModelFundConditionInput | null > | null,
  or?: Array< ModelFundConditionInput | null > | null,
  not?: ModelFundConditionInput | null,
};

export type UpdateFundInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  balance?: number | null,
  recurringAmmount?: number | null,
  category?: string | null,
  unsplashIMG?: string | null,
};

export type DeleteFundInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  fundID: string,
  owner?: string | null,
  ammount: number,
  concept: string,
  transactionFundId?: string | null,
};

export type ModelTransactionConditionInput = {
  fundID?: ModelIDInput | null,
  ammount?: ModelFloatInput | null,
  concept?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  fundID?: string | null,
  owner?: string | null,
  ammount?: number | null,
  concept?: string | null,
  transactionFundId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateCounterInput = {
  id?: string | null,
  owner?: string | null,
  count?: number | null,
};

export type ModelCounterConditionInput = {
  count?: ModelIntInput | null,
  and?: Array< ModelCounterConditionInput | null > | null,
  or?: Array< ModelCounterConditionInput | null > | null,
  not?: ModelCounterConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Counter = {
  __typename: "Counter",
  id: string,
  owner?: string | null,
  count?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCounterInput = {
  id: string,
  owner?: string | null,
  count?: number | null,
};

export type DeleteCounterInput = {
  id: string,
};

export type CreateCountedInput = {
  id?: string | null,
  owner?: string | null,
};

export type ModelCountedConditionInput = {
  and?: Array< ModelCountedConditionInput | null > | null,
  or?: Array< ModelCountedConditionInput | null > | null,
  not?: ModelCountedConditionInput | null,
};

export type Counted = {
  __typename: "Counted",
  id: string,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCountedInput = {
  id: string,
  owner?: string | null,
};

export type DeleteCountedInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  frequency?: ModelStringInput | null,
  DOTW?: ModelStringInput | null,
  name?: ModelStringInput | null,
  profileIMG?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelGoalFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type ModelFundFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  name?: ModelStringInput | null,
  balance?: ModelFloatInput | null,
  recurringAmmount?: ModelFloatInput | null,
  category?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  and?: Array< ModelFundFilterInput | null > | null,
  or?: Array< ModelFundFilterInput | null > | null,
  not?: ModelFundFilterInput | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  fundID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  concept?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelCounterFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelCounterFilterInput | null > | null,
  or?: Array< ModelCounterFilterInput | null > | null,
  not?: ModelCounterFilterInput | null,
};

export type ModelCounterConnection = {
  __typename: "ModelCounterConnection",
  items?:  Array<Counter | null > | null,
  nextToken?: string | null,
};

export type ModelCountedFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCountedFilterInput | null > | null,
  or?: Array< ModelCountedFilterInput | null > | null,
  not?: ModelCountedFilterInput | null,
};

export type ModelCountedConnection = {
  __typename: "ModelCountedConnection",
  items?:  Array<Counted | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGoalMutationVariables = {
  input: CreateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type CreateGoalMutation = {
  createGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGoalMutationVariables = {
  input: UpdateGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type UpdateGoalMutation = {
  updateGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGoalMutationVariables = {
  input: DeleteGoalInput,
  condition?: ModelGoalConditionInput | null,
};

export type DeleteGoalMutation = {
  deleteGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFundMutationVariables = {
  input: CreateFundInput,
  condition?: ModelFundConditionInput | null,
};

export type CreateFundMutation = {
  createFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFundMutationVariables = {
  input: UpdateFundInput,
  condition?: ModelFundConditionInput | null,
};

export type UpdateFundMutation = {
  updateFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFundMutationVariables = {
  input: DeleteFundInput,
  condition?: ModelFundConditionInput | null,
};

export type DeleteFundMutation = {
  deleteFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCounterMutationVariables = {
  input: CreateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type CreateCounterMutation = {
  createCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCounterMutationVariables = {
  input: UpdateCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type UpdateCounterMutation = {
  updateCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCounterMutationVariables = {
  input: DeleteCounterInput,
  condition?: ModelCounterConditionInput | null,
};

export type DeleteCounterMutation = {
  deleteCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCountedMutationVariables = {
  input: CreateCountedInput,
  condition?: ModelCountedConditionInput | null,
};

export type CreateCountedMutation = {
  createCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCountedMutationVariables = {
  input: UpdateCountedInput,
  condition?: ModelCountedConditionInput | null,
};

export type UpdateCountedMutation = {
  updateCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCountedMutationVariables = {
  input: DeleteCountedInput,
  condition?: ModelCountedConditionInput | null,
};

export type DeleteCountedMutation = {
  deleteCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id?: string | null,
      phone: string,
      email?: string | null,
      balance?: number | null,
      frequency?: string | null,
      DOTW?: string | null,
      name?: string | null,
      profileIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGoalQueryVariables = {
  id: string,
};

export type GetGoalQuery = {
  getGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGoalsQueryVariables = {
  filter?: ModelGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGoalsQuery = {
  listGoals?:  {
    __typename: "ModelGoalConnection",
    items?:  Array< {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      ammount: number,
      date: string,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFundQueryVariables = {
  id: string,
};

export type GetFundQuery = {
  getFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFundsQueryVariables = {
  filter?: ModelFundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundsQuery = {
  listFunds?:  {
    __typename: "ModelFundConnection",
    items?:  Array< {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items?:  Array< {
      __typename: "Transaction",
      id: string,
      fundID: string,
      owner?: string | null,
      ammount: number,
      concept: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCounterQueryVariables = {
  id: string,
};

export type GetCounterQuery = {
  getCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountersQueryVariables = {
  filter?: ModelCounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountersQuery = {
  listCounters?:  {
    __typename: "ModelCounterConnection",
    items?:  Array< {
      __typename: "Counter",
      id: string,
      owner?: string | null,
      count?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCountedQueryVariables = {
  id: string,
};

export type GetCountedQuery = {
  getCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCountedsQueryVariables = {
  filter?: ModelCountedFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCountedsQuery = {
  listCounteds?:  {
    __typename: "ModelCountedConnection",
    items?:  Array< {
      __typename: "Counted",
      id: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id: string,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id?: string | null,
    phone: string,
    email?: string | null,
    balance?: number | null,
    frequency?: string | null,
    DOTW?: string | null,
    name?: string | null,
    profileIMG?: string | null,
    goals?:  {
      __typename: "ModelGoalConnection",
      nextToken?: string | null,
    } | null,
    funds?:  {
      __typename: "ModelFundConnection",
      nextToken?: string | null,
    } | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGoalSubscriptionVariables = {
  owner: string,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscriptionVariables = {
  owner: string,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscriptionVariables = {
  owner: string,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    ammount: number,
    date: string,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFundSubscriptionVariables = {
  owner: string,
};

export type OnCreateFundSubscription = {
  onCreateFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFundSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFundSubscription = {
  onUpdateFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFundSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFundSubscription = {
  onDeleteFund?:  {
    __typename: "Fund",
    id: string,
    owner?: string | null,
    name: string,
    balance: number,
    recurringAmmount?: number | null,
    category?: string | null,
    unsplashIMG?: string | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  owner: string,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  owner: string,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  owner: string,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    fundID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    fund?:  {
      __typename: "Fund",
      id: string,
      owner?: string | null,
      name: string,
      balance: number,
      recurringAmmount?: number | null,
      category?: string | null,
      unsplashIMG?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCounterSubscriptionVariables = {
  owner: string,
};

export type OnCreateCounterSubscription = {
  onCreateCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCounterSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCounterSubscription = {
  onUpdateCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCounterSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCounterSubscription = {
  onDeleteCounter?:  {
    __typename: "Counter",
    id: string,
    owner?: string | null,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCountedSubscriptionVariables = {
  owner: string,
};

export type OnCreateCountedSubscription = {
  onCreateCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCountedSubscriptionVariables = {
  owner: string,
};

export type OnUpdateCountedSubscription = {
  onUpdateCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCountedSubscriptionVariables = {
  owner: string,
};

export type OnDeleteCountedSubscription = {
  onDeleteCounted?:  {
    __typename: "Counted",
    id: string,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
