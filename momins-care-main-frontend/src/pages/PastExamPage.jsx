import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import phy1 from "../assets/past exam image/1.png";
import engUniversityImage3 from "../assets/eng-logos/3.png";
import engUniversityImage4 from "../assets/eng-logos/4.png";
import engUniversityImage5 from "../assets/eng-logos/5.png";
import engUniversityImage6 from "../assets/eng-logos/6.png";
import engUniversityImage7 from "../assets/eng-logos/7.png";
import engUniversityImage8 from "../assets/eng-logos/8.png";
import axios from "axios";
import PastExam from "../components/PastExam/PastExam";
import Loading from "../components/loading";

function PastExamPage() {
  const [loading, setLoading] = useState(true);
  const [pastExam, setPastExam] = useState([]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/past-exam`, {
        uid: "2sICnWICDrMOpn3Du4qpZr0V9Ca1",
      })
      .then((res) => {
        setPastExam(res.data.pastExams);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col p-4 max-w-7xl m-8 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Past Exams</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pastExam
            .slice()
            .reverse()
            .map((data, index) => (
              <PastExam key={index} data={data} />
            ))}
        </div>
      </div>
    </>
  );
}
export default PastExamPage;
