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
  input SettingsSet {
    header_menu_config: String
    footer_menu_config: String
    home_title_gr: String
    home_title_en: String
    home_content_gr: String
    home_content_en: String
    home_image_public_id: String
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
