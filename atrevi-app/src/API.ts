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
  installments: number,
  total: number,
  date: string,
  frequency: string,
  unsplashIMG?: string | null,
  category: string,
  premadeGoalID?: string | null,
  PremadeGoal?: PrebakedGoal | null,
  createdAt: string,
  updatedAt: string,
};

export type PrebakedGoal = {
  __typename: "PrebakedGoal",
  id: string,
  name: string,
  ammount: number,
  unsplashIMG?: string | null,
  category: string,
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
  recievingGoalID: string,
  owner?: string | null,
  ammount: number,
  concept: string,
  recievingGoal?: Goal | null,
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
  installments: number,
  total: number,
  date: string,
  frequency: string,
  unsplashIMG?: string | null,
  category: string,
  premadeGoalID?: string | null,
  goalPremadeGoalId?: string | null,
};

export type ModelGoalConditionInput = {
  name?: ModelStringInput | null,
  installments?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  premadeGoalID?: ModelIDInput | null,
  and?: Array< ModelGoalConditionInput | null > | null,
  or?: Array< ModelGoalConditionInput | null > | null,
  not?: ModelGoalConditionInput | null,
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

export type UpdateGoalInput = {
  id: string,
  owner?: string | null,
  name?: string | null,
  installments?: number | null,
  total?: number | null,
  date?: string | null,
  frequency?: string | null,
  unsplashIMG?: string | null,
  category?: string | null,
  premadeGoalID?: string | null,
  goalPremadeGoalId?: string | null,
};

export type DeleteGoalInput = {
  id: string,
};

export type CreatePrebakedGoalInput = {
  id?: string | null,
  name: string,
  ammount: number,
  unsplashIMG?: string | null,
  category: string,
};

export type ModelPrebakedGoalConditionInput = {
  name?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelPrebakedGoalConditionInput | null > | null,
  or?: Array< ModelPrebakedGoalConditionInput | null > | null,
  not?: ModelPrebakedGoalConditionInput | null,
};

export type UpdatePrebakedGoalInput = {
  id: string,
  name?: string | null,
  ammount?: number | null,
  unsplashIMG?: string | null,
  category?: string | null,
};

export type DeletePrebakedGoalInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  recievingGoalID: string,
  owner?: string | null,
  ammount: number,
  concept: string,
  transactionRecievingGoalId?: string | null,
};

