import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: #fff;
`;

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding-bottom: 80px;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin: 80px 0 30px 0;
    text-decoration: underline;
    text-decoration-color: #0066ff;
`;

const SkillsList = styled.div`
    display: flex;
    width: 100%;
`;

const SkillItem = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-right: 1.125rem;

    dl {
        display: flex;
        flex-direction: column;
    }

    dl div {
        margin-top: 5px;
        display: flex;
        align-items: center;
        padding: 6px 0;
    }

    dl div dt img {
        width: 30px;
        height: 30px;
        margin-right: 7px;
    }

    dl div dd {
        align-items: center;
        font-size: 1.225rem;
        display: inline-block;
        text-align: center;
    }
`;

const Skills = () => {
    return (
        <Wrapper>
            <ProjectWrapper>
                <Title>Skills</Title>

                <SkillsList>

                    <SkillItem>
                        <h1>Familliar</h1>
                        <dl>                       
                            <div>
                                <dt><img src={require('assets/img/react.svg')} alt="React.js"/></dt>
                                <dd>React.js</dd>
                            </div> 
                            <div>
                                <dt><img src={require('assets/img/react-router.svg')} alt="React-router"/></dt>
                                <dd>React-router</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/hooks.jpg')} alt="ReactHooks"/></dt>
                                <dd>React Hooks</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/redux.svg')} alt="Redux"/></dt>
                                <dd>Redux</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/mysql.svg')} alt="MySQL"/></dt>
                                <dd>MySQL</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/styled-components.png')} alt="Python"/></dt>
                                <dd>Styled-Components</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/sourcetree.svg')} alt="Python"/></dt>
                                <dd>SourceTree</dd>
                            </div>
                        </dl>
                    </SkillItem>

                    {/* Programming Languages */}
                    <SkillItem>
                        <h1>Tried</h1>
                        <dl>
                            <div>
                                <dt><img src={require('assets/img/koa.svg')} alt="Koa"/></dt>
                                <dd>Koa.js</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/vue.svg')} alt="Vue.js"/></dt>
                                <dd>Vue.js</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/django.svg')} alt="Django"/></dt>
                                <dd>Django</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('assets/img/sass.svg')} alt="Sass"/></dt>
                                <dd>Sass</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/docker-icon.svg')} alt="Docker"/></dt>
                                <dd>Docker</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/aws.svg')} alt="AWS"/></dt>
                                <dd>AWS</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/firebase.svg')} alt="Firebase"/></dt>
                                <dd>Firebase</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/mongodb.svg')} alt="MongoDB"/></dt>
                                <dd>MongoDB</dd>
                            </div>    
                            <div>
                                <dt><img src={require('assets/img/oracle.svg')} alt="OracleDB"/></dt>
                                <dd>Oracle DB</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/tomcat.svg')} alt="ApacheTomcat"/></dt>
                                <dd>Apache Tomcat</dd>
                            </div>
                            
                        </dl>
                    </SkillItem>

                    <SkillItem>
                        <h1>Languages</h1>
                        <dl>       
                            <div>
                                <dt><img src={require('assets/img/javascript.svg')} alt="JavaScript"/></dt>
                                <dd>JavaScript</dd>
                            </div>                 
                            <div>
                                <dt><img src={require('assets/img/java.svg')} alt="Java"/></dt>
                                <dd>Java</dd>
                            </div>
                            <div>
                                <dt><img src={require('assets/img/python.svg')} alt="Python"/></dt>
                                <dd>Python</dd>
                            </div>
                        </dl>
                    </SkillItem>

                </SkillsList>

            </ProjectWrapper>
        </Wrapper>
    );
}

export default Skills;