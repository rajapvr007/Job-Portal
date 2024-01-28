import React, { useState } from "react";

const Searchbar = (props) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });
  const handleonChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const searchBtn = async () => {
    await props.fetchJobsCutsom(jobCriteria);
  };
  return (
    <div className="mt-7">
      <div className="lg:mt-5 flex lg:flex-row lg:items-center lg:justify-center space-x-2 flex-wrap gap-5 items-center justify-center text-xl lg:text-base  ">
        <select
          onChange={handleonChange}
          name="title"
          value={jobCriteria.title}
          className="font-semibold py-3 pl-4 w-64 bg-zinc-200 rounded-lg "
        >
          <option value="" hidden disabled selected>
            Job Role
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="Mobile dev">Mobile dev</option>
        </select>
        <select
          onChange={handleonChange}
          name="type"
          value={jobCriteria.type}
          className="font-semibold py-3 pl-4 w-64 bg-zinc-200 rounded-lg"
        >
          <option value="" hidden disabled selected>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          {/* <option value="Internship">Internship</option> */}
        </select>
        <select
          onChange={handleonChange}
          name="location"
          value={jobCriteria.location}
          className="font-semibold py-3 pl-4 w-64 bg-zinc-200 rounded-lg"
        >
          <option value="" hidden disabled selected>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select
          onChange={handleonChange}
          name="experience"
          value={jobCriteria.experience}
          className="font-semibold py-3 pl-4 w-64 bg-zinc-200 rounded-lg"
        >
          <option value="" hidden disabled selected>
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
        <button
          onClick={searchBtn}
          className="font-semibold py-3 pl-4 w-64 rounded-lg bg-gray-200 hover:bg-gray-400 "
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
