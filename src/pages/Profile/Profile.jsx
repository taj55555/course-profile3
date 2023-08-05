import React, { useState } from "react";
import google from "../../assets/google.png";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the CSS for styling (optional)
import errorImg from "../../assets/profile Default.png";
const Profile = () => {
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2023");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // -----------------------------Profile Img-------------------------------------

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  // // Handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the selectedImage, e.g., upload it to a server.
  //   if (selectedImage) {
  //     // Your upload logic here
  //     console.log('Selected image:', selectedImage);
  //   } else {
  //     alert('No image selected.');
  //   }
  // };

  // -----------------------------date---------------------------------------------
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Populate days based on the selected month
  const getDaysInMonth = (month, year) => {
    return new Date(year, months.indexOf(month) + 1, 0).getDate();
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
    // Check if the selected day is valid for the newly selected month and year
    if (parseInt(day, 10) > getDaysInMonth(selectedMonth, year)) {
      setDay("1");
    }
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    // Check if the selected day is valid for the current month and the newly selected year
    if (parseInt(day, 10) > getDaysInMonth(month, selectedYear)) {
      setDay("1");
    }
  };

  // -----------------------------------phone number operation---------------------------------------------

  // Initialize state to store the phone number
  const [phoneNumber, setPhoneNumber] = React.useState("");

  // Handle phone number change
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <section className="p-2">
      <form action="">
        <div className="container px-4 py-5 p-5 border mt-5 w-100">
          <div className="row justify-content-md-between mb-5 w-100">
            <h2 className="col-md-7 fs-1">Edit my profile</h2>

            <div className="col-md-3">
              <button className=" fs-4 btn_bg btn px-5 py-2 w-100 m-auto justify-content-end text-light">
                View Profile
              </button>
            </div>
          </div>

          <hr />

          <h3 className=" mt-5">Introduction</h3>
          <p className="mb-5">
            Let the Coursera community of other learners and instructors
            recognize you.
          </p>

          <div className="d-flex w-100 justify-content-center my-5">
            <div className="">
              <div className=" d-flex gap-1 w-100 align-items-ce nter">
                <label htmlFor="" className="fs-6 font-weight-bold w-25">
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>

              <div className=" mt-5 d-md-flex gap-2">
                <span htmlFor="" className="fs-6 font-weight-bold w-50">
                  Profile Photo
                </span>

                {imageUrl ? (
                  <div
                    className="border my-2"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={imageUrl}
                      alt="Uploaded"
                      className=" ml-3"
                      style={{ width: "148px", height: "148px" }}
                    />
                  </div>
                ) : (
                  <div
                    className="border my-2"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={errorImg}
                      alt="Uploaded"
                      className=" ml-3"
                      style={{ width: "148px", height: "148px" }}
                    />
                  </div>
                )}

                <div className="w-100 ml-5">
                  <input
                    className="btn text-white mb-2"
                    id="formFileLg"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <p className="mx-2">Maximum size of 1MB. JPG, GIF, or PNG.</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div class="form-group my-5">
            <div className="row align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Courses ID</label>
              </div>
              <div className="col-md-7">
                <div className="w-100 d-flex btnD">
                 
                  <input type="text" className=" w-100 p-2 inputCoursesID" />
                  <button className="btncoursesID">Check</button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Work Experience and Education */}
          <h3 className=" mt-5">Work Experience and Education</h3>
          <p className="mb-5">
            Tell us about your experience and education to get a personalized
            learning experience with course recommendations.
          </p>

          <div
            className="p-0 pl-md-block"
            style={{ paddingLeft: "180px", paddingRight: "180px" }}
          >
            <div class="form-group mb-5">
              <div className="row align-items-center">
                <div className="col-md-3 text-md-end">
                  <label for="exampleFormControlSelect1">
                    Employment Status
                  </label>
                </div>
                <div className="col-md-7">
                  <select
                    className="form-control p-2"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Industry</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Employer</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Occupation</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Experience Level</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">
                  Is it your current employer?
                </label>
              </div>
              <div className="col-md-7">
                <input type="checkbox" className="checkbox" />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Highest Degree</label>
              </div>
              <div className="col-md-7">
                <select
                  className="form-control p-2"
                  id="exampleFormControlSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">University</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Field or Major</label>
              </div>
              <div className="col-md-7">
                <select
                  className="form-control p-2"
                  id="exampleFormControlSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">
                  Are you currently a student?
                </label>
              </div>
              <div className="col-md-7">
                <input type="checkbox" className="checkbox" />
              </div>
            </div>
          </div>

          <hr />

          {/* --------------------Career Goals------------------------------- */}

          <h3 className=" mt-5">Career Goals</h3>
          <p className="mb-5">
            Tell us about your experience and education to get a personalized
            learning experience with course recommendations.
          </p>

          <div className="row mb-5 align-items-center">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">
                Open to new job opportunities?
              </label>
            </div>
            <div className="col-md-7">
              <input type="radio" id="yes" name="fav_language" value="YES" /> {" "}
              <label for="yes">Yes</label>
                <input
                type="radio"
                id="no"
                name="fav_language"
                value="NO"
              />  <label for="no">No</label>
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Location</label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control w-100 p-2"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Skills Wanted</label>
            </div>
            <div className="col-md-7">
              <select
                className="form-control p-2"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">
                Interested in getting a degree?
              </label>
            </div>
            <div className="col-md-7">
              <input type="radio" id="yes" name="fav_language" value="YES" /> {" "}
              <label for="yes">Yes</label>
                <input
                type="radio"
                id="no"
                name="fav_language"
                value="NO"
              />  <label for="no">No</label>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Learning Goal</label>
            </div>
            <div className="col-md-7">
              <select
                className="form-control p-2"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">
                Preferred Occupation
              </label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control w-100 p-2"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>

          <div className="row mb-5 align-items-center">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Industry</label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control w-100 p-2"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Preferred Level</label>
            </div>
            <div className="col-md-7">
              <select
                className="form-control p-2"
                id="exampleFormControlSelect1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          {/* -------------------------------Add preferred occupation---------------------- */}

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end"></div>
            <div className="col-md-7">
              <button className="btn fs-5 text-success">
                <i class="bi bi-plus"></i> Add preferred occupation
              </button>
            </div>
          </div>

          <div className="invisible">
            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">
                  Preferred Occupation
                </label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row mb-5 align-items-center">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Industry</label>
              </div>
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>

            <div className="row align-items-center mb-5">
              <div className="col-md-3 text-md-end">
                <label for="exampleFormControlSelect1">Preferred Level</label>
              </div>
              <div className="col-md-7">
                <select
                  className="form-control p-2"
                  id="exampleFormControlSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          {/* -------------------------------Add preferred occupation end---------------------- */}

          {/* --------------------Career Goals------------------------------- */}

          <hr />

          {/* ----------------------------------Details About You---------------------------------------------------------------------------- */}

          <h3 className=" mt-5">Details About You</h3>
          <p className="mb-5">
            Introduce yourself to the Coursera community. Connect with learners
            like you to grow your network.
          </p>

          <div className="row align-items-start mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">About Me</label>
            </div>
            <div className="col-md-7">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="textarea"
                placeholder="Tell us about yourself, such as what you do, what your interests are, and what you hope to get out of your courses."
              ></textarea>
            </div>
          </div>

          <div className="row mb-5 align-items-start">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Location</label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                className="form-control w-100 p-2"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Tell us the city, state, or country you currently live in"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Top Skills</label>
            </div>
            <div className="col-md-7">
              <select
                className="form-control p-2"
                id="exampleFormControlSelect1"
              >
                <option>
                  Tell us about your top skills (e.g., Machine Learning)
                </option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Website URL</label>
            </div>
            <div className="col-md-7 d-flex gap-3 align-items-center">
              <select
                className="form-control p-2 w-25"
                id="exampleFormControlSelect1"
              >
                <option>linkedin</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className=" w-100">
                <input
                  type="text"
                  className="form-control w-100 p-2"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              *Optional
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end"></div>
            <div className="col-md-7">
              <button className="btn fs-5 text-success">
                <i class="bi bi-plus"></i> Add Website
              </button>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-3 text-md-end ">
              <label for="exampleFormControlSelect1">Gender((Optional))</label>
            </div>
            <div className="col-md-7">
              <div className=" d-flex gap-3 flex-column">
                <span className=" d-flex gap-2">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Female</label>
                </span>

                <span className=" d-flex gap-2">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="css">Male</label>
                </span>

                <span className=" d-flex gap-2">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="css">Other</label>
                </span>

                <span className=" d-flex gap-2">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label for="html">I'd rather not say</label>
                </span>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label>Birthday</label>
            </div>

            <div className="col-md-7">
              <div className="d-md-flex gap-3">
                <div className="date-dropdown mt-3">
                  <select
                    id="day"
                    value={day}
                    className="py-3 px-5 border"
                    onChange={handleDayChange}
                  >
                    {Array.from(
                      { length: getDaysInMonth(month, year) },
                      (_, i) => i + 1
                    ).map((dayNum) => (
                      <option key={dayNum} value={dayNum}>
                        {dayNum}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="date-dropdown mt-3">
                  <select
                    id="month"
                    value={month}
                    className="py-3 px-5 border"
                    onChange={handleMonthChange}
                  >
                    {months.map((monthName) => (
                      <option key={monthName} value={monthName}>
                        {monthName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="date-dropdown mt-3">
                  <select
                    id="year"
                    value={year}
                    className="py-3 px-5 border"
                    onChange={handleYearChange}
                  >
                    {Array.from({ length: 100 }, (_, i) => year - i).map(
                      (yearNum) => (
                        <option key={yearNum} value={yearNum}>
                          {yearNum}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-3 text-md-end">
              <label for="exampleFormControlSelect1">Phone Number</label>
            </div>
            <div className="col-md-7">
              {/* <PhoneNumberInput/> */}

              <PhoneInput
                international
                defaultCountry="US"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>

          <hr />

          <div className="row align-items-center my-5">
            <div className="col-md-3 text-md-end">
              <label>Profile Privacy</label>
            </div>

            <div className="col-md-7">
              <select
                className="form-control p-2"
                id="exampleFormControlSelect1"
              >
                <option>Only me</option>
                <option>Everyone on the web</option>
              </select>
            </div>
          </div>

          <div className="row align-items-center my-5">
            <div className="col-md-3 text-md-end"></div>

            <div className="col-md-7">
              <p>
                Note: Discussion forum posts and peer review submissions will
                always show your name and profile image to other learners in
                your courses. Course ratings and reviews you submit may show
                your profile image to anyone viewing Coursera’s catalog. Read
                our Privacy Policy to learn more.
              </p>

              <button
                type="submit"
                className="btn btn_bg text-light px-4 py-2"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Profile;
