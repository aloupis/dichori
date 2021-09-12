import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './common/Layout';
import Dashboard from './components/dashboard/Dashboard';
import PostsList from './components/posts/PostsList';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import Gallery from './components/gallery/Gallery';
import Settings from './components/settings/Settings';
import PagesList from './components/pages/PagesList';
import NewPage from './components/pages/NewPage';
import EditPage from './components/pages/EditPage';
import Events from './components/events/Events';

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/posts" exact component={PostsList} />
      <Route path="/posts/new" exact component={NewPost} />
      <Route path="/posts/:id" component={EditPost} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/pages" exact component={PagesList} />
      <Route path="/pages/new" exact component={NewPage} />
      <Route path="/pages/:id" component={EditPage} />
      <Route path="/events" exact component={Events} />
    </Switch>
  </Layout>
);

export default Routes;
