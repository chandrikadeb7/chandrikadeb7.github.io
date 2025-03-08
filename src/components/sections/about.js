import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['SEO', 'Content Marketing', 'Conversion Rate Optimization', 'Meta Ads', 'Zoho CRM', 'Tableau', 'HTML/CSS', 'Python'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            With a core specialization in Marketing &amp; Strategy, I've orchestrated impactful
             digital marketing campaigns for {' '}
             <a href="https://digeca.tatasteel.com">DigECA</a> {' '}, an e-Commerce steel buying website for MSMEs at{' '} 
             <a href="https://www.tatasteel.com">Tata Steel</a>.
            </p>

            <p>
            I have also spearheaded employer branding initiatives for {' '}
            <a href="https://drive.google.com/file/d/1w-uN9jb86pxFXPYMDu_78P-d1CZJAx3V/view?usp=sharing">
              Aditya Birla Fashion and Retail</a>, {' '} resulting in a remarkable 37% surge in consumer engagement 
              during my remote live project as part of my MBA journey.
            </p>

            <p>
            During my tenure at {' '} <a href="https://www.amdocs.com">Amdocs</a>, {' '} 
            where I served as a Software Developer, I had the honor of being selected as one of 16 elite {' '} 
            <a href="https://drive.google.com/file/d/16BGu5InZZDGCtoWas560ezwKsgVBKbI9/view?usp=sharing">Innovation Agents</a>.
            </p>

            <p>
            Moreover, my role as a {' '} <a href="https://drive.google.com/file/d/1iRTZfE7v5Y99BYZVxevaGBVtF90t-TOb/view?usp=sharing">
              Placement Coordinator</a> {' '} at IIM Rohtak saw me cultivate over 30 new corporate relationships, culminating in a 
              remarkable 42% boost in campus placements.
            </p>

            <p>My skills are not limited to this list!</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
