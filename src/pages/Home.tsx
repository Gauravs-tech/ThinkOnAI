import PageTransition from '../components/common/PageTransition';
import Hero from '../components/home/Hero';
import WhySubscribe from '../components/home/WhySubscribe';
import FeaturedContent from '../components/home/FeaturedContent';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <PageTransition>
      <div className="w-full">
        <Hero />

        <FeaturedContent />
        <WhySubscribe />
        {/* <Testimonials /> */}
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Home;
