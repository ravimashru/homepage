import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReadingList = () => (
  <Layout>
    <SEO title="Reading List" />
    <h1>Hi from the reading list</h1>
    <p>Welcome to my reading list</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReadingList
