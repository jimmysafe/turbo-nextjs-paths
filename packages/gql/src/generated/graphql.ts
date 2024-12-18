/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  landing_categories?: Maybe<Landing_CategoriesAccess>;
  landings?: Maybe<LandingsAccess>;
  media?: Maybe<MediaAccess>;
  organizations?: Maybe<OrganizationsAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  stores?: Maybe<StoresAccess>;
  users?: Maybe<UsersAccess>;
};

export type HeroLandingBlock = {
  __typename?: 'HeroLandingBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image: Media;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Landing = {
  __typename?: 'Landing';
  category: LandingCategory;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  forceCarosello?: Maybe<Scalars['Boolean']['output']>;
  forceEvidenza?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  layout: Array<Landing_Layout>;
  meta?: Maybe<Landing_Meta>;
  name: Scalars['String']['output'];
  negozio?: Maybe<Store>;
  slug?: Maybe<Scalars['String']['output']>;
  slugLock?: Maybe<Scalars['Boolean']['output']>;
  stato: Landing_Stato;
  type: Landing_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LandingCategories = {
  __typename?: 'LandingCategories';
  docs?: Maybe<Array<Maybe<LandingCategory>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LandingCategoriesCreateAccess = {
  __typename?: 'LandingCategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesCreateDocAccess = {
  __typename?: 'LandingCategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesDeleteAccess = {
  __typename?: 'LandingCategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesDeleteDocAccess = {
  __typename?: 'LandingCategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesDocAccessFields = {
  __typename?: 'LandingCategoriesDocAccessFields';
  createdAt?: Maybe<LandingCategoriesDocAccessFields_CreatedAt>;
  landings?: Maybe<LandingCategoriesDocAccessFields_Landings>;
  name?: Maybe<LandingCategoriesDocAccessFields_Name>;
  slug?: Maybe<LandingCategoriesDocAccessFields_Slug>;
  slugLock?: Maybe<LandingCategoriesDocAccessFields_SlugLock>;
  updatedAt?: Maybe<LandingCategoriesDocAccessFields_UpdatedAt>;
};

export type LandingCategoriesDocAccessFields_CreatedAt = {
  __typename?: 'LandingCategoriesDocAccessFields_createdAt';
  create?: Maybe<LandingCategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_CreatedAt_Update>;
};

export type LandingCategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Landings = {
  __typename?: 'LandingCategoriesDocAccessFields_landings';
  create?: Maybe<LandingCategoriesDocAccessFields_Landings_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_Landings_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_Landings_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_Landings_Update>;
};

export type LandingCategoriesDocAccessFields_Landings_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_landings_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Landings_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_landings_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Landings_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_landings_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Landings_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_landings_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Name = {
  __typename?: 'LandingCategoriesDocAccessFields_name';
  create?: Maybe<LandingCategoriesDocAccessFields_Name_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_Name_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_Name_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_Name_Update>;
};

export type LandingCategoriesDocAccessFields_Name_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Name_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Name_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Name_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Slug = {
  __typename?: 'LandingCategoriesDocAccessFields_slug';
  create?: Maybe<LandingCategoriesDocAccessFields_Slug_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_Slug_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_Slug_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_Slug_Update>;
};

export type LandingCategoriesDocAccessFields_SlugLock = {
  __typename?: 'LandingCategoriesDocAccessFields_slugLock';
  create?: Maybe<LandingCategoriesDocAccessFields_SlugLock_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_SlugLock_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_SlugLock_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_SlugLock_Update>;
};

export type LandingCategoriesDocAccessFields_SlugLock_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_slugLock_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_SlugLock_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_slugLock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_SlugLock_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_slugLock_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_SlugLock_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_slugLock_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Slug_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Slug_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Slug_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_Slug_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'LandingCategoriesDocAccessFields_updatedAt';
  create?: Maybe<LandingCategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LandingCategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LandingCategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LandingCategoriesDocAccessFields_UpdatedAt_Update>;
};

export type LandingCategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LandingCategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LandingCategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LandingCategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LandingCategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields = {
  __typename?: 'LandingCategoriesFields';
  createdAt?: Maybe<LandingCategoriesFields_CreatedAt>;
  landings?: Maybe<LandingCategoriesFields_Landings>;
  name?: Maybe<LandingCategoriesFields_Name>;
  slug?: Maybe<LandingCategoriesFields_Slug>;
  slugLock?: Maybe<LandingCategoriesFields_SlugLock>;
  updatedAt?: Maybe<LandingCategoriesFields_UpdatedAt>;
};

export type LandingCategoriesFields_CreatedAt = {
  __typename?: 'LandingCategoriesFields_createdAt';
  create?: Maybe<LandingCategoriesFields_CreatedAt_Create>;
  delete?: Maybe<LandingCategoriesFields_CreatedAt_Delete>;
  read?: Maybe<LandingCategoriesFields_CreatedAt_Read>;
  update?: Maybe<LandingCategoriesFields_CreatedAt_Update>;
};

export type LandingCategoriesFields_CreatedAt_Create = {
  __typename?: 'LandingCategoriesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_CreatedAt_Delete = {
  __typename?: 'LandingCategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_CreatedAt_Read = {
  __typename?: 'LandingCategoriesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_CreatedAt_Update = {
  __typename?: 'LandingCategoriesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Landings = {
  __typename?: 'LandingCategoriesFields_landings';
  create?: Maybe<LandingCategoriesFields_Landings_Create>;
  delete?: Maybe<LandingCategoriesFields_Landings_Delete>;
  read?: Maybe<LandingCategoriesFields_Landings_Read>;
  update?: Maybe<LandingCategoriesFields_Landings_Update>;
};

export type LandingCategoriesFields_Landings_Create = {
  __typename?: 'LandingCategoriesFields_landings_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Landings_Delete = {
  __typename?: 'LandingCategoriesFields_landings_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Landings_Read = {
  __typename?: 'LandingCategoriesFields_landings_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Landings_Update = {
  __typename?: 'LandingCategoriesFields_landings_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Name = {
  __typename?: 'LandingCategoriesFields_name';
  create?: Maybe<LandingCategoriesFields_Name_Create>;
  delete?: Maybe<LandingCategoriesFields_Name_Delete>;
  read?: Maybe<LandingCategoriesFields_Name_Read>;
  update?: Maybe<LandingCategoriesFields_Name_Update>;
};

export type LandingCategoriesFields_Name_Create = {
  __typename?: 'LandingCategoriesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Name_Delete = {
  __typename?: 'LandingCategoriesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Name_Read = {
  __typename?: 'LandingCategoriesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Name_Update = {
  __typename?: 'LandingCategoriesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Slug = {
  __typename?: 'LandingCategoriesFields_slug';
  create?: Maybe<LandingCategoriesFields_Slug_Create>;
  delete?: Maybe<LandingCategoriesFields_Slug_Delete>;
  read?: Maybe<LandingCategoriesFields_Slug_Read>;
  update?: Maybe<LandingCategoriesFields_Slug_Update>;
};

export type LandingCategoriesFields_SlugLock = {
  __typename?: 'LandingCategoriesFields_slugLock';
  create?: Maybe<LandingCategoriesFields_SlugLock_Create>;
  delete?: Maybe<LandingCategoriesFields_SlugLock_Delete>;
  read?: Maybe<LandingCategoriesFields_SlugLock_Read>;
  update?: Maybe<LandingCategoriesFields_SlugLock_Update>;
};

export type LandingCategoriesFields_SlugLock_Create = {
  __typename?: 'LandingCategoriesFields_slugLock_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_SlugLock_Delete = {
  __typename?: 'LandingCategoriesFields_slugLock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_SlugLock_Read = {
  __typename?: 'LandingCategoriesFields_slugLock_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_SlugLock_Update = {
  __typename?: 'LandingCategoriesFields_slugLock_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Slug_Create = {
  __typename?: 'LandingCategoriesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Slug_Delete = {
  __typename?: 'LandingCategoriesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Slug_Read = {
  __typename?: 'LandingCategoriesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_Slug_Update = {
  __typename?: 'LandingCategoriesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_UpdatedAt = {
  __typename?: 'LandingCategoriesFields_updatedAt';
  create?: Maybe<LandingCategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<LandingCategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<LandingCategoriesFields_UpdatedAt_Read>;
  update?: Maybe<LandingCategoriesFields_UpdatedAt_Update>;
};

export type LandingCategoriesFields_UpdatedAt_Create = {
  __typename?: 'LandingCategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_UpdatedAt_Delete = {
  __typename?: 'LandingCategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_UpdatedAt_Read = {
  __typename?: 'LandingCategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesFields_UpdatedAt_Update = {
  __typename?: 'LandingCategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingCategoriesReadAccess = {
  __typename?: 'LandingCategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesReadDocAccess = {
  __typename?: 'LandingCategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesUpdateAccess = {
  __typename?: 'LandingCategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategoriesUpdateDocAccess = {
  __typename?: 'LandingCategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingCategory = {
  __typename?: 'LandingCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  landings?: Maybe<LandingCategory_Landings>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  slugLock?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LandingCategoryLandingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Landing_Where>;
};

export type LandingCategory_Landings = {
  __typename?: 'LandingCategory_Landings';
  docs?: Maybe<Array<Maybe<Landing>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

export type LandingCategory_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingCategory_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type LandingCategory_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingCategory_SlugLock_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingCategory_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingCategory_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<LandingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingCategory_Where_Or>>>;
  createdAt?: InputMaybe<LandingCategory_CreatedAt_Operator>;
  id?: InputMaybe<LandingCategory_Id_Operator>;
  name?: InputMaybe<LandingCategory_Name_Operator>;
  slug?: InputMaybe<LandingCategory_Slug_Operator>;
  slugLock?: InputMaybe<LandingCategory_SlugLock_Operator>;
  updatedAt?: InputMaybe<LandingCategory_UpdatedAt_Operator>;
};

export type LandingCategory_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<LandingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingCategory_Where_Or>>>;
  createdAt?: InputMaybe<LandingCategory_CreatedAt_Operator>;
  id?: InputMaybe<LandingCategory_Id_Operator>;
  name?: InputMaybe<LandingCategory_Name_Operator>;
  slug?: InputMaybe<LandingCategory_Slug_Operator>;
  slugLock?: InputMaybe<LandingCategory_SlugLock_Operator>;
  updatedAt?: InputMaybe<LandingCategory_UpdatedAt_Operator>;
};

export type LandingCategory_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<LandingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingCategory_Where_Or>>>;
  createdAt?: InputMaybe<LandingCategory_CreatedAt_Operator>;
  id?: InputMaybe<LandingCategory_Id_Operator>;
  name?: InputMaybe<LandingCategory_Name_Operator>;
  slug?: InputMaybe<LandingCategory_Slug_Operator>;
  slugLock?: InputMaybe<LandingCategory_SlugLock_Operator>;
  updatedAt?: InputMaybe<LandingCategory_UpdatedAt_Operator>;
};

export enum LandingUpdate_Stato_MutationInput {
  Approvato = 'approvato',
  Inattesa = 'inattesa',
  Nonapprovato = 'nonapprovato'
}

export enum LandingUpdate_Type_MutationInput {
  Landing = 'landing',
  Landingcustom = 'landingcustom',
  Proponi = 'proponi'
}

export type Landing_Layout = HeroLandingBlock | StickyBarBlock;

export type Landing_Meta = {
  __typename?: 'Landing_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Landing_Category_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Landing_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Landing_ForceCarosello_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Landing_ForceEvidenza_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Landing_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Landing_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Landing_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Landing_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Landing_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Landing_Negozio_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Landing_SlugLock_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Landing_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Landing_Stato {
  Approvato = 'approvato',
  Inattesa = 'inattesa',
  Nonapprovato = 'nonapprovato'
}

export enum Landing_Stato_Input {
  Approvato = 'approvato',
  Inattesa = 'inattesa',
  Nonapprovato = 'nonapprovato'
}

export enum Landing_Stato_MutationInput {
  Approvato = 'approvato',
  Inattesa = 'inattesa',
  Nonapprovato = 'nonapprovato'
}

export type Landing_Stato_Operator = {
  all?: InputMaybe<Array<InputMaybe<Landing_Stato_Input>>>;
  equals?: InputMaybe<Landing_Stato_Input>;
  in?: InputMaybe<Array<InputMaybe<Landing_Stato_Input>>>;
  not_equals?: InputMaybe<Landing_Stato_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Landing_Stato_Input>>>;
};

export enum Landing_Type {
  Landing = 'landing',
  Landingcustom = 'landingcustom',
  Proponi = 'proponi'
}

export enum Landing_Type_Input {
  Landing = 'landing',
  Landingcustom = 'landingcustom',
  Proponi = 'proponi'
}

export enum Landing_Type_MutationInput {
  Landing = 'landing',
  Landingcustom = 'landingcustom',
  Proponi = 'proponi'
}

export type Landing_Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Landing_Type_Input>>>;
  equals?: InputMaybe<Landing_Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Landing_Type_Input>>>;
  not_equals?: InputMaybe<Landing_Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Landing_Type_Input>>>;
};

export type Landing_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Landing_Where = {
  AND?: InputMaybe<Array<InputMaybe<Landing_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Landing_Where_Or>>>;
  category?: InputMaybe<Landing_Category_Operator>;
  createdAt?: InputMaybe<Landing_CreatedAt_Operator>;
  forceCarosello?: InputMaybe<Landing_ForceCarosello_Operator>;
  forceEvidenza?: InputMaybe<Landing_ForceEvidenza_Operator>;
  id?: InputMaybe<Landing_Id_Operator>;
  meta__description?: InputMaybe<Landing_Meta__Description_Operator>;
  meta__image?: InputMaybe<Landing_Meta__Image_Operator>;
  meta__title?: InputMaybe<Landing_Meta__Title_Operator>;
  name?: InputMaybe<Landing_Name_Operator>;
  negozio?: InputMaybe<Landing_Negozio_Operator>;
  slug?: InputMaybe<Landing_Slug_Operator>;
  slugLock?: InputMaybe<Landing_SlugLock_Operator>;
  stato?: InputMaybe<Landing_Stato_Operator>;
  type?: InputMaybe<Landing_Type_Operator>;
  updatedAt?: InputMaybe<Landing_UpdatedAt_Operator>;
};

export type Landing_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Landing_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Landing_Where_Or>>>;
  category?: InputMaybe<Landing_Category_Operator>;
  createdAt?: InputMaybe<Landing_CreatedAt_Operator>;
  forceCarosello?: InputMaybe<Landing_ForceCarosello_Operator>;
  forceEvidenza?: InputMaybe<Landing_ForceEvidenza_Operator>;
  id?: InputMaybe<Landing_Id_Operator>;
  meta__description?: InputMaybe<Landing_Meta__Description_Operator>;
  meta__image?: InputMaybe<Landing_Meta__Image_Operator>;
  meta__title?: InputMaybe<Landing_Meta__Title_Operator>;
  name?: InputMaybe<Landing_Name_Operator>;
  negozio?: InputMaybe<Landing_Negozio_Operator>;
  slug?: InputMaybe<Landing_Slug_Operator>;
  slugLock?: InputMaybe<Landing_SlugLock_Operator>;
  stato?: InputMaybe<Landing_Stato_Operator>;
  type?: InputMaybe<Landing_Type_Operator>;
  updatedAt?: InputMaybe<Landing_UpdatedAt_Operator>;
};

export type Landing_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Landing_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Landing_Where_Or>>>;
  category?: InputMaybe<Landing_Category_Operator>;
  createdAt?: InputMaybe<Landing_CreatedAt_Operator>;
  forceCarosello?: InputMaybe<Landing_ForceCarosello_Operator>;
  forceEvidenza?: InputMaybe<Landing_ForceEvidenza_Operator>;
  id?: InputMaybe<Landing_Id_Operator>;
  meta__description?: InputMaybe<Landing_Meta__Description_Operator>;
  meta__image?: InputMaybe<Landing_Meta__Image_Operator>;
  meta__title?: InputMaybe<Landing_Meta__Title_Operator>;
  name?: InputMaybe<Landing_Name_Operator>;
  negozio?: InputMaybe<Landing_Negozio_Operator>;
  slug?: InputMaybe<Landing_Slug_Operator>;
  slugLock?: InputMaybe<Landing_SlugLock_Operator>;
  stato?: InputMaybe<Landing_Stato_Operator>;
  type?: InputMaybe<Landing_Type_Operator>;
  updatedAt?: InputMaybe<Landing_UpdatedAt_Operator>;
};

