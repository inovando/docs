/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('intro.html')}>Introdução</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'Collection e environment do Postman testados com garantia da qualidade dos endpoints.',
            image: `${baseUrl}img/postman.gif`,
            imageAlign: 'left',
            title: 'Postman 100% testado',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Reconhece algum desses logotipos? Então você já está (quase) pronto pra aproveitar melhor cada template que desenvolvemos no formato open source! Isso mesmo! Você também pode contribuir com os códigos presentes nessa documentação e nos repositórios da nossa organização do github.',
            image: `${baseUrl}img/techs.svg`,
            imageAlign: 'right',
            title: 'Tecnologias adotadas pela empresa',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Estrutura de diretórios e gerador de CRUD obedecendo as melhores práticas (ESLint / Prettier / ES7/8/9/etc)',
            image: `${baseUrl}img/react.svg`,
            imageAlign: 'top',
            title: 'Front-end',
          },
          {
            content: 'PostgreSQL, gerador de CRUD, collections de exemplo do Postman, envio de e-mails e mais',
            image: `${baseUrl}img/adonis.svg`,
            imageAlign: 'top',
            title: 'Back-end',
          },
          {
            content: 'Organização de rotas comuns, fluxo de login, controle de diferentes ambientes (.env), hooks para facilitar "infinite scroll" e mais',
            image: `${baseUrl}img/react-native.png`,
            imageAlign: 'top',
            title: 'Mobile',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
