const pageColumns = [
  'id',
  'title_gr',
  'title_en',
  'content_gr',
  'content_en',
  'image_public_id',
  'url',
  'created_at',
  'updated_at',
];

const usrColumns = ['id', 'username', 'email'];

const pageRelations = [{ table: 'usr', field: 'author' }];

const pageJoins = [
  { table: 'usr', columns: usrColumns, foreignKey: 'author_id' },
];

module.exports = { pageColumns, usrColumns, pageRelations, pageJoins };