export type Landings = {
  __typename?: 'Landings';
  docs?: Maybe<Array<Maybe<Landing>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type LandingsCreateAccess = {
  __typename?: 'LandingsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsCreateDocAccess = {
  __typename?: 'LandingsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsDeleteAccess = {
  __typename?: 'LandingsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsDeleteDocAccess = {
  __typename?: 'LandingsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsDocAccessFields = {
  __typename?: 'LandingsDocAccessFields';
  category?: Maybe<LandingsDocAccessFields_Category>;
  createdAt?: Maybe<LandingsDocAccessFields_CreatedAt>;
  description?: Maybe<LandingsDocAccessFields_Description>;
  forceCarosello?: Maybe<LandingsDocAccessFields_ForceCarosello>;
  forceEvidenza?: Maybe<LandingsDocAccessFields_ForceEvidenza>;
  image?: Maybe<LandingsDocAccessFields_Image>;
  layout?: Maybe<LandingsDocAccessFields_Layout>;
  name?: Maybe<LandingsDocAccessFields_Name>;
  negozio?: Maybe<LandingsDocAccessFields_Negozio>;
  slug?: Maybe<LandingsDocAccessFields_Slug>;
  slugLock?: Maybe<LandingsDocAccessFields_SlugLock>;
  stato?: Maybe<LandingsDocAccessFields_Stato>;
  title?: Maybe<LandingsDocAccessFields_Title>;
  type?: Maybe<LandingsDocAccessFields_Type>;
  updatedAt?: Maybe<LandingsDocAccessFields_UpdatedAt>;
};

export type LandingsDocAccessFields_Category = {
  __typename?: 'LandingsDocAccessFields_category';
  create?: Maybe<LandingsDocAccessFields_Category_Create>;
  delete?: Maybe<LandingsDocAccessFields_Category_Delete>;
  read?: Maybe<LandingsDocAccessFields_Category_Read>;
  update?: Maybe<LandingsDocAccessFields_Category_Update>;
};

export type LandingsDocAccessFields_Category_Create = {
  __typename?: 'LandingsDocAccessFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Category_Delete = {
  __typename?: 'LandingsDocAccessFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Category_Read = {
  __typename?: 'LandingsDocAccessFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Category_Update = {
  __typename?: 'LandingsDocAccessFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_CreatedAt = {
  __typename?: 'LandingsDocAccessFields_createdAt';
  create?: Maybe<LandingsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LandingsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LandingsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LandingsDocAccessFields_CreatedAt_Update>;
};

export type LandingsDocAccessFields_CreatedAt_Create = {
  __typename?: 'LandingsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LandingsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_CreatedAt_Read = {
  __typename?: 'LandingsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_CreatedAt_Update = {
  __typename?: 'LandingsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Description = {
  __typename?: 'LandingsDocAccessFields_description';
  create?: Maybe<LandingsDocAccessFields_Description_Create>;
  delete?: Maybe<LandingsDocAccessFields_Description_Delete>;
  read?: Maybe<LandingsDocAccessFields_Description_Read>;
  update?: Maybe<LandingsDocAccessFields_Description_Update>;
};

export type LandingsDocAccessFields_Description_Create = {
  __typename?: 'LandingsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Description_Delete = {
  __typename?: 'LandingsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Description_Read = {
  __typename?: 'LandingsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Description_Update = {
  __typename?: 'LandingsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceCarosello = {
  __typename?: 'LandingsDocAccessFields_forceCarosello';
  create?: Maybe<LandingsDocAccessFields_ForceCarosello_Create>;
  delete?: Maybe<LandingsDocAccessFields_ForceCarosello_Delete>;
  read?: Maybe<LandingsDocAccessFields_ForceCarosello_Read>;
  update?: Maybe<LandingsDocAccessFields_ForceCarosello_Update>;
};

export type LandingsDocAccessFields_ForceCarosello_Create = {
  __typename?: 'LandingsDocAccessFields_forceCarosello_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceCarosello_Delete = {
  __typename?: 'LandingsDocAccessFields_forceCarosello_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceCarosello_Read = {
  __typename?: 'LandingsDocAccessFields_forceCarosello_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceCarosello_Update = {
  __typename?: 'LandingsDocAccessFields_forceCarosello_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceEvidenza = {
  __typename?: 'LandingsDocAccessFields_forceEvidenza';
  create?: Maybe<LandingsDocAccessFields_ForceEvidenza_Create>;
  delete?: Maybe<LandingsDocAccessFields_ForceEvidenza_Delete>;
  read?: Maybe<LandingsDocAccessFields_ForceEvidenza_Read>;
  update?: Maybe<LandingsDocAccessFields_ForceEvidenza_Update>;
};

export type LandingsDocAccessFields_ForceEvidenza_Create = {
  __typename?: 'LandingsDocAccessFields_forceEvidenza_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceEvidenza_Delete = {
  __typename?: 'LandingsDocAccessFields_forceEvidenza_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceEvidenza_Read = {
  __typename?: 'LandingsDocAccessFields_forceEvidenza_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_ForceEvidenza_Update = {
  __typename?: 'LandingsDocAccessFields_forceEvidenza_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Image = {
  __typename?: 'LandingsDocAccessFields_image';
  create?: Maybe<LandingsDocAccessFields_Image_Create>;
  delete?: Maybe<LandingsDocAccessFields_Image_Delete>;
  read?: Maybe<LandingsDocAccessFields_Image_Read>;
  update?: Maybe<LandingsDocAccessFields_Image_Update>;
};

export type LandingsDocAccessFields_Image_Create = {
  __typename?: 'LandingsDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Image_Delete = {
  __typename?: 'LandingsDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Image_Read = {
  __typename?: 'LandingsDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Image_Update = {
  __typename?: 'LandingsDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Layout = {
  __typename?: 'LandingsDocAccessFields_layout';
  create?: Maybe<LandingsDocAccessFields_Layout_Create>;
  delete?: Maybe<LandingsDocAccessFields_Layout_Delete>;
  read?: Maybe<LandingsDocAccessFields_Layout_Read>;
  update?: Maybe<LandingsDocAccessFields_Layout_Update>;
};

export type LandingsDocAccessFields_Layout_Create = {
  __typename?: 'LandingsDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Layout_Delete = {
  __typename?: 'LandingsDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Layout_Read = {
  __typename?: 'LandingsDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Layout_Update = {
  __typename?: 'LandingsDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Name = {
  __typename?: 'LandingsDocAccessFields_name';
  create?: Maybe<LandingsDocAccessFields_Name_Create>;
  delete?: Maybe<LandingsDocAccessFields_Name_Delete>;
  read?: Maybe<LandingsDocAccessFields_Name_Read>;
  update?: Maybe<LandingsDocAccessFields_Name_Update>;
};

export type LandingsDocAccessFields_Name_Create = {
  __typename?: 'LandingsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Name_Delete = {
  __typename?: 'LandingsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Name_Read = {
  __typename?: 'LandingsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Name_Update = {
  __typename?: 'LandingsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Negozio = {
  __typename?: 'LandingsDocAccessFields_negozio';
  create?: Maybe<LandingsDocAccessFields_Negozio_Create>;
  delete?: Maybe<LandingsDocAccessFields_Negozio_Delete>;
  read?: Maybe<LandingsDocAccessFields_Negozio_Read>;
  update?: Maybe<LandingsDocAccessFields_Negozio_Update>;
};

export type LandingsDocAccessFields_Negozio_Create = {
  __typename?: 'LandingsDocAccessFields_negozio_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Negozio_Delete = {
  __typename?: 'LandingsDocAccessFields_negozio_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Negozio_Read = {
  __typename?: 'LandingsDocAccessFields_negozio_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Negozio_Update = {
  __typename?: 'LandingsDocAccessFields_negozio_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Slug = {
  __typename?: 'LandingsDocAccessFields_slug';
  create?: Maybe<LandingsDocAccessFields_Slug_Create>;
  delete?: Maybe<LandingsDocAccessFields_Slug_Delete>;
  read?: Maybe<LandingsDocAccessFields_Slug_Read>;
  update?: Maybe<LandingsDocAccessFields_Slug_Update>;
};

export type LandingsDocAccessFields_SlugLock = {
  __typename?: 'LandingsDocAccessFields_slugLock';
  create?: Maybe<LandingsDocAccessFields_SlugLock_Create>;
  delete?: Maybe<LandingsDocAccessFields_SlugLock_Delete>;
  read?: Maybe<LandingsDocAccessFields_SlugLock_Read>;
  update?: Maybe<LandingsDocAccessFields_SlugLock_Update>;
};

export type LandingsDocAccessFields_SlugLock_Create = {
  __typename?: 'LandingsDocAccessFields_slugLock_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_SlugLock_Delete = {
  __typename?: 'LandingsDocAccessFields_slugLock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_SlugLock_Read = {
  __typename?: 'LandingsDocAccessFields_slugLock_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_SlugLock_Update = {
  __typename?: 'LandingsDocAccessFields_slugLock_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Slug_Create = {
  __typename?: 'LandingsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Slug_Delete = {
  __typename?: 'LandingsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Slug_Read = {
  __typename?: 'LandingsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Slug_Update = {
  __typename?: 'LandingsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Stato = {
  __typename?: 'LandingsDocAccessFields_stato';
  create?: Maybe<LandingsDocAccessFields_Stato_Create>;
  delete?: Maybe<LandingsDocAccessFields_Stato_Delete>;
  read?: Maybe<LandingsDocAccessFields_Stato_Read>;
  update?: Maybe<LandingsDocAccessFields_Stato_Update>;
};

export type LandingsDocAccessFields_Stato_Create = {
  __typename?: 'LandingsDocAccessFields_stato_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Stato_Delete = {
  __typename?: 'LandingsDocAccessFields_stato_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Stato_Read = {
  __typename?: 'LandingsDocAccessFields_stato_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Stato_Update = {
  __typename?: 'LandingsDocAccessFields_stato_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Title = {
  __typename?: 'LandingsDocAccessFields_title';
  create?: Maybe<LandingsDocAccessFields_Title_Create>;
  delete?: Maybe<LandingsDocAccessFields_Title_Delete>;
  read?: Maybe<LandingsDocAccessFields_Title_Read>;
  update?: Maybe<LandingsDocAccessFields_Title_Update>;
};

export type LandingsDocAccessFields_Title_Create = {
  __typename?: 'LandingsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Title_Delete = {
  __typename?: 'LandingsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Title_Read = {
  __typename?: 'LandingsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Title_Update = {
  __typename?: 'LandingsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Type = {
  __typename?: 'LandingsDocAccessFields_type';
  create?: Maybe<LandingsDocAccessFields_Type_Create>;
  delete?: Maybe<LandingsDocAccessFields_Type_Delete>;
  read?: Maybe<LandingsDocAccessFields_Type_Read>;
  update?: Maybe<LandingsDocAccessFields_Type_Update>;
};

export type LandingsDocAccessFields_Type_Create = {
  __typename?: 'LandingsDocAccessFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Type_Delete = {
  __typename?: 'LandingsDocAccessFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Type_Read = {
  __typename?: 'LandingsDocAccessFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_Type_Update = {
  __typename?: 'LandingsDocAccessFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_UpdatedAt = {
  __typename?: 'LandingsDocAccessFields_updatedAt';
  create?: Maybe<LandingsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LandingsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LandingsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LandingsDocAccessFields_UpdatedAt_Update>;
};

export type LandingsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LandingsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LandingsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LandingsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LandingsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields = {
  __typename?: 'LandingsFields';
  category?: Maybe<LandingsFields_Category>;
  createdAt?: Maybe<LandingsFields_CreatedAt>;
  description?: Maybe<LandingsFields_Description>;
  forceCarosello?: Maybe<LandingsFields_ForceCarosello>;
  forceEvidenza?: Maybe<LandingsFields_ForceEvidenza>;
  image?: Maybe<LandingsFields_Image>;
  layout?: Maybe<LandingsFields_Layout>;
  name?: Maybe<LandingsFields_Name>;
  negozio?: Maybe<LandingsFields_Negozio>;
  slug?: Maybe<LandingsFields_Slug>;
  slugLock?: Maybe<LandingsFields_SlugLock>;
  stato?: Maybe<LandingsFields_Stato>;
  title?: Maybe<LandingsFields_Title>;
  type?: Maybe<LandingsFields_Type>;
  updatedAt?: Maybe<LandingsFields_UpdatedAt>;
};

export type LandingsFields_Category = {
  __typename?: 'LandingsFields_category';
  create?: Maybe<LandingsFields_Category_Create>;
  delete?: Maybe<LandingsFields_Category_Delete>;
  read?: Maybe<LandingsFields_Category_Read>;
  update?: Maybe<LandingsFields_Category_Update>;
};

export type LandingsFields_Category_Create = {
  __typename?: 'LandingsFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Category_Delete = {
  __typename?: 'LandingsFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Category_Read = {
  __typename?: 'LandingsFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Category_Update = {
  __typename?: 'LandingsFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_CreatedAt = {
  __typename?: 'LandingsFields_createdAt';
  create?: Maybe<LandingsFields_CreatedAt_Create>;
  delete?: Maybe<LandingsFields_CreatedAt_Delete>;
  read?: Maybe<LandingsFields_CreatedAt_Read>;
  update?: Maybe<LandingsFields_CreatedAt_Update>;
};

export type LandingsFields_CreatedAt_Create = {
  __typename?: 'LandingsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_CreatedAt_Delete = {
  __typename?: 'LandingsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_CreatedAt_Read = {
  __typename?: 'LandingsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_CreatedAt_Update = {
  __typename?: 'LandingsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Description = {
  __typename?: 'LandingsFields_description';
  create?: Maybe<LandingsFields_Description_Create>;
  delete?: Maybe<LandingsFields_Description_Delete>;
  read?: Maybe<LandingsFields_Description_Read>;
  update?: Maybe<LandingsFields_Description_Update>;
};

export type LandingsFields_Description_Create = {
  __typename?: 'LandingsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Description_Delete = {
  __typename?: 'LandingsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Description_Read = {
  __typename?: 'LandingsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Description_Update = {
  __typename?: 'LandingsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceCarosello = {
  __typename?: 'LandingsFields_forceCarosello';
  create?: Maybe<LandingsFields_ForceCarosello_Create>;
  delete?: Maybe<LandingsFields_ForceCarosello_Delete>;
  read?: Maybe<LandingsFields_ForceCarosello_Read>;
  update?: Maybe<LandingsFields_ForceCarosello_Update>;
};

export type LandingsFields_ForceCarosello_Create = {
  __typename?: 'LandingsFields_forceCarosello_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceCarosello_Delete = {
  __typename?: 'LandingsFields_forceCarosello_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceCarosello_Read = {
  __typename?: 'LandingsFields_forceCarosello_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceCarosello_Update = {
  __typename?: 'LandingsFields_forceCarosello_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceEvidenza = {
  __typename?: 'LandingsFields_forceEvidenza';
  create?: Maybe<LandingsFields_ForceEvidenza_Create>;
  delete?: Maybe<LandingsFields_ForceEvidenza_Delete>;
  read?: Maybe<LandingsFields_ForceEvidenza_Read>;
  update?: Maybe<LandingsFields_ForceEvidenza_Update>;
};

export type LandingsFields_ForceEvidenza_Create = {
  __typename?: 'LandingsFields_forceEvidenza_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceEvidenza_Delete = {
  __typename?: 'LandingsFields_forceEvidenza_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceEvidenza_Read = {
  __typename?: 'LandingsFields_forceEvidenza_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_ForceEvidenza_Update = {
  __typename?: 'LandingsFields_forceEvidenza_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Image = {
  __typename?: 'LandingsFields_image';
  create?: Maybe<LandingsFields_Image_Create>;
  delete?: Maybe<LandingsFields_Image_Delete>;
  read?: Maybe<LandingsFields_Image_Read>;
  update?: Maybe<LandingsFields_Image_Update>;
};

export type LandingsFields_Image_Create = {
  __typename?: 'LandingsFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Image_Delete = {
  __typename?: 'LandingsFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Image_Read = {
  __typename?: 'LandingsFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Image_Update = {
  __typename?: 'LandingsFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Layout = {
  __typename?: 'LandingsFields_layout';
  create?: Maybe<LandingsFields_Layout_Create>;
  delete?: Maybe<LandingsFields_Layout_Delete>;
  read?: Maybe<LandingsFields_Layout_Read>;
  update?: Maybe<LandingsFields_Layout_Update>;
};

export type LandingsFields_Layout_Create = {
  __typename?: 'LandingsFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Layout_Delete = {
  __typename?: 'LandingsFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Layout_Read = {
  __typename?: 'LandingsFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Layout_Update = {
  __typename?: 'LandingsFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Name = {
  __typename?: 'LandingsFields_name';
  create?: Maybe<LandingsFields_Name_Create>;
  delete?: Maybe<LandingsFields_Name_Delete>;
  read?: Maybe<LandingsFields_Name_Read>;
  update?: Maybe<LandingsFields_Name_Update>;
};

export type LandingsFields_Name_Create = {
  __typename?: 'LandingsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Name_Delete = {
  __typename?: 'LandingsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Name_Read = {
  __typename?: 'LandingsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Name_Update = {
  __typename?: 'LandingsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Negozio = {
  __typename?: 'LandingsFields_negozio';
  create?: Maybe<LandingsFields_Negozio_Create>;
  delete?: Maybe<LandingsFields_Negozio_Delete>;
  read?: Maybe<LandingsFields_Negozio_Read>;
  update?: Maybe<LandingsFields_Negozio_Update>;
};

export type LandingsFields_Negozio_Create = {
  __typename?: 'LandingsFields_negozio_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Negozio_Delete = {
  __typename?: 'LandingsFields_negozio_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Negozio_Read = {
  __typename?: 'LandingsFields_negozio_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Negozio_Update = {
  __typename?: 'LandingsFields_negozio_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Slug = {
  __typename?: 'LandingsFields_slug';
  create?: Maybe<LandingsFields_Slug_Create>;
  delete?: Maybe<LandingsFields_Slug_Delete>;
  read?: Maybe<LandingsFields_Slug_Read>;
  update?: Maybe<LandingsFields_Slug_Update>;
};

export type LandingsFields_SlugLock = {
  __typename?: 'LandingsFields_slugLock';
  create?: Maybe<LandingsFields_SlugLock_Create>;
  delete?: Maybe<LandingsFields_SlugLock_Delete>;
  read?: Maybe<LandingsFields_SlugLock_Read>;
  update?: Maybe<LandingsFields_SlugLock_Update>;
};

export type LandingsFields_SlugLock_Create = {
  __typename?: 'LandingsFields_slugLock_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_SlugLock_Delete = {
  __typename?: 'LandingsFields_slugLock_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_SlugLock_Read = {
  __typename?: 'LandingsFields_slugLock_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_SlugLock_Update = {
  __typename?: 'LandingsFields_slugLock_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Slug_Create = {
  __typename?: 'LandingsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Slug_Delete = {
  __typename?: 'LandingsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Slug_Read = {
  __typename?: 'LandingsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Slug_Update = {
  __typename?: 'LandingsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Stato = {
  __typename?: 'LandingsFields_stato';
  create?: Maybe<LandingsFields_Stato_Create>;
  delete?: Maybe<LandingsFields_Stato_Delete>;
  read?: Maybe<LandingsFields_Stato_Read>;
  update?: Maybe<LandingsFields_Stato_Update>;
};

export type LandingsFields_Stato_Create = {
  __typename?: 'LandingsFields_stato_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Stato_Delete = {
  __typename?: 'LandingsFields_stato_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Stato_Read = {
  __typename?: 'LandingsFields_stato_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Stato_Update = {
  __typename?: 'LandingsFields_stato_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Title = {
  __typename?: 'LandingsFields_title';
  create?: Maybe<LandingsFields_Title_Create>;
  delete?: Maybe<LandingsFields_Title_Delete>;
  read?: Maybe<LandingsFields_Title_Read>;
  update?: Maybe<LandingsFields_Title_Update>;
};

export type LandingsFields_Title_Create = {
  __typename?: 'LandingsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Title_Delete = {
  __typename?: 'LandingsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Title_Read = {
  __typename?: 'LandingsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Title_Update = {
  __typename?: 'LandingsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Type = {
  __typename?: 'LandingsFields_type';
  create?: Maybe<LandingsFields_Type_Create>;
  delete?: Maybe<LandingsFields_Type_Delete>;
  read?: Maybe<LandingsFields_Type_Read>;
  update?: Maybe<LandingsFields_Type_Update>;
};

export type LandingsFields_Type_Create = {
  __typename?: 'LandingsFields_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Type_Delete = {
  __typename?: 'LandingsFields_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Type_Read = {
  __typename?: 'LandingsFields_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_Type_Update = {
  __typename?: 'LandingsFields_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_UpdatedAt = {
  __typename?: 'LandingsFields_updatedAt';
  create?: Maybe<LandingsFields_UpdatedAt_Create>;
  delete?: Maybe<LandingsFields_UpdatedAt_Delete>;
  read?: Maybe<LandingsFields_UpdatedAt_Read>;
  update?: Maybe<LandingsFields_UpdatedAt_Update>;
};

export type LandingsFields_UpdatedAt_Create = {
  __typename?: 'LandingsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_UpdatedAt_Delete = {
  __typename?: 'LandingsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_UpdatedAt_Read = {
  __typename?: 'LandingsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingsFields_UpdatedAt_Update = {
  __typename?: 'LandingsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingsReadAccess = {
  __typename?: 'LandingsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsReadDocAccess = {
  __typename?: 'LandingsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsUpdateAccess = {
  __typename?: 'LandingsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingsUpdateDocAccess = {
  __typename?: 'LandingsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  large?: Maybe<MediaDocAccessFields_Sizes_Large>;
  medium?: Maybe<MediaDocAccessFields_Sizes_Medium>;
  og?: Maybe<MediaDocAccessFields_Sizes_Og>;
  small?: Maybe<MediaDocAccessFields_Sizes_Small>;
  square?: Maybe<MediaDocAccessFields_Sizes_Square>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
  xlarge?: Maybe<MediaDocAccessFields_Sizes_Xlarge>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large = {
  __typename?: 'MediaDocAccessFields_sizes_large';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Large_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_large_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Large_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Large_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Large_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Large_Width>;
};

export type MediaDocAccessFields_Sizes_Large_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height = {
  __typename?: 'MediaDocAccessFields_sizes_large_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url = {
  __typename?: 'MediaDocAccessFields_sizes_large_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width = {
  __typename?: 'MediaDocAccessFields_sizes_large_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Large_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Large_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Large_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_large_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium = {
  __typename?: 'MediaDocAccessFields_sizes_medium';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Medium_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_medium_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Medium_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Medium_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Medium_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Medium_Width>;
};

export type MediaDocAccessFields_Sizes_Medium_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height = {
  __typename?: 'MediaDocAccessFields_sizes_medium_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_medium_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url = {
  __typename?: 'MediaDocAccessFields_sizes_medium_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width = {
  __typename?: 'MediaDocAccessFields_sizes_medium_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Medium_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Medium_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_medium_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_medium_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_medium_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Medium_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_medium_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og = {
  __typename?: 'MediaDocAccessFields_sizes_og';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Og_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_og_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Og_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Og_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Og_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Og_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Og_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Og_Width>;
};

export type MediaDocAccessFields_Sizes_Og_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_og_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_og_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height = {
  __typename?: 'MediaDocAccessFields_sizes_og_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_og_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url = {
  __typename?: 'MediaDocAccessFields_sizes_og_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width = {
  __typename?: 'MediaDocAccessFields_sizes_og_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Og_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Og_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Og_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Og_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Og_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_og_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_og_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_og_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Og_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_og_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small = {
  __typename?: 'MediaDocAccessFields_sizes_small';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Small_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_small_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Small_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Small_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Small_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Small_Width>;
};

export type MediaDocAccessFields_Sizes_Small_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height = {
  __typename?: 'MediaDocAccessFields_sizes_small_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url = {
  __typename?: 'MediaDocAccessFields_sizes_small_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width = {
  __typename?: 'MediaDocAccessFields_sizes_small_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Small_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Small_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Small_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_small_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square = {
  __typename?: 'MediaDocAccessFields_sizes_square';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Square_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_square_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Square_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Square_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Square_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Square_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Square_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Square_Width>;
};

export type MediaDocAccessFields_Sizes_Square_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_square_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_square_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height = {
  __typename?: 'MediaDocAccessFields_sizes_square_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_square_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url = {
  __typename?: 'MediaDocAccessFields_sizes_square_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width = {
  __typename?: 'MediaDocAccessFields_sizes_square_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Square_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Square_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Square_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Square_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Square_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_square_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_square_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_square_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Square_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_square_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xlarge_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Xlarge_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xlarge_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  large?: Maybe<MediaFields_Sizes_Large>;
  medium?: Maybe<MediaFields_Sizes_Medium>;
  og?: Maybe<MediaFields_Sizes_Og>;
  small?: Maybe<MediaFields_Sizes_Small>;
  square?: Maybe<MediaFields_Sizes_Square>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
  xlarge?: Maybe<MediaFields_Sizes_Xlarge>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large = {
  __typename?: 'MediaFields_sizes_large';
  create?: Maybe<MediaFields_Sizes_Large_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Delete>;
  fields?: Maybe<MediaFields_Sizes_Large_Fields>;
  read?: Maybe<MediaFields_Sizes_Large_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Update>;
};

export type MediaFields_Sizes_Large_Create = {
  __typename?: 'MediaFields_sizes_large_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Delete = {
  __typename?: 'MediaFields_sizes_large_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Fields = {
  __typename?: 'MediaFields_sizes_large_Fields';
  filename?: Maybe<MediaFields_Sizes_Large_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Large_Filesize>;
  height?: Maybe<MediaFields_Sizes_Large_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Large_MimeType>;
  url?: Maybe<MediaFields_Sizes_Large_Url>;
  width?: Maybe<MediaFields_Sizes_Large_Width>;
};

export type MediaFields_Sizes_Large_Read = {
  __typename?: 'MediaFields_sizes_large_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Update = {
  __typename?: 'MediaFields_sizes_large_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename = {
  __typename?: 'MediaFields_sizes_large_filename';
  create?: Maybe<MediaFields_Sizes_Large_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Filename_Update>;
};

export type MediaFields_Sizes_Large_Filename_Create = {
  __typename?: 'MediaFields_sizes_large_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Delete = {
  __typename?: 'MediaFields_sizes_large_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Read = {
  __typename?: 'MediaFields_sizes_large_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filename_Update = {
  __typename?: 'MediaFields_sizes_large_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize = {
  __typename?: 'MediaFields_sizes_large_filesize';
  create?: Maybe<MediaFields_Sizes_Large_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Filesize_Update>;
};

export type MediaFields_Sizes_Large_Filesize_Create = {
  __typename?: 'MediaFields_sizes_large_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_large_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Read = {
  __typename?: 'MediaFields_sizes_large_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Filesize_Update = {
  __typename?: 'MediaFields_sizes_large_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height = {
  __typename?: 'MediaFields_sizes_large_height';
  create?: Maybe<MediaFields_Sizes_Large_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Height_Update>;
};

export type MediaFields_Sizes_Large_Height_Create = {
  __typename?: 'MediaFields_sizes_large_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Delete = {
  __typename?: 'MediaFields_sizes_large_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Read = {
  __typename?: 'MediaFields_sizes_large_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Height_Update = {
  __typename?: 'MediaFields_sizes_large_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType = {
  __typename?: 'MediaFields_sizes_large_mimeType';
  create?: Maybe<MediaFields_Sizes_Large_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Large_MimeType_Update>;
};

export type MediaFields_Sizes_Large_MimeType_Create = {
  __typename?: 'MediaFields_sizes_large_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_large_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Read = {
  __typename?: 'MediaFields_sizes_large_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_MimeType_Update = {
  __typename?: 'MediaFields_sizes_large_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url = {
  __typename?: 'MediaFields_sizes_large_url';
  create?: Maybe<MediaFields_Sizes_Large_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Url_Update>;
};

export type MediaFields_Sizes_Large_Url_Create = {
  __typename?: 'MediaFields_sizes_large_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Delete = {
  __typename?: 'MediaFields_sizes_large_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Read = {
  __typename?: 'MediaFields_sizes_large_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Url_Update = {
  __typename?: 'MediaFields_sizes_large_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width = {
  __typename?: 'MediaFields_sizes_large_width';
  create?: Maybe<MediaFields_Sizes_Large_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Large_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Large_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Large_Width_Update>;
};

export type MediaFields_Sizes_Large_Width_Create = {
  __typename?: 'MediaFields_sizes_large_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Delete = {
  __typename?: 'MediaFields_sizes_large_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Read = {
  __typename?: 'MediaFields_sizes_large_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Large_Width_Update = {
  __typename?: 'MediaFields_sizes_large_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium = {
  __typename?: 'MediaFields_sizes_medium';
  create?: Maybe<MediaFields_Sizes_Medium_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Delete>;
  fields?: Maybe<MediaFields_Sizes_Medium_Fields>;
  read?: Maybe<MediaFields_Sizes_Medium_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Update>;
};

export type MediaFields_Sizes_Medium_Create = {
  __typename?: 'MediaFields_sizes_medium_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Delete = {
  __typename?: 'MediaFields_sizes_medium_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Fields = {
  __typename?: 'MediaFields_sizes_medium_Fields';
  filename?: Maybe<MediaFields_Sizes_Medium_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Medium_Filesize>;
  height?: Maybe<MediaFields_Sizes_Medium_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Medium_MimeType>;
  url?: Maybe<MediaFields_Sizes_Medium_Url>;
  width?: Maybe<MediaFields_Sizes_Medium_Width>;
};

export type MediaFields_Sizes_Medium_Read = {
  __typename?: 'MediaFields_sizes_medium_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Update = {
  __typename?: 'MediaFields_sizes_medium_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename = {
  __typename?: 'MediaFields_sizes_medium_filename';
  create?: Maybe<MediaFields_Sizes_Medium_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Filename_Update>;
};

export type MediaFields_Sizes_Medium_Filename_Create = {
  __typename?: 'MediaFields_sizes_medium_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Delete = {
  __typename?: 'MediaFields_sizes_medium_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Read = {
  __typename?: 'MediaFields_sizes_medium_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filename_Update = {
  __typename?: 'MediaFields_sizes_medium_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize = {
  __typename?: 'MediaFields_sizes_medium_filesize';
  create?: Maybe<MediaFields_Sizes_Medium_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Filesize_Update>;
};

export type MediaFields_Sizes_Medium_Filesize_Create = {
  __typename?: 'MediaFields_sizes_medium_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_medium_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Read = {
  __typename?: 'MediaFields_sizes_medium_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Filesize_Update = {
  __typename?: 'MediaFields_sizes_medium_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height = {
  __typename?: 'MediaFields_sizes_medium_height';
  create?: Maybe<MediaFields_Sizes_Medium_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Height_Update>;
};

export type MediaFields_Sizes_Medium_Height_Create = {
  __typename?: 'MediaFields_sizes_medium_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Delete = {
  __typename?: 'MediaFields_sizes_medium_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Read = {
  __typename?: 'MediaFields_sizes_medium_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Height_Update = {
  __typename?: 'MediaFields_sizes_medium_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType = {
  __typename?: 'MediaFields_sizes_medium_mimeType';
  create?: Maybe<MediaFields_Sizes_Medium_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_MimeType_Update>;
};

export type MediaFields_Sizes_Medium_MimeType_Create = {
  __typename?: 'MediaFields_sizes_medium_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_medium_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Read = {
  __typename?: 'MediaFields_sizes_medium_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_MimeType_Update = {
  __typename?: 'MediaFields_sizes_medium_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url = {
  __typename?: 'MediaFields_sizes_medium_url';
  create?: Maybe<MediaFields_Sizes_Medium_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Url_Update>;
};

export type MediaFields_Sizes_Medium_Url_Create = {
  __typename?: 'MediaFields_sizes_medium_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Delete = {
  __typename?: 'MediaFields_sizes_medium_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Read = {
  __typename?: 'MediaFields_sizes_medium_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Url_Update = {
  __typename?: 'MediaFields_sizes_medium_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width = {
  __typename?: 'MediaFields_sizes_medium_width';
  create?: Maybe<MediaFields_Sizes_Medium_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Medium_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Medium_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Medium_Width_Update>;
};

export type MediaFields_Sizes_Medium_Width_Create = {
  __typename?: 'MediaFields_sizes_medium_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Delete = {
  __typename?: 'MediaFields_sizes_medium_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Read = {
  __typename?: 'MediaFields_sizes_medium_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Medium_Width_Update = {
  __typename?: 'MediaFields_sizes_medium_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og = {
  __typename?: 'MediaFields_sizes_og';
  create?: Maybe<MediaFields_Sizes_Og_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Delete>;
  fields?: Maybe<MediaFields_Sizes_Og_Fields>;
  read?: Maybe<MediaFields_Sizes_Og_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Update>;
};

export type MediaFields_Sizes_Og_Create = {
  __typename?: 'MediaFields_sizes_og_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Delete = {
  __typename?: 'MediaFields_sizes_og_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Fields = {
  __typename?: 'MediaFields_sizes_og_Fields';
  filename?: Maybe<MediaFields_Sizes_Og_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Og_Filesize>;
  height?: Maybe<MediaFields_Sizes_Og_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Og_MimeType>;
  url?: Maybe<MediaFields_Sizes_Og_Url>;
  width?: Maybe<MediaFields_Sizes_Og_Width>;
};

export type MediaFields_Sizes_Og_Read = {
  __typename?: 'MediaFields_sizes_og_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Update = {
  __typename?: 'MediaFields_sizes_og_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename = {
  __typename?: 'MediaFields_sizes_og_filename';
  create?: Maybe<MediaFields_Sizes_Og_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Filename_Update>;
};

export type MediaFields_Sizes_Og_Filename_Create = {
  __typename?: 'MediaFields_sizes_og_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Delete = {
  __typename?: 'MediaFields_sizes_og_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Read = {
  __typename?: 'MediaFields_sizes_og_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filename_Update = {
  __typename?: 'MediaFields_sizes_og_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize = {
  __typename?: 'MediaFields_sizes_og_filesize';
  create?: Maybe<MediaFields_Sizes_Og_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Filesize_Update>;
};

export type MediaFields_Sizes_Og_Filesize_Create = {
  __typename?: 'MediaFields_sizes_og_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_og_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Read = {
  __typename?: 'MediaFields_sizes_og_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Filesize_Update = {
  __typename?: 'MediaFields_sizes_og_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height = {
  __typename?: 'MediaFields_sizes_og_height';
  create?: Maybe<MediaFields_Sizes_Og_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Height_Update>;
};

export type MediaFields_Sizes_Og_Height_Create = {
  __typename?: 'MediaFields_sizes_og_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Delete = {
  __typename?: 'MediaFields_sizes_og_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Read = {
  __typename?: 'MediaFields_sizes_og_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Height_Update = {
  __typename?: 'MediaFields_sizes_og_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType = {
  __typename?: 'MediaFields_sizes_og_mimeType';
  create?: Maybe<MediaFields_Sizes_Og_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Og_MimeType_Update>;
};

export type MediaFields_Sizes_Og_MimeType_Create = {
  __typename?: 'MediaFields_sizes_og_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_og_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Read = {
  __typename?: 'MediaFields_sizes_og_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_MimeType_Update = {
  __typename?: 'MediaFields_sizes_og_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url = {
  __typename?: 'MediaFields_sizes_og_url';
  create?: Maybe<MediaFields_Sizes_Og_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Url_Update>;
};

export type MediaFields_Sizes_Og_Url_Create = {
  __typename?: 'MediaFields_sizes_og_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Delete = {
  __typename?: 'MediaFields_sizes_og_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Read = {
  __typename?: 'MediaFields_sizes_og_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Url_Update = {
  __typename?: 'MediaFields_sizes_og_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width = {
  __typename?: 'MediaFields_sizes_og_width';
  create?: Maybe<MediaFields_Sizes_Og_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Og_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Og_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Og_Width_Update>;
};

export type MediaFields_Sizes_Og_Width_Create = {
  __typename?: 'MediaFields_sizes_og_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Delete = {
  __typename?: 'MediaFields_sizes_og_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Read = {
  __typename?: 'MediaFields_sizes_og_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Og_Width_Update = {
  __typename?: 'MediaFields_sizes_og_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small = {
  __typename?: 'MediaFields_sizes_small';
  create?: Maybe<MediaFields_Sizes_Small_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Delete>;
  fields?: Maybe<MediaFields_Sizes_Small_Fields>;
  read?: Maybe<MediaFields_Sizes_Small_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Update>;
};

export type MediaFields_Sizes_Small_Create = {
  __typename?: 'MediaFields_sizes_small_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Delete = {
  __typename?: 'MediaFields_sizes_small_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Fields = {
  __typename?: 'MediaFields_sizes_small_Fields';
  filename?: Maybe<MediaFields_Sizes_Small_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Small_Filesize>;
  height?: Maybe<MediaFields_Sizes_Small_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Small_MimeType>;
  url?: Maybe<MediaFields_Sizes_Small_Url>;
  width?: Maybe<MediaFields_Sizes_Small_Width>;
};

export type MediaFields_Sizes_Small_Read = {
  __typename?: 'MediaFields_sizes_small_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Update = {
  __typename?: 'MediaFields_sizes_small_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename = {
  __typename?: 'MediaFields_sizes_small_filename';
  create?: Maybe<MediaFields_Sizes_Small_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Filename_Update>;
};

export type MediaFields_Sizes_Small_Filename_Create = {
  __typename?: 'MediaFields_sizes_small_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Delete = {
  __typename?: 'MediaFields_sizes_small_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Read = {
  __typename?: 'MediaFields_sizes_small_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filename_Update = {
  __typename?: 'MediaFields_sizes_small_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize = {
  __typename?: 'MediaFields_sizes_small_filesize';
  create?: Maybe<MediaFields_Sizes_Small_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Filesize_Update>;
};

export type MediaFields_Sizes_Small_Filesize_Create = {
  __typename?: 'MediaFields_sizes_small_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_small_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Read = {
  __typename?: 'MediaFields_sizes_small_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Filesize_Update = {
  __typename?: 'MediaFields_sizes_small_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height = {
  __typename?: 'MediaFields_sizes_small_height';
  create?: Maybe<MediaFields_Sizes_Small_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Height_Update>;
};

export type MediaFields_Sizes_Small_Height_Create = {
  __typename?: 'MediaFields_sizes_small_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Delete = {
  __typename?: 'MediaFields_sizes_small_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Read = {
  __typename?: 'MediaFields_sizes_small_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Height_Update = {
  __typename?: 'MediaFields_sizes_small_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType = {
  __typename?: 'MediaFields_sizes_small_mimeType';
  create?: Maybe<MediaFields_Sizes_Small_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Small_MimeType_Update>;
};

export type MediaFields_Sizes_Small_MimeType_Create = {
  __typename?: 'MediaFields_sizes_small_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_small_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Read = {
  __typename?: 'MediaFields_sizes_small_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_MimeType_Update = {
  __typename?: 'MediaFields_sizes_small_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url = {
  __typename?: 'MediaFields_sizes_small_url';
  create?: Maybe<MediaFields_Sizes_Small_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Url_Update>;
};

export type MediaFields_Sizes_Small_Url_Create = {
  __typename?: 'MediaFields_sizes_small_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Delete = {
  __typename?: 'MediaFields_sizes_small_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Read = {
  __typename?: 'MediaFields_sizes_small_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Url_Update = {
  __typename?: 'MediaFields_sizes_small_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width = {
  __typename?: 'MediaFields_sizes_small_width';
  create?: Maybe<MediaFields_Sizes_Small_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Small_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Small_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Small_Width_Update>;
};

export type MediaFields_Sizes_Small_Width_Create = {
  __typename?: 'MediaFields_sizes_small_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Delete = {
  __typename?: 'MediaFields_sizes_small_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Read = {
  __typename?: 'MediaFields_sizes_small_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Small_Width_Update = {
  __typename?: 'MediaFields_sizes_small_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square = {
  __typename?: 'MediaFields_sizes_square';
  create?: Maybe<MediaFields_Sizes_Square_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Delete>;
  fields?: Maybe<MediaFields_Sizes_Square_Fields>;
  read?: Maybe<MediaFields_Sizes_Square_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Update>;
};

export type MediaFields_Sizes_Square_Create = {
  __typename?: 'MediaFields_sizes_square_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Delete = {
  __typename?: 'MediaFields_sizes_square_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Fields = {
  __typename?: 'MediaFields_sizes_square_Fields';
  filename?: Maybe<MediaFields_Sizes_Square_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Square_Filesize>;
  height?: Maybe<MediaFields_Sizes_Square_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Square_MimeType>;
  url?: Maybe<MediaFields_Sizes_Square_Url>;
  width?: Maybe<MediaFields_Sizes_Square_Width>;
};

export type MediaFields_Sizes_Square_Read = {
  __typename?: 'MediaFields_sizes_square_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Update = {
  __typename?: 'MediaFields_sizes_square_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename = {
  __typename?: 'MediaFields_sizes_square_filename';
  create?: Maybe<MediaFields_Sizes_Square_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Filename_Update>;
};

export type MediaFields_Sizes_Square_Filename_Create = {
  __typename?: 'MediaFields_sizes_square_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Delete = {
  __typename?: 'MediaFields_sizes_square_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Read = {
  __typename?: 'MediaFields_sizes_square_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filename_Update = {
  __typename?: 'MediaFields_sizes_square_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize = {
  __typename?: 'MediaFields_sizes_square_filesize';
  create?: Maybe<MediaFields_Sizes_Square_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Filesize_Update>;
};

export type MediaFields_Sizes_Square_Filesize_Create = {
  __typename?: 'MediaFields_sizes_square_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_square_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Read = {
  __typename?: 'MediaFields_sizes_square_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Filesize_Update = {
  __typename?: 'MediaFields_sizes_square_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height = {
  __typename?: 'MediaFields_sizes_square_height';
  create?: Maybe<MediaFields_Sizes_Square_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Height_Update>;
};

export type MediaFields_Sizes_Square_Height_Create = {
  __typename?: 'MediaFields_sizes_square_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Delete = {
  __typename?: 'MediaFields_sizes_square_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Read = {
  __typename?: 'MediaFields_sizes_square_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Height_Update = {
  __typename?: 'MediaFields_sizes_square_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType = {
  __typename?: 'MediaFields_sizes_square_mimeType';
  create?: Maybe<MediaFields_Sizes_Square_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Square_MimeType_Update>;
};

export type MediaFields_Sizes_Square_MimeType_Create = {
  __typename?: 'MediaFields_sizes_square_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_square_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Read = {
  __typename?: 'MediaFields_sizes_square_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_MimeType_Update = {
  __typename?: 'MediaFields_sizes_square_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url = {
  __typename?: 'MediaFields_sizes_square_url';
  create?: Maybe<MediaFields_Sizes_Square_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Url_Update>;
};

export type MediaFields_Sizes_Square_Url_Create = {
  __typename?: 'MediaFields_sizes_square_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Delete = {
  __typename?: 'MediaFields_sizes_square_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Read = {
  __typename?: 'MediaFields_sizes_square_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Url_Update = {
  __typename?: 'MediaFields_sizes_square_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width = {
  __typename?: 'MediaFields_sizes_square_width';
  create?: Maybe<MediaFields_Sizes_Square_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Square_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Square_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Square_Width_Update>;
};

export type MediaFields_Sizes_Square_Width_Create = {
  __typename?: 'MediaFields_sizes_square_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Delete = {
  __typename?: 'MediaFields_sizes_square_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Read = {
  __typename?: 'MediaFields_sizes_square_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Square_Width_Update = {
  __typename?: 'MediaFields_sizes_square_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge = {
  __typename?: 'MediaFields_sizes_xlarge';
  create?: Maybe<MediaFields_Sizes_Xlarge_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Delete>;
  fields?: Maybe<MediaFields_Sizes_Xlarge_Fields>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Update>;
};

export type MediaFields_Sizes_Xlarge_Create = {
  __typename?: 'MediaFields_sizes_xlarge_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Fields = {
  __typename?: 'MediaFields_sizes_xlarge_Fields';
  filename?: Maybe<MediaFields_Sizes_Xlarge_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Xlarge_Filesize>;
  height?: Maybe<MediaFields_Sizes_Xlarge_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Xlarge_MimeType>;
  url?: Maybe<MediaFields_Sizes_Xlarge_Url>;
  width?: Maybe<MediaFields_Sizes_Xlarge_Width>;
};

export type MediaFields_Sizes_Xlarge_Read = {
  __typename?: 'MediaFields_sizes_xlarge_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Update = {
  __typename?: 'MediaFields_sizes_xlarge_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename = {
  __typename?: 'MediaFields_sizes_xlarge_filename';
  create?: Maybe<MediaFields_Sizes_Xlarge_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Filename_Update>;
};

export type MediaFields_Sizes_Xlarge_Filename_Create = {
  __typename?: 'MediaFields_sizes_xlarge_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Read = {
  __typename?: 'MediaFields_sizes_xlarge_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filename_Update = {
  __typename?: 'MediaFields_sizes_xlarge_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize = {
  __typename?: 'MediaFields_sizes_xlarge_filesize';
  create?: Maybe<MediaFields_Sizes_Xlarge_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Filesize_Update>;
};

export type MediaFields_Sizes_Xlarge_Filesize_Create = {
  __typename?: 'MediaFields_sizes_xlarge_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Read = {
  __typename?: 'MediaFields_sizes_xlarge_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Filesize_Update = {
  __typename?: 'MediaFields_sizes_xlarge_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height = {
  __typename?: 'MediaFields_sizes_xlarge_height';
  create?: Maybe<MediaFields_Sizes_Xlarge_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Height_Update>;
};

export type MediaFields_Sizes_Xlarge_Height_Create = {
  __typename?: 'MediaFields_sizes_xlarge_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Read = {
  __typename?: 'MediaFields_sizes_xlarge_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Height_Update = {
  __typename?: 'MediaFields_sizes_xlarge_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType = {
  __typename?: 'MediaFields_sizes_xlarge_mimeType';
  create?: Maybe<MediaFields_Sizes_Xlarge_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_MimeType_Update>;
};

export type MediaFields_Sizes_Xlarge_MimeType_Create = {
  __typename?: 'MediaFields_sizes_xlarge_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Read = {
  __typename?: 'MediaFields_sizes_xlarge_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_MimeType_Update = {
  __typename?: 'MediaFields_sizes_xlarge_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url = {
  __typename?: 'MediaFields_sizes_xlarge_url';
  create?: Maybe<MediaFields_Sizes_Xlarge_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Url_Update>;
};

export type MediaFields_Sizes_Xlarge_Url_Create = {
  __typename?: 'MediaFields_sizes_xlarge_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Read = {
  __typename?: 'MediaFields_sizes_xlarge_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Url_Update = {
  __typename?: 'MediaFields_sizes_xlarge_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width = {
  __typename?: 'MediaFields_sizes_xlarge_width';
  create?: Maybe<MediaFields_Sizes_Xlarge_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Xlarge_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Xlarge_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Xlarge_Width_Update>;
};

export type MediaFields_Sizes_Xlarge_Width_Create = {
  __typename?: 'MediaFields_sizes_xlarge_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Delete = {
  __typename?: 'MediaFields_sizes_xlarge_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Read = {
  __typename?: 'MediaFields_sizes_xlarge_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Xlarge_Width_Update = {
  __typename?: 'MediaFields_sizes_xlarge_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  large?: Maybe<Media_Sizes_Large>;
  medium?: Maybe<Media_Sizes_Medium>;
  og?: Maybe<Media_Sizes_Og>;
  small?: Maybe<Media_Sizes_Small>;
  square?: Maybe<Media_Sizes_Square>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
  xlarge?: Maybe<Media_Sizes_Xlarge>;
};

export type Media_Sizes_Large = {
  __typename?: 'Media_Sizes_Large';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Medium = {
  __typename?: 'Media_Sizes_Medium';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Og = {
  __typename?: 'Media_Sizes_Og';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Small = {
  __typename?: 'Media_Sizes_Small';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Square = {
  __typename?: 'Media_Sizes_Square';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Xlarge = {
  __typename?: 'Media_Sizes_Xlarge';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Large__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Large__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Medium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Medium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Og__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Og__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Small__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Small__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Square__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Square__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Xlarge__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Xlarge__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__medium__filename?: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  sizes__medium__filesize?: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  sizes__medium__height?: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  sizes__medium__mimeType?: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  sizes__medium__url?: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  sizes__medium__width?: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  sizes__og__filename?: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  sizes__og__filesize?: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  sizes__og__height?: InputMaybe<Media_Sizes__Og__Height_Operator>;
  sizes__og__mimeType?: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  sizes__og__url?: InputMaybe<Media_Sizes__Og__Url_Operator>;
  sizes__og__width?: InputMaybe<Media_Sizes__Og__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__square__filename?: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  sizes__square__filesize?: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  sizes__square__height?: InputMaybe<Media_Sizes__Square__Height_Operator>;
  sizes__square__mimeType?: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  sizes__square__url?: InputMaybe<Media_Sizes__Square__Url_Operator>;
  sizes__square__width?: InputMaybe<Media_Sizes__Square__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  sizes__xlarge__filename?: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  sizes__xlarge__filesize?: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  sizes__xlarge__height?: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  sizes__xlarge__mimeType?: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  sizes__xlarge__url?: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  sizes__xlarge__width?: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__medium__filename?: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  sizes__medium__filesize?: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  sizes__medium__height?: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  sizes__medium__mimeType?: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  sizes__medium__url?: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  sizes__medium__width?: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  sizes__og__filename?: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  sizes__og__filesize?: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  sizes__og__height?: InputMaybe<Media_Sizes__Og__Height_Operator>;
  sizes__og__mimeType?: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  sizes__og__url?: InputMaybe<Media_Sizes__Og__Url_Operator>;
  sizes__og__width?: InputMaybe<Media_Sizes__Og__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__square__filename?: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  sizes__square__filesize?: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  sizes__square__height?: InputMaybe<Media_Sizes__Square__Height_Operator>;
  sizes__square__mimeType?: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  sizes__square__url?: InputMaybe<Media_Sizes__Square__Url_Operator>;
  sizes__square__width?: InputMaybe<Media_Sizes__Square__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  sizes__xlarge__filename?: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  sizes__xlarge__filesize?: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  sizes__xlarge__height?: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  sizes__xlarge__mimeType?: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  sizes__xlarge__url?: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  sizes__xlarge__width?: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__large__filename?: InputMaybe<Media_Sizes__Large__Filename_Operator>;
  sizes__large__filesize?: InputMaybe<Media_Sizes__Large__Filesize_Operator>;
  sizes__large__height?: InputMaybe<Media_Sizes__Large__Height_Operator>;
  sizes__large__mimeType?: InputMaybe<Media_Sizes__Large__MimeType_Operator>;
  sizes__large__url?: InputMaybe<Media_Sizes__Large__Url_Operator>;
  sizes__large__width?: InputMaybe<Media_Sizes__Large__Width_Operator>;
  sizes__medium__filename?: InputMaybe<Media_Sizes__Medium__Filename_Operator>;
  sizes__medium__filesize?: InputMaybe<Media_Sizes__Medium__Filesize_Operator>;
  sizes__medium__height?: InputMaybe<Media_Sizes__Medium__Height_Operator>;
  sizes__medium__mimeType?: InputMaybe<Media_Sizes__Medium__MimeType_Operator>;
  sizes__medium__url?: InputMaybe<Media_Sizes__Medium__Url_Operator>;
  sizes__medium__width?: InputMaybe<Media_Sizes__Medium__Width_Operator>;
  sizes__og__filename?: InputMaybe<Media_Sizes__Og__Filename_Operator>;
  sizes__og__filesize?: InputMaybe<Media_Sizes__Og__Filesize_Operator>;
  sizes__og__height?: InputMaybe<Media_Sizes__Og__Height_Operator>;
  sizes__og__mimeType?: InputMaybe<Media_Sizes__Og__MimeType_Operator>;
  sizes__og__url?: InputMaybe<Media_Sizes__Og__Url_Operator>;
  sizes__og__width?: InputMaybe<Media_Sizes__Og__Width_Operator>;
  sizes__small__filename?: InputMaybe<Media_Sizes__Small__Filename_Operator>;
  sizes__small__filesize?: InputMaybe<Media_Sizes__Small__Filesize_Operator>;
  sizes__small__height?: InputMaybe<Media_Sizes__Small__Height_Operator>;
  sizes__small__mimeType?: InputMaybe<Media_Sizes__Small__MimeType_Operator>;
  sizes__small__url?: InputMaybe<Media_Sizes__Small__Url_Operator>;
  sizes__small__width?: InputMaybe<Media_Sizes__Small__Width_Operator>;
  sizes__square__filename?: InputMaybe<Media_Sizes__Square__Filename_Operator>;
  sizes__square__filesize?: InputMaybe<Media_Sizes__Square__Filesize_Operator>;
  sizes__square__height?: InputMaybe<Media_Sizes__Square__Height_Operator>;
  sizes__square__mimeType?: InputMaybe<Media_Sizes__Square__MimeType_Operator>;
  sizes__square__url?: InputMaybe<Media_Sizes__Square__Url_Operator>;
  sizes__square__width?: InputMaybe<Media_Sizes__Square__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  sizes__xlarge__filename?: InputMaybe<Media_Sizes__Xlarge__Filename_Operator>;
  sizes__xlarge__filesize?: InputMaybe<Media_Sizes__Xlarge__Filesize_Operator>;
  sizes__xlarge__height?: InputMaybe<Media_Sizes__Xlarge__Height_Operator>;
  sizes__xlarge__mimeType?: InputMaybe<Media_Sizes__Xlarge__MimeType_Operator>;
  sizes__xlarge__url?: InputMaybe<Media_Sizes__Xlarge__Url_Operator>;
  sizes__xlarge__width?: InputMaybe<Media_Sizes__Xlarge__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createLanding?: Maybe<Landing>;
  createLandingCategory?: Maybe<LandingCategory>;
  createMedia?: Maybe<Media>;
  createOrganization?: Maybe<Organization>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createStore?: Maybe<Store>;
  createUser?: Maybe<User>;
  deleteLanding?: Maybe<Landing>;
  deleteLandingCategory?: Maybe<LandingCategory>;
  deleteMedia?: Maybe<Media>;
  deleteOrganization?: Maybe<Organization>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteStore?: Maybe<Store>;
  deleteUser?: Maybe<User>;
  duplicateLanding?: Maybe<Landing>;
  duplicateLandingCategory?: Maybe<LandingCategory>;
  duplicateMedia?: Maybe<Media>;
  duplicateOrganization?: Maybe<Organization>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateStore?: Maybe<Store>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateLanding?: Maybe<Landing>;
  updateLandingCategory?: Maybe<LandingCategory>;
  updateMedia?: Maybe<Media>;
  updateOrganization?: Maybe<Organization>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateStore?: Maybe<Store>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateLandingArgs = {
  data: MutationLandingInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateLandingCategoryArgs = {
  data: MutationLandingCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOrganizationArgs = {
  data: MutationOrganizationInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateStoreArgs = {
  data: MutationStoreInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteLandingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteLandingCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateLandingArgs = {
  data: MutationLandingInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateLandingCategoryArgs = {
  data: MutationLandingCategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateOrganizationArgs = {
  data: MutationOrganizationInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateStoreArgs = {
  data: MutationStoreInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateLandingArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLandingUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateLandingCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLandingCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOrganizationArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrganizationUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateStoreArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationStoreUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  __typename?: 'Organization';
  bsSubdirIstanza?: Maybe<Scalars['String']['output']>;
  bschv?: Maybe<Scalars['String']['output']>;
  bscloudir?: Maybe<Scalars['String']['output']>;
  codiceFiscale: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imprenditore: User;
  name: Scalars['String']['output'];
  partitaIva: Scalars['String']['output'];
  pec?: Maybe<Scalars['String']['output']>;
  sedeLegaleCap?: Maybe<Scalars['String']['output']>;
  sedeLegaleCitta?: Maybe<Scalars['String']['output']>;
  sedeLegaleCivico?: Maybe<Scalars['String']['output']>;
  sedeLegaleIndirizzo?: Maybe<Scalars['String']['output']>;
  sedeLegaleProvincia?: Maybe<Scalars['String']['output']>;
  sedeOperativaCap?: Maybe<Scalars['String']['output']>;
  sedeOperativaCitta?: Maybe<Scalars['String']['output']>;
  sedeOperativaCivico?: Maybe<Scalars['String']['output']>;
  sedeOperativaIndirizzo?: Maybe<Scalars['String']['output']>;
  sedeOperativaProvincia?: Maybe<Scalars['String']['output']>;
  stores?: Maybe<Organization_Stores>;
  telefono: Scalars['String']['output'];
  telefonoAlt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrganizationStoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Store_Where>;
};

export type Organization_Stores = {
  __typename?: 'Organization_Stores';
  docs?: Maybe<Array<Maybe<Store>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

export type Organization_BsSubdirIstanza_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Bschv_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Bscloudir_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_CodiceFiscale_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Organization_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Organization_Imprenditore_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Organization_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_PartitaIva_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Pec_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeLegaleCap_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeLegaleCitta_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeLegaleCivico_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeLegaleIndirizzo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeLegaleProvincia_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeOperativaCap_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeOperativaCitta_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeOperativaCivico_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeOperativaIndirizzo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_SedeOperativaProvincia_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_TelefonoAlt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_Telefono_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organization_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Organization_Where = {
  AND?: InputMaybe<Array<InputMaybe<Organization_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Organization_Where_Or>>>;
  bsSubdirIstanza?: InputMaybe<Organization_BsSubdirIstanza_Operator>;
  bschv?: InputMaybe<Organization_Bschv_Operator>;
  bscloudir?: InputMaybe<Organization_Bscloudir_Operator>;
  codiceFiscale?: InputMaybe<Organization_CodiceFiscale_Operator>;
  createdAt?: InputMaybe<Organization_CreatedAt_Operator>;
  email?: InputMaybe<Organization_Email_Operator>;
  id?: InputMaybe<Organization_Id_Operator>;
  imprenditore?: InputMaybe<Organization_Imprenditore_Operator>;
  name?: InputMaybe<Organization_Name_Operator>;
  partitaIva?: InputMaybe<Organization_PartitaIva_Operator>;
  pec?: InputMaybe<Organization_Pec_Operator>;
  sedeLegaleCap?: InputMaybe<Organization_SedeLegaleCap_Operator>;
  sedeLegaleCitta?: InputMaybe<Organization_SedeLegaleCitta_Operator>;
  sedeLegaleCivico?: InputMaybe<Organization_SedeLegaleCivico_Operator>;
  sedeLegaleIndirizzo?: InputMaybe<Organization_SedeLegaleIndirizzo_Operator>;
  sedeLegaleProvincia?: InputMaybe<Organization_SedeLegaleProvincia_Operator>;
  sedeOperativaCap?: InputMaybe<Organization_SedeOperativaCap_Operator>;
  sedeOperativaCitta?: InputMaybe<Organization_SedeOperativaCitta_Operator>;
  sedeOperativaCivico?: InputMaybe<Organization_SedeOperativaCivico_Operator>;
  sedeOperativaIndirizzo?: InputMaybe<Organization_SedeOperativaIndirizzo_Operator>;
  sedeOperativaProvincia?: InputMaybe<Organization_SedeOperativaProvincia_Operator>;
  telefono?: InputMaybe<Organization_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Organization_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Organization_UpdatedAt_Operator>;
};

export type Organization_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Organization_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Organization_Where_Or>>>;
  bsSubdirIstanza?: InputMaybe<Organization_BsSubdirIstanza_Operator>;
  bschv?: InputMaybe<Organization_Bschv_Operator>;
  bscloudir?: InputMaybe<Organization_Bscloudir_Operator>;
  codiceFiscale?: InputMaybe<Organization_CodiceFiscale_Operator>;
  createdAt?: InputMaybe<Organization_CreatedAt_Operator>;
  email?: InputMaybe<Organization_Email_Operator>;
  id?: InputMaybe<Organization_Id_Operator>;
  imprenditore?: InputMaybe<Organization_Imprenditore_Operator>;
  name?: InputMaybe<Organization_Name_Operator>;
  partitaIva?: InputMaybe<Organization_PartitaIva_Operator>;
  pec?: InputMaybe<Organization_Pec_Operator>;
  sedeLegaleCap?: InputMaybe<Organization_SedeLegaleCap_Operator>;
  sedeLegaleCitta?: InputMaybe<Organization_SedeLegaleCitta_Operator>;
  sedeLegaleCivico?: InputMaybe<Organization_SedeLegaleCivico_Operator>;
  sedeLegaleIndirizzo?: InputMaybe<Organization_SedeLegaleIndirizzo_Operator>;
  sedeLegaleProvincia?: InputMaybe<Organization_SedeLegaleProvincia_Operator>;
  sedeOperativaCap?: InputMaybe<Organization_SedeOperativaCap_Operator>;
  sedeOperativaCitta?: InputMaybe<Organization_SedeOperativaCitta_Operator>;
  sedeOperativaCivico?: InputMaybe<Organization_SedeOperativaCivico_Operator>;
  sedeOperativaIndirizzo?: InputMaybe<Organization_SedeOperativaIndirizzo_Operator>;
  sedeOperativaProvincia?: InputMaybe<Organization_SedeOperativaProvincia_Operator>;
  telefono?: InputMaybe<Organization_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Organization_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Organization_UpdatedAt_Operator>;
};

export type Organization_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Organization_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Organization_Where_Or>>>;
  bsSubdirIstanza?: InputMaybe<Organization_BsSubdirIstanza_Operator>;
  bschv?: InputMaybe<Organization_Bschv_Operator>;
  bscloudir?: InputMaybe<Organization_Bscloudir_Operator>;
  codiceFiscale?: InputMaybe<Organization_CodiceFiscale_Operator>;
  createdAt?: InputMaybe<Organization_CreatedAt_Operator>;
  email?: InputMaybe<Organization_Email_Operator>;
  id?: InputMaybe<Organization_Id_Operator>;
  imprenditore?: InputMaybe<Organization_Imprenditore_Operator>;
  name?: InputMaybe<Organization_Name_Operator>;
  partitaIva?: InputMaybe<Organization_PartitaIva_Operator>;
  pec?: InputMaybe<Organization_Pec_Operator>;
  sedeLegaleCap?: InputMaybe<Organization_SedeLegaleCap_Operator>;
  sedeLegaleCitta?: InputMaybe<Organization_SedeLegaleCitta_Operator>;
  sedeLegaleCivico?: InputMaybe<Organization_SedeLegaleCivico_Operator>;
  sedeLegaleIndirizzo?: InputMaybe<Organization_SedeLegaleIndirizzo_Operator>;
  sedeLegaleProvincia?: InputMaybe<Organization_SedeLegaleProvincia_Operator>;
  sedeOperativaCap?: InputMaybe<Organization_SedeOperativaCap_Operator>;
  sedeOperativaCitta?: InputMaybe<Organization_SedeOperativaCitta_Operator>;
  sedeOperativaCivico?: InputMaybe<Organization_SedeOperativaCivico_Operator>;
  sedeOperativaIndirizzo?: InputMaybe<Organization_SedeOperativaIndirizzo_Operator>;
  sedeOperativaProvincia?: InputMaybe<Organization_SedeOperativaProvincia_Operator>;
  telefono?: InputMaybe<Organization_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Organization_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Organization_UpdatedAt_Operator>;
};

export type Organizations = {
  __typename?: 'Organizations';
  docs?: Maybe<Array<Maybe<Organization>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationsCreateAccess = {
  __typename?: 'OrganizationsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsCreateDocAccess = {
  __typename?: 'OrganizationsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsDeleteAccess = {
  __typename?: 'OrganizationsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsDeleteDocAccess = {
  __typename?: 'OrganizationsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsDocAccessFields = {
  __typename?: 'OrganizationsDocAccessFields';
  bsSubdirIstanza?: Maybe<OrganizationsDocAccessFields_BsSubdirIstanza>;
  bschv?: Maybe<OrganizationsDocAccessFields_Bschv>;
  bscloudir?: Maybe<OrganizationsDocAccessFields_Bscloudir>;
  codiceFiscale?: Maybe<OrganizationsDocAccessFields_CodiceFiscale>;
  createdAt?: Maybe<OrganizationsDocAccessFields_CreatedAt>;
  email?: Maybe<OrganizationsDocAccessFields_Email>;
  imprenditore?: Maybe<OrganizationsDocAccessFields_Imprenditore>;
  name?: Maybe<OrganizationsDocAccessFields_Name>;
  partitaIva?: Maybe<OrganizationsDocAccessFields_PartitaIva>;
  pec?: Maybe<OrganizationsDocAccessFields_Pec>;
  sedeLegaleCap?: Maybe<OrganizationsDocAccessFields_SedeLegaleCap>;
  sedeLegaleCitta?: Maybe<OrganizationsDocAccessFields_SedeLegaleCitta>;
  sedeLegaleCivico?: Maybe<OrganizationsDocAccessFields_SedeLegaleCivico>;
  sedeLegaleIndirizzo?: Maybe<OrganizationsDocAccessFields_SedeLegaleIndirizzo>;
  sedeLegaleProvincia?: Maybe<OrganizationsDocAccessFields_SedeLegaleProvincia>;
  sedeOperativaCap?: Maybe<OrganizationsDocAccessFields_SedeOperativaCap>;
  sedeOperativaCitta?: Maybe<OrganizationsDocAccessFields_SedeOperativaCitta>;
  sedeOperativaCivico?: Maybe<OrganizationsDocAccessFields_SedeOperativaCivico>;
  sedeOperativaIndirizzo?: Maybe<OrganizationsDocAccessFields_SedeOperativaIndirizzo>;
  sedeOperativaProvincia?: Maybe<OrganizationsDocAccessFields_SedeOperativaProvincia>;
  stores?: Maybe<OrganizationsDocAccessFields_Stores>;
  telefono?: Maybe<OrganizationsDocAccessFields_Telefono>;
  telefonoAlt?: Maybe<OrganizationsDocAccessFields_TelefonoAlt>;
  updatedAt?: Maybe<OrganizationsDocAccessFields_UpdatedAt>;
};

export type OrganizationsDocAccessFields_BsSubdirIstanza = {
  __typename?: 'OrganizationsDocAccessFields_bsSubdirIstanza';
  create?: Maybe<OrganizationsDocAccessFields_BsSubdirIstanza_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_BsSubdirIstanza_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_BsSubdirIstanza_Read>;
  update?: Maybe<OrganizationsDocAccessFields_BsSubdirIstanza_Update>;
};

export type OrganizationsDocAccessFields_BsSubdirIstanza_Create = {
  __typename?: 'OrganizationsDocAccessFields_bsSubdirIstanza_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_BsSubdirIstanza_Delete = {
  __typename?: 'OrganizationsDocAccessFields_bsSubdirIstanza_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_BsSubdirIstanza_Read = {
  __typename?: 'OrganizationsDocAccessFields_bsSubdirIstanza_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_BsSubdirIstanza_Update = {
  __typename?: 'OrganizationsDocAccessFields_bsSubdirIstanza_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bschv = {
  __typename?: 'OrganizationsDocAccessFields_bschv';
  create?: Maybe<OrganizationsDocAccessFields_Bschv_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Bschv_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Bschv_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Bschv_Update>;
};

export type OrganizationsDocAccessFields_Bschv_Create = {
  __typename?: 'OrganizationsDocAccessFields_bschv_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bschv_Delete = {
  __typename?: 'OrganizationsDocAccessFields_bschv_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bschv_Read = {
  __typename?: 'OrganizationsDocAccessFields_bschv_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bschv_Update = {
  __typename?: 'OrganizationsDocAccessFields_bschv_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bscloudir = {
  __typename?: 'OrganizationsDocAccessFields_bscloudir';
  create?: Maybe<OrganizationsDocAccessFields_Bscloudir_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Bscloudir_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Bscloudir_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Bscloudir_Update>;
};

export type OrganizationsDocAccessFields_Bscloudir_Create = {
  __typename?: 'OrganizationsDocAccessFields_bscloudir_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bscloudir_Delete = {
  __typename?: 'OrganizationsDocAccessFields_bscloudir_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bscloudir_Read = {
  __typename?: 'OrganizationsDocAccessFields_bscloudir_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Bscloudir_Update = {
  __typename?: 'OrganizationsDocAccessFields_bscloudir_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CodiceFiscale = {
  __typename?: 'OrganizationsDocAccessFields_codiceFiscale';
  create?: Maybe<OrganizationsDocAccessFields_CodiceFiscale_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_CodiceFiscale_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_CodiceFiscale_Read>;
  update?: Maybe<OrganizationsDocAccessFields_CodiceFiscale_Update>;
};

export type OrganizationsDocAccessFields_CodiceFiscale_Create = {
  __typename?: 'OrganizationsDocAccessFields_codiceFiscale_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CodiceFiscale_Delete = {
  __typename?: 'OrganizationsDocAccessFields_codiceFiscale_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CodiceFiscale_Read = {
  __typename?: 'OrganizationsDocAccessFields_codiceFiscale_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CodiceFiscale_Update = {
  __typename?: 'OrganizationsDocAccessFields_codiceFiscale_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CreatedAt = {
  __typename?: 'OrganizationsDocAccessFields_createdAt';
  create?: Maybe<OrganizationsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrganizationsDocAccessFields_CreatedAt_Update>;
};

export type OrganizationsDocAccessFields_CreatedAt_Create = {
  __typename?: 'OrganizationsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OrganizationsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CreatedAt_Read = {
  __typename?: 'OrganizationsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_CreatedAt_Update = {
  __typename?: 'OrganizationsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Email = {
  __typename?: 'OrganizationsDocAccessFields_email';
  create?: Maybe<OrganizationsDocAccessFields_Email_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Email_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Email_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Email_Update>;
};

export type OrganizationsDocAccessFields_Email_Create = {
  __typename?: 'OrganizationsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Email_Delete = {
  __typename?: 'OrganizationsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Email_Read = {
  __typename?: 'OrganizationsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Email_Update = {
  __typename?: 'OrganizationsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Imprenditore = {
  __typename?: 'OrganizationsDocAccessFields_imprenditore';
  create?: Maybe<OrganizationsDocAccessFields_Imprenditore_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Imprenditore_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Imprenditore_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Imprenditore_Update>;
};

export type OrganizationsDocAccessFields_Imprenditore_Create = {
  __typename?: 'OrganizationsDocAccessFields_imprenditore_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Imprenditore_Delete = {
  __typename?: 'OrganizationsDocAccessFields_imprenditore_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Imprenditore_Read = {
  __typename?: 'OrganizationsDocAccessFields_imprenditore_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Imprenditore_Update = {
  __typename?: 'OrganizationsDocAccessFields_imprenditore_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Name = {
  __typename?: 'OrganizationsDocAccessFields_name';
  create?: Maybe<OrganizationsDocAccessFields_Name_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Name_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Name_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Name_Update>;
};

export type OrganizationsDocAccessFields_Name_Create = {
  __typename?: 'OrganizationsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Name_Delete = {
  __typename?: 'OrganizationsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Name_Read = {
  __typename?: 'OrganizationsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Name_Update = {
  __typename?: 'OrganizationsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_PartitaIva = {
  __typename?: 'OrganizationsDocAccessFields_partitaIva';
  create?: Maybe<OrganizationsDocAccessFields_PartitaIva_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_PartitaIva_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_PartitaIva_Read>;
  update?: Maybe<OrganizationsDocAccessFields_PartitaIva_Update>;
};

export type OrganizationsDocAccessFields_PartitaIva_Create = {
  __typename?: 'OrganizationsDocAccessFields_partitaIva_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_PartitaIva_Delete = {
  __typename?: 'OrganizationsDocAccessFields_partitaIva_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_PartitaIva_Read = {
  __typename?: 'OrganizationsDocAccessFields_partitaIva_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_PartitaIva_Update = {
  __typename?: 'OrganizationsDocAccessFields_partitaIva_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Pec = {
  __typename?: 'OrganizationsDocAccessFields_pec';
  create?: Maybe<OrganizationsDocAccessFields_Pec_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Pec_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Pec_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Pec_Update>;
};

export type OrganizationsDocAccessFields_Pec_Create = {
  __typename?: 'OrganizationsDocAccessFields_pec_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Pec_Delete = {
  __typename?: 'OrganizationsDocAccessFields_pec_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Pec_Read = {
  __typename?: 'OrganizationsDocAccessFields_pec_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Pec_Update = {
  __typename?: 'OrganizationsDocAccessFields_pec_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCap = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCap';
  create?: Maybe<OrganizationsDocAccessFields_SedeLegaleCap_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeLegaleCap_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeLegaleCap_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeLegaleCap_Update>;
};

export type OrganizationsDocAccessFields_SedeLegaleCap_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCap_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCap_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCap_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCap_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCap_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCap_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCitta = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCitta';
  create?: Maybe<OrganizationsDocAccessFields_SedeLegaleCitta_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeLegaleCitta_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeLegaleCitta_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeLegaleCitta_Update>;
};

export type OrganizationsDocAccessFields_SedeLegaleCitta_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCitta_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCitta_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCitta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCitta_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCitta_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCitta_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCitta_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCivico = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCivico';
  create?: Maybe<OrganizationsDocAccessFields_SedeLegaleCivico_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeLegaleCivico_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeLegaleCivico_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeLegaleCivico_Update>;
};

export type OrganizationsDocAccessFields_SedeLegaleCivico_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCivico_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCivico_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCivico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCivico_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCivico_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleCivico_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleCivico_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleIndirizzo = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleIndirizzo';
  create?: Maybe<OrganizationsDocAccessFields_SedeLegaleIndirizzo_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeLegaleIndirizzo_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeLegaleIndirizzo_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeLegaleIndirizzo_Update>;
};

export type OrganizationsDocAccessFields_SedeLegaleIndirizzo_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleIndirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleIndirizzo_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleIndirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleIndirizzo_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleIndirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleIndirizzo_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleIndirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleProvincia = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleProvincia';
  create?: Maybe<OrganizationsDocAccessFields_SedeLegaleProvincia_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeLegaleProvincia_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeLegaleProvincia_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeLegaleProvincia_Update>;
};

export type OrganizationsDocAccessFields_SedeLegaleProvincia_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleProvincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleProvincia_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleProvincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleProvincia_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleProvincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeLegaleProvincia_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeLegaleProvincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCap = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCap';
  create?: Maybe<OrganizationsDocAccessFields_SedeOperativaCap_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeOperativaCap_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeOperativaCap_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeOperativaCap_Update>;
};

export type OrganizationsDocAccessFields_SedeOperativaCap_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCap_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCap_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCap_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCap_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCap_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCap_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCitta = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCitta';
  create?: Maybe<OrganizationsDocAccessFields_SedeOperativaCitta_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeOperativaCitta_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeOperativaCitta_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeOperativaCitta_Update>;
};

export type OrganizationsDocAccessFields_SedeOperativaCitta_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCitta_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCitta_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCitta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCitta_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCitta_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCitta_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCitta_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCivico = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCivico';
  create?: Maybe<OrganizationsDocAccessFields_SedeOperativaCivico_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeOperativaCivico_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeOperativaCivico_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeOperativaCivico_Update>;
};

export type OrganizationsDocAccessFields_SedeOperativaCivico_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCivico_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCivico_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCivico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCivico_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCivico_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaCivico_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaCivico_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaIndirizzo = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaIndirizzo';
  create?: Maybe<OrganizationsDocAccessFields_SedeOperativaIndirizzo_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeOperativaIndirizzo_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeOperativaIndirizzo_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeOperativaIndirizzo_Update>;
};

export type OrganizationsDocAccessFields_SedeOperativaIndirizzo_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaIndirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaIndirizzo_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaIndirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaIndirizzo_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaIndirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaIndirizzo_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaIndirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaProvincia = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaProvincia';
  create?: Maybe<OrganizationsDocAccessFields_SedeOperativaProvincia_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_SedeOperativaProvincia_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_SedeOperativaProvincia_Read>;
  update?: Maybe<OrganizationsDocAccessFields_SedeOperativaProvincia_Update>;
};

export type OrganizationsDocAccessFields_SedeOperativaProvincia_Create = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaProvincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaProvincia_Delete = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaProvincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaProvincia_Read = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaProvincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_SedeOperativaProvincia_Update = {
  __typename?: 'OrganizationsDocAccessFields_sedeOperativaProvincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Stores = {
  __typename?: 'OrganizationsDocAccessFields_stores';
  create?: Maybe<OrganizationsDocAccessFields_Stores_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Stores_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Stores_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Stores_Update>;
};

export type OrganizationsDocAccessFields_Stores_Create = {
  __typename?: 'OrganizationsDocAccessFields_stores_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Stores_Delete = {
  __typename?: 'OrganizationsDocAccessFields_stores_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Stores_Read = {
  __typename?: 'OrganizationsDocAccessFields_stores_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Stores_Update = {
  __typename?: 'OrganizationsDocAccessFields_stores_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Telefono = {
  __typename?: 'OrganizationsDocAccessFields_telefono';
  create?: Maybe<OrganizationsDocAccessFields_Telefono_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_Telefono_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_Telefono_Read>;
  update?: Maybe<OrganizationsDocAccessFields_Telefono_Update>;
};

export type OrganizationsDocAccessFields_TelefonoAlt = {
  __typename?: 'OrganizationsDocAccessFields_telefonoAlt';
  create?: Maybe<OrganizationsDocAccessFields_TelefonoAlt_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_TelefonoAlt_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_TelefonoAlt_Read>;
  update?: Maybe<OrganizationsDocAccessFields_TelefonoAlt_Update>;
};

export type OrganizationsDocAccessFields_TelefonoAlt_Create = {
  __typename?: 'OrganizationsDocAccessFields_telefonoAlt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_TelefonoAlt_Delete = {
  __typename?: 'OrganizationsDocAccessFields_telefonoAlt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_TelefonoAlt_Read = {
  __typename?: 'OrganizationsDocAccessFields_telefonoAlt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_TelefonoAlt_Update = {
  __typename?: 'OrganizationsDocAccessFields_telefonoAlt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Telefono_Create = {
  __typename?: 'OrganizationsDocAccessFields_telefono_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Telefono_Delete = {
  __typename?: 'OrganizationsDocAccessFields_telefono_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Telefono_Read = {
  __typename?: 'OrganizationsDocAccessFields_telefono_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_Telefono_Update = {
  __typename?: 'OrganizationsDocAccessFields_telefono_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_UpdatedAt = {
  __typename?: 'OrganizationsDocAccessFields_updatedAt';
  create?: Maybe<OrganizationsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrganizationsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrganizationsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrganizationsDocAccessFields_UpdatedAt_Update>;
};

export type OrganizationsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OrganizationsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OrganizationsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OrganizationsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OrganizationsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields = {
  __typename?: 'OrganizationsFields';
  bsSubdirIstanza?: Maybe<OrganizationsFields_BsSubdirIstanza>;
  bschv?: Maybe<OrganizationsFields_Bschv>;
  bscloudir?: Maybe<OrganizationsFields_Bscloudir>;
  codiceFiscale?: Maybe<OrganizationsFields_CodiceFiscale>;
  createdAt?: Maybe<OrganizationsFields_CreatedAt>;
  email?: Maybe<OrganizationsFields_Email>;
  imprenditore?: Maybe<OrganizationsFields_Imprenditore>;
  name?: Maybe<OrganizationsFields_Name>;
  partitaIva?: Maybe<OrganizationsFields_PartitaIva>;
  pec?: Maybe<OrganizationsFields_Pec>;
  sedeLegaleCap?: Maybe<OrganizationsFields_SedeLegaleCap>;
  sedeLegaleCitta?: Maybe<OrganizationsFields_SedeLegaleCitta>;
  sedeLegaleCivico?: Maybe<OrganizationsFields_SedeLegaleCivico>;
  sedeLegaleIndirizzo?: Maybe<OrganizationsFields_SedeLegaleIndirizzo>;
  sedeLegaleProvincia?: Maybe<OrganizationsFields_SedeLegaleProvincia>;
  sedeOperativaCap?: Maybe<OrganizationsFields_SedeOperativaCap>;
  sedeOperativaCitta?: Maybe<OrganizationsFields_SedeOperativaCitta>;
  sedeOperativaCivico?: Maybe<OrganizationsFields_SedeOperativaCivico>;
  sedeOperativaIndirizzo?: Maybe<OrganizationsFields_SedeOperativaIndirizzo>;
  sedeOperativaProvincia?: Maybe<OrganizationsFields_SedeOperativaProvincia>;
  stores?: Maybe<OrganizationsFields_Stores>;
  telefono?: Maybe<OrganizationsFields_Telefono>;
  telefonoAlt?: Maybe<OrganizationsFields_TelefonoAlt>;
  updatedAt?: Maybe<OrganizationsFields_UpdatedAt>;
};

export type OrganizationsFields_BsSubdirIstanza = {
  __typename?: 'OrganizationsFields_bsSubdirIstanza';
  create?: Maybe<OrganizationsFields_BsSubdirIstanza_Create>;
  delete?: Maybe<OrganizationsFields_BsSubdirIstanza_Delete>;
  read?: Maybe<OrganizationsFields_BsSubdirIstanza_Read>;
  update?: Maybe<OrganizationsFields_BsSubdirIstanza_Update>;
};

export type OrganizationsFields_BsSubdirIstanza_Create = {
  __typename?: 'OrganizationsFields_bsSubdirIstanza_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_BsSubdirIstanza_Delete = {
  __typename?: 'OrganizationsFields_bsSubdirIstanza_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_BsSubdirIstanza_Read = {
  __typename?: 'OrganizationsFields_bsSubdirIstanza_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_BsSubdirIstanza_Update = {
  __typename?: 'OrganizationsFields_bsSubdirIstanza_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bschv = {
  __typename?: 'OrganizationsFields_bschv';
  create?: Maybe<OrganizationsFields_Bschv_Create>;
  delete?: Maybe<OrganizationsFields_Bschv_Delete>;
  read?: Maybe<OrganizationsFields_Bschv_Read>;
  update?: Maybe<OrganizationsFields_Bschv_Update>;
};

export type OrganizationsFields_Bschv_Create = {
  __typename?: 'OrganizationsFields_bschv_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bschv_Delete = {
  __typename?: 'OrganizationsFields_bschv_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bschv_Read = {
  __typename?: 'OrganizationsFields_bschv_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bschv_Update = {
  __typename?: 'OrganizationsFields_bschv_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bscloudir = {
  __typename?: 'OrganizationsFields_bscloudir';
  create?: Maybe<OrganizationsFields_Bscloudir_Create>;
  delete?: Maybe<OrganizationsFields_Bscloudir_Delete>;
  read?: Maybe<OrganizationsFields_Bscloudir_Read>;
  update?: Maybe<OrganizationsFields_Bscloudir_Update>;
};

export type OrganizationsFields_Bscloudir_Create = {
  __typename?: 'OrganizationsFields_bscloudir_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bscloudir_Delete = {
  __typename?: 'OrganizationsFields_bscloudir_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bscloudir_Read = {
  __typename?: 'OrganizationsFields_bscloudir_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Bscloudir_Update = {
  __typename?: 'OrganizationsFields_bscloudir_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CodiceFiscale = {
  __typename?: 'OrganizationsFields_codiceFiscale';
  create?: Maybe<OrganizationsFields_CodiceFiscale_Create>;
  delete?: Maybe<OrganizationsFields_CodiceFiscale_Delete>;
  read?: Maybe<OrganizationsFields_CodiceFiscale_Read>;
  update?: Maybe<OrganizationsFields_CodiceFiscale_Update>;
};

export type OrganizationsFields_CodiceFiscale_Create = {
  __typename?: 'OrganizationsFields_codiceFiscale_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CodiceFiscale_Delete = {
  __typename?: 'OrganizationsFields_codiceFiscale_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CodiceFiscale_Read = {
  __typename?: 'OrganizationsFields_codiceFiscale_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CodiceFiscale_Update = {
  __typename?: 'OrganizationsFields_codiceFiscale_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CreatedAt = {
  __typename?: 'OrganizationsFields_createdAt';
  create?: Maybe<OrganizationsFields_CreatedAt_Create>;
  delete?: Maybe<OrganizationsFields_CreatedAt_Delete>;
  read?: Maybe<OrganizationsFields_CreatedAt_Read>;
  update?: Maybe<OrganizationsFields_CreatedAt_Update>;
};

export type OrganizationsFields_CreatedAt_Create = {
  __typename?: 'OrganizationsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CreatedAt_Delete = {
  __typename?: 'OrganizationsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CreatedAt_Read = {
  __typename?: 'OrganizationsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_CreatedAt_Update = {
  __typename?: 'OrganizationsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Email = {
  __typename?: 'OrganizationsFields_email';
  create?: Maybe<OrganizationsFields_Email_Create>;
  delete?: Maybe<OrganizationsFields_Email_Delete>;
  read?: Maybe<OrganizationsFields_Email_Read>;
  update?: Maybe<OrganizationsFields_Email_Update>;
};

export type OrganizationsFields_Email_Create = {
  __typename?: 'OrganizationsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Email_Delete = {
  __typename?: 'OrganizationsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Email_Read = {
  __typename?: 'OrganizationsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Email_Update = {
  __typename?: 'OrganizationsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Imprenditore = {
  __typename?: 'OrganizationsFields_imprenditore';
  create?: Maybe<OrganizationsFields_Imprenditore_Create>;
  delete?: Maybe<OrganizationsFields_Imprenditore_Delete>;
  read?: Maybe<OrganizationsFields_Imprenditore_Read>;
  update?: Maybe<OrganizationsFields_Imprenditore_Update>;
};

export type OrganizationsFields_Imprenditore_Create = {
  __typename?: 'OrganizationsFields_imprenditore_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Imprenditore_Delete = {
  __typename?: 'OrganizationsFields_imprenditore_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Imprenditore_Read = {
  __typename?: 'OrganizationsFields_imprenditore_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Imprenditore_Update = {
  __typename?: 'OrganizationsFields_imprenditore_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Name = {
  __typename?: 'OrganizationsFields_name';
  create?: Maybe<OrganizationsFields_Name_Create>;
  delete?: Maybe<OrganizationsFields_Name_Delete>;
  read?: Maybe<OrganizationsFields_Name_Read>;
  update?: Maybe<OrganizationsFields_Name_Update>;
};

export type OrganizationsFields_Name_Create = {
  __typename?: 'OrganizationsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Name_Delete = {
  __typename?: 'OrganizationsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Name_Read = {
  __typename?: 'OrganizationsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Name_Update = {
  __typename?: 'OrganizationsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_PartitaIva = {
  __typename?: 'OrganizationsFields_partitaIva';
  create?: Maybe<OrganizationsFields_PartitaIva_Create>;
  delete?: Maybe<OrganizationsFields_PartitaIva_Delete>;
  read?: Maybe<OrganizationsFields_PartitaIva_Read>;
  update?: Maybe<OrganizationsFields_PartitaIva_Update>;
};

export type OrganizationsFields_PartitaIva_Create = {
  __typename?: 'OrganizationsFields_partitaIva_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_PartitaIva_Delete = {
  __typename?: 'OrganizationsFields_partitaIva_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_PartitaIva_Read = {
  __typename?: 'OrganizationsFields_partitaIva_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_PartitaIva_Update = {
  __typename?: 'OrganizationsFields_partitaIva_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Pec = {
  __typename?: 'OrganizationsFields_pec';
  create?: Maybe<OrganizationsFields_Pec_Create>;
  delete?: Maybe<OrganizationsFields_Pec_Delete>;
  read?: Maybe<OrganizationsFields_Pec_Read>;
  update?: Maybe<OrganizationsFields_Pec_Update>;
};

export type OrganizationsFields_Pec_Create = {
  __typename?: 'OrganizationsFields_pec_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Pec_Delete = {
  __typename?: 'OrganizationsFields_pec_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Pec_Read = {
  __typename?: 'OrganizationsFields_pec_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Pec_Update = {
  __typename?: 'OrganizationsFields_pec_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCap = {
  __typename?: 'OrganizationsFields_sedeLegaleCap';
  create?: Maybe<OrganizationsFields_SedeLegaleCap_Create>;
  delete?: Maybe<OrganizationsFields_SedeLegaleCap_Delete>;
  read?: Maybe<OrganizationsFields_SedeLegaleCap_Read>;
  update?: Maybe<OrganizationsFields_SedeLegaleCap_Update>;
};

export type OrganizationsFields_SedeLegaleCap_Create = {
  __typename?: 'OrganizationsFields_sedeLegaleCap_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCap_Delete = {
  __typename?: 'OrganizationsFields_sedeLegaleCap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCap_Read = {
  __typename?: 'OrganizationsFields_sedeLegaleCap_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCap_Update = {
  __typename?: 'OrganizationsFields_sedeLegaleCap_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCitta = {
  __typename?: 'OrganizationsFields_sedeLegaleCitta';
  create?: Maybe<OrganizationsFields_SedeLegaleCitta_Create>;
  delete?: Maybe<OrganizationsFields_SedeLegaleCitta_Delete>;
  read?: Maybe<OrganizationsFields_SedeLegaleCitta_Read>;
  update?: Maybe<OrganizationsFields_SedeLegaleCitta_Update>;
};

export type OrganizationsFields_SedeLegaleCitta_Create = {
  __typename?: 'OrganizationsFields_sedeLegaleCitta_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCitta_Delete = {
  __typename?: 'OrganizationsFields_sedeLegaleCitta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCitta_Read = {
  __typename?: 'OrganizationsFields_sedeLegaleCitta_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCitta_Update = {
  __typename?: 'OrganizationsFields_sedeLegaleCitta_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCivico = {
  __typename?: 'OrganizationsFields_sedeLegaleCivico';
  create?: Maybe<OrganizationsFields_SedeLegaleCivico_Create>;
  delete?: Maybe<OrganizationsFields_SedeLegaleCivico_Delete>;
  read?: Maybe<OrganizationsFields_SedeLegaleCivico_Read>;
  update?: Maybe<OrganizationsFields_SedeLegaleCivico_Update>;
};

export type OrganizationsFields_SedeLegaleCivico_Create = {
  __typename?: 'OrganizationsFields_sedeLegaleCivico_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCivico_Delete = {
  __typename?: 'OrganizationsFields_sedeLegaleCivico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCivico_Read = {
  __typename?: 'OrganizationsFields_sedeLegaleCivico_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleCivico_Update = {
  __typename?: 'OrganizationsFields_sedeLegaleCivico_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleIndirizzo = {
  __typename?: 'OrganizationsFields_sedeLegaleIndirizzo';
  create?: Maybe<OrganizationsFields_SedeLegaleIndirizzo_Create>;
  delete?: Maybe<OrganizationsFields_SedeLegaleIndirizzo_Delete>;
  read?: Maybe<OrganizationsFields_SedeLegaleIndirizzo_Read>;
  update?: Maybe<OrganizationsFields_SedeLegaleIndirizzo_Update>;
};

export type OrganizationsFields_SedeLegaleIndirizzo_Create = {
  __typename?: 'OrganizationsFields_sedeLegaleIndirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleIndirizzo_Delete = {
  __typename?: 'OrganizationsFields_sedeLegaleIndirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleIndirizzo_Read = {
  __typename?: 'OrganizationsFields_sedeLegaleIndirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleIndirizzo_Update = {
  __typename?: 'OrganizationsFields_sedeLegaleIndirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleProvincia = {
  __typename?: 'OrganizationsFields_sedeLegaleProvincia';
  create?: Maybe<OrganizationsFields_SedeLegaleProvincia_Create>;
  delete?: Maybe<OrganizationsFields_SedeLegaleProvincia_Delete>;
  read?: Maybe<OrganizationsFields_SedeLegaleProvincia_Read>;
  update?: Maybe<OrganizationsFields_SedeLegaleProvincia_Update>;
};

export type OrganizationsFields_SedeLegaleProvincia_Create = {
  __typename?: 'OrganizationsFields_sedeLegaleProvincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleProvincia_Delete = {
  __typename?: 'OrganizationsFields_sedeLegaleProvincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleProvincia_Read = {
  __typename?: 'OrganizationsFields_sedeLegaleProvincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeLegaleProvincia_Update = {
  __typename?: 'OrganizationsFields_sedeLegaleProvincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCap = {
  __typename?: 'OrganizationsFields_sedeOperativaCap';
  create?: Maybe<OrganizationsFields_SedeOperativaCap_Create>;
  delete?: Maybe<OrganizationsFields_SedeOperativaCap_Delete>;
  read?: Maybe<OrganizationsFields_SedeOperativaCap_Read>;
  update?: Maybe<OrganizationsFields_SedeOperativaCap_Update>;
};

export type OrganizationsFields_SedeOperativaCap_Create = {
  __typename?: 'OrganizationsFields_sedeOperativaCap_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCap_Delete = {
  __typename?: 'OrganizationsFields_sedeOperativaCap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCap_Read = {
  __typename?: 'OrganizationsFields_sedeOperativaCap_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCap_Update = {
  __typename?: 'OrganizationsFields_sedeOperativaCap_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCitta = {
  __typename?: 'OrganizationsFields_sedeOperativaCitta';
  create?: Maybe<OrganizationsFields_SedeOperativaCitta_Create>;
  delete?: Maybe<OrganizationsFields_SedeOperativaCitta_Delete>;
  read?: Maybe<OrganizationsFields_SedeOperativaCitta_Read>;
  update?: Maybe<OrganizationsFields_SedeOperativaCitta_Update>;
};

export type OrganizationsFields_SedeOperativaCitta_Create = {
  __typename?: 'OrganizationsFields_sedeOperativaCitta_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCitta_Delete = {
  __typename?: 'OrganizationsFields_sedeOperativaCitta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCitta_Read = {
  __typename?: 'OrganizationsFields_sedeOperativaCitta_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCitta_Update = {
  __typename?: 'OrganizationsFields_sedeOperativaCitta_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCivico = {
  __typename?: 'OrganizationsFields_sedeOperativaCivico';
  create?: Maybe<OrganizationsFields_SedeOperativaCivico_Create>;
  delete?: Maybe<OrganizationsFields_SedeOperativaCivico_Delete>;
  read?: Maybe<OrganizationsFields_SedeOperativaCivico_Read>;
  update?: Maybe<OrganizationsFields_SedeOperativaCivico_Update>;
};

export type OrganizationsFields_SedeOperativaCivico_Create = {
  __typename?: 'OrganizationsFields_sedeOperativaCivico_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCivico_Delete = {
  __typename?: 'OrganizationsFields_sedeOperativaCivico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCivico_Read = {
  __typename?: 'OrganizationsFields_sedeOperativaCivico_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaCivico_Update = {
  __typename?: 'OrganizationsFields_sedeOperativaCivico_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaIndirizzo = {
  __typename?: 'OrganizationsFields_sedeOperativaIndirizzo';
  create?: Maybe<OrganizationsFields_SedeOperativaIndirizzo_Create>;
  delete?: Maybe<OrganizationsFields_SedeOperativaIndirizzo_Delete>;
  read?: Maybe<OrganizationsFields_SedeOperativaIndirizzo_Read>;
  update?: Maybe<OrganizationsFields_SedeOperativaIndirizzo_Update>;
};

export type OrganizationsFields_SedeOperativaIndirizzo_Create = {
  __typename?: 'OrganizationsFields_sedeOperativaIndirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaIndirizzo_Delete = {
  __typename?: 'OrganizationsFields_sedeOperativaIndirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaIndirizzo_Read = {
  __typename?: 'OrganizationsFields_sedeOperativaIndirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaIndirizzo_Update = {
  __typename?: 'OrganizationsFields_sedeOperativaIndirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaProvincia = {
  __typename?: 'OrganizationsFields_sedeOperativaProvincia';
  create?: Maybe<OrganizationsFields_SedeOperativaProvincia_Create>;
  delete?: Maybe<OrganizationsFields_SedeOperativaProvincia_Delete>;
  read?: Maybe<OrganizationsFields_SedeOperativaProvincia_Read>;
  update?: Maybe<OrganizationsFields_SedeOperativaProvincia_Update>;
};

export type OrganizationsFields_SedeOperativaProvincia_Create = {
  __typename?: 'OrganizationsFields_sedeOperativaProvincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaProvincia_Delete = {
  __typename?: 'OrganizationsFields_sedeOperativaProvincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaProvincia_Read = {
  __typename?: 'OrganizationsFields_sedeOperativaProvincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_SedeOperativaProvincia_Update = {
  __typename?: 'OrganizationsFields_sedeOperativaProvincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Stores = {
  __typename?: 'OrganizationsFields_stores';
  create?: Maybe<OrganizationsFields_Stores_Create>;
  delete?: Maybe<OrganizationsFields_Stores_Delete>;
  read?: Maybe<OrganizationsFields_Stores_Read>;
  update?: Maybe<OrganizationsFields_Stores_Update>;
};

export type OrganizationsFields_Stores_Create = {
  __typename?: 'OrganizationsFields_stores_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Stores_Delete = {
  __typename?: 'OrganizationsFields_stores_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Stores_Read = {
  __typename?: 'OrganizationsFields_stores_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Stores_Update = {
  __typename?: 'OrganizationsFields_stores_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Telefono = {
  __typename?: 'OrganizationsFields_telefono';
  create?: Maybe<OrganizationsFields_Telefono_Create>;
  delete?: Maybe<OrganizationsFields_Telefono_Delete>;
  read?: Maybe<OrganizationsFields_Telefono_Read>;
  update?: Maybe<OrganizationsFields_Telefono_Update>;
};

export type OrganizationsFields_TelefonoAlt = {
  __typename?: 'OrganizationsFields_telefonoAlt';
  create?: Maybe<OrganizationsFields_TelefonoAlt_Create>;
  delete?: Maybe<OrganizationsFields_TelefonoAlt_Delete>;
  read?: Maybe<OrganizationsFields_TelefonoAlt_Read>;
  update?: Maybe<OrganizationsFields_TelefonoAlt_Update>;
};

export type OrganizationsFields_TelefonoAlt_Create = {
  __typename?: 'OrganizationsFields_telefonoAlt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_TelefonoAlt_Delete = {
  __typename?: 'OrganizationsFields_telefonoAlt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_TelefonoAlt_Read = {
  __typename?: 'OrganizationsFields_telefonoAlt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_TelefonoAlt_Update = {
  __typename?: 'OrganizationsFields_telefonoAlt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Telefono_Create = {
  __typename?: 'OrganizationsFields_telefono_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Telefono_Delete = {
  __typename?: 'OrganizationsFields_telefono_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Telefono_Read = {
  __typename?: 'OrganizationsFields_telefono_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_Telefono_Update = {
  __typename?: 'OrganizationsFields_telefono_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_UpdatedAt = {
  __typename?: 'OrganizationsFields_updatedAt';
  create?: Maybe<OrganizationsFields_UpdatedAt_Create>;
  delete?: Maybe<OrganizationsFields_UpdatedAt_Delete>;
  read?: Maybe<OrganizationsFields_UpdatedAt_Read>;
  update?: Maybe<OrganizationsFields_UpdatedAt_Update>;
};

export type OrganizationsFields_UpdatedAt_Create = {
  __typename?: 'OrganizationsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_UpdatedAt_Delete = {
  __typename?: 'OrganizationsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_UpdatedAt_Read = {
  __typename?: 'OrganizationsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsFields_UpdatedAt_Update = {
  __typename?: 'OrganizationsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrganizationsReadAccess = {
  __typename?: 'OrganizationsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsReadDocAccess = {
  __typename?: 'OrganizationsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsUpdateAccess = {
  __typename?: 'OrganizationsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrganizationsUpdateDocAccess = {
  __typename?: 'OrganizationsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  LandingCategories = 'landing_categories',
  Landings = 'landings',
  Media = 'media',
  Organizations = 'organizations',
  Stores = 'stores',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Landing | LandingCategory | Media | Organization | Store | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  LandingCategories = 'landing_categories',
  Landings = 'landings',
  Media = 'media',
  Organizations = 'organizations',
  Stores = 'stores',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  LandingCategories = 'landing_categories',
  Landings = 'landings',
  Media = 'media',
  Organizations = 'organizations',
  Stores = 'stores',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  LandingCategories = 'landing_categories',
  Landings = 'landings',
  Media = 'media',
  Organizations = 'organizations',
  Stores = 'stores',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs?: Maybe<Array<Maybe<PayloadLockedDocument>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Landing?: Maybe<Landing>;
  LandingCategories?: Maybe<LandingCategories>;
  LandingCategory?: Maybe<LandingCategory>;
  Landings?: Maybe<Landings>;
  Media?: Maybe<Media>;
  Organization?: Maybe<Organization>;
  Organizations?: Maybe<Organizations>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Store?: Maybe<Store>;
  Stores?: Maybe<Stores>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countLandingCategories?: Maybe<CountLandingCategories>;
  countLandings?: Maybe<CountLandings>;
  countOrganizations?: Maybe<CountOrganizations>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countStores?: Maybe<CountStores>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessLanding?: Maybe<LandingsDocAccess>;
  docAccessLandingCategory?: Maybe<Landing_CategoriesDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessOrganization?: Maybe<OrganizationsDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessStore?: Maybe<StoresDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryLandingArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryLandingCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LandingCategory_Where>;
};


export type QueryLandingCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryLandingsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Landing_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryOrganizationArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryOrganizationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Organization_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryStoreArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryStoresArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Store_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountLandingCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandingCategory_Where>;
};


export type QueryCountLandingsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Landing_Where>;
};


export type QueryCountOrganizationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Organization_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountStoresArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Store_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessLandingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessLandingCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessOrganizationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessStoreArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type StickyBarBlock = {
  __typename?: 'StickyBarBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text: Scalars['JSON']['output'];
};


export type StickyBarBlockTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Store = {
  __typename?: 'Store';
  analytics_id?: Maybe<Scalars['String']['output']>;
  analytics_share_id?: Maybe<Scalars['String']['output']>;
  assicurazioniText?: Maybe<Scalars['String']['output']>;
  bisuiteDomain?: Maybe<Store_BisuiteDomain>;
  bscal?: Maybe<Scalars['String']['output']>;
  bscc?: Maybe<Scalars['String']['output']>;
  bsds?: Maybe<Scalars['String']['output']>;
  bsid?: Maybe<Scalars['String']['output']>;
  cap: Scalars['String']['output'];
  citta: Scalars['String']['output'];
  civico?: Maybe<Scalars['String']['output']>;
  codiceCentralino?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  foto?: Maybe<Media>;
  id: Scalars['Int']['output'];
  indirizzo: Scalars['String']['output'];
  linkMappa?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numeroPdv: Scalars['String']['output'];
  orari?: Maybe<Array<Store_Orari>>;
  organization: Organization;
  provincia: Scalars['String']['output'];
  social_fb?: Maybe<Scalars['String']['output']>;
  social_gg?: Maybe<Scalars['String']['output']>;
  social_ig?: Maybe<Scalars['String']['output']>;
  social_tt?: Maybe<Scalars['String']['output']>;
  social_tw?: Maybe<Scalars['String']['output']>;
  social_yt?: Maybe<Scalars['String']['output']>;
  sub: Scalars['String']['output'];
  team?: Maybe<Array<Store_Team>>;
  telefono: Scalars['String']['output'];
  telefonoAlt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vetrinaType: Store_VetrinaType;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export enum StoreUpdate_Orari_Giorno_MutationInput {
  Dom = 'dom',
  Gio = 'gio',
  Lun = 'lun',
  Mar = 'mar',
  Mer = 'mer',
  Sab = 'sab',
  Ven = 'ven'
}

export enum StoreUpdate_BisuiteDomain_MutationInput {
  BisuiteIt = 'bisuite_it',
  W01BisuiteIt = 'w01_bisuite_it'
}

export enum StoreUpdate_VetrinaType_MutationInput {
  Full = 'full',
  Lite = 'lite'
}

export type Store_Orari = {
  __typename?: 'Store_Orari';
  aperto?: Maybe<Scalars['Boolean']['output']>;
  apertura_1?: Maybe<Scalars['String']['output']>;
  apertura_2?: Maybe<Scalars['String']['output']>;
  chiusura_1?: Maybe<Scalars['String']['output']>;
  chiusura_2?: Maybe<Scalars['String']['output']>;
  continuato?: Maybe<Scalars['Boolean']['output']>;
  giorno?: Maybe<Store_Orari_Giorno>;
  id?: Maybe<Scalars['String']['output']>;
};

export enum Store_Orari_Giorno {
  Dom = 'dom',
  Gio = 'gio',
  Lun = 'lun',
  Mar = 'mar',
  Mer = 'mer',
  Sab = 'sab',
  Ven = 'ven'
}

export enum Store_Orari_Giorno_MutationInput {
  Dom = 'dom',
  Gio = 'gio',
  Lun = 'lun',
  Mar = 'mar',
  Mer = 'mer',
  Sab = 'sab',
  Ven = 'ven'
}

export type Store_Team = {
  __typename?: 'Store_Team';
  foto?: Maybe<Media>;
  id?: Maybe<Scalars['String']['output']>;
  nome?: Maybe<Scalars['String']['output']>;
  ruolo?: Maybe<Scalars['String']['output']>;
};

export type Store_Analytics_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Analytics_Share_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_AssicurazioniText_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Store_BisuiteDomain {
  BisuiteIt = 'bisuite_it',
  W01BisuiteIt = 'w01_bisuite_it'
}

export enum Store_BisuiteDomain_Input {
  BisuiteIt = 'bisuite_it',
  W01BisuiteIt = 'w01_bisuite_it'
}

export enum Store_BisuiteDomain_MutationInput {
  BisuiteIt = 'bisuite_it',
  W01BisuiteIt = 'w01_bisuite_it'
}

export type Store_BisuiteDomain_Operator = {
  all?: InputMaybe<Array<InputMaybe<Store_BisuiteDomain_Input>>>;
  equals?: InputMaybe<Store_BisuiteDomain_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Store_BisuiteDomain_Input>>>;
  not_equals?: InputMaybe<Store_BisuiteDomain_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Store_BisuiteDomain_Input>>>;
};

export type Store_Bscal_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Bscc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Bsds_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Bsid_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Cap_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Citta_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Civico_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_CodiceCentralino_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Store_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Foto_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Store_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Store_Indirizzo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_LinkMappa_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_NumeroPdv_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Orari__Aperto_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Store_Orari__Apertura_1_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Orari__Apertura_2_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Orari__Chiusura_1_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Orari__Chiusura_2_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Orari__Continuato_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum Store_Orari__Giorno_Input {
  Dom = 'dom',
  Gio = 'gio',
  Lun = 'lun',
  Mar = 'mar',
  Mer = 'mer',
  Sab = 'sab',
  Ven = 'ven'
}

export type Store_Orari__Giorno_Operator = {
  all?: InputMaybe<Array<InputMaybe<Store_Orari__Giorno_Input>>>;
  equals?: InputMaybe<Store_Orari__Giorno_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Store_Orari__Giorno_Input>>>;
  not_equals?: InputMaybe<Store_Orari__Giorno_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Store_Orari__Giorno_Input>>>;
};

export type Store_Orari__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Organization_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Store_Provincia_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Fb_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Gg_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Ig_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Tt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Tw_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Social_Yt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Sub_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Team__Foto_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Store_Team__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Team__Nome_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Team__Ruolo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_TelefonoAlt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Telefono_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Store_VetrinaType {
  Full = 'full',
  Lite = 'lite'
}

export enum Store_VetrinaType_Input {
  Full = 'full',
  Lite = 'lite'
}

export enum Store_VetrinaType_MutationInput {
  Full = 'full',
  Lite = 'lite'
}

export type Store_VetrinaType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Store_VetrinaType_Input>>>;
  equals?: InputMaybe<Store_VetrinaType_Input>;
  in?: InputMaybe<Array<InputMaybe<Store_VetrinaType_Input>>>;
  not_equals?: InputMaybe<Store_VetrinaType_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Store_VetrinaType_Input>>>;
};

export type Store_Whatsapp_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Store_Where = {
  AND?: InputMaybe<Array<InputMaybe<Store_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Store_Where_Or>>>;
  analytics_id?: InputMaybe<Store_Analytics_Id_Operator>;
  analytics_share_id?: InputMaybe<Store_Analytics_Share_Id_Operator>;
  assicurazioniText?: InputMaybe<Store_AssicurazioniText_Operator>;
  bisuiteDomain?: InputMaybe<Store_BisuiteDomain_Operator>;
  bscal?: InputMaybe<Store_Bscal_Operator>;
  bscc?: InputMaybe<Store_Bscc_Operator>;
  bsds?: InputMaybe<Store_Bsds_Operator>;
  bsid?: InputMaybe<Store_Bsid_Operator>;
  cap?: InputMaybe<Store_Cap_Operator>;
  citta?: InputMaybe<Store_Citta_Operator>;
  civico?: InputMaybe<Store_Civico_Operator>;
  codiceCentralino?: InputMaybe<Store_CodiceCentralino_Operator>;
  createdAt?: InputMaybe<Store_CreatedAt_Operator>;
  email?: InputMaybe<Store_Email_Operator>;
  foto?: InputMaybe<Store_Foto_Operator>;
  id?: InputMaybe<Store_Id_Operator>;
  indirizzo?: InputMaybe<Store_Indirizzo_Operator>;
  linkMappa?: InputMaybe<Store_LinkMappa_Operator>;
  name?: InputMaybe<Store_Name_Operator>;
  numeroPdv?: InputMaybe<Store_NumeroPdv_Operator>;
  orari__aperto?: InputMaybe<Store_Orari__Aperto_Operator>;
  orari__apertura_1?: InputMaybe<Store_Orari__Apertura_1_Operator>;
  orari__apertura_2?: InputMaybe<Store_Orari__Apertura_2_Operator>;
  orari__chiusura_1?: InputMaybe<Store_Orari__Chiusura_1_Operator>;
  orari__chiusura_2?: InputMaybe<Store_Orari__Chiusura_2_Operator>;
  orari__continuato?: InputMaybe<Store_Orari__Continuato_Operator>;
  orari__giorno?: InputMaybe<Store_Orari__Giorno_Operator>;
  orari__id?: InputMaybe<Store_Orari__Id_Operator>;
  organization?: InputMaybe<Store_Organization_Operator>;
  provincia?: InputMaybe<Store_Provincia_Operator>;
  social_fb?: InputMaybe<Store_Social_Fb_Operator>;
  social_gg?: InputMaybe<Store_Social_Gg_Operator>;
  social_ig?: InputMaybe<Store_Social_Ig_Operator>;
  social_tt?: InputMaybe<Store_Social_Tt_Operator>;
  social_tw?: InputMaybe<Store_Social_Tw_Operator>;
  social_yt?: InputMaybe<Store_Social_Yt_Operator>;
  sub?: InputMaybe<Store_Sub_Operator>;
  team__foto?: InputMaybe<Store_Team__Foto_Operator>;
  team__id?: InputMaybe<Store_Team__Id_Operator>;
  team__nome?: InputMaybe<Store_Team__Nome_Operator>;
  team__ruolo?: InputMaybe<Store_Team__Ruolo_Operator>;
  telefono?: InputMaybe<Store_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Store_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Store_UpdatedAt_Operator>;
  vetrinaType?: InputMaybe<Store_VetrinaType_Operator>;
  whatsapp?: InputMaybe<Store_Whatsapp_Operator>;
};

export type Store_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Store_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Store_Where_Or>>>;
  analytics_id?: InputMaybe<Store_Analytics_Id_Operator>;
  analytics_share_id?: InputMaybe<Store_Analytics_Share_Id_Operator>;
  assicurazioniText?: InputMaybe<Store_AssicurazioniText_Operator>;
  bisuiteDomain?: InputMaybe<Store_BisuiteDomain_Operator>;
  bscal?: InputMaybe<Store_Bscal_Operator>;
  bscc?: InputMaybe<Store_Bscc_Operator>;
  bsds?: InputMaybe<Store_Bsds_Operator>;
  bsid?: InputMaybe<Store_Bsid_Operator>;
  cap?: InputMaybe<Store_Cap_Operator>;
  citta?: InputMaybe<Store_Citta_Operator>;
  civico?: InputMaybe<Store_Civico_Operator>;
  codiceCentralino?: InputMaybe<Store_CodiceCentralino_Operator>;
  createdAt?: InputMaybe<Store_CreatedAt_Operator>;
  email?: InputMaybe<Store_Email_Operator>;
  foto?: InputMaybe<Store_Foto_Operator>;
  id?: InputMaybe<Store_Id_Operator>;
  indirizzo?: InputMaybe<Store_Indirizzo_Operator>;
  linkMappa?: InputMaybe<Store_LinkMappa_Operator>;
  name?: InputMaybe<Store_Name_Operator>;
  numeroPdv?: InputMaybe<Store_NumeroPdv_Operator>;
  orari__aperto?: InputMaybe<Store_Orari__Aperto_Operator>;
  orari__apertura_1?: InputMaybe<Store_Orari__Apertura_1_Operator>;
  orari__apertura_2?: InputMaybe<Store_Orari__Apertura_2_Operator>;
  orari__chiusura_1?: InputMaybe<Store_Orari__Chiusura_1_Operator>;
  orari__chiusura_2?: InputMaybe<Store_Orari__Chiusura_2_Operator>;
  orari__continuato?: InputMaybe<Store_Orari__Continuato_Operator>;
  orari__giorno?: InputMaybe<Store_Orari__Giorno_Operator>;
  orari__id?: InputMaybe<Store_Orari__Id_Operator>;
  organization?: InputMaybe<Store_Organization_Operator>;
  provincia?: InputMaybe<Store_Provincia_Operator>;
  social_fb?: InputMaybe<Store_Social_Fb_Operator>;
  social_gg?: InputMaybe<Store_Social_Gg_Operator>;
  social_ig?: InputMaybe<Store_Social_Ig_Operator>;
  social_tt?: InputMaybe<Store_Social_Tt_Operator>;
  social_tw?: InputMaybe<Store_Social_Tw_Operator>;
  social_yt?: InputMaybe<Store_Social_Yt_Operator>;
  sub?: InputMaybe<Store_Sub_Operator>;
  team__foto?: InputMaybe<Store_Team__Foto_Operator>;
  team__id?: InputMaybe<Store_Team__Id_Operator>;
  team__nome?: InputMaybe<Store_Team__Nome_Operator>;
  team__ruolo?: InputMaybe<Store_Team__Ruolo_Operator>;
  telefono?: InputMaybe<Store_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Store_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Store_UpdatedAt_Operator>;
  vetrinaType?: InputMaybe<Store_VetrinaType_Operator>;
  whatsapp?: InputMaybe<Store_Whatsapp_Operator>;
};

export type Store_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Store_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Store_Where_Or>>>;
  analytics_id?: InputMaybe<Store_Analytics_Id_Operator>;
  analytics_share_id?: InputMaybe<Store_Analytics_Share_Id_Operator>;
  assicurazioniText?: InputMaybe<Store_AssicurazioniText_Operator>;
  bisuiteDomain?: InputMaybe<Store_BisuiteDomain_Operator>;
  bscal?: InputMaybe<Store_Bscal_Operator>;
  bscc?: InputMaybe<Store_Bscc_Operator>;
  bsds?: InputMaybe<Store_Bsds_Operator>;
  bsid?: InputMaybe<Store_Bsid_Operator>;
  cap?: InputMaybe<Store_Cap_Operator>;
  citta?: InputMaybe<Store_Citta_Operator>;
  civico?: InputMaybe<Store_Civico_Operator>;
  codiceCentralino?: InputMaybe<Store_CodiceCentralino_Operator>;
  createdAt?: InputMaybe<Store_CreatedAt_Operator>;
  email?: InputMaybe<Store_Email_Operator>;
  foto?: InputMaybe<Store_Foto_Operator>;
  id?: InputMaybe<Store_Id_Operator>;
  indirizzo?: InputMaybe<Store_Indirizzo_Operator>;
  linkMappa?: InputMaybe<Store_LinkMappa_Operator>;
  name?: InputMaybe<Store_Name_Operator>;
  numeroPdv?: InputMaybe<Store_NumeroPdv_Operator>;
  orari__aperto?: InputMaybe<Store_Orari__Aperto_Operator>;
  orari__apertura_1?: InputMaybe<Store_Orari__Apertura_1_Operator>;
  orari__apertura_2?: InputMaybe<Store_Orari__Apertura_2_Operator>;
  orari__chiusura_1?: InputMaybe<Store_Orari__Chiusura_1_Operator>;
  orari__chiusura_2?: InputMaybe<Store_Orari__Chiusura_2_Operator>;
  orari__continuato?: InputMaybe<Store_Orari__Continuato_Operator>;
  orari__giorno?: InputMaybe<Store_Orari__Giorno_Operator>;
  orari__id?: InputMaybe<Store_Orari__Id_Operator>;
  organization?: InputMaybe<Store_Organization_Operator>;
  provincia?: InputMaybe<Store_Provincia_Operator>;
  social_fb?: InputMaybe<Store_Social_Fb_Operator>;
  social_gg?: InputMaybe<Store_Social_Gg_Operator>;
  social_ig?: InputMaybe<Store_Social_Ig_Operator>;
  social_tt?: InputMaybe<Store_Social_Tt_Operator>;
  social_tw?: InputMaybe<Store_Social_Tw_Operator>;
  social_yt?: InputMaybe<Store_Social_Yt_Operator>;
  sub?: InputMaybe<Store_Sub_Operator>;
  team__foto?: InputMaybe<Store_Team__Foto_Operator>;
  team__id?: InputMaybe<Store_Team__Id_Operator>;
  team__nome?: InputMaybe<Store_Team__Nome_Operator>;
  team__ruolo?: InputMaybe<Store_Team__Ruolo_Operator>;
  telefono?: InputMaybe<Store_Telefono_Operator>;
  telefonoAlt?: InputMaybe<Store_TelefonoAlt_Operator>;
  updatedAt?: InputMaybe<Store_UpdatedAt_Operator>;
  vetrinaType?: InputMaybe<Store_VetrinaType_Operator>;
  whatsapp?: InputMaybe<Store_Whatsapp_Operator>;
};

export type Stores = {
  __typename?: 'Stores';
  docs?: Maybe<Array<Maybe<Store>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type StoresCreateAccess = {
  __typename?: 'StoresCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresCreateDocAccess = {
  __typename?: 'StoresCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresDeleteAccess = {
  __typename?: 'StoresDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresDeleteDocAccess = {
  __typename?: 'StoresDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresDocAccessFields = {
  __typename?: 'StoresDocAccessFields';
  analytics_id?: Maybe<StoresDocAccessFields_Analytics_Id>;
  analytics_share_id?: Maybe<StoresDocAccessFields_Analytics_Share_Id>;
  assicurazioniText?: Maybe<StoresDocAccessFields_AssicurazioniText>;
  bisuiteDomain?: Maybe<StoresDocAccessFields_BisuiteDomain>;
  bscal?: Maybe<StoresDocAccessFields_Bscal>;
  bscc?: Maybe<StoresDocAccessFields_Bscc>;
  bsds?: Maybe<StoresDocAccessFields_Bsds>;
  bsid?: Maybe<StoresDocAccessFields_Bsid>;
  cap?: Maybe<StoresDocAccessFields_Cap>;
  citta?: Maybe<StoresDocAccessFields_Citta>;
  civico?: Maybe<StoresDocAccessFields_Civico>;
  codiceCentralino?: Maybe<StoresDocAccessFields_CodiceCentralino>;
  createdAt?: Maybe<StoresDocAccessFields_CreatedAt>;
  email?: Maybe<StoresDocAccessFields_Email>;
  foto?: Maybe<StoresDocAccessFields_Foto>;
  indirizzo?: Maybe<StoresDocAccessFields_Indirizzo>;
  linkMappa?: Maybe<StoresDocAccessFields_LinkMappa>;
  name?: Maybe<StoresDocAccessFields_Name>;
  numeroPdv?: Maybe<StoresDocAccessFields_NumeroPdv>;
  orari?: Maybe<StoresDocAccessFields_Orari>;
  organization?: Maybe<StoresDocAccessFields_Organization>;
  provincia?: Maybe<StoresDocAccessFields_Provincia>;
  social_fb?: Maybe<StoresDocAccessFields_Social_Fb>;
  social_gg?: Maybe<StoresDocAccessFields_Social_Gg>;
  social_ig?: Maybe<StoresDocAccessFields_Social_Ig>;
  social_tt?: Maybe<StoresDocAccessFields_Social_Tt>;
  social_tw?: Maybe<StoresDocAccessFields_Social_Tw>;
  social_yt?: Maybe<StoresDocAccessFields_Social_Yt>;
  sub?: Maybe<StoresDocAccessFields_Sub>;
  team?: Maybe<StoresDocAccessFields_Team>;
  telefono?: Maybe<StoresDocAccessFields_Telefono>;
  telefonoAlt?: Maybe<StoresDocAccessFields_TelefonoAlt>;
  updatedAt?: Maybe<StoresDocAccessFields_UpdatedAt>;
  vetrinaType?: Maybe<StoresDocAccessFields_VetrinaType>;
  whatsapp?: Maybe<StoresDocAccessFields_Whatsapp>;
};

export type StoresDocAccessFields_Analytics_Id = {
  __typename?: 'StoresDocAccessFields_analytics_id';
  create?: Maybe<StoresDocAccessFields_Analytics_Id_Create>;
  delete?: Maybe<StoresDocAccessFields_Analytics_Id_Delete>;
  read?: Maybe<StoresDocAccessFields_Analytics_Id_Read>;
  update?: Maybe<StoresDocAccessFields_Analytics_Id_Update>;
};

export type StoresDocAccessFields_Analytics_Id_Create = {
  __typename?: 'StoresDocAccessFields_analytics_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Id_Delete = {
  __typename?: 'StoresDocAccessFields_analytics_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Id_Read = {
  __typename?: 'StoresDocAccessFields_analytics_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Id_Update = {
  __typename?: 'StoresDocAccessFields_analytics_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Share_Id = {
  __typename?: 'StoresDocAccessFields_analytics_share_id';
  create?: Maybe<StoresDocAccessFields_Analytics_Share_Id_Create>;
  delete?: Maybe<StoresDocAccessFields_Analytics_Share_Id_Delete>;
  read?: Maybe<StoresDocAccessFields_Analytics_Share_Id_Read>;
  update?: Maybe<StoresDocAccessFields_Analytics_Share_Id_Update>;
};

export type StoresDocAccessFields_Analytics_Share_Id_Create = {
  __typename?: 'StoresDocAccessFields_analytics_share_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Share_Id_Delete = {
  __typename?: 'StoresDocAccessFields_analytics_share_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Share_Id_Read = {
  __typename?: 'StoresDocAccessFields_analytics_share_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Analytics_Share_Id_Update = {
  __typename?: 'StoresDocAccessFields_analytics_share_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_AssicurazioniText = {
  __typename?: 'StoresDocAccessFields_assicurazioniText';
  create?: Maybe<StoresDocAccessFields_AssicurazioniText_Create>;
  delete?: Maybe<StoresDocAccessFields_AssicurazioniText_Delete>;
  read?: Maybe<StoresDocAccessFields_AssicurazioniText_Read>;
  update?: Maybe<StoresDocAccessFields_AssicurazioniText_Update>;
};

export type StoresDocAccessFields_AssicurazioniText_Create = {
  __typename?: 'StoresDocAccessFields_assicurazioniText_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_AssicurazioniText_Delete = {
  __typename?: 'StoresDocAccessFields_assicurazioniText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_AssicurazioniText_Read = {
  __typename?: 'StoresDocAccessFields_assicurazioniText_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_AssicurazioniText_Update = {
  __typename?: 'StoresDocAccessFields_assicurazioniText_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_BisuiteDomain = {
  __typename?: 'StoresDocAccessFields_bisuiteDomain';
  create?: Maybe<StoresDocAccessFields_BisuiteDomain_Create>;
  delete?: Maybe<StoresDocAccessFields_BisuiteDomain_Delete>;
  read?: Maybe<StoresDocAccessFields_BisuiteDomain_Read>;
  update?: Maybe<StoresDocAccessFields_BisuiteDomain_Update>;
};

export type StoresDocAccessFields_BisuiteDomain_Create = {
  __typename?: 'StoresDocAccessFields_bisuiteDomain_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_BisuiteDomain_Delete = {
  __typename?: 'StoresDocAccessFields_bisuiteDomain_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_BisuiteDomain_Read = {
  __typename?: 'StoresDocAccessFields_bisuiteDomain_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_BisuiteDomain_Update = {
  __typename?: 'StoresDocAccessFields_bisuiteDomain_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscal = {
  __typename?: 'StoresDocAccessFields_bscal';
  create?: Maybe<StoresDocAccessFields_Bscal_Create>;
  delete?: Maybe<StoresDocAccessFields_Bscal_Delete>;
  read?: Maybe<StoresDocAccessFields_Bscal_Read>;
  update?: Maybe<StoresDocAccessFields_Bscal_Update>;
};

export type StoresDocAccessFields_Bscal_Create = {
  __typename?: 'StoresDocAccessFields_bscal_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscal_Delete = {
  __typename?: 'StoresDocAccessFields_bscal_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscal_Read = {
  __typename?: 'StoresDocAccessFields_bscal_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscal_Update = {
  __typename?: 'StoresDocAccessFields_bscal_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscc = {
  __typename?: 'StoresDocAccessFields_bscc';
  create?: Maybe<StoresDocAccessFields_Bscc_Create>;
  delete?: Maybe<StoresDocAccessFields_Bscc_Delete>;
  read?: Maybe<StoresDocAccessFields_Bscc_Read>;
  update?: Maybe<StoresDocAccessFields_Bscc_Update>;
};

export type StoresDocAccessFields_Bscc_Create = {
  __typename?: 'StoresDocAccessFields_bscc_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscc_Delete = {
  __typename?: 'StoresDocAccessFields_bscc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscc_Read = {
  __typename?: 'StoresDocAccessFields_bscc_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bscc_Update = {
  __typename?: 'StoresDocAccessFields_bscc_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsds = {
  __typename?: 'StoresDocAccessFields_bsds';
  create?: Maybe<StoresDocAccessFields_Bsds_Create>;
  delete?: Maybe<StoresDocAccessFields_Bsds_Delete>;
  read?: Maybe<StoresDocAccessFields_Bsds_Read>;
  update?: Maybe<StoresDocAccessFields_Bsds_Update>;
};

export type StoresDocAccessFields_Bsds_Create = {
  __typename?: 'StoresDocAccessFields_bsds_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsds_Delete = {
  __typename?: 'StoresDocAccessFields_bsds_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsds_Read = {
  __typename?: 'StoresDocAccessFields_bsds_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsds_Update = {
  __typename?: 'StoresDocAccessFields_bsds_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsid = {
  __typename?: 'StoresDocAccessFields_bsid';
  create?: Maybe<StoresDocAccessFields_Bsid_Create>;
  delete?: Maybe<StoresDocAccessFields_Bsid_Delete>;
  read?: Maybe<StoresDocAccessFields_Bsid_Read>;
  update?: Maybe<StoresDocAccessFields_Bsid_Update>;
};

export type StoresDocAccessFields_Bsid_Create = {
  __typename?: 'StoresDocAccessFields_bsid_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsid_Delete = {
  __typename?: 'StoresDocAccessFields_bsid_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsid_Read = {
  __typename?: 'StoresDocAccessFields_bsid_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Bsid_Update = {
  __typename?: 'StoresDocAccessFields_bsid_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Cap = {
  __typename?: 'StoresDocAccessFields_cap';
  create?: Maybe<StoresDocAccessFields_Cap_Create>;
  delete?: Maybe<StoresDocAccessFields_Cap_Delete>;
  read?: Maybe<StoresDocAccessFields_Cap_Read>;
  update?: Maybe<StoresDocAccessFields_Cap_Update>;
};

export type StoresDocAccessFields_Cap_Create = {
  __typename?: 'StoresDocAccessFields_cap_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Cap_Delete = {
  __typename?: 'StoresDocAccessFields_cap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Cap_Read = {
  __typename?: 'StoresDocAccessFields_cap_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Cap_Update = {
  __typename?: 'StoresDocAccessFields_cap_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Citta = {
  __typename?: 'StoresDocAccessFields_citta';
  create?: Maybe<StoresDocAccessFields_Citta_Create>;
  delete?: Maybe<StoresDocAccessFields_Citta_Delete>;
  read?: Maybe<StoresDocAccessFields_Citta_Read>;
  update?: Maybe<StoresDocAccessFields_Citta_Update>;
};

export type StoresDocAccessFields_Citta_Create = {
  __typename?: 'StoresDocAccessFields_citta_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Citta_Delete = {
  __typename?: 'StoresDocAccessFields_citta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Citta_Read = {
  __typename?: 'StoresDocAccessFields_citta_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Citta_Update = {
  __typename?: 'StoresDocAccessFields_citta_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Civico = {
  __typename?: 'StoresDocAccessFields_civico';
  create?: Maybe<StoresDocAccessFields_Civico_Create>;
  delete?: Maybe<StoresDocAccessFields_Civico_Delete>;
  read?: Maybe<StoresDocAccessFields_Civico_Read>;
  update?: Maybe<StoresDocAccessFields_Civico_Update>;
};

export type StoresDocAccessFields_Civico_Create = {
  __typename?: 'StoresDocAccessFields_civico_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Civico_Delete = {
  __typename?: 'StoresDocAccessFields_civico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Civico_Read = {
  __typename?: 'StoresDocAccessFields_civico_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Civico_Update = {
  __typename?: 'StoresDocAccessFields_civico_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CodiceCentralino = {
  __typename?: 'StoresDocAccessFields_codiceCentralino';
  create?: Maybe<StoresDocAccessFields_CodiceCentralino_Create>;
  delete?: Maybe<StoresDocAccessFields_CodiceCentralino_Delete>;
  read?: Maybe<StoresDocAccessFields_CodiceCentralino_Read>;
  update?: Maybe<StoresDocAccessFields_CodiceCentralino_Update>;
};

export type StoresDocAccessFields_CodiceCentralino_Create = {
  __typename?: 'StoresDocAccessFields_codiceCentralino_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CodiceCentralino_Delete = {
  __typename?: 'StoresDocAccessFields_codiceCentralino_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CodiceCentralino_Read = {
  __typename?: 'StoresDocAccessFields_codiceCentralino_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CodiceCentralino_Update = {
  __typename?: 'StoresDocAccessFields_codiceCentralino_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CreatedAt = {
  __typename?: 'StoresDocAccessFields_createdAt';
  create?: Maybe<StoresDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<StoresDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<StoresDocAccessFields_CreatedAt_Read>;
  update?: Maybe<StoresDocAccessFields_CreatedAt_Update>;
};

export type StoresDocAccessFields_CreatedAt_Create = {
  __typename?: 'StoresDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CreatedAt_Delete = {
  __typename?: 'StoresDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CreatedAt_Read = {
  __typename?: 'StoresDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_CreatedAt_Update = {
  __typename?: 'StoresDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Email = {
  __typename?: 'StoresDocAccessFields_email';
  create?: Maybe<StoresDocAccessFields_Email_Create>;
  delete?: Maybe<StoresDocAccessFields_Email_Delete>;
  read?: Maybe<StoresDocAccessFields_Email_Read>;
  update?: Maybe<StoresDocAccessFields_Email_Update>;
};

export type StoresDocAccessFields_Email_Create = {
  __typename?: 'StoresDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Email_Delete = {
  __typename?: 'StoresDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Email_Read = {
  __typename?: 'StoresDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Email_Update = {
  __typename?: 'StoresDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Foto = {
  __typename?: 'StoresDocAccessFields_foto';
  create?: Maybe<StoresDocAccessFields_Foto_Create>;
  delete?: Maybe<StoresDocAccessFields_Foto_Delete>;
  read?: Maybe<StoresDocAccessFields_Foto_Read>;
  update?: Maybe<StoresDocAccessFields_Foto_Update>;
};

export type StoresDocAccessFields_Foto_Create = {
  __typename?: 'StoresDocAccessFields_foto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Foto_Delete = {
  __typename?: 'StoresDocAccessFields_foto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Foto_Read = {
  __typename?: 'StoresDocAccessFields_foto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Foto_Update = {
  __typename?: 'StoresDocAccessFields_foto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Indirizzo = {
  __typename?: 'StoresDocAccessFields_indirizzo';
  create?: Maybe<StoresDocAccessFields_Indirizzo_Create>;
  delete?: Maybe<StoresDocAccessFields_Indirizzo_Delete>;
  read?: Maybe<StoresDocAccessFields_Indirizzo_Read>;
  update?: Maybe<StoresDocAccessFields_Indirizzo_Update>;
};

export type StoresDocAccessFields_Indirizzo_Create = {
  __typename?: 'StoresDocAccessFields_indirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Indirizzo_Delete = {
  __typename?: 'StoresDocAccessFields_indirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Indirizzo_Read = {
  __typename?: 'StoresDocAccessFields_indirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Indirizzo_Update = {
  __typename?: 'StoresDocAccessFields_indirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_LinkMappa = {
  __typename?: 'StoresDocAccessFields_linkMappa';
  create?: Maybe<StoresDocAccessFields_LinkMappa_Create>;
  delete?: Maybe<StoresDocAccessFields_LinkMappa_Delete>;
  read?: Maybe<StoresDocAccessFields_LinkMappa_Read>;
  update?: Maybe<StoresDocAccessFields_LinkMappa_Update>;
};

export type StoresDocAccessFields_LinkMappa_Create = {
  __typename?: 'StoresDocAccessFields_linkMappa_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_LinkMappa_Delete = {
  __typename?: 'StoresDocAccessFields_linkMappa_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_LinkMappa_Read = {
  __typename?: 'StoresDocAccessFields_linkMappa_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_LinkMappa_Update = {
  __typename?: 'StoresDocAccessFields_linkMappa_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Name = {
  __typename?: 'StoresDocAccessFields_name';
  create?: Maybe<StoresDocAccessFields_Name_Create>;
  delete?: Maybe<StoresDocAccessFields_Name_Delete>;
  read?: Maybe<StoresDocAccessFields_Name_Read>;
  update?: Maybe<StoresDocAccessFields_Name_Update>;
};

export type StoresDocAccessFields_Name_Create = {
  __typename?: 'StoresDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Name_Delete = {
  __typename?: 'StoresDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Name_Read = {
  __typename?: 'StoresDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Name_Update = {
  __typename?: 'StoresDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_NumeroPdv = {
  __typename?: 'StoresDocAccessFields_numeroPdv';
  create?: Maybe<StoresDocAccessFields_NumeroPdv_Create>;
  delete?: Maybe<StoresDocAccessFields_NumeroPdv_Delete>;
  read?: Maybe<StoresDocAccessFields_NumeroPdv_Read>;
  update?: Maybe<StoresDocAccessFields_NumeroPdv_Update>;
};

export type StoresDocAccessFields_NumeroPdv_Create = {
  __typename?: 'StoresDocAccessFields_numeroPdv_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_NumeroPdv_Delete = {
  __typename?: 'StoresDocAccessFields_numeroPdv_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_NumeroPdv_Read = {
  __typename?: 'StoresDocAccessFields_numeroPdv_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_NumeroPdv_Update = {
  __typename?: 'StoresDocAccessFields_numeroPdv_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari = {
  __typename?: 'StoresDocAccessFields_orari';
  create?: Maybe<StoresDocAccessFields_Orari_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Delete>;
  fields?: Maybe<StoresDocAccessFields_Orari_Fields>;
  read?: Maybe<StoresDocAccessFields_Orari_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Update>;
};

export type StoresDocAccessFields_Orari_Create = {
  __typename?: 'StoresDocAccessFields_orari_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Delete = {
  __typename?: 'StoresDocAccessFields_orari_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Fields = {
  __typename?: 'StoresDocAccessFields_orari_Fields';
  aperto?: Maybe<StoresDocAccessFields_Orari_Aperto>;
  apertura_1?: Maybe<StoresDocAccessFields_Orari_Apertura_1>;
  apertura_2?: Maybe<StoresDocAccessFields_Orari_Apertura_2>;
  chiusura_1?: Maybe<StoresDocAccessFields_Orari_Chiusura_1>;
  chiusura_2?: Maybe<StoresDocAccessFields_Orari_Chiusura_2>;
  continuato?: Maybe<StoresDocAccessFields_Orari_Continuato>;
  giorno?: Maybe<StoresDocAccessFields_Orari_Giorno>;
  id?: Maybe<StoresDocAccessFields_Orari_Id>;
};

export type StoresDocAccessFields_Orari_Read = {
  __typename?: 'StoresDocAccessFields_orari_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Update = {
  __typename?: 'StoresDocAccessFields_orari_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Aperto = {
  __typename?: 'StoresDocAccessFields_orari_aperto';
  create?: Maybe<StoresDocAccessFields_Orari_Aperto_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Aperto_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Aperto_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Aperto_Update>;
};

export type StoresDocAccessFields_Orari_Aperto_Create = {
  __typename?: 'StoresDocAccessFields_orari_aperto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Aperto_Delete = {
  __typename?: 'StoresDocAccessFields_orari_aperto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Aperto_Read = {
  __typename?: 'StoresDocAccessFields_orari_aperto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Aperto_Update = {
  __typename?: 'StoresDocAccessFields_orari_aperto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_1 = {
  __typename?: 'StoresDocAccessFields_orari_apertura_1';
  create?: Maybe<StoresDocAccessFields_Orari_Apertura_1_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Apertura_1_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Apertura_1_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Apertura_1_Update>;
};

export type StoresDocAccessFields_Orari_Apertura_1_Create = {
  __typename?: 'StoresDocAccessFields_orari_apertura_1_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_1_Delete = {
  __typename?: 'StoresDocAccessFields_orari_apertura_1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_1_Read = {
  __typename?: 'StoresDocAccessFields_orari_apertura_1_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_1_Update = {
  __typename?: 'StoresDocAccessFields_orari_apertura_1_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_2 = {
  __typename?: 'StoresDocAccessFields_orari_apertura_2';
  create?: Maybe<StoresDocAccessFields_Orari_Apertura_2_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Apertura_2_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Apertura_2_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Apertura_2_Update>;
};

export type StoresDocAccessFields_Orari_Apertura_2_Create = {
  __typename?: 'StoresDocAccessFields_orari_apertura_2_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_2_Delete = {
  __typename?: 'StoresDocAccessFields_orari_apertura_2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_2_Read = {
  __typename?: 'StoresDocAccessFields_orari_apertura_2_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Apertura_2_Update = {
  __typename?: 'StoresDocAccessFields_orari_apertura_2_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_1 = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_1';
  create?: Maybe<StoresDocAccessFields_Orari_Chiusura_1_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Chiusura_1_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Chiusura_1_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Chiusura_1_Update>;
};

export type StoresDocAccessFields_Orari_Chiusura_1_Create = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_1_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_1_Delete = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_1_Read = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_1_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_1_Update = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_1_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_2 = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_2';
  create?: Maybe<StoresDocAccessFields_Orari_Chiusura_2_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Chiusura_2_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Chiusura_2_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Chiusura_2_Update>;
};

export type StoresDocAccessFields_Orari_Chiusura_2_Create = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_2_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_2_Delete = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_2_Read = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_2_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Chiusura_2_Update = {
  __typename?: 'StoresDocAccessFields_orari_chiusura_2_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Continuato = {
  __typename?: 'StoresDocAccessFields_orari_continuato';
  create?: Maybe<StoresDocAccessFields_Orari_Continuato_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Continuato_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Continuato_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Continuato_Update>;
};

export type StoresDocAccessFields_Orari_Continuato_Create = {
  __typename?: 'StoresDocAccessFields_orari_continuato_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Continuato_Delete = {
  __typename?: 'StoresDocAccessFields_orari_continuato_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Continuato_Read = {
  __typename?: 'StoresDocAccessFields_orari_continuato_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Continuato_Update = {
  __typename?: 'StoresDocAccessFields_orari_continuato_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Giorno = {
  __typename?: 'StoresDocAccessFields_orari_giorno';
  create?: Maybe<StoresDocAccessFields_Orari_Giorno_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Giorno_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Giorno_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Giorno_Update>;
};

export type StoresDocAccessFields_Orari_Giorno_Create = {
  __typename?: 'StoresDocAccessFields_orari_giorno_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Giorno_Delete = {
  __typename?: 'StoresDocAccessFields_orari_giorno_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Giorno_Read = {
  __typename?: 'StoresDocAccessFields_orari_giorno_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Giorno_Update = {
  __typename?: 'StoresDocAccessFields_orari_giorno_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Id = {
  __typename?: 'StoresDocAccessFields_orari_id';
  create?: Maybe<StoresDocAccessFields_Orari_Id_Create>;
  delete?: Maybe<StoresDocAccessFields_Orari_Id_Delete>;
  read?: Maybe<StoresDocAccessFields_Orari_Id_Read>;
  update?: Maybe<StoresDocAccessFields_Orari_Id_Update>;
};

export type StoresDocAccessFields_Orari_Id_Create = {
  __typename?: 'StoresDocAccessFields_orari_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Id_Delete = {
  __typename?: 'StoresDocAccessFields_orari_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Id_Read = {
  __typename?: 'StoresDocAccessFields_orari_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Orari_Id_Update = {
  __typename?: 'StoresDocAccessFields_orari_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Organization = {
  __typename?: 'StoresDocAccessFields_organization';
  create?: Maybe<StoresDocAccessFields_Organization_Create>;
  delete?: Maybe<StoresDocAccessFields_Organization_Delete>;
  read?: Maybe<StoresDocAccessFields_Organization_Read>;
  update?: Maybe<StoresDocAccessFields_Organization_Update>;
};

export type StoresDocAccessFields_Organization_Create = {
  __typename?: 'StoresDocAccessFields_organization_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Organization_Delete = {
  __typename?: 'StoresDocAccessFields_organization_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Organization_Read = {
  __typename?: 'StoresDocAccessFields_organization_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Organization_Update = {
  __typename?: 'StoresDocAccessFields_organization_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Provincia = {
  __typename?: 'StoresDocAccessFields_provincia';
  create?: Maybe<StoresDocAccessFields_Provincia_Create>;
  delete?: Maybe<StoresDocAccessFields_Provincia_Delete>;
  read?: Maybe<StoresDocAccessFields_Provincia_Read>;
  update?: Maybe<StoresDocAccessFields_Provincia_Update>;
};

export type StoresDocAccessFields_Provincia_Create = {
  __typename?: 'StoresDocAccessFields_provincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Provincia_Delete = {
  __typename?: 'StoresDocAccessFields_provincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Provincia_Read = {
  __typename?: 'StoresDocAccessFields_provincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Provincia_Update = {
  __typename?: 'StoresDocAccessFields_provincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Fb = {
  __typename?: 'StoresDocAccessFields_social_fb';
  create?: Maybe<StoresDocAccessFields_Social_Fb_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Fb_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Fb_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Fb_Update>;
};

export type StoresDocAccessFields_Social_Fb_Create = {
  __typename?: 'StoresDocAccessFields_social_fb_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Fb_Delete = {
  __typename?: 'StoresDocAccessFields_social_fb_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Fb_Read = {
  __typename?: 'StoresDocAccessFields_social_fb_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Fb_Update = {
  __typename?: 'StoresDocAccessFields_social_fb_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Gg = {
  __typename?: 'StoresDocAccessFields_social_gg';
  create?: Maybe<StoresDocAccessFields_Social_Gg_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Gg_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Gg_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Gg_Update>;
};

export type StoresDocAccessFields_Social_Gg_Create = {
  __typename?: 'StoresDocAccessFields_social_gg_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Gg_Delete = {
  __typename?: 'StoresDocAccessFields_social_gg_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Gg_Read = {
  __typename?: 'StoresDocAccessFields_social_gg_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Gg_Update = {
  __typename?: 'StoresDocAccessFields_social_gg_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Ig = {
  __typename?: 'StoresDocAccessFields_social_ig';
  create?: Maybe<StoresDocAccessFields_Social_Ig_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Ig_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Ig_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Ig_Update>;
};

export type StoresDocAccessFields_Social_Ig_Create = {
  __typename?: 'StoresDocAccessFields_social_ig_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Ig_Delete = {
  __typename?: 'StoresDocAccessFields_social_ig_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Ig_Read = {
  __typename?: 'StoresDocAccessFields_social_ig_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Ig_Update = {
  __typename?: 'StoresDocAccessFields_social_ig_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tt = {
  __typename?: 'StoresDocAccessFields_social_tt';
  create?: Maybe<StoresDocAccessFields_Social_Tt_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Tt_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Tt_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Tt_Update>;
};

export type StoresDocAccessFields_Social_Tt_Create = {
  __typename?: 'StoresDocAccessFields_social_tt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tt_Delete = {
  __typename?: 'StoresDocAccessFields_social_tt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tt_Read = {
  __typename?: 'StoresDocAccessFields_social_tt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tt_Update = {
  __typename?: 'StoresDocAccessFields_social_tt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tw = {
  __typename?: 'StoresDocAccessFields_social_tw';
  create?: Maybe<StoresDocAccessFields_Social_Tw_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Tw_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Tw_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Tw_Update>;
};

export type StoresDocAccessFields_Social_Tw_Create = {
  __typename?: 'StoresDocAccessFields_social_tw_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tw_Delete = {
  __typename?: 'StoresDocAccessFields_social_tw_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tw_Read = {
  __typename?: 'StoresDocAccessFields_social_tw_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Tw_Update = {
  __typename?: 'StoresDocAccessFields_social_tw_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Yt = {
  __typename?: 'StoresDocAccessFields_social_yt';
  create?: Maybe<StoresDocAccessFields_Social_Yt_Create>;
  delete?: Maybe<StoresDocAccessFields_Social_Yt_Delete>;
  read?: Maybe<StoresDocAccessFields_Social_Yt_Read>;
  update?: Maybe<StoresDocAccessFields_Social_Yt_Update>;
};

export type StoresDocAccessFields_Social_Yt_Create = {
  __typename?: 'StoresDocAccessFields_social_yt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Yt_Delete = {
  __typename?: 'StoresDocAccessFields_social_yt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Yt_Read = {
  __typename?: 'StoresDocAccessFields_social_yt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Social_Yt_Update = {
  __typename?: 'StoresDocAccessFields_social_yt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Sub = {
  __typename?: 'StoresDocAccessFields_sub';
  create?: Maybe<StoresDocAccessFields_Sub_Create>;
  delete?: Maybe<StoresDocAccessFields_Sub_Delete>;
  read?: Maybe<StoresDocAccessFields_Sub_Read>;
  update?: Maybe<StoresDocAccessFields_Sub_Update>;
};

export type StoresDocAccessFields_Sub_Create = {
  __typename?: 'StoresDocAccessFields_sub_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Sub_Delete = {
  __typename?: 'StoresDocAccessFields_sub_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Sub_Read = {
  __typename?: 'StoresDocAccessFields_sub_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Sub_Update = {
  __typename?: 'StoresDocAccessFields_sub_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team = {
  __typename?: 'StoresDocAccessFields_team';
  create?: Maybe<StoresDocAccessFields_Team_Create>;
  delete?: Maybe<StoresDocAccessFields_Team_Delete>;
  fields?: Maybe<StoresDocAccessFields_Team_Fields>;
  read?: Maybe<StoresDocAccessFields_Team_Read>;
  update?: Maybe<StoresDocAccessFields_Team_Update>;
};

export type StoresDocAccessFields_Team_Create = {
  __typename?: 'StoresDocAccessFields_team_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Delete = {
  __typename?: 'StoresDocAccessFields_team_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Fields = {
  __typename?: 'StoresDocAccessFields_team_Fields';
  foto?: Maybe<StoresDocAccessFields_Team_Foto>;
  id?: Maybe<StoresDocAccessFields_Team_Id>;
  nome?: Maybe<StoresDocAccessFields_Team_Nome>;
  ruolo?: Maybe<StoresDocAccessFields_Team_Ruolo>;
};

export type StoresDocAccessFields_Team_Read = {
  __typename?: 'StoresDocAccessFields_team_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Update = {
  __typename?: 'StoresDocAccessFields_team_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Foto = {
  __typename?: 'StoresDocAccessFields_team_foto';
  create?: Maybe<StoresDocAccessFields_Team_Foto_Create>;
  delete?: Maybe<StoresDocAccessFields_Team_Foto_Delete>;
  read?: Maybe<StoresDocAccessFields_Team_Foto_Read>;
  update?: Maybe<StoresDocAccessFields_Team_Foto_Update>;
};

export type StoresDocAccessFields_Team_Foto_Create = {
  __typename?: 'StoresDocAccessFields_team_foto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Foto_Delete = {
  __typename?: 'StoresDocAccessFields_team_foto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Foto_Read = {
  __typename?: 'StoresDocAccessFields_team_foto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Foto_Update = {
  __typename?: 'StoresDocAccessFields_team_foto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Id = {
  __typename?: 'StoresDocAccessFields_team_id';
  create?: Maybe<StoresDocAccessFields_Team_Id_Create>;
  delete?: Maybe<StoresDocAccessFields_Team_Id_Delete>;
  read?: Maybe<StoresDocAccessFields_Team_Id_Read>;
  update?: Maybe<StoresDocAccessFields_Team_Id_Update>;
};

export type StoresDocAccessFields_Team_Id_Create = {
  __typename?: 'StoresDocAccessFields_team_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Id_Delete = {
  __typename?: 'StoresDocAccessFields_team_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Id_Read = {
  __typename?: 'StoresDocAccessFields_team_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Id_Update = {
  __typename?: 'StoresDocAccessFields_team_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Nome = {
  __typename?: 'StoresDocAccessFields_team_nome';
  create?: Maybe<StoresDocAccessFields_Team_Nome_Create>;
  delete?: Maybe<StoresDocAccessFields_Team_Nome_Delete>;
  read?: Maybe<StoresDocAccessFields_Team_Nome_Read>;
  update?: Maybe<StoresDocAccessFields_Team_Nome_Update>;
};

export type StoresDocAccessFields_Team_Nome_Create = {
  __typename?: 'StoresDocAccessFields_team_nome_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Nome_Delete = {
  __typename?: 'StoresDocAccessFields_team_nome_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Nome_Read = {
  __typename?: 'StoresDocAccessFields_team_nome_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Nome_Update = {
  __typename?: 'StoresDocAccessFields_team_nome_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Ruolo = {
  __typename?: 'StoresDocAccessFields_team_ruolo';
  create?: Maybe<StoresDocAccessFields_Team_Ruolo_Create>;
  delete?: Maybe<StoresDocAccessFields_Team_Ruolo_Delete>;
  read?: Maybe<StoresDocAccessFields_Team_Ruolo_Read>;
  update?: Maybe<StoresDocAccessFields_Team_Ruolo_Update>;
};

export type StoresDocAccessFields_Team_Ruolo_Create = {
  __typename?: 'StoresDocAccessFields_team_ruolo_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Ruolo_Delete = {
  __typename?: 'StoresDocAccessFields_team_ruolo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Ruolo_Read = {
  __typename?: 'StoresDocAccessFields_team_ruolo_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Team_Ruolo_Update = {
  __typename?: 'StoresDocAccessFields_team_ruolo_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Telefono = {
  __typename?: 'StoresDocAccessFields_telefono';
  create?: Maybe<StoresDocAccessFields_Telefono_Create>;
  delete?: Maybe<StoresDocAccessFields_Telefono_Delete>;
  read?: Maybe<StoresDocAccessFields_Telefono_Read>;
  update?: Maybe<StoresDocAccessFields_Telefono_Update>;
};

export type StoresDocAccessFields_TelefonoAlt = {
  __typename?: 'StoresDocAccessFields_telefonoAlt';
  create?: Maybe<StoresDocAccessFields_TelefonoAlt_Create>;
  delete?: Maybe<StoresDocAccessFields_TelefonoAlt_Delete>;
  read?: Maybe<StoresDocAccessFields_TelefonoAlt_Read>;
  update?: Maybe<StoresDocAccessFields_TelefonoAlt_Update>;
};

export type StoresDocAccessFields_TelefonoAlt_Create = {
  __typename?: 'StoresDocAccessFields_telefonoAlt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_TelefonoAlt_Delete = {
  __typename?: 'StoresDocAccessFields_telefonoAlt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_TelefonoAlt_Read = {
  __typename?: 'StoresDocAccessFields_telefonoAlt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_TelefonoAlt_Update = {
  __typename?: 'StoresDocAccessFields_telefonoAlt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Telefono_Create = {
  __typename?: 'StoresDocAccessFields_telefono_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Telefono_Delete = {
  __typename?: 'StoresDocAccessFields_telefono_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Telefono_Read = {
  __typename?: 'StoresDocAccessFields_telefono_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Telefono_Update = {
  __typename?: 'StoresDocAccessFields_telefono_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_UpdatedAt = {
  __typename?: 'StoresDocAccessFields_updatedAt';
  create?: Maybe<StoresDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<StoresDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<StoresDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<StoresDocAccessFields_UpdatedAt_Update>;
};

export type StoresDocAccessFields_UpdatedAt_Create = {
  __typename?: 'StoresDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'StoresDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_UpdatedAt_Read = {
  __typename?: 'StoresDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_UpdatedAt_Update = {
  __typename?: 'StoresDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_VetrinaType = {
  __typename?: 'StoresDocAccessFields_vetrinaType';
  create?: Maybe<StoresDocAccessFields_VetrinaType_Create>;
  delete?: Maybe<StoresDocAccessFields_VetrinaType_Delete>;
  read?: Maybe<StoresDocAccessFields_VetrinaType_Read>;
  update?: Maybe<StoresDocAccessFields_VetrinaType_Update>;
};

export type StoresDocAccessFields_VetrinaType_Create = {
  __typename?: 'StoresDocAccessFields_vetrinaType_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_VetrinaType_Delete = {
  __typename?: 'StoresDocAccessFields_vetrinaType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_VetrinaType_Read = {
  __typename?: 'StoresDocAccessFields_vetrinaType_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_VetrinaType_Update = {
  __typename?: 'StoresDocAccessFields_vetrinaType_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Whatsapp = {
  __typename?: 'StoresDocAccessFields_whatsapp';
  create?: Maybe<StoresDocAccessFields_Whatsapp_Create>;
  delete?: Maybe<StoresDocAccessFields_Whatsapp_Delete>;
  read?: Maybe<StoresDocAccessFields_Whatsapp_Read>;
  update?: Maybe<StoresDocAccessFields_Whatsapp_Update>;
};

export type StoresDocAccessFields_Whatsapp_Create = {
  __typename?: 'StoresDocAccessFields_whatsapp_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Whatsapp_Delete = {
  __typename?: 'StoresDocAccessFields_whatsapp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Whatsapp_Read = {
  __typename?: 'StoresDocAccessFields_whatsapp_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresDocAccessFields_Whatsapp_Update = {
  __typename?: 'StoresDocAccessFields_whatsapp_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields = {
  __typename?: 'StoresFields';
  analytics_id?: Maybe<StoresFields_Analytics_Id>;
  analytics_share_id?: Maybe<StoresFields_Analytics_Share_Id>;
  assicurazioniText?: Maybe<StoresFields_AssicurazioniText>;
  bisuiteDomain?: Maybe<StoresFields_BisuiteDomain>;
  bscal?: Maybe<StoresFields_Bscal>;
  bscc?: Maybe<StoresFields_Bscc>;
  bsds?: Maybe<StoresFields_Bsds>;
  bsid?: Maybe<StoresFields_Bsid>;
  cap?: Maybe<StoresFields_Cap>;
  citta?: Maybe<StoresFields_Citta>;
  civico?: Maybe<StoresFields_Civico>;
  codiceCentralino?: Maybe<StoresFields_CodiceCentralino>;
  createdAt?: Maybe<StoresFields_CreatedAt>;
  email?: Maybe<StoresFields_Email>;
  foto?: Maybe<StoresFields_Foto>;
  indirizzo?: Maybe<StoresFields_Indirizzo>;
  linkMappa?: Maybe<StoresFields_LinkMappa>;
  name?: Maybe<StoresFields_Name>;
  numeroPdv?: Maybe<StoresFields_NumeroPdv>;
  orari?: Maybe<StoresFields_Orari>;
  organization?: Maybe<StoresFields_Organization>;
  provincia?: Maybe<StoresFields_Provincia>;
  social_fb?: Maybe<StoresFields_Social_Fb>;
  social_gg?: Maybe<StoresFields_Social_Gg>;
  social_ig?: Maybe<StoresFields_Social_Ig>;
  social_tt?: Maybe<StoresFields_Social_Tt>;
  social_tw?: Maybe<StoresFields_Social_Tw>;
  social_yt?: Maybe<StoresFields_Social_Yt>;
  sub?: Maybe<StoresFields_Sub>;
  team?: Maybe<StoresFields_Team>;
  telefono?: Maybe<StoresFields_Telefono>;
  telefonoAlt?: Maybe<StoresFields_TelefonoAlt>;
  updatedAt?: Maybe<StoresFields_UpdatedAt>;
  vetrinaType?: Maybe<StoresFields_VetrinaType>;
  whatsapp?: Maybe<StoresFields_Whatsapp>;
};

export type StoresFields_Analytics_Id = {
  __typename?: 'StoresFields_analytics_id';
  create?: Maybe<StoresFields_Analytics_Id_Create>;
  delete?: Maybe<StoresFields_Analytics_Id_Delete>;
  read?: Maybe<StoresFields_Analytics_Id_Read>;
  update?: Maybe<StoresFields_Analytics_Id_Update>;
};

export type StoresFields_Analytics_Id_Create = {
  __typename?: 'StoresFields_analytics_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Id_Delete = {
  __typename?: 'StoresFields_analytics_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Id_Read = {
  __typename?: 'StoresFields_analytics_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Id_Update = {
  __typename?: 'StoresFields_analytics_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Share_Id = {
  __typename?: 'StoresFields_analytics_share_id';
  create?: Maybe<StoresFields_Analytics_Share_Id_Create>;
  delete?: Maybe<StoresFields_Analytics_Share_Id_Delete>;
  read?: Maybe<StoresFields_Analytics_Share_Id_Read>;
  update?: Maybe<StoresFields_Analytics_Share_Id_Update>;
};

export type StoresFields_Analytics_Share_Id_Create = {
  __typename?: 'StoresFields_analytics_share_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Share_Id_Delete = {
  __typename?: 'StoresFields_analytics_share_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Share_Id_Read = {
  __typename?: 'StoresFields_analytics_share_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Analytics_Share_Id_Update = {
  __typename?: 'StoresFields_analytics_share_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_AssicurazioniText = {
  __typename?: 'StoresFields_assicurazioniText';
  create?: Maybe<StoresFields_AssicurazioniText_Create>;
  delete?: Maybe<StoresFields_AssicurazioniText_Delete>;
  read?: Maybe<StoresFields_AssicurazioniText_Read>;
  update?: Maybe<StoresFields_AssicurazioniText_Update>;
};

export type StoresFields_AssicurazioniText_Create = {
  __typename?: 'StoresFields_assicurazioniText_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_AssicurazioniText_Delete = {
  __typename?: 'StoresFields_assicurazioniText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_AssicurazioniText_Read = {
  __typename?: 'StoresFields_assicurazioniText_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_AssicurazioniText_Update = {
  __typename?: 'StoresFields_assicurazioniText_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_BisuiteDomain = {
  __typename?: 'StoresFields_bisuiteDomain';
  create?: Maybe<StoresFields_BisuiteDomain_Create>;
  delete?: Maybe<StoresFields_BisuiteDomain_Delete>;
  read?: Maybe<StoresFields_BisuiteDomain_Read>;
  update?: Maybe<StoresFields_BisuiteDomain_Update>;
};

export type StoresFields_BisuiteDomain_Create = {
  __typename?: 'StoresFields_bisuiteDomain_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_BisuiteDomain_Delete = {
  __typename?: 'StoresFields_bisuiteDomain_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_BisuiteDomain_Read = {
  __typename?: 'StoresFields_bisuiteDomain_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_BisuiteDomain_Update = {
  __typename?: 'StoresFields_bisuiteDomain_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscal = {
  __typename?: 'StoresFields_bscal';
  create?: Maybe<StoresFields_Bscal_Create>;
  delete?: Maybe<StoresFields_Bscal_Delete>;
  read?: Maybe<StoresFields_Bscal_Read>;
  update?: Maybe<StoresFields_Bscal_Update>;
};

export type StoresFields_Bscal_Create = {
  __typename?: 'StoresFields_bscal_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscal_Delete = {
  __typename?: 'StoresFields_bscal_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscal_Read = {
  __typename?: 'StoresFields_bscal_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscal_Update = {
  __typename?: 'StoresFields_bscal_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscc = {
  __typename?: 'StoresFields_bscc';
  create?: Maybe<StoresFields_Bscc_Create>;
  delete?: Maybe<StoresFields_Bscc_Delete>;
  read?: Maybe<StoresFields_Bscc_Read>;
  update?: Maybe<StoresFields_Bscc_Update>;
};

export type StoresFields_Bscc_Create = {
  __typename?: 'StoresFields_bscc_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscc_Delete = {
  __typename?: 'StoresFields_bscc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscc_Read = {
  __typename?: 'StoresFields_bscc_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bscc_Update = {
  __typename?: 'StoresFields_bscc_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsds = {
  __typename?: 'StoresFields_bsds';
  create?: Maybe<StoresFields_Bsds_Create>;
  delete?: Maybe<StoresFields_Bsds_Delete>;
  read?: Maybe<StoresFields_Bsds_Read>;
  update?: Maybe<StoresFields_Bsds_Update>;
};

export type StoresFields_Bsds_Create = {
  __typename?: 'StoresFields_bsds_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsds_Delete = {
  __typename?: 'StoresFields_bsds_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsds_Read = {
  __typename?: 'StoresFields_bsds_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsds_Update = {
  __typename?: 'StoresFields_bsds_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsid = {
  __typename?: 'StoresFields_bsid';
  create?: Maybe<StoresFields_Bsid_Create>;
  delete?: Maybe<StoresFields_Bsid_Delete>;
  read?: Maybe<StoresFields_Bsid_Read>;
  update?: Maybe<StoresFields_Bsid_Update>;
};

export type StoresFields_Bsid_Create = {
  __typename?: 'StoresFields_bsid_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsid_Delete = {
  __typename?: 'StoresFields_bsid_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsid_Read = {
  __typename?: 'StoresFields_bsid_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Bsid_Update = {
  __typename?: 'StoresFields_bsid_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Cap = {
  __typename?: 'StoresFields_cap';
  create?: Maybe<StoresFields_Cap_Create>;
  delete?: Maybe<StoresFields_Cap_Delete>;
  read?: Maybe<StoresFields_Cap_Read>;
  update?: Maybe<StoresFields_Cap_Update>;
};

export type StoresFields_Cap_Create = {
  __typename?: 'StoresFields_cap_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Cap_Delete = {
  __typename?: 'StoresFields_cap_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Cap_Read = {
  __typename?: 'StoresFields_cap_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Cap_Update = {
  __typename?: 'StoresFields_cap_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Citta = {
  __typename?: 'StoresFields_citta';
  create?: Maybe<StoresFields_Citta_Create>;
  delete?: Maybe<StoresFields_Citta_Delete>;
  read?: Maybe<StoresFields_Citta_Read>;
  update?: Maybe<StoresFields_Citta_Update>;
};

export type StoresFields_Citta_Create = {
  __typename?: 'StoresFields_citta_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Citta_Delete = {
  __typename?: 'StoresFields_citta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Citta_Read = {
  __typename?: 'StoresFields_citta_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Citta_Update = {
  __typename?: 'StoresFields_citta_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Civico = {
  __typename?: 'StoresFields_civico';
  create?: Maybe<StoresFields_Civico_Create>;
  delete?: Maybe<StoresFields_Civico_Delete>;
  read?: Maybe<StoresFields_Civico_Read>;
  update?: Maybe<StoresFields_Civico_Update>;
};

export type StoresFields_Civico_Create = {
  __typename?: 'StoresFields_civico_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Civico_Delete = {
  __typename?: 'StoresFields_civico_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Civico_Read = {
  __typename?: 'StoresFields_civico_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Civico_Update = {
  __typename?: 'StoresFields_civico_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CodiceCentralino = {
  __typename?: 'StoresFields_codiceCentralino';
  create?: Maybe<StoresFields_CodiceCentralino_Create>;
  delete?: Maybe<StoresFields_CodiceCentralino_Delete>;
  read?: Maybe<StoresFields_CodiceCentralino_Read>;
  update?: Maybe<StoresFields_CodiceCentralino_Update>;
};

export type StoresFields_CodiceCentralino_Create = {
  __typename?: 'StoresFields_codiceCentralino_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CodiceCentralino_Delete = {
  __typename?: 'StoresFields_codiceCentralino_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CodiceCentralino_Read = {
  __typename?: 'StoresFields_codiceCentralino_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CodiceCentralino_Update = {
  __typename?: 'StoresFields_codiceCentralino_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CreatedAt = {
  __typename?: 'StoresFields_createdAt';
  create?: Maybe<StoresFields_CreatedAt_Create>;
  delete?: Maybe<StoresFields_CreatedAt_Delete>;
  read?: Maybe<StoresFields_CreatedAt_Read>;
  update?: Maybe<StoresFields_CreatedAt_Update>;
};

export type StoresFields_CreatedAt_Create = {
  __typename?: 'StoresFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CreatedAt_Delete = {
  __typename?: 'StoresFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CreatedAt_Read = {
  __typename?: 'StoresFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_CreatedAt_Update = {
  __typename?: 'StoresFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Email = {
  __typename?: 'StoresFields_email';
  create?: Maybe<StoresFields_Email_Create>;
  delete?: Maybe<StoresFields_Email_Delete>;
  read?: Maybe<StoresFields_Email_Read>;
  update?: Maybe<StoresFields_Email_Update>;
};

export type StoresFields_Email_Create = {
  __typename?: 'StoresFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Email_Delete = {
  __typename?: 'StoresFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Email_Read = {
  __typename?: 'StoresFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Email_Update = {
  __typename?: 'StoresFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Foto = {
  __typename?: 'StoresFields_foto';
  create?: Maybe<StoresFields_Foto_Create>;
  delete?: Maybe<StoresFields_Foto_Delete>;
  read?: Maybe<StoresFields_Foto_Read>;
  update?: Maybe<StoresFields_Foto_Update>;
};

export type StoresFields_Foto_Create = {
  __typename?: 'StoresFields_foto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Foto_Delete = {
  __typename?: 'StoresFields_foto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Foto_Read = {
  __typename?: 'StoresFields_foto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Foto_Update = {
  __typename?: 'StoresFields_foto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Indirizzo = {
  __typename?: 'StoresFields_indirizzo';
  create?: Maybe<StoresFields_Indirizzo_Create>;
  delete?: Maybe<StoresFields_Indirizzo_Delete>;
  read?: Maybe<StoresFields_Indirizzo_Read>;
  update?: Maybe<StoresFields_Indirizzo_Update>;
};

export type StoresFields_Indirizzo_Create = {
  __typename?: 'StoresFields_indirizzo_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Indirizzo_Delete = {
  __typename?: 'StoresFields_indirizzo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Indirizzo_Read = {
  __typename?: 'StoresFields_indirizzo_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Indirizzo_Update = {
  __typename?: 'StoresFields_indirizzo_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_LinkMappa = {
  __typename?: 'StoresFields_linkMappa';
  create?: Maybe<StoresFields_LinkMappa_Create>;
  delete?: Maybe<StoresFields_LinkMappa_Delete>;
  read?: Maybe<StoresFields_LinkMappa_Read>;
  update?: Maybe<StoresFields_LinkMappa_Update>;
};

export type StoresFields_LinkMappa_Create = {
  __typename?: 'StoresFields_linkMappa_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_LinkMappa_Delete = {
  __typename?: 'StoresFields_linkMappa_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_LinkMappa_Read = {
  __typename?: 'StoresFields_linkMappa_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_LinkMappa_Update = {
  __typename?: 'StoresFields_linkMappa_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Name = {
  __typename?: 'StoresFields_name';
  create?: Maybe<StoresFields_Name_Create>;
  delete?: Maybe<StoresFields_Name_Delete>;
  read?: Maybe<StoresFields_Name_Read>;
  update?: Maybe<StoresFields_Name_Update>;
};

export type StoresFields_Name_Create = {
  __typename?: 'StoresFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Name_Delete = {
  __typename?: 'StoresFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Name_Read = {
  __typename?: 'StoresFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Name_Update = {
  __typename?: 'StoresFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_NumeroPdv = {
  __typename?: 'StoresFields_numeroPdv';
  create?: Maybe<StoresFields_NumeroPdv_Create>;
  delete?: Maybe<StoresFields_NumeroPdv_Delete>;
  read?: Maybe<StoresFields_NumeroPdv_Read>;
  update?: Maybe<StoresFields_NumeroPdv_Update>;
};

export type StoresFields_NumeroPdv_Create = {
  __typename?: 'StoresFields_numeroPdv_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_NumeroPdv_Delete = {
  __typename?: 'StoresFields_numeroPdv_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_NumeroPdv_Read = {
  __typename?: 'StoresFields_numeroPdv_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_NumeroPdv_Update = {
  __typename?: 'StoresFields_numeroPdv_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari = {
  __typename?: 'StoresFields_orari';
  create?: Maybe<StoresFields_Orari_Create>;
  delete?: Maybe<StoresFields_Orari_Delete>;
  fields?: Maybe<StoresFields_Orari_Fields>;
  read?: Maybe<StoresFields_Orari_Read>;
  update?: Maybe<StoresFields_Orari_Update>;
};

export type StoresFields_Orari_Create = {
  __typename?: 'StoresFields_orari_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Delete = {
  __typename?: 'StoresFields_orari_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Fields = {
  __typename?: 'StoresFields_orari_Fields';
  aperto?: Maybe<StoresFields_Orari_Aperto>;
  apertura_1?: Maybe<StoresFields_Orari_Apertura_1>;
  apertura_2?: Maybe<StoresFields_Orari_Apertura_2>;
  chiusura_1?: Maybe<StoresFields_Orari_Chiusura_1>;
  chiusura_2?: Maybe<StoresFields_Orari_Chiusura_2>;
  continuato?: Maybe<StoresFields_Orari_Continuato>;
  giorno?: Maybe<StoresFields_Orari_Giorno>;
  id?: Maybe<StoresFields_Orari_Id>;
};

export type StoresFields_Orari_Read = {
  __typename?: 'StoresFields_orari_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Update = {
  __typename?: 'StoresFields_orari_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Aperto = {
  __typename?: 'StoresFields_orari_aperto';
  create?: Maybe<StoresFields_Orari_Aperto_Create>;
  delete?: Maybe<StoresFields_Orari_Aperto_Delete>;
  read?: Maybe<StoresFields_Orari_Aperto_Read>;
  update?: Maybe<StoresFields_Orari_Aperto_Update>;
};

export type StoresFields_Orari_Aperto_Create = {
  __typename?: 'StoresFields_orari_aperto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Aperto_Delete = {
  __typename?: 'StoresFields_orari_aperto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Aperto_Read = {
  __typename?: 'StoresFields_orari_aperto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Aperto_Update = {
  __typename?: 'StoresFields_orari_aperto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_1 = {
  __typename?: 'StoresFields_orari_apertura_1';
  create?: Maybe<StoresFields_Orari_Apertura_1_Create>;
  delete?: Maybe<StoresFields_Orari_Apertura_1_Delete>;
  read?: Maybe<StoresFields_Orari_Apertura_1_Read>;
  update?: Maybe<StoresFields_Orari_Apertura_1_Update>;
};

export type StoresFields_Orari_Apertura_1_Create = {
  __typename?: 'StoresFields_orari_apertura_1_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_1_Delete = {
  __typename?: 'StoresFields_orari_apertura_1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_1_Read = {
  __typename?: 'StoresFields_orari_apertura_1_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_1_Update = {
  __typename?: 'StoresFields_orari_apertura_1_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_2 = {
  __typename?: 'StoresFields_orari_apertura_2';
  create?: Maybe<StoresFields_Orari_Apertura_2_Create>;
  delete?: Maybe<StoresFields_Orari_Apertura_2_Delete>;
  read?: Maybe<StoresFields_Orari_Apertura_2_Read>;
  update?: Maybe<StoresFields_Orari_Apertura_2_Update>;
};

export type StoresFields_Orari_Apertura_2_Create = {
  __typename?: 'StoresFields_orari_apertura_2_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_2_Delete = {
  __typename?: 'StoresFields_orari_apertura_2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_2_Read = {
  __typename?: 'StoresFields_orari_apertura_2_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Apertura_2_Update = {
  __typename?: 'StoresFields_orari_apertura_2_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_1 = {
  __typename?: 'StoresFields_orari_chiusura_1';
  create?: Maybe<StoresFields_Orari_Chiusura_1_Create>;
  delete?: Maybe<StoresFields_Orari_Chiusura_1_Delete>;
  read?: Maybe<StoresFields_Orari_Chiusura_1_Read>;
  update?: Maybe<StoresFields_Orari_Chiusura_1_Update>;
};

export type StoresFields_Orari_Chiusura_1_Create = {
  __typename?: 'StoresFields_orari_chiusura_1_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_1_Delete = {
  __typename?: 'StoresFields_orari_chiusura_1_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_1_Read = {
  __typename?: 'StoresFields_orari_chiusura_1_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_1_Update = {
  __typename?: 'StoresFields_orari_chiusura_1_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_2 = {
  __typename?: 'StoresFields_orari_chiusura_2';
  create?: Maybe<StoresFields_Orari_Chiusura_2_Create>;
  delete?: Maybe<StoresFields_Orari_Chiusura_2_Delete>;
  read?: Maybe<StoresFields_Orari_Chiusura_2_Read>;
  update?: Maybe<StoresFields_Orari_Chiusura_2_Update>;
};

export type StoresFields_Orari_Chiusura_2_Create = {
  __typename?: 'StoresFields_orari_chiusura_2_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_2_Delete = {
  __typename?: 'StoresFields_orari_chiusura_2_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_2_Read = {
  __typename?: 'StoresFields_orari_chiusura_2_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Chiusura_2_Update = {
  __typename?: 'StoresFields_orari_chiusura_2_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Continuato = {
  __typename?: 'StoresFields_orari_continuato';
  create?: Maybe<StoresFields_Orari_Continuato_Create>;
  delete?: Maybe<StoresFields_Orari_Continuato_Delete>;
  read?: Maybe<StoresFields_Orari_Continuato_Read>;
  update?: Maybe<StoresFields_Orari_Continuato_Update>;
};

export type StoresFields_Orari_Continuato_Create = {
  __typename?: 'StoresFields_orari_continuato_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Continuato_Delete = {
  __typename?: 'StoresFields_orari_continuato_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Continuato_Read = {
  __typename?: 'StoresFields_orari_continuato_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Continuato_Update = {
  __typename?: 'StoresFields_orari_continuato_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Giorno = {
  __typename?: 'StoresFields_orari_giorno';
  create?: Maybe<StoresFields_Orari_Giorno_Create>;
  delete?: Maybe<StoresFields_Orari_Giorno_Delete>;
  read?: Maybe<StoresFields_Orari_Giorno_Read>;
  update?: Maybe<StoresFields_Orari_Giorno_Update>;
};

export type StoresFields_Orari_Giorno_Create = {
  __typename?: 'StoresFields_orari_giorno_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Giorno_Delete = {
  __typename?: 'StoresFields_orari_giorno_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Giorno_Read = {
  __typename?: 'StoresFields_orari_giorno_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Giorno_Update = {
  __typename?: 'StoresFields_orari_giorno_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Id = {
  __typename?: 'StoresFields_orari_id';
  create?: Maybe<StoresFields_Orari_Id_Create>;
  delete?: Maybe<StoresFields_Orari_Id_Delete>;
  read?: Maybe<StoresFields_Orari_Id_Read>;
  update?: Maybe<StoresFields_Orari_Id_Update>;
};

export type StoresFields_Orari_Id_Create = {
  __typename?: 'StoresFields_orari_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Id_Delete = {
  __typename?: 'StoresFields_orari_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Id_Read = {
  __typename?: 'StoresFields_orari_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Orari_Id_Update = {
  __typename?: 'StoresFields_orari_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Organization = {
  __typename?: 'StoresFields_organization';
  create?: Maybe<StoresFields_Organization_Create>;
  delete?: Maybe<StoresFields_Organization_Delete>;
  read?: Maybe<StoresFields_Organization_Read>;
  update?: Maybe<StoresFields_Organization_Update>;
};

export type StoresFields_Organization_Create = {
  __typename?: 'StoresFields_organization_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Organization_Delete = {
  __typename?: 'StoresFields_organization_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Organization_Read = {
  __typename?: 'StoresFields_organization_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Organization_Update = {
  __typename?: 'StoresFields_organization_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Provincia = {
  __typename?: 'StoresFields_provincia';
  create?: Maybe<StoresFields_Provincia_Create>;
  delete?: Maybe<StoresFields_Provincia_Delete>;
  read?: Maybe<StoresFields_Provincia_Read>;
  update?: Maybe<StoresFields_Provincia_Update>;
};

export type StoresFields_Provincia_Create = {
  __typename?: 'StoresFields_provincia_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Provincia_Delete = {
  __typename?: 'StoresFields_provincia_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Provincia_Read = {
  __typename?: 'StoresFields_provincia_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Provincia_Update = {
  __typename?: 'StoresFields_provincia_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Fb = {
  __typename?: 'StoresFields_social_fb';
  create?: Maybe<StoresFields_Social_Fb_Create>;
  delete?: Maybe<StoresFields_Social_Fb_Delete>;
  read?: Maybe<StoresFields_Social_Fb_Read>;
  update?: Maybe<StoresFields_Social_Fb_Update>;
};

export type StoresFields_Social_Fb_Create = {
  __typename?: 'StoresFields_social_fb_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Fb_Delete = {
  __typename?: 'StoresFields_social_fb_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Fb_Read = {
  __typename?: 'StoresFields_social_fb_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Fb_Update = {
  __typename?: 'StoresFields_social_fb_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Gg = {
  __typename?: 'StoresFields_social_gg';
  create?: Maybe<StoresFields_Social_Gg_Create>;
  delete?: Maybe<StoresFields_Social_Gg_Delete>;
  read?: Maybe<StoresFields_Social_Gg_Read>;
  update?: Maybe<StoresFields_Social_Gg_Update>;
};

export type StoresFields_Social_Gg_Create = {
  __typename?: 'StoresFields_social_gg_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Gg_Delete = {
  __typename?: 'StoresFields_social_gg_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Gg_Read = {
  __typename?: 'StoresFields_social_gg_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Gg_Update = {
  __typename?: 'StoresFields_social_gg_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Ig = {
  __typename?: 'StoresFields_social_ig';
  create?: Maybe<StoresFields_Social_Ig_Create>;
  delete?: Maybe<StoresFields_Social_Ig_Delete>;
  read?: Maybe<StoresFields_Social_Ig_Read>;
  update?: Maybe<StoresFields_Social_Ig_Update>;
};

export type StoresFields_Social_Ig_Create = {
  __typename?: 'StoresFields_social_ig_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Ig_Delete = {
  __typename?: 'StoresFields_social_ig_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Ig_Read = {
  __typename?: 'StoresFields_social_ig_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Ig_Update = {
  __typename?: 'StoresFields_social_ig_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tt = {
  __typename?: 'StoresFields_social_tt';
  create?: Maybe<StoresFields_Social_Tt_Create>;
  delete?: Maybe<StoresFields_Social_Tt_Delete>;
  read?: Maybe<StoresFields_Social_Tt_Read>;
  update?: Maybe<StoresFields_Social_Tt_Update>;
};

export type StoresFields_Social_Tt_Create = {
  __typename?: 'StoresFields_social_tt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tt_Delete = {
  __typename?: 'StoresFields_social_tt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tt_Read = {
  __typename?: 'StoresFields_social_tt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tt_Update = {
  __typename?: 'StoresFields_social_tt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tw = {
  __typename?: 'StoresFields_social_tw';
  create?: Maybe<StoresFields_Social_Tw_Create>;
  delete?: Maybe<StoresFields_Social_Tw_Delete>;
  read?: Maybe<StoresFields_Social_Tw_Read>;
  update?: Maybe<StoresFields_Social_Tw_Update>;
};

export type StoresFields_Social_Tw_Create = {
  __typename?: 'StoresFields_social_tw_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tw_Delete = {
  __typename?: 'StoresFields_social_tw_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tw_Read = {
  __typename?: 'StoresFields_social_tw_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Tw_Update = {
  __typename?: 'StoresFields_social_tw_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Yt = {
  __typename?: 'StoresFields_social_yt';
  create?: Maybe<StoresFields_Social_Yt_Create>;
  delete?: Maybe<StoresFields_Social_Yt_Delete>;
  read?: Maybe<StoresFields_Social_Yt_Read>;
  update?: Maybe<StoresFields_Social_Yt_Update>;
};

export type StoresFields_Social_Yt_Create = {
  __typename?: 'StoresFields_social_yt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Yt_Delete = {
  __typename?: 'StoresFields_social_yt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Yt_Read = {
  __typename?: 'StoresFields_social_yt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Social_Yt_Update = {
  __typename?: 'StoresFields_social_yt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Sub = {
  __typename?: 'StoresFields_sub';
  create?: Maybe<StoresFields_Sub_Create>;
  delete?: Maybe<StoresFields_Sub_Delete>;
  read?: Maybe<StoresFields_Sub_Read>;
  update?: Maybe<StoresFields_Sub_Update>;
};

export type StoresFields_Sub_Create = {
  __typename?: 'StoresFields_sub_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Sub_Delete = {
  __typename?: 'StoresFields_sub_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Sub_Read = {
  __typename?: 'StoresFields_sub_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Sub_Update = {
  __typename?: 'StoresFields_sub_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team = {
  __typename?: 'StoresFields_team';
  create?: Maybe<StoresFields_Team_Create>;
  delete?: Maybe<StoresFields_Team_Delete>;
  fields?: Maybe<StoresFields_Team_Fields>;
  read?: Maybe<StoresFields_Team_Read>;
  update?: Maybe<StoresFields_Team_Update>;
};

export type StoresFields_Team_Create = {
  __typename?: 'StoresFields_team_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Delete = {
  __typename?: 'StoresFields_team_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Fields = {
  __typename?: 'StoresFields_team_Fields';
  foto?: Maybe<StoresFields_Team_Foto>;
  id?: Maybe<StoresFields_Team_Id>;
  nome?: Maybe<StoresFields_Team_Nome>;
  ruolo?: Maybe<StoresFields_Team_Ruolo>;
};

export type StoresFields_Team_Read = {
  __typename?: 'StoresFields_team_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Update = {
  __typename?: 'StoresFields_team_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Foto = {
  __typename?: 'StoresFields_team_foto';
  create?: Maybe<StoresFields_Team_Foto_Create>;
  delete?: Maybe<StoresFields_Team_Foto_Delete>;
  read?: Maybe<StoresFields_Team_Foto_Read>;
  update?: Maybe<StoresFields_Team_Foto_Update>;
};

export type StoresFields_Team_Foto_Create = {
  __typename?: 'StoresFields_team_foto_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Foto_Delete = {
  __typename?: 'StoresFields_team_foto_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Foto_Read = {
  __typename?: 'StoresFields_team_foto_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Foto_Update = {
  __typename?: 'StoresFields_team_foto_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Id = {
  __typename?: 'StoresFields_team_id';
  create?: Maybe<StoresFields_Team_Id_Create>;
  delete?: Maybe<StoresFields_Team_Id_Delete>;
  read?: Maybe<StoresFields_Team_Id_Read>;
  update?: Maybe<StoresFields_Team_Id_Update>;
};

export type StoresFields_Team_Id_Create = {
  __typename?: 'StoresFields_team_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Id_Delete = {
  __typename?: 'StoresFields_team_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Id_Read = {
  __typename?: 'StoresFields_team_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Id_Update = {
  __typename?: 'StoresFields_team_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Nome = {
  __typename?: 'StoresFields_team_nome';
  create?: Maybe<StoresFields_Team_Nome_Create>;
  delete?: Maybe<StoresFields_Team_Nome_Delete>;
  read?: Maybe<StoresFields_Team_Nome_Read>;
  update?: Maybe<StoresFields_Team_Nome_Update>;
};

export type StoresFields_Team_Nome_Create = {
  __typename?: 'StoresFields_team_nome_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Nome_Delete = {
  __typename?: 'StoresFields_team_nome_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Nome_Read = {
  __typename?: 'StoresFields_team_nome_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Nome_Update = {
  __typename?: 'StoresFields_team_nome_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Ruolo = {
  __typename?: 'StoresFields_team_ruolo';
  create?: Maybe<StoresFields_Team_Ruolo_Create>;
  delete?: Maybe<StoresFields_Team_Ruolo_Delete>;
  read?: Maybe<StoresFields_Team_Ruolo_Read>;
  update?: Maybe<StoresFields_Team_Ruolo_Update>;
};

export type StoresFields_Team_Ruolo_Create = {
  __typename?: 'StoresFields_team_ruolo_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Ruolo_Delete = {
  __typename?: 'StoresFields_team_ruolo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Ruolo_Read = {
  __typename?: 'StoresFields_team_ruolo_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Team_Ruolo_Update = {
  __typename?: 'StoresFields_team_ruolo_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Telefono = {
  __typename?: 'StoresFields_telefono';
  create?: Maybe<StoresFields_Telefono_Create>;
  delete?: Maybe<StoresFields_Telefono_Delete>;
  read?: Maybe<StoresFields_Telefono_Read>;
  update?: Maybe<StoresFields_Telefono_Update>;
};

export type StoresFields_TelefonoAlt = {
  __typename?: 'StoresFields_telefonoAlt';
  create?: Maybe<StoresFields_TelefonoAlt_Create>;
  delete?: Maybe<StoresFields_TelefonoAlt_Delete>;
  read?: Maybe<StoresFields_TelefonoAlt_Read>;
  update?: Maybe<StoresFields_TelefonoAlt_Update>;
};

export type StoresFields_TelefonoAlt_Create = {
  __typename?: 'StoresFields_telefonoAlt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_TelefonoAlt_Delete = {
  __typename?: 'StoresFields_telefonoAlt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_TelefonoAlt_Read = {
  __typename?: 'StoresFields_telefonoAlt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_TelefonoAlt_Update = {
  __typename?: 'StoresFields_telefonoAlt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Telefono_Create = {
  __typename?: 'StoresFields_telefono_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Telefono_Delete = {
  __typename?: 'StoresFields_telefono_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Telefono_Read = {
  __typename?: 'StoresFields_telefono_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Telefono_Update = {
  __typename?: 'StoresFields_telefono_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_UpdatedAt = {
  __typename?: 'StoresFields_updatedAt';
  create?: Maybe<StoresFields_UpdatedAt_Create>;
  delete?: Maybe<StoresFields_UpdatedAt_Delete>;
  read?: Maybe<StoresFields_UpdatedAt_Read>;
  update?: Maybe<StoresFields_UpdatedAt_Update>;
};

export type StoresFields_UpdatedAt_Create = {
  __typename?: 'StoresFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_UpdatedAt_Delete = {
  __typename?: 'StoresFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_UpdatedAt_Read = {
  __typename?: 'StoresFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_UpdatedAt_Update = {
  __typename?: 'StoresFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_VetrinaType = {
  __typename?: 'StoresFields_vetrinaType';
  create?: Maybe<StoresFields_VetrinaType_Create>;
  delete?: Maybe<StoresFields_VetrinaType_Delete>;
  read?: Maybe<StoresFields_VetrinaType_Read>;
  update?: Maybe<StoresFields_VetrinaType_Update>;
};

export type StoresFields_VetrinaType_Create = {
  __typename?: 'StoresFields_vetrinaType_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_VetrinaType_Delete = {
  __typename?: 'StoresFields_vetrinaType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_VetrinaType_Read = {
  __typename?: 'StoresFields_vetrinaType_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_VetrinaType_Update = {
  __typename?: 'StoresFields_vetrinaType_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Whatsapp = {
  __typename?: 'StoresFields_whatsapp';
  create?: Maybe<StoresFields_Whatsapp_Create>;
  delete?: Maybe<StoresFields_Whatsapp_Delete>;
  read?: Maybe<StoresFields_Whatsapp_Read>;
  update?: Maybe<StoresFields_Whatsapp_Update>;
};

export type StoresFields_Whatsapp_Create = {
  __typename?: 'StoresFields_whatsapp_Create';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Whatsapp_Delete = {
  __typename?: 'StoresFields_whatsapp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Whatsapp_Read = {
  __typename?: 'StoresFields_whatsapp_Read';
  permission: Scalars['Boolean']['output'];
};

export type StoresFields_Whatsapp_Update = {
  __typename?: 'StoresFields_whatsapp_Update';
  permission: Scalars['Boolean']['output'];
};

export type StoresReadAccess = {
  __typename?: 'StoresReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresReadDocAccess = {
  __typename?: 'StoresReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresUpdateAccess = {
  __typename?: 'StoresUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type StoresUpdateDocAccess = {
  __typename?: 'StoresUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  Nome?: Maybe<Scalars['String']['output']>;
  apiKey?: Maybe<Scalars['String']['output']>;
  apiKeyIndex?: Maybe<Scalars['String']['output']>;
  clerkId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles: User_Roles;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Collaboratore = 'collaboratore',
  Imprenditore = 'imprenditore',
  Store = 'store'
}

export type User_Nome_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_ApiKey_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_ClerkId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export enum User_Roles {
  Admin = 'admin',
  Collaboratore = 'collaboratore',
  Imprenditore = 'imprenditore',
  Store = 'store'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Collaboratore = 'collaboratore',
  Imprenditore = 'imprenditore',
  Store = 'store'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Collaboratore = 'collaboratore',
  Imprenditore = 'imprenditore',
  Store = 'store'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  Nome?: InputMaybe<User_Nome_Operator>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  clerkId?: InputMaybe<User_ClerkId_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  Nome?: InputMaybe<User_Nome_Operator>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  clerkId?: InputMaybe<User_ClerkId_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  Nome?: InputMaybe<User_Nome_Operator>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  clerkId?: InputMaybe<User_ClerkId_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  Nome?: Maybe<UsersDocAccessFields_Nome>;
  apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
  clerkId?: Maybe<UsersDocAccessFields_ClerkId>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_Nome = {
  __typename?: 'UsersDocAccessFields_Nome';
  create?: Maybe<UsersDocAccessFields_Nome_Create>;
  delete?: Maybe<UsersDocAccessFields_Nome_Delete>;
  read?: Maybe<UsersDocAccessFields_Nome_Read>;
  update?: Maybe<UsersDocAccessFields_Nome_Update>;
};

export type UsersDocAccessFields_Nome_Create = {
  __typename?: 'UsersDocAccessFields_Nome_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Nome_Delete = {
  __typename?: 'UsersDocAccessFields_Nome_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Nome_Read = {
  __typename?: 'UsersDocAccessFields_Nome_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Nome_Update = {
  __typename?: 'UsersDocAccessFields_Nome_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey = {
  __typename?: 'UsersDocAccessFields_apiKey';
  create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
  __typename?: 'UsersDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
  __typename?: 'UsersDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
  __typename?: 'UsersDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ClerkId = {
  __typename?: 'UsersDocAccessFields_clerkId';
  create?: Maybe<UsersDocAccessFields_ClerkId_Create>;
  delete?: Maybe<UsersDocAccessFields_ClerkId_Delete>;
  read?: Maybe<UsersDocAccessFields_ClerkId_Read>;
  update?: Maybe<UsersDocAccessFields_ClerkId_Update>;
};

export type UsersDocAccessFields_ClerkId_Create = {
  __typename?: 'UsersDocAccessFields_clerkId_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ClerkId_Delete = {
  __typename?: 'UsersDocAccessFields_clerkId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ClerkId_Read = {
  __typename?: 'UsersDocAccessFields_clerkId_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ClerkId_Update = {
  __typename?: 'UsersDocAccessFields_clerkId_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
  __typename?: 'UsersDocAccessFields_enableAPIKey';
  create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  Nome?: Maybe<UsersFields_Nome>;
  apiKey?: Maybe<UsersFields_ApiKey>;
  clerkId?: Maybe<UsersFields_ClerkId>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
  roles?: Maybe<UsersFields_Roles>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_Nome = {
  __typename?: 'UsersFields_Nome';
  create?: Maybe<UsersFields_Nome_Create>;
  delete?: Maybe<UsersFields_Nome_Delete>;
  read?: Maybe<UsersFields_Nome_Read>;
  update?: Maybe<UsersFields_Nome_Update>;
};

export type UsersFields_Nome_Create = {
  __typename?: 'UsersFields_Nome_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Nome_Delete = {
  __typename?: 'UsersFields_Nome_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Nome_Read = {
  __typename?: 'UsersFields_Nome_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Nome_Update = {
  __typename?: 'UsersFields_Nome_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey = {
  __typename?: 'UsersFields_apiKey';
  create?: Maybe<UsersFields_ApiKey_Create>;
  delete?: Maybe<UsersFields_ApiKey_Delete>;
  read?: Maybe<UsersFields_ApiKey_Read>;
  update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
  __typename?: 'UsersFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
  __typename?: 'UsersFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
  __typename?: 'UsersFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
  __typename?: 'UsersFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ClerkId = {
  __typename?: 'UsersFields_clerkId';
  create?: Maybe<UsersFields_ClerkId_Create>;
  delete?: Maybe<UsersFields_ClerkId_Delete>;
  read?: Maybe<UsersFields_ClerkId_Read>;
  update?: Maybe<UsersFields_ClerkId_Update>;
};

export type UsersFields_ClerkId_Create = {
  __typename?: 'UsersFields_clerkId_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ClerkId_Delete = {
  __typename?: 'UsersFields_clerkId_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ClerkId_Read = {
  __typename?: 'UsersFields_clerkId_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ClerkId_Update = {
  __typename?: 'UsersFields_clerkId_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
  __typename?: 'UsersFields_enableAPIKey';
  create?: Maybe<UsersFields_EnableApiKey_Create>;
  delete?: Maybe<UsersFields_EnableApiKey_Delete>;
  read?: Maybe<UsersFields_EnableApiKey_Read>;
  update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
  __typename?: 'UsersFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
  __typename?: 'UsersFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
  __typename?: 'UsersFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
  __typename?: 'UsersFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CountLandingCategories = {
  __typename?: 'countLandingCategories';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountLandings = {
  __typename?: 'countLandings';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountOrganizations = {
  __typename?: 'countOrganizations';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountStores = {
  __typename?: 'countStores';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Landing_CategoriesAccess = {
  __typename?: 'landing_categoriesAccess';
  create?: Maybe<LandingCategoriesCreateAccess>;
  delete?: Maybe<LandingCategoriesDeleteAccess>;
  fields?: Maybe<LandingCategoriesFields>;
  read?: Maybe<LandingCategoriesReadAccess>;
  update?: Maybe<LandingCategoriesUpdateAccess>;
};

export type Landing_CategoriesDocAccess = {
  __typename?: 'landing_categoriesDocAccess';
  create?: Maybe<LandingCategoriesCreateDocAccess>;
  delete?: Maybe<LandingCategoriesDeleteDocAccess>;
  fields?: Maybe<LandingCategoriesDocAccessFields>;
  read?: Maybe<LandingCategoriesReadDocAccess>;
  update?: Maybe<LandingCategoriesUpdateDocAccess>;
};

export type LandingsAccess = {
  __typename?: 'landingsAccess';
  create?: Maybe<LandingsCreateAccess>;
  delete?: Maybe<LandingsDeleteAccess>;
  fields?: Maybe<LandingsFields>;
  read?: Maybe<LandingsReadAccess>;
  update?: Maybe<LandingsUpdateAccess>;
};

export type LandingsDocAccess = {
  __typename?: 'landingsDocAccess';
  create?: Maybe<LandingsCreateDocAccess>;
  delete?: Maybe<LandingsDeleteDocAccess>;
  fields?: Maybe<LandingsDocAccessFields>;
  read?: Maybe<LandingsReadDocAccess>;
  update?: Maybe<LandingsUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationLandingCategoryInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  slugLock?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLandingCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slugLock?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLandingInput = {
  category?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  forceCarosello?: InputMaybe<Scalars['Boolean']['input']>;
  forceEvidenza?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationLanding_MetaInput>;
  name: Scalars['String']['input'];
  negozio?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slugLock?: InputMaybe<Scalars['Boolean']['input']>;
  stato: Landing_Stato_MutationInput;
  type: Landing_Type_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLandingUpdateInput = {
  category?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  forceCarosello?: InputMaybe<Scalars['Boolean']['input']>;
  forceEvidenza?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationLandingUpdate_MetaInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  negozio?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slugLock?: InputMaybe<Scalars['Boolean']['input']>;
  stato?: InputMaybe<LandingUpdate_Stato_MutationInput>;
  type?: InputMaybe<LandingUpdate_Type_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLandingUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLanding_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  large?: InputMaybe<MutationMediaUpdate_Sizes_LargeInput>;
  medium?: InputMaybe<MutationMediaUpdate_Sizes_MediumInput>;
  og?: InputMaybe<MutationMediaUpdate_Sizes_OgInput>;
  small?: InputMaybe<MutationMediaUpdate_Sizes_SmallInput>;
  square?: InputMaybe<MutationMediaUpdate_Sizes_SquareInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
  xlarge?: InputMaybe<MutationMediaUpdate_Sizes_XlargeInput>;
};

export type MutationMediaUpdate_Sizes_LargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_MediumInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_OgInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_SmallInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_SquareInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_XlargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  large?: InputMaybe<MutationMedia_Sizes_LargeInput>;
  medium?: InputMaybe<MutationMedia_Sizes_MediumInput>;
  og?: InputMaybe<MutationMedia_Sizes_OgInput>;
  small?: InputMaybe<MutationMedia_Sizes_SmallInput>;
  square?: InputMaybe<MutationMedia_Sizes_SquareInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
  xlarge?: InputMaybe<MutationMedia_Sizes_XlargeInput>;
};

export type MutationMedia_Sizes_LargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_MediumInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_OgInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_SmallInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_SquareInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_XlargeInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationOrganizationInput = {
  bsSubdirIstanza?: InputMaybe<Scalars['String']['input']>;
  bschv?: InputMaybe<Scalars['String']['input']>;
  bscloudir?: InputMaybe<Scalars['String']['input']>;
  codiceFiscale: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  imprenditore?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  partitaIva: Scalars['String']['input'];
  pec?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCap?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCitta?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCivico?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleIndirizzo?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleProvincia?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCap?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCitta?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCivico?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaIndirizzo?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaProvincia?: InputMaybe<Scalars['String']['input']>;
  telefono: Scalars['String']['input'];
  telefonoAlt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrganizationUpdateInput = {
  bsSubdirIstanza?: InputMaybe<Scalars['String']['input']>;
  bschv?: InputMaybe<Scalars['String']['input']>;
  bscloudir?: InputMaybe<Scalars['String']['input']>;
  codiceFiscale?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  imprenditore?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partitaIva?: InputMaybe<Scalars['String']['input']>;
  pec?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCap?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCitta?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleCivico?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleIndirizzo?: InputMaybe<Scalars['String']['input']>;
  sedeLegaleProvincia?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCap?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCitta?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaCivico?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaIndirizzo?: InputMaybe<Scalars['String']['input']>;
  sedeOperativaProvincia?: InputMaybe<Scalars['String']['input']>;
  telefono?: InputMaybe<Scalars['String']['input']>;
  telefonoAlt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationStoreInput = {
  analytics_id?: InputMaybe<Scalars['String']['input']>;
  analytics_share_id?: InputMaybe<Scalars['String']['input']>;
  assicurazioniText?: InputMaybe<Scalars['String']['input']>;
  bisuiteDomain?: InputMaybe<Store_BisuiteDomain_MutationInput>;
  bscal?: InputMaybe<Scalars['String']['input']>;
  bscc?: InputMaybe<Scalars['String']['input']>;
  bsds?: InputMaybe<Scalars['String']['input']>;
  bsid?: InputMaybe<Scalars['String']['input']>;
  cap: Scalars['String']['input'];
  citta: Scalars['String']['input'];
  civico?: InputMaybe<Scalars['String']['input']>;
  codiceCentralino?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  foto?: InputMaybe<Scalars['Int']['input']>;
  indirizzo: Scalars['String']['input'];
  linkMappa?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numeroPdv: Scalars['String']['input'];
  orari?: InputMaybe<Array<InputMaybe<MutationStore_OrariInput>>>;
  organization?: InputMaybe<Scalars['Int']['input']>;
  provincia: Scalars['String']['input'];
  social_fb?: InputMaybe<Scalars['String']['input']>;
  social_gg?: InputMaybe<Scalars['String']['input']>;
  social_ig?: InputMaybe<Scalars['String']['input']>;
  social_tt?: InputMaybe<Scalars['String']['input']>;
  social_tw?: InputMaybe<Scalars['String']['input']>;
  social_yt?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['String']['input'];
  team?: InputMaybe<Array<InputMaybe<MutationStore_TeamInput>>>;
  telefono: Scalars['String']['input'];
  telefonoAlt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  vetrinaType: Store_VetrinaType_MutationInput;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStoreUpdateInput = {
  analytics_id?: InputMaybe<Scalars['String']['input']>;
  analytics_share_id?: InputMaybe<Scalars['String']['input']>;
  assicurazioniText?: InputMaybe<Scalars['String']['input']>;
  bisuiteDomain?: InputMaybe<StoreUpdate_BisuiteDomain_MutationInput>;
  bscal?: InputMaybe<Scalars['String']['input']>;
  bscc?: InputMaybe<Scalars['String']['input']>;
  bsds?: InputMaybe<Scalars['String']['input']>;
  bsid?: InputMaybe<Scalars['String']['input']>;
  cap?: InputMaybe<Scalars['String']['input']>;
  citta?: InputMaybe<Scalars['String']['input']>;
  civico?: InputMaybe<Scalars['String']['input']>;
  codiceCentralino?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  foto?: InputMaybe<Scalars['Int']['input']>;
  indirizzo?: InputMaybe<Scalars['String']['input']>;
  linkMappa?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numeroPdv?: InputMaybe<Scalars['String']['input']>;
  orari?: InputMaybe<Array<InputMaybe<MutationStoreUpdate_OrariInput>>>;
  organization?: InputMaybe<Scalars['Int']['input']>;
  provincia?: InputMaybe<Scalars['String']['input']>;
  social_fb?: InputMaybe<Scalars['String']['input']>;
  social_gg?: InputMaybe<Scalars['String']['input']>;
  social_ig?: InputMaybe<Scalars['String']['input']>;
  social_tt?: InputMaybe<Scalars['String']['input']>;
  social_tw?: InputMaybe<Scalars['String']['input']>;
  social_yt?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Array<InputMaybe<MutationStoreUpdate_TeamInput>>>;
  telefono?: InputMaybe<Scalars['String']['input']>;
  telefonoAlt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  vetrinaType?: InputMaybe<StoreUpdate_VetrinaType_MutationInput>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStoreUpdate_OrariInput = {
  aperto?: InputMaybe<Scalars['Boolean']['input']>;
  apertura_1?: InputMaybe<Scalars['String']['input']>;
  apertura_2?: InputMaybe<Scalars['String']['input']>;
  chiusura_1?: InputMaybe<Scalars['String']['input']>;
  chiusura_2?: InputMaybe<Scalars['String']['input']>;
  continuato?: InputMaybe<Scalars['Boolean']['input']>;
  giorno?: InputMaybe<StoreUpdate_Orari_Giorno_MutationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStoreUpdate_TeamInput = {
  foto?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nome: Scalars['String']['input'];
  ruolo: Scalars['String']['input'];
};

export type MutationStore_OrariInput = {
  aperto?: InputMaybe<Scalars['Boolean']['input']>;
  apertura_1?: InputMaybe<Scalars['String']['input']>;
  apertura_2?: InputMaybe<Scalars['String']['input']>;
  chiusura_1?: InputMaybe<Scalars['String']['input']>;
  chiusura_2?: InputMaybe<Scalars['String']['input']>;
  continuato?: InputMaybe<Scalars['Boolean']['input']>;
  giorno?: InputMaybe<Store_Orari_Giorno_MutationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationStore_TeamInput = {
  foto?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nome: Scalars['String']['input'];
  ruolo: Scalars['String']['input'];
};

export type MutationUserInput = {
  Nome?: InputMaybe<Scalars['String']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  clerkId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles: User_Roles_MutationInput;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  Nome?: InputMaybe<Scalars['String']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  clerkId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<UserUpdate_Roles_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationsAccess = {
  __typename?: 'organizationsAccess';
  create?: Maybe<OrganizationsCreateAccess>;
  delete?: Maybe<OrganizationsDeleteAccess>;
  fields?: Maybe<OrganizationsFields>;
  read?: Maybe<OrganizationsReadAccess>;
  update?: Maybe<OrganizationsUpdateAccess>;
};

export type OrganizationsDocAccess = {
  __typename?: 'organizationsDocAccess';
  create?: Maybe<OrganizationsCreateDocAccess>;
  delete?: Maybe<OrganizationsDeleteDocAccess>;
  fields?: Maybe<OrganizationsDocAccessFields>;
  read?: Maybe<OrganizationsReadDocAccess>;
  update?: Maybe<OrganizationsUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type StoresAccess = {
  __typename?: 'storesAccess';
  create?: Maybe<StoresCreateAccess>;
  delete?: Maybe<StoresDeleteAccess>;
  fields?: Maybe<StoresFields>;
  read?: Maybe<StoresReadAccess>;
  update?: Maybe<StoresUpdateAccess>;
};

export type StoresDocAccess = {
  __typename?: 'storesDocAccess';
  create?: Maybe<StoresCreateDocAccess>;
  delete?: Maybe<StoresDeleteDocAccess>;
  fields?: Maybe<StoresDocAccessFields>;
  read?: Maybe<StoresReadDocAccess>;
  update?: Maybe<StoresUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  Nome?: Maybe<Scalars['String']['output']>;
  clerkId?: Maybe<Scalars['String']['output']>;
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  roles: UsersJwt_Roles;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  Collaboratore = 'collaboratore',
  Imprenditore = 'imprenditore',
  Store = 'store'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetStoreQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetStoreQuery = { __typename?: 'Query', Store?: { __typename?: 'Store', id: number, name: string } | null };

export type GetNegoziQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNegoziQuery = { __typename?: 'Query', Stores?: { __typename?: 'Stores', docs?: Array<{ __typename?: 'Store', id: number, name: string } | null> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetStoreDocument = new TypedDocumentString(`
    query GetStore($id: Int!) {
  Store(id: $id) {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<GetStoreQuery, GetStoreQueryVariables>;
export const GetNegoziDocument = new TypedDocumentString(`
    query GetNegozi {
  Stores {
    docs {
      id
      name
    }
  }
}
    `) as unknown as TypedDocumentString<GetNegoziQuery, GetNegoziQueryVariables>;