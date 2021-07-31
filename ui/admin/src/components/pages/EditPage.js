import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';
import { Grid } from '@material-ui/core';
import PageWrapper from '../../common/PageWrapper';
import PageForm from './PageForm';
import Loading from '../../common/Loading';
import DeleteConfirmationButton from '../../common/DeleteConfirmationButton';
import AssetContainer from '../../common/media/asset/AssetContainer';
import { SnackbarContext } from '../../SnackbarContext';
import { deleteAsset } from '../../services/asset';

import {
  PAGE_BY_PK_QUERY,
  UPDATE_PAGE_MUTATION,
  DELETE_PAGE_MUTATION,
} from './model';

const EditPage = ({ history, match }) => {
  const { data, loading, error } = useQuery(PAGE_BY_PK_QUERY, {
    variables: { id: +match.params.id },
  });

  const [imagePublicId, setImagePublicId] = useState(
    data?.page_by_pk?.image_public_id || ''
  );

  const { showMessage, showGenericErrorMessage } = useContext(SnackbarContext);

  const [updatePage] = useMutation(UPDATE_PAGE_MUTATION);
  const handleSave = async (page) => {
    try {
      await updatePage({
        variables: {
          id: +match.params.id,
          set: {
            title_en: page.title_en,
            content_en: page.content_en,
            title_gr: page.title_gr,
            content_gr: page.content_gr,
            image_public_id: imagePublicId,
            url: page.url,
          },
        },
        refetchQueries: [`PAGES_QUERY`],
      });
      showMessage('Page has been successfully updated!');
      return history.push(`/pages`);
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };
  const [deletePage] = useMutation(DELETE_PAGE_MUTATION);
  const handleDelete = async () => {
    try {
      const res = await deletePage({ variables: { id: +match.params.id } });
      if (data?.page_by_pk?.image_public_id) {
        const assetRes = await deleteAsset(data.page_by_pk.image_public_id);
        if (assetRes.status !== 200) {
          showGenericErrorMessage();
        }
      }
      if (res?.data?.delete_page?.success) {
        showMessage('Page has been successfully deleted!');
      } else {
        showGenericErrorMessage();
      }

      return history.push(`/pages`);
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <PageWrapper title="Edit Page" maxWidth="lg" goBackBtn="/pages">
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="baseline"
        style={{ marginBottom: '10px' }}
      >
        <DeleteConfirmationButton
          component="fab"
          size="medium"
          onConfirm={handleDelete}
        />
      </Grid>

      <AssetContainer
        url={`pages/${match.params.id}`}
        publicId={data.page_by_pk.image_public_id || ''}
        acceptedFileTypes="image/jpeg,image/png,image/gif"
        updateEntity={setImagePublicId}
      />

      <PageForm onSave={handleSave} page={data.page_by_pk} history={history} />
    </PageWrapper>
  );
};

EditPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default EditPage;
