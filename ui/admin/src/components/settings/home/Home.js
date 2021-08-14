import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AssetContainer from '../../../common/media/asset/AssetContainer';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = React.lazy(() => import('react-quill'));

const useStyles = makeStyles((theme) => ({
  quill: {
    height: '100px',
  },
  control: { marginBottom: theme.spacing(2) },
}));

const formats = [
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'align',
  'color',
  'background',
  'image',
  'link',
  'video',
  'mention',
];

const Home = ({
  imagePublicId,
  setImagePublicId,
  titleEn,
  setTitleEn,
  titleGr,
  setTitleGr,
  contentEn,
  setContentEn,
  contentGr,
  setContentGr,
}) => {
  const classes = useStyles();
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline'], // toggled buttons
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'], // add's image support
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ],
    }),

    [] // TODO: fix eslint error somehow
  );
  console.log({ imagePublicId });
  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <Typography variant="h6">Home</Typography>
      </div>
      <AssetContainer
        url="home"
        publicId={imagePublicId || ''}
        acceptedFileTypes="image/jpeg,image/png,image/gif"
        updateEntity={setImagePublicId}
      />
      <div style={{ marginBottom: '10px' }} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{ marginBottom: '15px' }}>
            <Typography variant="h6">English</Typography>
          </div>
          <TextField
            id="title_en"
            name="title_en"
            label="Title"
            variant="outlined"
            className={classes.control}
            onChange={(evt) => setTitleEn(evt.target.value)}
            fullWidth
            value={titleEn || ''}
          />

          <div>
            <ReactQuill
              id="content_en"
              name="content_en"
              theme="snow"
              className={classes.quill}
              modules={modules}
              formats={formats}
              onChange={(value) => setContentEn(value)}
              value={contentEn}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginBottom: '15px' }}>
            <Typography variant="h6">Greek</Typography>
          </div>
          <TextField
            id="title_gr"
            name="title_gr"
            label="Title"
            variant="outlined"
            className={classes.control}
            onChange={(evt) => setTitleGr(evt.target.value)}
            fullWidth
            value={titleGr || ''}
          />
          <div>
            <ReactQuill
              id="content_gr"
              name="content_gr"
              theme="snow"
              className={classes.quill}
              modules={modules}
              formats={formats}
              onChange={(value) => setContentGr(value)}
              value={contentGr}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

Home.propTypes = {
  imagePublicId: PropTypes.string,
  setImagePublicId: PropTypes.func,
  titleEn: PropTypes.string,
  setTitleEn: PropTypes.func,
  titleGr: PropTypes.string,
  setTitleGr: PropTypes.func,
  contentEn: PropTypes.string,
  setContentEn: PropTypes.func,
  contentGr: PropTypes.string,
  setContentGr: PropTypes.func,
};

export default Home;
