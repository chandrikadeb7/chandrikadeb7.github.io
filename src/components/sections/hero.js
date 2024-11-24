import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 20px 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello! My name is</h1>;
  const two = <h2 className="big-heading">Alex Godwin</h2>;
  const three = <h3 className="medium-heading">Computer Science Undergraduate | Solutions Specialist</h3>;
  const four = (
    <>
      <p>
        <b>Glad to e-meet you!</b>
      </p>

      <p>
      I am Alex Godwin, a third-year undergraduate at <a href="https://www.surrey.ac.uk">Surrey University</a>, currently doing a Technical Solutions placement at <a href="https://www.microsoft.com">  Microsoft</a>. 
    </p>



      <p> When not working on solutions, You can find me writing blogs on {' '}
        <a href="https://medium.com/@alexgodwinsjc611">Medium</a> {' '} , capturing images on {' '}<a href="http://vsco.co/alex-godwin">VSCO</a> {' '}, or rating movies on {' '}
        <a href="https://boxd.it/36Rin">Letterboxd</a>.
      </p>

      <p>
      Additionally, I mentor students applying for placements and jobs in the UK, offering guidance on crafting compelling CVs, effective networking strategies, and finding opportunities.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="https://linktr.ee/alex_godwin?utm_source=linktree_admin_share" rel="noreferrer">
  Reach out to me!
</a>

  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
