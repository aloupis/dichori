const eventColumns = [
  'id',
  'title_gr',
  'title_en',
  'content_gr',
  'content_en',
  'event_start',
  'event_end',
  'created_at',
  'updated_at',
];

const usrColumns = ['id', 'username', 'email'];

const eventRelations = [{ table: 'usr', field: 'author' }];

const eventJoins = [
  { table: 'usr', columns: usrColumns, foreignKey: 'author_id' },
];

module.exports = { eventColumns, usrColumns, eventRelations, eventJoins };
