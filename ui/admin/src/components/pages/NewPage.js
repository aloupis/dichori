import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import PageWrapper from '../../common/PageWrapper';
import PageForm from './PageForm';
import { SnackbarContext } from '../../SnackbarContext';

import { CREATE_PAGE_MUTATION } from './model';

const NewPage = (props) => {
  const { showMessage, showGenericErrorMessage } = useContext(SnackbarContext);
  const { history } = props;

  const [createPage] = useMutation(CREATE_PAGE_MUTATION);
  const handleSave = async (page) => {
    try {
      const {
        data: {
          insert_page: { id },
        },
      } = await createPage({
        variables: {
          input: {
            title_en: page.title_en,
            content_en: page.content_en,
            title_gr: page.title_gr,
            content_gr: page.content_gr,
            url: page.url,
          },
        },
      });

      showMessage('Page has been successfully created !');

      return history.push(`/pages/${id}`);
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };

  return (
    <PageWrapper title="New Page" maxWidth="lg" goBackBtn="/pages">
      <PageForm onSave={handleSave} history={history} />
    </PageWrapper>
  );
};

NewPage.propTypes = {
  history: PropTypes.object,
};

export default NewPage;