export type ModelTransactionConditionInput = {
  recievingGoalID?: ModelIDInput | null,
  ammount?: ModelFloatInput | null,
  concept?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionInput = {
  id: string,
  recievingGoalID?: string | null,
  owner?: string | null,
  ammount?: number | null,
  concept?: string | null,
  transactionRecievingGoalId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateQuestionsInput = {
  id: string,
  birthdate: string,
  age: number,
  gender: string,
  ocupation: string,
  monthlyIncome: number,
  monthlySpend: number,
  frequency: string,
  yearlySavings: number,
  keepsSavings: string,
  recordKeepingPlace: string,
  selfRating: string,
};

export type ModelQuestionsConditionInput = {
  birthdate?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  ocupation?: ModelStringInput | null,
  monthlyIncome?: ModelFloatInput | null,
  monthlySpend?: ModelFloatInput | null,
  frequency?: ModelStringInput | null,
  yearlySavings?: ModelFloatInput | null,
  keepsSavings?: ModelStringInput | null,
  recordKeepingPlace?: ModelStringInput | null,
  selfRating?: ModelStringInput | null,
  and?: Array< ModelQuestionsConditionInput | null > | null,
  or?: Array< ModelQuestionsConditionInput | null > | null,
  not?: ModelQuestionsConditionInput | null,
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

export type Questions = {
  __typename: "Questions",
  id: string,
  birthdate: string,
  age: number,
  gender: string,
  ocupation: string,
  monthlyIncome: number,
  monthlySpend: number,
  frequency: string,
  yearlySavings: number,
  keepsSavings: string,
  recordKeepingPlace: string,
  selfRating: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuestionsInput = {
  id: string,
  birthdate?: string | null,
  age?: number | null,
  gender?: string | null,
  ocupation?: string | null,
  monthlyIncome?: number | null,
  monthlySpend?: number | null,
  frequency?: string | null,
  yearlySavings?: number | null,
  keepsSavings?: string | null,
  recordKeepingPlace?: string | null,
  selfRating?: string | null,
};

export type DeleteQuestionsInput = {
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
  installments?: ModelFloatInput | null,
  total?: ModelFloatInput | null,
  date?: ModelStringInput | null,
  frequency?: ModelStringInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  premadeGoalID?: ModelIDInput | null,
  and?: Array< ModelGoalFilterInput | null > | null,
  or?: Array< ModelGoalFilterInput | null > | null,
  not?: ModelGoalFilterInput | null,
};

export type ModelPrebakedGoalFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  unsplashIMG?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelPrebakedGoalFilterInput | null > | null,
  or?: Array< ModelPrebakedGoalFilterInput | null > | null,
  not?: ModelPrebakedGoalFilterInput | null,
};

export type ModelPrebakedGoalConnection = {
  __typename: "ModelPrebakedGoalConnection",
  items?:  Array<PrebakedGoal | null > | null,
  nextToken?: string | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  recievingGoalID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  ammount?: ModelFloatInput | null,
  concept?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelQuestionsFilterInput = {
  id?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  ocupation?: ModelStringInput | null,
  monthlyIncome?: ModelFloatInput | null,
  monthlySpend?: ModelFloatInput | null,
  frequency?: ModelStringInput | null,
  yearlySavings?: ModelFloatInput | null,
  keepsSavings?: ModelStringInput | null,
  recordKeepingPlace?: ModelStringInput | null,
  selfRating?: ModelStringInput | null,
  and?: Array< ModelQuestionsFilterInput | null > | null,
  or?: Array< ModelQuestionsFilterInput | null > | null,
  not?: ModelQuestionsFilterInput | null,
};

export type ModelQuestionsConnection = {
  __typename: "ModelQuestionsConnection",
  items?:  Array<Questions | null > | null,
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
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePrebakedGoalMutationVariables = {
  input: CreatePrebakedGoalInput,
  condition?: ModelPrebakedGoalConditionInput | null,
};

export type CreatePrebakedGoalMutation = {
  createPrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrebakedGoalMutationVariables = {
  input: UpdatePrebakedGoalInput,
  condition?: ModelPrebakedGoalConditionInput | null,
};

export type UpdatePrebakedGoalMutation = {
  updatePrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrebakedGoalMutationVariables = {
  input: DeletePrebakedGoalInput,
  condition?: ModelPrebakedGoalConditionInput | null,
};

export type DeletePrebakedGoalMutation = {
  deletePrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
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
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
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
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
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
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionsMutationVariables = {
  input: CreateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type CreateQuestionsMutation = {
  createQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionsMutationVariables = {
  input: UpdateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type UpdateQuestionsMutation = {
  updateQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionsMutationVariables = {
  input: DeleteQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type DeleteQuestionsMutation = {
  deleteQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
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
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
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
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPrebakedGoalQueryVariables = {
  id: string,
};

export type GetPrebakedGoalQuery = {
  getPrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrebakedGoalsQueryVariables = {
  filter?: ModelPrebakedGoalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrebakedGoalsQuery = {
  listPrebakedGoals?:  {
    __typename: "ModelPrebakedGoalConnection",
    items?:  Array< {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
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
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
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
      recievingGoalID: string,
      owner?: string | null,
      ammount: number,
      concept: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionsQueryVariables = {
  id: string,
};

export type GetQuestionsQuery = {
  getQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionsConnection",
    items?:  Array< {
      __typename: "Questions",
      id: string,
      birthdate: string,
      age: number,
      gender: string,
      ocupation: string,
      monthlyIncome: number,
      monthlySpend: number,
      frequency: string,
      yearlySavings: number,
      keepsSavings: string,
      recordKeepingPlace: string,
      selfRating: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
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
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
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
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
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
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGoalSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateGoalSubscription = {
  onCreateGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGoalSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateGoalSubscription = {
  onUpdateGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGoalSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteGoalSubscription = {
  onDeleteGoal?:  {
    __typename: "Goal",
    id: string,
    owner?: string | null,
    name: string,
    installments: number,
    total: number,
    date: string,
    frequency: string,
    unsplashIMG?: string | null,
    category: string,
    premadeGoalID?: string | null,
    PremadeGoal?:  {
      __typename: "PrebakedGoal",
      id: string,
      name: string,
      ammount: number,
      unsplashIMG?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePrebakedGoalSubscription = {
  onCreatePrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrebakedGoalSubscription = {
  onUpdatePrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrebakedGoalSubscription = {
  onDeletePrebakedGoal?:  {
    __typename: "PrebakedGoal",
    id: string,
    name: string,
    ammount: number,
    unsplashIMG?: string | null,
    category: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    recievingGoalID: string,
    owner?: string | null,
    ammount: number,
    concept: string,
    recievingGoal?:  {
      __typename: "Goal",
      id: string,
      owner?: string | null,
      name: string,
      installments: number,
      total: number,
      date: string,
      frequency: string,
      unsplashIMG?: string | null,
      category: string,
      premadeGoalID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionsSubscriptionVariables = {
  id?: string | null,
};

export type OnCreateQuestionsSubscription = {
  onCreateQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionsSubscriptionVariables = {
  id?: string | null,
};

export type OnUpdateQuestionsSubscription = {
  onUpdateQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionsSubscriptionVariables = {
  id?: string | null,
};

export type OnDeleteQuestionsSubscription = {
  onDeleteQuestions?:  {
    __typename: "Questions",
    id: string,
    birthdate: string,
    age: number,
    gender: string,
    ocupation: string,
    monthlyIncome: number,
    monthlySpend: number,
    frequency: string,
    yearlySavings: number,
    keepsSavings: string,
    recordKeepingPlace: string,
    selfRating: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
