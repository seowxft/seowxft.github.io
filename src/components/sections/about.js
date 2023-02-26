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
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
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
      top: 20px;
      left: 20px;
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

  // const skills = [
  //   'cognitive neuroscience',
  //   'computational psychiatry',
  //   'computational psychotherapy',
  //   'transdiagnostic psychiatry',
  // ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I am a London-based cognitive neuroscientist from{' '}
              <a href="https://en.wikipedia.org/wiki/Singapore" target="_blank" rel="noreferrer">
                sunny Singapore
              </a>
              .
            </p>
            <p>
              I am a graduate of{' '}
              <a href="https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/neuroscience-msci">
                UCL Msci Neuroscience
              </a>
              , during which I completed intern projects with Dr{' '}
              <a href="https://scholar.google.de/citations?user=eEGGCiUAAAAJ">Raphael Köster</a> and
              a Msci project with Dr{' '}
              <a href="https://www.psych.ox.ac.uk/team/laurence-hunt">Laurence Hunt</a>. I then
              worked with Prof <a href="http://metacoglab.org/">Steve Fleming</a> of the MetaLab
              before my PhD at <a href="https://psychology.tcd.ie/">Trinity College Dublin</a>{' '}
              supervised by Dr <a href="https://gillanlab.com/">Claire Gillan</a>.
            </p>
            <p>
              My research interests lie in understanding the role of{' '}
              <strong>decision making and metacognition</strong> in mental health using a
              combination of transdiagnostic, dimensional approaches with web-based and in-lab
              behavioural, neuroimaging (EEG/MEG) and computational methods. Currently, I am working
              with Prof <a href="https://devcompsy.org">Tobias Hauser</a> in the DevComPsy Lab,
              where I focus on uncovering the mechanisms underlying{' '}
              <strong>obsessive-compulsive disorder (OCD)</strong> and its{' '}
              <strong>psychotherapy</strong> towards predicting and improving treatment outcomes for
              the individual.
            </p>
            <p>
              I also now organise the{' '}
              <a href="https://seowxft.github.io/cptalks/">
                Computational Psychiatry Seminar Series
              </a>
              .
            </p>
            <p>
              On the side, I am a digital hobby artist who paints characters from the numerous anime
              series I voraciously consume. I also play{' '}
              <a href="https://genshin.hoyoverse.com/en/">RPG games</a> casually.
            </p>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
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
