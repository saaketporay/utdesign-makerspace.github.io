import React from "react"

import Layout from "../components/layout"
import Services from "../components/services"
import Calendar from "../components/calnedarLoadable"
import Team from "../components/team"
import FAQ from "../components/faq"
import Nav from "../components/nav"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Nav></Nav>
    <Header></Header>
    <Services />
    <Calendar />
    <Team />
    <FAQ />
  </Layout>
)

export default IndexPage
