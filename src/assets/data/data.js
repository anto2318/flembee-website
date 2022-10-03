import react from '../svg/reactjs-icon.svg';
import angular from '../svg/angular-icon.svg';
import vue from '../svg/vue-icon.svg';
import typescript from '../svg/types-icon.svg';
import html from '../svg/html-icon.svg';
import ios from '../svg/ios-icon.svg';
import android from '../svg/android-icon.svg';
import native from '../svg/react-icon.svg';
import flutter from '../svg/flutter-icon.svg';
import swift from '../svg/swift-icon.svg';
import kotlin from '../svg/kotlin-icon.svg';
import ionic from '../svg/ionic-icon.svg';
import objective from '../svg/objective-icon.svg'
import php from '../svg/php-icon.svg';
import node from '../svg/node-icon.svg';
import java from '../svg/java-icon.svg';
import python from '../svg/python-icon.svg';
import aws from '../svg/aws-icon.svg';
import gcloud from '../svg/gcloud-icon.svg';
import gradle from '../svg/gradle-icon.svg';
import jenkins from '../svg/jenkins-icon.svg';
import selenium from '../svg/selenium-icon.svg';
import mongo from '../svg/mongo-icon.svg';
import mysql from '../svg/mysql-icon.svg';
import ms from '../svg/ms-icon.svg';
import firebase from '../svg/firebase-icon.svg';
import dynamo from '../svg/dynamo-icon.svg';
import oracle from '../svg/oracle-icon.svg';
import postgre from '../svg/postgre-icon.svg';
import redis from '../svg/redis-icon.svg';
import wordpress from '../svg/wordpress-icon.svg';
import shopify from '../svg/shopify-icon.svg';

import img01 from "../svg/web-development.svg";
import img02 from "../svg/mobile-development.svg";
import img03 from "../svg/ui-uix.svg";
import img04 from "../svg/devops.svg";
import img05 from "../svg/qa.svg";

import img06 from "../images/bm.png";
import img07 from "../images/arambee.png";
import img08 from "../images/krypto.png";
import img09 from "../images/kboom.png";

import ava01 from "../images/ava-01.png";
import ava02 from "../images/ava-02.png";
import ava03 from "../images/ava-03.png";
import ava04 from "../images/ava-04.png";
import ava05 from "../images/ava-05.png";
import ava06 from "../images/ava-06.png";

export const SERVICES = (language) => [
  {  
    image: img01,  
    name: language.service1Title, 
    background: "linear-gradient(rgb(209, 211, 246) 0%, rgb(209, 211, 246) 100%)", 
    description: language.service1Text,  
  },
  {  
    image: img02,  
    name: language.service2Title,
    background: "linear-gradient(rgb(230, 221, 244) 0%, rgb(230, 221, 244) 100%)",  
    description: language.service2Text,  
  },
  {  
    image: img03,  
    name: language.service3Title,
    background: "linear-gradient(rgb(246, 214, 214) 0%, rgb(246, 214, 214) 100%)",  
    description: language.service3Text,  
  },
  {  
    image: img04,  
    name: language.service4Title,  
    background: "linear-gradient(rgb(186, 228, 244) 0%, rgb(186, 228, 244) 100%)",
    description: language.service4Text,  
  },
  {  
    image: img05,  
    name: language.service5Title, 
    background: "linear-gradient(rgb(244, 220, 204) 0%, rgb(244, 220, 204) 100%)", 
    description: language.service5Text,  
  },
];

export const METHODOLOGY = (language) => [
  {
    title: language.discoverTitle,
    desc: language.discoverText,
    icon: "ri-lightbulb-line",
  },

  {
    title: language.designTitle,
    desc: language.designText,
    icon: "ri-pencil-line",
  },

  {
    title: language.developTitle,
    desc: language.developText,
    icon: "ri-computer-line",
  },

  {
    title: language.deliverTitle,
    desc: language.deliverText,
    icon: "ri-rocket-line",
  },
];

export const TECHNOLOGIES = [
  {
    name: "React",
    image: react,
  },
  {
    name: "Angular",
    image: angular,
  },
  {
    name: "Vue",
    image: vue,
  },
  {
    name: "Typescript",
    image: typescript,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "iOS",
    image: ios,
  },
  {
    name: "Android",
    image: android,
  },
  {
    name: "Native",
    image: native,
  },
  {
    name: "Flutter",
    image: flutter,
  },
  {
    name: "Swift",
    image: swift,
  },
  {
    name: "Kotlin",
    image: kotlin,
  },
  {
    name: "Ionic",
    image: ionic,
  },
  {
    name: "Objective",
    image: objective,
  },
  {
    name: "PHP",
    image: php,
  },
  {
    name: "Node",
    image: node,
  },
  {
    name: "Java",
    image: java,
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "AWS",
    image: aws,
  },
  {
    name: "gcloud",
    image: gcloud,
  },
  {
    name: "Gradle",
    image: gradle,
  },
  {
    name: "Jenkins",
    image: jenkins,
  },
  {
    name: "Selenium",
    image: selenium,
  },
  {
    name: "Mongo",
    image: mongo,
  },
  {
    name: "Mysql",
    image: mysql,
  },
  {
    name: "Ms",
    image: ms,
  },
  {
    name: "Firebase",
    image: firebase,
  },
  {
    name: "Dynamo",
    image: dynamo,
  },
  {
    name: "Oracle",
    image: oracle,
  },
  {
    name: "Postgre",
    image: postgre,
  },
  {
    name: "Redis",
    image: redis,
  },
  {
    name: "Wordpress",
    image: wordpress,
  },
  {
    name: "Shopify",
    image: shopify,
  },
];

export const PROJECTS = (language) => [
  {  
    image: img09,  
    name: language.project4Title,  
    description: language.project4Text,  
  },
  {  
    image: img06,  
    name: language.project1Title, 
    description: language.project1Text,  
  },
  {  
    image: img07,  
    name: language.project2Title,
    description: language.project2Text,  
  },
  {  
    image: img08,  
    name: language.project3Title, 
    description: language.project3Text,  
  },
];

export const SPACES_DATA = [
  {
    id: "10",
    title: "La Dolce Vita",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img01,
    location: "Av San Juan Bosco | Altamira",
    creatorImg: ava01,
    price: 4.00,
  },

  {
    id: "11",
    title: "Madame Blac",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img02,
    location: "Calle Madrid | Las Mercedes",
    creatorImg: ava02,
    price: 5.00,
  },

  {
    id: "12",
    title: "El Garage Birra",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img03,
    location: "El Garage Birra Jardín | Sebucán",
    creatorImg: ava03,
    price: 6.00,
  },

  {
    id: "13",
    title: "Canel",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img04,
    location: "Av. San Juan Bosco | La Castellana",
    creatorImg: ava04,
    price: 5.00,
  },
];

export const SELLER__DATA = [
  {
    id: "19",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava01,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "20",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava02,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "21",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava03,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "22",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava04,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "23",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava05,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "24",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava06,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "25",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava01,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "26",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava02,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "27",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava03,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "28",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Ryan Carder",
    sellerImg: ava04,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "29",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava05,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },

  {
    id: "30",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
    sellerName: "Trista Francis",
    sellerImg: ava06,
    price: 5.89,
    fbUrl: "#",
    instaUrl: "#",
    twitUrl: "#",
  },
];