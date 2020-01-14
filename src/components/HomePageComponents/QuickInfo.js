import React, { Component } from "react"
import { Section, Title, SectionButton, styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission"></Title>
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus voluptas deleniti officia voluptatum neque delectus,
            ullam, nihil impedit veniam nisi eaque officiis deserunt repellat
            iste sit quae quas soluta sint. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptate excepturi atque esse saepe.
            Animi mollitia nihil tempore esse tenetur illum ratione iusto.
            Cupiditate suscipit corporis dolores rerum nulla, quia iste?
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
