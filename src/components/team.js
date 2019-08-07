import React from "react"
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'
import {graphql, StaticQuery} from 'gatsby'


const SocialMedia = (props) => {
    const { type, url } = props;
    let Icon = null;
    switch (type) {
        case "github":
            Icon = faGithub;
            break;
        case "linkedin":
            Icon = faLinkedin;
            break;
        case "twitter":
            Icon = faTwitter;
            break;
        default:
            Icon = null;
            break;
    }
    return (
        <li className="list-inline-item">
            <a className={`${type}-btn`} href={url} title={`View on ${type}`}>
                <FontAwesomeIcon title={`${type} icon`} icon={Icon} />
            </a>
        </li>
    )
}

const Member = (props) => {
    const { name, title, socialMedia, img } = props;
    return (
        <Col xs="12" sm="6" md="4">
            <div className="team-member">
                <Image className="rounded-circle mx-auto" src={img} style={{ "backgroundColor": "#C1393D" }} alt={`Picture of ${name}, who is the ${title}`} />
                <h4 className="team-name">{name}</h4>
                <p className="text-muted">{title}</p>
                <ul className="list-inline social-buttons">
                    {
                        socialMedia.map((item, id) => {
                            console.log(item.type, item.url)
                            if(item.url === null){
                                return "";
                            }
                            return (
                                <SocialMedia type={item.type} url={item.url} key={id} />
                            )
                        })
                    }
                </ul>
            </div>
        </Col>
    )
}
Member.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    socialMedia: PropTypes.array,

}

const Team = ({data}) => {
    
    return (
            <section id="team" className="bg-dark">
                <Container>
                    <Row>
                        <Col sm="12" className="text-center">
                            <h2 className="text-uppercase section-heading">Team</h2>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {
                            data["allAirtable"].edges.filter(edge => {
                                return edge.node.data.FirstName !== undefined && edge.node.data.LastName !== undefined && edge.node.data.FirstName !== null && edge.node.data.LastName !== null;
                            }).map( (edge, index) => {
                                const {FirstName, LastName, Github, Linkedin, Twitter, Role} = edge.node.data;
                                return <Member key={index} name={FirstName + " " + LastName} title={Role} socialMedia={[{ type: "github", url: Github }, { type: "linkedin", url: Linkedin }, {type: "twitter", url: Twitter}]} img={require(`../dist/img/team/${FirstName}-Photo.png`)}></Member>
                            })
                        }
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
                            FirstName,
                            LastName,
                            Role,
                            Github,
                            Linkedin,
                            Twitter
                        }
                    }
                }
            }
        }
      `}
        render={data => (
            <>
                <Team data={data} />
            </>
        )}
    />
)