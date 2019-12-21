import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProfileHeader from '../components/profile-header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileHeader />
  </Layout>
);

export default IndexPage;
