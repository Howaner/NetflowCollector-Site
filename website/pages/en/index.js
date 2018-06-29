/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('getting-started.html', language)}>Getting Started</Button>
            <Button href="https://github.com/Howaner/NetflowCollector">GitHub</Button>
            <Button href="https://ci.howaner.de/job/NetflowCollector/">Download</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'NetflowCollector is open-source and anyone can customize it according to their needs',
        image: imgUrl('github.svg'),
        imageAlign: 'top',
        title: 'Open Source',
      },
      {
        content: 'NetflowCollector can run nearly on every plattform, even on a raspberry pi',
        image: imgUrl('java.svg'),
        imageAlign: 'top',
        title: 'Written in Java',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'The software starts a udp server and waits for flowsets from a router. After flows are received, the flows are written into database. This gives you excelent abilities to create own reporting/diagram scripts',
        textAlign: 'left',
        image: imgUrl('logo.png'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const TryOut = props => {
  let language = props.language || '';
  let gettingStarted = docUrl('getting-started.html', language);
  let list = `
  1. <a href="https://ci.howaner.de/job/NetflowCollector/" target="_blank">Download</a> software
  2. Setup a MongoDB
  3. Start software for config creation
  4. Customize config.json and fill database data
  <div class="pluginWrapper buttonWrapper bigButton"><a class="button" href="` + gettingStarted + `" target="_self">Getting Started</a></div>
  `;

  return (
    <Block id="try">
      {[
        {
          image: imgUrl('download-icon.png'),
          imageAlign: 'left',
          title: 'Try It Out',
          content: list
        }
      ]}
    </Block>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Description />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
