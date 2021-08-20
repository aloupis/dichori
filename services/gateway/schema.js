const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input PostInput {
    title_en: String!
    title_gr: String!
    content_en: String!
    content_gr: String!
    summary_en: String
    summary_gr: String
  }
  input PostSet {
    title_en: String
    title_gr: String
    content_en: String
    content_gr: String
    image_public_id: String
    summary_en: String
    summary_gr: String
  }
  input CategoryInput {
    name_en: String!
    name_gr: String!
    description_en: String!
    description_gr: String!
    summary_en: String
    summary_gr: String
  }
  input CategorySet {
    name_en: String
    name_gr: String
    description_en: String
    description_gr: String
    image_public_id: String
    summary_en: String
    summary_gr: String
  }
  input ServiceInput {
    name_gr: String!
    name_en: String!
    content_gr: String!
    content_en: String!
    category_id: Int!
    price: Float!
    summary_en: String
    summary_gr: String
  }
  input SettingsSet {
    header_menu_config: String!
    footer_menu_config: String!
    home_title_gr: String
    home_title_en: String
    home_content_gr: String
    home_content_en: String
    home_image_public_id: String
  }
  input ServiceSet {
    name_gr: String
    name_en: String
    content_gr: String
    content_en: String
    category_id: Int
    price: Float
    image_public_id: String
    summary_en: String
    summary_gr: String
  }
  input MemberInput {
    name_en: String!
    name_gr: String!
    description_en: String!
    description_gr: String!
    summary_en: String
    summary_gr: String
    position_en: String
    position_gr: String
  }
  input MemberSet {
    name_en: String
    name_gr: String
    description_en: String
    description_gr: String
    image_public_id: String
    summary_en: String
    summary_gr: String
    position_en: String
    position_gr: String
  }
  input PageInput {
    title_en: String!
    title_gr: String!
    content_en: String!
    content_gr: String!
    url: String!
  }
  input PageSet {
    title_en: String
    title_gr: String
    content_en: String
    content_gr: String
    url: String
  }
  input EventInput {
    title_en: String!
    title_gr: String!
    content_en: String
    content_gr: String
    event_start: String!
    event_end: String!
  }
  input EventSet {
    title_en: String
    title_gr: String
    content_en: String
    content_gr: String
    event_start: String
    event_end: String
  }
  type User {
    id: ID!
    username: String!
    email: String!
  }
  input OrderBy {
    field: String!
    direction: String
  }
  type Post {
    id: ID!
    title_gr: String!
    title_en: String!
    content_gr: String!
    content_en: String!
    image_public_id: String
    summary_en: String
    summary_gr: String
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type Category {
    id: ID!
    name_gr: String!
    name_en: String!
    description_gr: String!
    description_en: String!
    image_public_id: String
    summary_en: String
    summary_gr: String
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type Member {
    id: ID!
    name_gr: String!
    name_en: String!
    description_gr: String!
    description_en: String!
    image_public_id: String
    summary_en: String
    summary_gr: String
    position_en: String
    position_gr: String
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type Service {
    id: ID!
    name_gr: String!
    name_en: String!
    content_gr: String
    content_en: String
    price: Float
    category: Category
    image_public_id: String
    summary_en: String
    summary_gr: String
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type Settings {
    header_menu_config: String!
    footer_menu_config: String!
    home_title_gr: String
    home_title_en: String
    home_content_gr: String
    home_content_en: String
    home_image_public_id: String
  }
  type Page {
    id: ID!
    title_gr: String!
    title_en: String!
    content_gr: String!
    content_en: String!
    image_public_id: String
    url: String!
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type Event {
    id: ID!
    title_gr: String!
    title_en: String!
    content_gr: String
    content_en: String
    event_start: String!
    event_end: String!
    created_at: String!
    updated_at: String
    author: User
    editor: User
  }
  type MutationResult {
    success: Boolean!
    message: String
  }
  type Query {
    posts(offset: Int!, limit: Int!, orderBy: OrderBy): [Post]
    post_by_pk(id: Int!): Post
    posts_count: Int!
    categories(offset: Int!, limit: Int!, orderBy: OrderBy): [Category]
    category_by_pk(id: Int!): Category
    categories_count: Int!
    members(offset: Int!, limit: Int!, orderBy: OrderBy): [Member]
    member_by_pk(id: Int!): Member
    members_count: Int!
    services(offset: Int!, limit: Int!, orderBy: OrderBy): [Service]
    service_by_pk(id: Int!): Service
    services_count: Int!
    settings: Settings!
    pages(offset: Int!, limit: Int!, orderBy: OrderBy): [Page]
    page_by_pk(id: Int!): Page
    pages_count: Int!
    events: [Event]
  }
  type Mutation {
    insert_post(input: PostInput!): Post!
    update_post(id: Int!, set: PostSet!): Post!
    delete_post(id: Int!): MutationResult!
    insert_category(input: CategoryInput!): Category!
    update_category(id: Int!, set: CategorySet!): Category!
    delete_category(id: Int!): MutationResult!
    insert_member(input: MemberInput!): Member!
    update_member(id: Int!, set: MemberSet!): Member!
    delete_member(id: Int!): MutationResult!
    insert_service(input: ServiceInput!): Service!
    update_service(id: Int!, set: ServiceSet!): Service!
    delete_service(id: Int!): MutationResult!
    update_settings(set: SettingsSet!): Settings!
    insert_page(input: PageInput!): Page!
    update_page(id: Int!, set: PageSet!): Page!
    delete_page(id: Int!): MutationResult!
    insert_event(input: EventInput!): Event!
    update_event(id: Int!, set: EventSet!): Event!
    delete_event(id: Int!): MutationResult!
  }
`;

module.exports = { typeDefs };
