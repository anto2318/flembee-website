import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Tech from './Tech';

const Technologies = () => {
  let fProps = [
    {
      color: "secondary",
      icon: "reactjs-icon.svg",
      title: "React Js",
      text: ''
    },
    {
      color: "secondary",
      icon: "angular-icon.svg",
      title: "Angular Js",
      text: ''
    },
    {
      color: "secondary",
      icon: "vue-icon.svg",
      title: "Vue",
      text: ''
    },
    {
        color: "secondary",
        icon: "types-icon.svg",
        title: "TypeScript",
        text: ''
    },
    {
      color: "secondary",
      icon: "html-icon.svg",
      title: "HTML5",
      text: ''
    },
    {
    color: "secondary",
    icon: "ios-icon.svg",
    title: "iOS",
    text: ''
    },
    {
    color: "secondary",
    icon: "android-icon.svg",
    title: "Android",
    text: ''
    },
    {
    color: "secondary",
    icon: "react-icon.svg",
    title: "React Native",
    text: ''
    },
    {
    color: "secondary",
    icon: "flutter-icon.svg",
    title: "Flutter",
    text: ''
    },
    {
    color: "secondary",
    icon: "swift-icon.svg",
    title: "Swift",
    text: ''
    },
    {
    color: "secondary",
    icon: "kotlin-icon.svg",
    title: "Kotlin",
    text: ''
    },
    {
    color: "secondary",
    icon: "ionic-icon.svg",
    title: "Ionic",
    text: ''
    },
    {
    color: "secondary",
    icon: "objective-icon.svg",
    title: "Objective C",
    text: ''
    },
    {
    color: "secondary",
    icon: "php-icon.svg",
    title: "PHP",
    text: ''
    },
    {
    color: "secondary",
    icon: "node-icon.svg",
    title: "Node Js",
    text: ''
    },
    {
    color: "secondary",
    icon: "java-icon.svg",
    title: "Java",
    text: ''
    },
    {
    color: "secondary",
    icon: "python-icon.svg",
    title: "Python",
    text: ''
    },
    {
    color: "secondary",
    icon: "aws-icon.svg",
    title: "AWS",
    text: ''
    },
    {
    color: "secondary",
    icon: "gcloud-icon.svg",
    title: "Google Cloud",
    text: ''
    },
    {
    color: "secondary",
    icon: "gradle-icon.svg",
    title: "Gradle",
    text: ''
    },
    {
    color: "secondary",
    icon: "jenkins-icon.svg",
    title: "Jenkins",
    text: ''
    },
    {
    color: "secondary",
    icon: "selenium-icon.svg",
    title: "Selenium",
    text: ''
    },
    {
    color: "secondary",
    icon: "mongo-icon.svg",
    title: "Mongo DB",
    text: ''
    },
    {
    color: "secondary",
    icon: "mysql-icon.svg",
    title: "MySQL",
    text: ''
    },
    {
    color: "secondary",
    icon: "ms-icon.svg",
    title: "MsSQL",
    text: ''
    },
    {
    color: "secondary",
    icon: "firebase-icon.svg",
    title: "Firebase",
    text: ''
    },
    {
    color: "secondary",
    icon: "dynamo-icon.svg",
    title: "Dynamo DB",
    text: ''
    },
    {
    color: "secondary",
    icon: "oracle-icon.svg",
    title: "Oracle",
    text: ''
    },
    {
    color: "secondary",
    icon: "postgre-icon.svg",
    title: "PostgreSQL",
    text: ''
    },
    {
    color: "secondary",
    icon: "redis-icon.svg",
    title: "Redis",
    text: ''
    },
    {
    color: "secondary",
    icon: "wordpress-icon.svg",
    title: "Wordpress",
    text: ''
    },
    {
    color: "secondary",
    icon: "shopify-icon.svg",
    title: "Shopify",
    text: ''
    }
  ]

  let features = fProps.map((feature, index) => {
    return (
      <Col xs="6" md="2" key={`feature-${index}`}>
        <Tech {...feature} />
      </Col>
    );
  });

  return (
    <div className="features">
    	<Container>
            <div style={{textAlign: 'center'}}>
                <h2>Technologies we work with</h2>
                <p className="lead">We work with the best innovative technologies for development.</p>
                <br />
            </div>
    		<Row style={{margin: '0 auto', textAlign: 'center'}}>
                {features}
    		</Row>
    	</Container>
    </div>
  );
};

export default Technologies;
