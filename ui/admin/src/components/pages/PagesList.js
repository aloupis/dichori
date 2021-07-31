import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import PageWrapper from '../../common/PageWrapper';
import Loading from '../../common/Loading';
import GenericTable from '../../common/GenericTable';
import { PAGES_QUERY } from './model';

const PagesList = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [orderByField, setOrderByField] = useState('page.id');
  const [orderByDirection, setOrderByDirection] = useState('desc');

  const { data, loading, error } = useQuery(PAGES_QUERY, {
    variables: {
      offset: page * rowsPerPage,
      limit: rowsPerPage,
      orderBy: { field: orderByField, direction: orderByDirection },
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log({ error });
  }

  const pages = data.pages || [];
  const totalRows = data.pages_count || pages.length;
  const fields = [
    {
      systemName: 'id',
      displayName: 'ID',
      isKey: true,
      link: '/pages',
      type: 'number',
    },
    {
      systemName: 'title_en',
      displayName: 'English Title',
      type: 'string',
    },
    {
      systemName: 'title_gr',
      displayName: 'Greek Title',
      type: 'string',
    },
    {
      systemName: 'url',
      displayName: 'Url',
      type: 'string',
    },
    {
      systemName: 'created_at',
      displayName: 'Created At',
      type: 'datetime',
    },
    {
      systemName: 'updated_at',
      displayName: 'Updated At',
      type: 'datetime',
    },
    {
      systemName: 'author',
      displayName: 'Author',
      type: 'ref',
      field: 'username',
    },
  ];
  return (
    <PageWrapper title="Pages" newPath="/pages/new">
      <GenericTable
        entity="page"
        fields={fields}
        rows={pages}
        totalRows={totalRows}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        orderByField={orderByField}
        setOrderByField={setOrderByField}
        orderByDirection={orderByDirection}
        setOrderByDirection={setOrderByDirection}
      />
    </PageWrapper>
  );
};

export default PagesList;
