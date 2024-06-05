"use client";

import "./formstyle/form.css";
import axios from "axios";
import { ITProfileData, NonITProfileData } from "../../data/ProfilesData";
import Link from "next/link";
import { useState, useEffect } from "react";
import ResumeUpload from "./Resume";
import { showToast } from "../../../../lib/toast";
import { proficiencyContent } from "../../data/ProfilesData";
import { parsePhoneNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import backicon from "../../../../public/assets/Back (1).png";
import Image from "next/image";
import Letter from "../../../../public/assets/Letter.png";
import Letter1 from "../../../../public/assets/Letter1.png";
import Phone from "../../../../public/assets/Phone.png";
import Create from "../../../../public/assets/Create.png";

export default function Form() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState("");
  const [subprofile, setsubProfile] = useState("");
  const [resume, setResume] = useState(null);
  const [resumeupload, setResumeUpload] = useState(false);
  const [college, setCollege] = useState("");
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [rating, setRating] = useState("");
  const ratings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [valid, setValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [subrating, setSubRating] = useState("");
  const [resumePreview, setResumePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [starttimmediately, setStartImmediately] = useState("");
  const [submit, setSubmit] = useState([]);

  const discardHandler = () => {
    setProfile("");
    setsubProfile("");
    setResume(null);
    setCollege("");
    setRating("");
    setSubRating("");
    setDescription("");
    setStartImmediately("");
    setEmail("");
    setMobile("");
    showToast("You have discarded the saved details!");
    setStep(1);
  };

  const submitHandler = async () => {
    if (
      !profile ||
      !subprofile ||
      !resume ||
      !college ||
      !rating ||
      !subrating ||
      !description ||
      !starttimmediately ||
      !email ||
      !mobile
    ) {
      showToast("Please enter the necessary details", "error");
      return;
    }

    const questionAnswerPair = [
      {
        question: "Are you a college-student?",
        answer: college,
      },
      // {
      //   question:<>{getProficiencyContent(profile, subprofile)}</>,
      //   answer:rating
      // },
      // {
      //   question:<>Rate your proficiency in {subprofile} on a scale of 1 to 10.</>,
      //   answer:subrating
      // },
      {
        question:
          "Have you read the job description and are you interested in this unpaid internship opportunity?",
        answer: description,
      },
      {
        question:
          " Can you start immediately? We are looking to fill this position as soon as possible.",
        answer: starttimmediately,
      },
    ];
    const formData = new FormData();
    formData.append("preferredProfile", profile);
    formData.append("preferredSubProfile", subprofile);
    formData.append("file", resume); // Ensure that resume is appended correctly
    // formData.append("college", college);
    // formData.append("rating", rating);
    // formData.append("subrating", subrating);
    // formData.append("description", description);
    // formData.append("starttimmediately", starttimmediately);
    formData.append("email", email);
    formData.append("mobileNumber", mobile);
    formData.append("questionAnswerPair", JSON.stringify(questionAnswerPair));

    try {
      // Make a POST request to the API endpoint
      await axios.post(
        "http://localhost:6500/api/applyInternshipApplication",
        formData
      );

      showToast("Application Submitted Successfully", "success");

      console.log(profile);
      console.log(subprofile);
      console.log(resume);
      console.log(questionAnswerPair);
      console.log(email);
      console.log(mobile);
      // Clear sessionStorage and navigate to the success page or perform any other action
      sessionStorage.clear();
      nextStep(); // or navigate to another success page
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }

      showToast("Failed to submit application", "error");
    }

    showToast("Application Submitted Successfully!", "success");
    nextStep();
  };

  const selectProfile = (selectProfile) => {
    setProfile(selectProfile);
    nextStep();
  };
  const selectSubProfile = (selectSubProfile) => {
    setsubProfile(selectSubProfile);
    nextStep();
  };
  const nextStep = () => {
    if (step === 2 && !subprofile) {
      showToast("Please select Sub Profile before proceeding", "error");
      return;
    }
    // Check if resume is uploaded in the third step
    if (step === 3 && !resume && !resumeupload) {
      showToast("Please upload your resume before proceeding", "error");
      return;
    }
    if (step === 4 && !college) {
      showToast("Please Select from the above options", "error");
      return;
    }
    if (step === 5 && !rating) {
      showToast("Please Select the ratings", "error");
      return;
    }

    if (step === 6 && !subrating) {
      showToast("Please Select Profile Rating", "error");
      return;
    }
    if (step === 7 && !description) {
      showToast("Plese select from the above options!", "error");
      return;
    }
    if (step === 8 && !starttimmediately) {
      showToast("Please select from the above options!", "error");
      return;
    }
    if (step === 9 && email === "" && mobile === "") {
      showToast("Please Enter email and mobile number!", "error");
      return;
    }
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const handleResumeUpload = (file) => {
    setResume(file);
    setResumeUpload(true);
    showToast("Resume Updated Successfully! Click on NEXT Button", "success");
    nextStep();
    sessionStorage.setItem("resume", JSON.stringify(file));
  };

  const handleBack = () => {
    setResume(null);
    setResumeUpload(false);
    prevStep();
  };

  // useEffect to check for the saved state on component mount
  useEffect(() => {
    const storedStep = sessionStorage.getItem("step");
    const storedProfile = sessionStorage.getItem("profile");
    const storedSubProfile = sessionStorage.getItem("subprofile");
    const storedResume = sessionStorage.getItem("resume");
    const storedCollege = sessionStorage.getItem("college");
    const storedRating = sessionStorage.getItem("rating");
    const storedSubRating = sessionStorage.getItem("subrating");
    const storedDescription = sessionStorage.getItem("description");
    const storedStartImmediately = sessionStorage.getItem("starttimmediately");
    const storedEmail = sessionStorage.getItem("email");
    const storedMobile = sessionStorage.getItem("mobile");

    try {
      if (storedStep) {
        setStep(parseInt(storedStep, 10));
      }

      if (storedProfile) {
        setProfile(storedProfile);
      }

      if (storedSubProfile) {
        setsubProfile(storedSubProfile);
      }

      if (storedResume) {
        setResume(JSON.parse(storedResume));
      }
      if (storedCollege) {
        setCollege(storedCollege);
      }

      if (storedRating) {
        setRating(storedRating);
      }

      if (storedSubRating) {
        setSubRating(storedSubRating);
      }
      if (storedDescription) {
        setDescription(storedDescription);
      }
      if (storedStartImmediately) {
        setStartImmediately(storedStartImmediately);
      }

      if (storedEmail) {
        setEmail(storedEmail);
      }

      if (storedMobile) {
        setMobile(storedMobile);
      }
    } catch (error) {
      console.error("Error parsing localStorage:", error);
    }
  }, []);

  // useEffect to save the current state whenever it changes
  useEffect(() => {
    sessionStorage.setItem("step", step.toString());
    sessionStorage.setItem("profile", profile);
    sessionStorage.setItem("subprofile", subprofile);
    sessionStorage.setItem("resume", JSON.stringify(resume));
    sessionStorage.setItem("college", college);
    sessionStorage.setItem("rating", rating);
    sessionStorage.setItem("subrating", subrating);
    sessionStorage.setItem("description", description);
    sessionStorage.setItem("starttimmediately", starttimmediately);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("mobile", mobile);
  }, [
    step,
    profile,
    subprofile,
    resume,
    college,
    rating,
    subrating,
    description,
    starttimmediately,
    email,
    mobile,
  ]);

  // Add a beforeunload event listener to show a confirmation message
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to leave? Your progress will be lost.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Show a confirmation message if the user tries to close the tab by clicking the close button
  useEffect(() => {
    const handleWindowClose = (event) => {
      if (!isPageVisible) {
        const message =
          "Are you sure you want to leave? Your progress will be lost.";
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };

    window.addEventListener("unload", handleWindowClose);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("unload", handleWindowClose);
    };
  }, [isPageVisible]);

  const collegeHandler = (collegeStaus) => {
    setCollege(collegeStaus);
    nextStep();
  };

  const ratingHandler = (singlerating) => {
    setRating(singlerating);
    nextStep();
  };

  const  getProficiencyContent = () => {
    console.log("Profile in getProficiencyContent:", profile);
  console.log("Subprofile in getProficiencyContent:", subprofile);

    const content =
      proficiencyContent[profile]?.[subprofile] || "Default value if not found";
      console.log("Content in getProficiencyContent:", content);

    return content;
  };
  const handleChange = (value) => {
    setMobile(value);
    setValid(validateMobileNumber(value));
  };

  const validateMobileNumber = (mobile) => {
    const mobileNumberPattern = /^\d{12}$/;
    return mobileNumberPattern.test(mobile);
  };

  const validateAndNavigate = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Invalid email address", "error");
      return;
    }

    // Ensure the phone number is provided
    if (!mobile) {
      showToast("Please enter a mobile number", "error");
      return;
    }

    // Validate the mobile number using the validateMobileNumber function
    if (!validateMobileNumber(mobile, countryCode)) {
      showToast(
        "Enter correct mobile number according to your country code",
        "error"
      );
      return;
    }

    // If all validations pass, navigate to the next step
    nextStep();
  };

  const subratingHandler = (value) => {
    setSubRating(value);
    nextStep();
  };

  const handleViewResume = () => {
    // Check if resume is available
    if (resume) {
      // Create a blob URL for the resume
      const resumeUrl = URL.createObjectURL(resume);

      // Open a new window with the resume PDF
      window.open(resumeUrl, "_blank");
    } else {
      // Handle the case where no resume is available
      console.error("Resume not available");
    }
  };

  const descriptionHandler = (value) => {
    setDescription(value);
    nextStep();
  };
  const starttimmediatelyHandler = (value) => {
    setStartImmediately(value);
    nextStep();
  };

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        const rejectedFile = rejectedFiles[0];

        if (rejectedFile.errors && rejectedFile.errors.length > 0) {
          showToast(`Error: ${rejectedFile.errors[0].message}`, "error");
        } else {
          showToast("Invalid file format. Please upload a PDF.", "error");
        }

        return;
      }

      const file = acceptedFiles[0];

      if (file.type.startsWith("application/pdf")) {
        handleResumeUpload(file);
      } else {
        showToast("Invalid file type. Please upload a PDF file.", "error");
      }

      if (file.size > 1048576) {
        showToast(
          "File size exceeds the limit of 1MB. Please upload a smaller file.",
          "error"
        );
        return;
      }
    },
    [handleResumeUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop,
    multiple: false, // Allow only one file to be uploaded
  });

  return (
    <div className="main-container-form">
      <form
        onSubmit={(e) => e.preventDefault()}
        encType="multipart/form-data"
        action="/upload"
        method="POST"
      >
        <div className="form-container">
          {step === 1 && (
            <div className="profile">
              <p className="para-step1">
                Which type of Internship are you looking for?
              </p>
              <div className="button-step1">
                <button onClick={() => selectProfile("IT")} className="itBtn">
                  IT
                </button>
                <button
                  onClick={() => selectProfile("Non-IT")}
                  className="nonitBtn"
                >
                  Non IT
                </button>
              </div>
            </div>
          )}
          {step === 2 && profile !== "" && (
            <div className="sub-profile-domain">
              <div className="btn-step2">
                <>
                  <Image src={backicon} className="back-img" />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              {profile === "IT" && (
                <>
                  <div className="subprofile-step2">
                    <p className="subprofile-para">
                      Select your preferred profile
                    </p>
                    <div className="button-step2">
                      <button
                        className="itbtn-step2"
                        style={{ backgroundColor: "#FF5082", color: "#fff" }}
                      >
                        IT
                      </button>
                      <button
                        className="nonitbtn-step2"
                        onClick={() => {
                          showToast(
                            "Please go back and select the Profile again!"
                          );
                        }}
                      >
                        Non IT
                      </button>
                    </div>
                  </div>
                  <div className="itprofile-map">
                    {ITProfileData.map((itprofile, index) => {
                      return (
                        <div key={index} className="itprofile">
                          <p
                            onClick={() => selectSubProfile(itprofile)}
                            className="itprofile-para"
                          >
                            {itprofile}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              {profile === "Non-IT" && (
                <>
                  <div className="subprofile-step2">
                    <p className="subprofile-para">
                      Select your preferred profile
                    </p>
                    <div className="button-step2">
                      <button
                        className="itbtn-step2"
                        onClick={() => {
                          showToast(
                            "Please go back and select the Profile again!"
                          );
                        }}
                      >
                        IT
                      </button>
                      <button
                        className="nonitbtn-step2"
                        style={{ backgroundColor: "#FF5082", color: "#fff" }}
                      >
                        Non IT
                      </button>
                    </div>
                  </div>
                  <div
                    className="itprofile-map"
                    style={{ justifyContent: "center" }}
                  >
                    {NonITProfileData.map((nonitprofile, index) => {
                      return (
                        <div key={index} className="itprofile">
                          <p
                            onClick={() => selectSubProfile(nonitprofile)}
                            className="itprofile-para"
                          >
                            {nonitprofile}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              <Link href={""} className="knew-more">
                Knew More
              </Link>
            </div>
          )}
          {step === 3 && subprofile !== "" && (
            <div className="upload-resume-for-selected-domain sub-profile-domain">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <p className="resume-para">
                Kindly Upload the updated version of your resume in PDF format
              </p>
              <div {...getRootProps()} className="resume-upload">
                <button type="upload" className="upload-resume-btn">
                  Upload Resume
                </button>
                <input
                  type="file"
                  name="resume"
                  onUpload={handleResumeUpload}
                  {...getInputProps()}
                />
                <p className="upload-para">
                  Or <br /> Drag & Drop Here
                </p>
              </div>
            </div>
          )}
          {step === 4 && resumeupload && (
            <div className="college-status sub-profile-domain profile upload-resume-for-selected-domain">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading college-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <p className="college-status-para">Are you a college-student?</p>
              <div className="button-step1">
                <p onClick={() => collegeHandler("Yes")} className="itBtn">
                  Yes
                </p>
                <p onClick={() => collegeHandler("No")} className="nonitBtn">
                  No
                </p>
              </div>
            </div>
          )}
          {step === 5 && college !== "" && (
            <div className="rating-select sub-profile-domain upload-resume-for-selected-domain">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading rating-resume-heading">
                Apply For {subprofile + "ship"}
              </h1>
              {profile && subprofile && (
                <p className="profile-proeficiency">
                  {getProficiencyContent(profile, subprofile)}
                </p>
              )}
              <p className="proficiency-range">
                1 - Very Less <br /> 10 - Excellent
              </p>
              <div className="ratings-points">
                {ratings.map((singlerating, index) => {
                  return (
                    <div key={index} className="ratings-container">
                      <p
                        onClick={() => ratingHandler(singlerating)}
                        className="ratings-circle"
                      >
                        {singlerating}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {step === 6 && rating !== "" && (
            <div className="rating-select sub-profile-domain upload-resume-for-selected-domain skill-rating">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading skill-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <p className="profile-proeficiency skill-pro">
                Rate your proficiency in {subprofile} on a scale of 1 to 10.
              </p>
              <p className="proficiency-range">
                1 - Very Less <br /> 10 - Excellent
              </p>
              <div className="ratings-points">
                {ratings.map((singlerating, index) => {
                  return (
                    <div key={index} className="ratings-container">
                      <p
                        onClick={() => subratingHandler(singlerating)}
                        className="ratings-circle"
                      >
                        {singlerating}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {step === 7 && subrating !== "" && (
            <div className="description sub-profile-domain upload-resume-for-selected-domain profile college-status">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading desc-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <p className="college-status-para desc-para">
                Have you read the job description and are you interested in this
                unpaid internship opportunity?
              </p>
              <div className="button-step1 desc-btn">
                <button
                  onClick={() => descriptionHandler("Yes")}
                  className="itBtn"
                >
                  Yes
                </button>
                <button
                  onClick={() => descriptionHandler("No")}
                  className="nonitBtn"
                >
                  No
                </button>
              </div>
            </div>
          )}
          {step === 8 && description !== "" && (
            <div className="description sub-profile-domain upload-resume-for-selected-domain profile college-status">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={nextStep} className="step2-btn2">
                    Next
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading desc-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <p className="college-status-para desc-para">
                Can you start immediately? We are looking to fill this position
                as soon as possible.
              </p>
              <div className="button-step1">
                <button
                  onClick={() => starttimmediatelyHandler("Yes")}
                  className="itBtn"
                >
                  Yes
                </button>
                <button
                  onClick={() => starttimmediatelyHandler("No")}
                  className="nonitBtn"
                >
                  No
                </button>
              </div>
            </div>
          )}
          {step === 9 && starttimmediately !== "" && (
            <div className="contact-details sub-profile-domain upload-resume-for-selected-domain">
              <div className="btn-step2">
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
                <>
                  <button onClick={validateAndNavigate} className="step2-btn2">
                    Review
                  </button>
                  <Image src={backicon} className="next-icon" />
                </>
              </div>
              <h1 className="resume-heading contact-heading">
                Apply For {subprofile + "ship"}
              </h1>
              <div className="input-field">
                <label htmlFor="email" className="input-heading">
                  Email*
                </label>
                <div
                  className="input-icon-field"
                  style={{ marginLeft: "1.5625vw" }}
                >
                  <Image src={Letter} width={20} height={20} />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="abcd@gmail.com"
                    className="input-enter"
                  />
                </div>
              </div>
              <div className="input-field mob-inp">
                <label
                  htmlFor="mobile"
                  className="input-heading mobile-heading"
                  style={{ marginLeft: "2px" }}
                >
                  Mobile Number <br />{" "}
                  <p
                    style={{ marginTop: "0.9259vh" }}
                    className="mobile-calling"
                  >
                    (Calling)
                  </p>
                </label>
                <div
                  className="input-icon-field "
                  style={{ marginLeft: "0.7812vw" }}
                >
                  <Image src={Phone} width={20} height={20} />
                  <PhoneInput
                    className="input-enter phone-input mob"
                    country={"in"}
                    name="mobile"
                    value={mobile}
                    onChange={handleChange}
                    inputProps={{
                      required: true,
                      placeholder: "+91 93255-66666",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {step === 10 && email !== "" && mobile && (
            <div className="review-section sub-profile-domain profile">
              <div
                className="btn-step2 review-back-btn"
                style={{ position: "absolute", left: "21%" }}
              >
                <>
                  <Image src={backicon} />
                  <button onClick={prevStep} className="step2-btn1">
                    Back
                  </button>
                </>
              </div>
              <h1
                className="review-heading review-top-heading"
                style={{ marginTop: "12vh" }}
              >
                Review Application for {subprofile + "ship"}
              </h1>
              <div className="details-summary">
                <div className="details-left-summary">
                  <h2 className="review-heading review-top-heading">
                    Contact Info
                    <span onClick={() => setStep(7)}>
                      <Image src={Create} className="editicon" />
                    </span>
                  </h2>
                  <div className="detials-contact">
                    <div className="contact-sub-section">
                      <p className="details-para">Email:</p>
                      <span className="details-span">
                        <Image src={Letter1} className="details-img" /> {email}
                      </span>
                    </div>
                    <div className="contact-sub-section">
                      <p className="details-para ">Mobile Number:</p>
                      <span className="details-span">
                        <i className="details-img-phone">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M15.2696 19.6194C14.5071 19.6194 13.436 19.3321 11.8321 18.3987C9.88171 17.2594 8.37312 16.2075 6.43327 14.1922C4.56296 12.2451 3.6528 10.9846 2.37898 8.57002C0.939914 5.84378 1.18523 4.41474 1.45945 3.80398C1.78601 3.074 2.26804 2.6374 2.89109 2.20405C3.24497 1.96253 3.61947 1.75549 4.00984 1.58556C4.0489 1.56806 4.08523 1.55138 4.11765 1.53632C4.31101 1.44559 4.60398 1.30846 4.97507 1.45494C5.22273 1.55179 5.44382 1.74995 5.78991 2.10599C6.49968 2.83515 7.4696 4.4591 7.82741 5.25662C8.06765 5.79414 8.22663 6.14896 8.22702 6.5469C8.22702 7.01281 8.00202 7.3721 7.72898 7.75988C7.6778 7.83271 7.62702 7.90229 7.5778 7.96984C7.28054 8.37674 7.2153 8.49433 7.25827 8.70429C7.34538 9.12625 7.99499 10.3824 9.06257 11.492C10.1301 12.6016 11.3012 13.2355 11.7079 13.3259C11.918 13.3727 12.0333 13.3019 12.4364 12.9812C12.4942 12.9353 12.5536 12.8876 12.6157 12.84C13.0321 12.5174 13.361 12.2891 13.7977 12.2891H13.8001C14.1801 12.2891 14.5055 12.4608 15.0446 12.744C15.7477 13.1135 17.3536 14.1108 18.0579 14.8509C18.4005 15.2106 18.5915 15.4401 18.6848 15.6977C18.8255 16.0855 18.693 16.3894 18.6067 16.5929C18.5923 16.6267 18.5762 16.6637 18.5594 16.7048C18.395 17.1107 18.1951 17.5 17.9622 17.8677C17.5469 18.5147 17.1262 19.0156 16.4239 19.3561C16.0632 19.5338 15.6685 19.6239 15.2696 19.6194Z"
                              fill="#F4F4F4"
                            />
                          </svg>
                        </i>
                        {mobile}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="details-right-summary ">
                  <h2 className="review-heading review-top-heading">
                    Resume
                    <span onClick={() => setStep(3)}>
                      <Image src={Create} className="editicon" />
                    </span>
                  </h2>
                  <div className="right-upload-section">
                    <div className="upload-left-section">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M9.7474 18.4766V12.2266M9.7474 12.2266L7.66406 14.3099M9.7474 12.2266L11.8307 14.3099"
                            stroke="#EDE7FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2943 11.1849V16.3932C23.2943 21.6016 21.2109 23.6849 16.0026 23.6849H9.7526C4.54427 23.6849 2.46094 21.6016 2.46094 16.3932V10.1432C2.46094 4.9349 4.54427 2.85156 9.7526 2.85156H14.9609"
                            stroke="#EDE7FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M23.2943 11.1849H19.1276C16.0026 11.1849 14.9609 10.1432 14.9609 7.01823V2.85156L23.2943 11.1849Z"
                            stroke="#EDE7FF"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </i>
                      <p className="resume-name">{resume.name}</p>
                      <i className="resume-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="41"
                          viewBox="0 0 40 41"
                          fill="none"
                        >
                          <path
                            d="M26.6667 3.48438H13.3333C7.5 3.48438 5 6.81771 5 11.8177V28.4844C5 33.4844 7.5 36.8177 13.3333 36.8177H26.6667C32.5 36.8177 35 33.4844 35 28.4844V11.8177C35 6.81771 32.5 3.48438 26.6667 3.48438ZM13.3333 20.5677H20C20.6833 20.5677 21.25 21.1344 21.25 21.8177C21.25 22.501 20.6833 23.0677 20 23.0677H13.3333C12.65 23.0677 12.0833 22.501 12.0833 21.8177C12.0833 21.1344 12.65 20.5677 13.3333 20.5677ZM26.6667 29.7344H13.3333C12.65 29.7344 12.0833 29.1677 12.0833 28.4844C12.0833 27.801 12.65 27.2344 13.3333 27.2344H26.6667C27.35 27.2344 27.9167 27.801 27.9167 28.4844C27.9167 29.1677 27.35 29.7344 26.6667 29.7344ZM30.8333 15.5677H27.5C24.9667 15.5677 22.9167 13.5177 22.9167 10.9844V7.65104C22.9167 6.96771 23.4833 6.40104 24.1667 6.40104C24.85 6.40104 25.4167 6.96771 25.4167 7.65104V10.9844C25.4167 12.1344 26.35 13.0677 27.5 13.0677H30.8333C31.5167 13.0677 32.0833 13.6344 32.0833 14.3177C32.0833 15.001 31.5167 15.5677 30.8333 15.5677Z"
                            fill="#EDE7FF"
                          />
                        </svg>
                      </i>
                    </div>
                    <div className="upload-right-section">
                      <button
                        onClick={handleViewResume}
                        className="view-button"
                      >
                        View Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="question-summary">
                <h3 className="question-heading">Questions</h3>
                <div className="question-edit-frame">
                  <p className="college-para">
                    Are you a college-student{" "}
                    <span className="span">{college}</span>
                  </p>
                  <Image
                    src={Create}
                    onClick={() => setStep(4)}
                    className="editicon edit"
                  />
                </div>
                <div className="question-edit-frame">
                  <p className="college-para">
                    {getProficiencyContent(profile, subprofile)}{" "}
                    <span className="span">{rating}</span>
                  </p>
                  <Image
                    src={Create}
                    onClick={() => setStep(5)}
                    className="editicon edit"
                  />
                </div>
                <div className="question-edit-frame">
                  <p className="college-para">
                    Rate your proficiency in {subprofile} on a scale of 1 to 10.{" "}
                    <span className="span">{subrating}</span>
                  </p>
                  <Image
                    src={Create}
                    onClick={() => setStep(6)}
                    className="editicon edit"
                  />
                </div>
                <div className="question-edit-frame">
                  <p className="college-para">
                    Have you read the job description and are you interested in
                    this unpaid internship opportunity?{" "}
                    <span className="span">{description}</span>
                  </p>
                  <Image
                    src={Create}
                    onClick={() => setStep(7)}
                    className="editicon edit"
                  />
                </div>
                <div className="question-edit-frame">
                  <p className="college-para desc-para-clg">
                    Can you start immediately? We are looking to fill this
                    position as soon as possible.{" "}
                    <span className="span">{starttimmediately}</span>
                  </p>
                  <Image
                    src={Create}
                    onClick={() => setStep(8)}
                    className="editicon edit"
                  />
                </div>
              </div>
              <div className="submit-section">
                <p onClick={discardHandler} className="discard-button">
                  Discard
                </p>
                <button
                  type="submit"
                  onClick={submitHandler}
                  className="submit-button"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
          {step === 11 && submit !== "" && (
            <div className="confirmation-section">
              <h1 className="h1">Thank You for Applying! </h1>
              <h3 className="h3">Our team will get back to you soon.</h3>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
