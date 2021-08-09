import React from 'react';
import LNavbar from './../components/landing/LNavbar';
import LHeader from './../components/landing/LHeader';
import LFeatures from './../components/landing/LFeatures';
import ClientBanner from './../components/landing/ClientBanner';
import LBlogPosts from './../components/landing/LBlogPosts';
import LTestimonials from './../components/landing/LTestimonials';
import LContact from './../components/landing/LContact';
import About from './../components/landing/About';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <LNavbar />
        <LHeader />
        <ClientBanner />
        <About />
        <LFeatures />
        {/* <LBlogPosts />
        <LTestimonials /> */}
        <LContact />
      </div>
    );
  };
};

export default Landing;
