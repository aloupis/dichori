const withOrderBy = async (args, orderBy, orderDir) =>
  orderBy ? args.orderBy(orderBy, orderDir || 'desc') : args;

const constructSelectWithJoins = (table, tableColumns, joins) => [
  ...tableColumns.map((col) => `${table}.${col} as ${table}.${col} `),
  ...joins.flatMap((join) =>
    join.columns.reduce(
      (joinedTablesSelect, column) => [
        ...joinedTablesSelect,
        `${join.table}.${column} as ${join.table}.${column}`,
      ],
      []
    )
  ),
];

const applyJoinsToQuery = (query, joins, table) =>
  joins.reduce(
    (queryWithJoins, join) =>
      join.table === 'parent'
        ? queryWithJoins.joinRaw(
            `left join "${table}" AS "parent" ON "parent"."id" = "${table}"."parent_id"`
          )
        : queryWithJoins.innerJoin(
            join.table,
            join.foreignKey,
            `${join.table}.id`
          ),
    query
  );

module.exports = {
  withOrderBy,
  constructSelectWithJoins,
  applyJoinsToQuery,
};
