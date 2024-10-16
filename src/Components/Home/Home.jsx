import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";
import MainBanner from "../Main-banner/MainBanner";

 const Home = () => {
    return (
        <>
        <MainBanner></MainBanner>
        <JobCategory></JobCategory>
        <FeaturedJob></FeaturedJob>
        </>
    );
};

export default Home;