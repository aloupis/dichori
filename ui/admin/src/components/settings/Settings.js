import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';
import PageWrapper from '../../common/PageWrapper';
import SettingsForm from './SettingsForm';
import Loading from '../../common/Loading';
import { SnackbarContext } from '../../SnackbarContext';
import { SETTINGS_QUERY, UPDATE_SETTINGS_MUTATION } from './model';

const Settings = ({ history }) => {
  const { data, loading, error } = useQuery(SETTINGS_QUERY);
  const { showMessage, showGenericErrorMessage } = useContext(SnackbarContext);

  const [updateSettings] = useMutation(UPDATE_SETTINGS_MUTATION);
  const handleSave = async (settings) => {
    try {
      await updateSettings({
        variables: {
          set: {
            header_menu_config: settings.header_menu_config,
            footer_menu_config: settings.footer_menu_config,
            home_title_gr: settings.home_title_gr,
            home_title_en: settings.home_title_en,
            home_content_gr: settings.home_content_gr,
            home_content_en: settings.home_content_en,
          },
        },
        refetchQueries: [`SETTINGS_QUERY`],
      });
      showMessage('Settings have been successfully updated!');
      return history.push(`/settings`);
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <PageWrapper title="Settings" maxWidth="lg">
      <SettingsForm
        onSave={handleSave}
        settings={data.settings}
        history={history}
      />
    </PageWrapper>
  );
};

Settings.propTypes = {
  history: PropTypes.object,
};

export default Settings;
