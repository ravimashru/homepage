import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProfileHeader from '../components/profile-header';
import Technologies from '../components/technologies';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileHeader />
    <Technologies />
  </Layout>
);

export default IndexPage;
