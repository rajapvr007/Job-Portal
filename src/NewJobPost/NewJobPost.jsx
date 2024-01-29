import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
export default function NewJobPost(props) {
  const [show, setShow] = useState(false);
  // store the data in the state and send it to firebase
  const [jobpost, setJobpost] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
    companyName: "",
    companyUrl: "",
    link: "",
    skills: [],
  });
  // store the data in the state and send it to firebase
  const handleonChange = (e) => {
    e.preventDefault();
    setJobpost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // skills are added to the jobpost.skills array and if it is already present then it is removed
  const skills = ["Nodejs", "Reactjs", "MongoDB", "Expressjs", "Javascript"];
  const addRemoveSkill = (skill) =>
    jobpost.skills.includes(skill)
      ? setJobpost((prevState) => ({
          ...prevState,
          skills: prevState.skills.filter((s) => s !== skill),
        }))
      : setJobpost((prevState) => ({
          ...prevState,
          skills: prevState.skills.concat(skill),
        }));
  // console.log(jobpost);

  // we need to send this data to firebase
  const handleSubmit = async () => {
    // if user has not filled all the fields then we will show a toast
    if (
      jobpost.title === "" ||
      jobpost.type === "" ||
      jobpost.location === "" ||
      jobpost.experience === "" ||
      jobpost.companyName === "" ||
      jobpost.companyUrl === "" ||
      jobpost.link === "" ||
      jobpost.skills.length === 0
    ) {
      toast.warn("Please fill all the fields", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    const res = await props.PostAJob(jobpost);
    // if job is posted successfully then we will show a toast and close the alert dialog
    if (res.mess) {
      setJobpost({
        title: "",
        type: "",
        location: "",
        experience: "",
        companyName: "",
        companyUrl: "",
        link: "",
        skills: [],
        selectValue: "",
      });
      setShow(false);
    }
  };
  return (
    <>
      <div className="text-end mr-5 ">
        <button
          className="text-black bg-gray-300 rounded-full px-8 py-2 font-semibold "
          onClick={() => setShow(true)}
        >
          Post A Job
        </button>
      </div>

      {show && (
        <div className="fixed inset-0 bg-gray-300/50 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg p-8">
            {/* header of the alert dialog   */}
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-xl font-bold ">Post A Job</h1>
              <button onClick={() => setShow(false)}>
                <ImCross />
              </button>
            </div>

            <div className="lg:flex lg:flex-col lg:gap-4 lg:mt-5 items-center justify-center ">
              {/* first box of the alert dialog title   */}
              <div className="lg:space-x-2 space-x-1 mb-2" >
                <select
                  onChange={handleonChange}
                  name="title"
                  // value={jobpost.selectValue}
                  value={jobpost.title}
                  defaultValue={jobpost.selectValue}
                  //   {jobCriteria.title}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32 "
                >
                  <option value="" hidden disabled selected>
                    Job Role
                  </option>
                  <option
                    defaultValue={jobpost.selectValue}
                    value="Frontend Developer"
                  >
                    Frontend Developer
                  </option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="IOS Developer">IOS Developer</option>
                  <option value="Android Developer">Android Developer</option>
                  <option value="Fullstack Developer">
                    Fullstack Developer
                  </option>
                  <option value="Mobile dev">Mobile dev</option>
                </select>
                {/* job type  */}
                <select
                  onChange={handleonChange}
                  name="type"
                  value={jobpost.type}
                  //   {jobCriteria.type}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32"
                >
                  <option value="" hidden disabled selected>
                    Job Type
                  </option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  {/* <option value="Internship">Internship</option> */}
                </select>
              </div>
              {/* second box of the alert dialog   */}
              <div className="lg:space-x-2 space-x-1 mb-2">
                <select
                  onChange={handleonChange}
                  name="location"
                  value={jobpost.location}
                  //   {jobCriteria.location}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32"
                >
                  <option value="" hidden disabled selected>
                    Location
                  </option>
                  <option value="Remote">Remote</option>
                  <option value="Office">In-Office</option>
                  <option value="Hybrid">Hybrid</option>
                </select>

                {/* experience   */}
                <select
                  onChange={handleonChange}
                  name="experience"
                  value={jobpost.experience}
                  //   {jobCriteria.experience}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32"
                >
                  <option value="" hidden disabled selected>
                    Experience
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="Junior Level">Junior Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>
              </div>
              {/* third box of the alert dialog company Name compnay url   */}
              <div className="lg:space-x-2 space-x-1 mb-2">
                <input
                  onChange={handleonChange}
                  type="text"
                  name="companyName"
                  placeholder="company Name"
                  value={jobpost.companyName}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32"
                ></input>
                <input
                  onChange={handleonChange}
                  type="url"
                  name="companyUrl"
                  placeholder="company URL"
                  value={jobpost.companyUrl}
                  className="font-semibold py-3 pl-4 lg:w-64 bg-zinc-200 rounded-lg w-32"
                ></input>
              </div>
              {/* fourth box of the alert dialog   */}
              <div>
                <input
                  onChange={handleonChange}
                  type="text"
                  name="link"
                  value={jobpost.link}
                  placeholder="Job URL"
                  className="font-semibold py-3 pl-4 bg-zinc-200 rounded-lg w-full "
                ></input>
              </div>
              {/* fifth box of the alert dialog   SKILLS*/}
              <div className="mb-2">
                <h1>Skills</h1>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => {
                    return (
                      <p key={index}>
                        <button
                          onClick={() => addRemoveSkill(skill)}
                          className={`border border-black hover:bg-black rounded-md p-2 cursor-pointer text-gray-500 hover:text-white ${
                            jobpost.skills.includes(skill) &&
                            "bg-black text-white"
                          } `}
                        >
                          {skill}
                        </button>
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* sixth box of the alert dialog post button   */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleSubmit()}
                  className="bg-blue-500  rounded-md px-8 py-3 cursor-pointer text-white font-semibold text-xl"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
