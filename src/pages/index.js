import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProfileHeader from '../components/profile-header';
import Technologies from '../components/technologies';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProfileHeader />
    {/* <Technologies /> */}
    <Projects />
  </Layout>
);

export default IndexPage;
