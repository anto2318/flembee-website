import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { useSelector } from 'react-redux';

import Tech from './Tech';

import react from '@svg/reactjs-icon.svg';
import angular from '@svg/angular-icon.svg';
import vue from '@svg/vue-icon.svg';
import typescript from '@svg/types-icon.svg';
import html from '@svg/html-icon.svg';
import ios from '@svg/ios-icon.svg';
import android from '@svg/android-icon.svg';
import native from '@svg/react-icon.svg';
import flutter from '@svg/flutter-icon.svg';
import swift from '@svg/swift-icon.svg';
import kotlin from '@svg/kotlin-icon.svg';
import ionic from '@svg/ionic-icon.svg';
import objective from '@svg/objective-icon.svg'
import php from '@svg/php-icon.svg';
import node from '@svg/node-icon.svg';
import java from '@svg/java-icon.svg';
import python from '@svg/python-icon.svg';
import aws from '@svg/aws-icon.svg';
import gcloud from '@svg/gcloud-icon.svg';
import gradle from '@svg/gradle-icon.svg';
import jenkins from '@svg/jenkins-icon.svg';
import selenium from '@svg/selenium-icon.svg';
import mongo from '@svg/mongo-icon.svg';
import mysql from '@svg/mysql-icon.svg';
import ms from '@svg/ms-icon.svg';
import firebase from '@svg/firebase-icon.svg';
import dynamo from '@svg/dynamo-icon.svg';
import oracle from '@svg/oracle-icon.svg';
import postgre from '@svg/postgre-icon.svg';
import redis from '@svg/redis-icon.svg';
import wordpress from '@svg/wordpress-icon.svg';
import shopify from '@svg/shopify-icon.svg';

const Technologies = () => {

  const {
		messages,
	} = useSelector((state) => state.language);

  let fProps = [
    {
      color: "secondary",
      icon: react,
      title: "React Js",
      text: ''
    },
    {
      color: "secondary",
      icon: angular,
      title: "Angular Js",
      text: ''
    },
    {
      color: "secondary",
      icon: vue,
      title: "Vue",
      text: ''
    },
    {
        color: "secondary",
        icon: typescript,
        title: "TypeScript",
        text: ''
    },
    {
      color: "secondary",
      icon: html,
      title: "HTML5",
      text: ''
    },
    {
    color: "secondary",
    icon: ios,
    title: "iOS",
    text: ''
    },
    {
    color: "secondary",
    icon: android,
    title: "Android",
    text: ''
    },
    {
    color: "secondary",
    icon: native,
    title: "React Native",
    text: ''
    },
    {
    color: "secondary",
    icon: flutter,
    title: "Flutter",
    text: ''
    },
    {
    color: "secondary",
    icon: swift,
    title: "Swift",
    text: ''
    },
    {
    color: "secondary",
    icon: kotlin,
    title: "Kotlin",
    text: ''
    },
    {
    color: "secondary",
    icon: ionic,
    title: "Ionic",
    text: ''
    },
    {
    color: "secondary",
    icon: objective,
    title: "Objective C",
    text: ''
    },
    {
    color: "secondary",
    icon: php,
    title: "PHP",
    text: ''
    },
    {
    color: "secondary",
    icon: node,
    title: "Node Js",
    text: ''
    },
    {
    color: "secondary",
    icon: java,
    title: "Java",
    text: ''
    },
    {
    color: "secondary",
    icon: python,
    title: "Python",
    text: ''
    },
    {
    color: "secondary",
    icon: aws,
    title: "AWS",
    text: ''
    },
    {
    color: "secondary",
    icon: gcloud,
    title: "Google Cloud",
    text: ''
    },
    {
    color: "secondary",
    icon: gradle,
    title: "Gradle",
    text: ''
    },
    {
    color: "secondary",
    icon: jenkins,
    title: "Jenkins",
    text: ''
    },
    {
    color: "secondary",
    icon: selenium,
    title: "Selenium",
    text: ''
    },
    {
    color: "secondary",
    icon: mongo,
    title: "Mongo DB",
    text: ''
    },
    {
    color: "secondary",
    icon: mysql,
    title: "MySQL",
    text: ''
    },
    {
    color: "secondary",
    icon: ms,
    title: "MsSQL",
    text: ''
    },
    {
    color: "secondary",
    icon: firebase,
    title: "Firebase",
    text: ''
    },
    {
    color: "secondary",
    icon: dynamo,
    title: "Dynamo DB",
    text: ''
    },
    {
    color: "secondary",
    icon: oracle,
    title: "Oracle",
    text: ''
    },
    {
    color: "secondary",
    icon: postgre,
    title: "PostgreSQL",
    text: ''
    },
    {
    color: "secondary",
    icon: redis,
    title: "Redis",
    text: ''
    },
    {
    color: "secondary",
    icon: wordpress,
    title: "Wordpress",
    text: ''
    },
    {
    color: "secondary",
    icon: shopify,
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
  <div className="bg-light" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
    	<Container>
            <div style={{textAlign: 'center'}}>
                <h2>{ messages.technologiesTitle }</h2>
                <p className="lead">{ messages.technologiesSubTitle }</p>
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
