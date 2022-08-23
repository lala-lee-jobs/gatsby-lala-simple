import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout/layout'

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Lala的Gatsby網站</title>
        <h1>Welcome to Lala的Gatsby網站</h1>
        <p>Gatsby Try Try</p>
        <Link to="/intro/about/">About</Link>
      </main>
    </Layout>
  )
}

export default IndexPage
