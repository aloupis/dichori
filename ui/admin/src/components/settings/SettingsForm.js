import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { CancelBtn } from '../../common/CancelBtn';
import { ActionFormButtons } from '../../common/ActionFormButtons';
import Home from './home/Home';
import Header from './header/Header';
import Footer from './footer/Footer';

const useStyles = makeStyles((theme) => ({
  control: { marginBottom: theme.spacing(2) },
}));

const SettingsForm = ({ settings, onSave, onError, history }) => {
  const classes = useStyles();

  const [header, setHeader] = useState(JSON.parse(settings.header_menu_config));
  const [footer, setFooter] = useState(JSON.parse(settings.footer_menu_config));

  const [imagePublicId, setImagePublicId] = useState(
    settings.home_image_public_id || ''
  );

  const [titleEn, setTitleEn] = useState(settings.home_title_en || '');
  const [titleGr, setTitleGr] = useState(settings.home_title_gr || '');

  const [contentEn, setContentEn] = useState(settings.home_content_en || '');
  const [contentGr, setContentGr] = useState(settings.home_content_gr || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave({
      header_menu_config: JSON.stringify(header),
      footer_menu_config: JSON.stringify(footer),
      home_title_en: titleEn,
      home_title_gr: titleGr,
      home_content_en: contentEn,
      home_content_gr: contentGr,
      home_image_public_id: imagePublicId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Home
        imagePublicId={imagePublicId}
        setImagePublicId={setImagePublicId}
        titleEn={titleEn}
        setTitleEn={setTitleEn}
        titleGr={titleGr}
        setTitleGr={setTitleGr}
        contentEn={contentEn}
        setContentEn={setContentEn}
        contentGr={contentGr}
        setContentGr={setContentGr}
      />
      <Header header={header} setHeader={setHeader} />
      <Footer footer={footer} setFooter={setFooter} />
      <div style={{ marginTop: '50px' }}>
        <Divider />
        <ActionFormButtons>
          <Box flexGrow={1} />
          <Box>
            <CancelBtn onClick={() => history.push(`/`)}>Cancel</CancelBtn>
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </ActionFormButtons>
      </div>
    </form>
  );
};

SettingsForm.propTypes = {
  settings: PropTypes.object,
  onSave: PropTypes.func,
  onError: PropTypes.func,
  history: PropTypes.any,
};

export default SettingsForm;
