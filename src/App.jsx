import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Searchbar from "./Components/Searchbar/Searchbar";
import JabCard from "./Components/JabCard/JabCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
// import JobData from "./DammyData";
import { query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

import NewJobPost from "./NewJobPost/NewJobPost";
// import { firestore } from "./firbase.config";
// import Alert from "./NewJobPost/NewJobPost";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const resp = await getDocs(q);
    resp.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobsCutsom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("location", "==", jobCriteria.location),
      where("experience", "==", jobCriteria.experience),
      orderBy("postedOn", "desc")
    );
    const resp = await getDocs(q);
    resp.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  
  const PostAJob = async (jobpost) => {
    try {
      const docRef = await addDoc(collection(db, "jobs"), {
        ...jobpost,
        postedOn: serverTimestamp(),
      });
      toast.success('Job posted successfully', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
      return ({mess: "Job posted successfully"})
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <NewJobPost PostAJob={PostAJob} />
      {/* <Alert /> */}
      <Header />
      <Searchbar fetchJobsCutsom={fetchJobsCutsom} />
      <button onClick={fetchJobs} className="flex pl-[1250px] mt-10">
        <p className="bg-gray-200 px-10 py-2 rounded-md text-black">
          Clear Search
        </p>
      </button>
      {jobs.map((job, index) => (
        <JabCard key={job.id} {...job} />
      ))}
    </>
  );
};

export default App;
