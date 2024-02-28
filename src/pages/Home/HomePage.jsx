import { useEffect } from "react";
import Header from "../../components/Header/Navbar";
import MediaCard from "../../components/Job/Job";
import Footer from "../../components/Header/Footer";
import SplitType from "split-type";
import { gsap } from "gsap";
import SideCard from "../../components/Header/SideCard";
import useGetAllJobs from "../../hooks/useGetAllJobs";
import { Card, CardContent, Skeleton } from "@mui/material";
import Carousel from "../../components/Carousel";

const HomePage = () => {
  const { jobs, loading } = useGetAllJobs();

  useEffect(() => {
    // Your SplitType logic
    let text = new SplitType("#text");
    let characters = document.querySelectorAll(".char");

    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }

    // Using gsap instead of gasp
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    });
  }, []);
  return (
    <>
      <Header />
      <div style={{ marginTop: "20px" }}>
        <h3
          id="text"
          className="text-6xl text-center text-0b5f62 font-lora-bold"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          FreelancerHub bids you a warm welcome!!
        </h3>
      </div>
      <Carousel />
      <h5
        id="text"
        className="text-3xl text-#000000 font-lora-bold mt-10 ml-4"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        Jobs You Might Like:-
      </h5>
      <div className="flex justify-between w-full">
        <div className="w-2/3">
          {loading
            ? [...Array(3)].map((item) => <LoadingSkeleton key={item} />)
            : jobs.map((job) => <MediaCard key={job.id} job={job} />)}
        </div>
        <div className="mr-4">
          <SideCard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

const LoadingSkeleton = () => {
  return (
    <Card className="m-4 border border-gray-200 shadow-6xl">
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </CardContent>
    </Card>
  );
};
