import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'


class FAQItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <li>
                <span className="faq-link" onClick={this.onClickHandler} aria-expanded="true">{!this.state.isOpen ? "+ " : "- "}{this.props.question}</span>
                <div className={this.state.isOpen ? "" : "collapse"}>
                    <p>
                        {this.props.answer}
                    </p>
                </div>
            </li>
        )
    }
    onClickHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

const FAQ = ({ data }) => {
    return (
        <section id="faq">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12" className="text-center">
                        <h2 className="text-uppercase section-heading">FAQ</h2>
                    </Col>
                    <Col lg="9">
                        <ul id="faq-list">
                            {data.allAirtable.edges.filter( node => {
                                return node.node.data.Answer !== null && node.node.data.Question !== null;
                            }).map((node, index) => {
                                return (
                                    <FAQItem key={index} question={node.node.data.Question} answer={node.node.data.Answer} />
                                )
                            })
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default () => (
    <StaticQuery
        query={graphql`
        query {
            allAirtable {
                edges {
                    node {
                        data {
                            Answer
                            Question
                        }
                    }
                }
            }
        }
      `}
        render={data => (
            <>
                <FAQ data={data} />
            </>
        )}
    />
)


