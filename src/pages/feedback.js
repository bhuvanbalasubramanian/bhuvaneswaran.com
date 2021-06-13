import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Feedback = () => {
  const [initialForm, setInitialForm] = useState(true);
  const [switchButton, setSwitchButton] = useState('Submit');

  const handleServerResponse = (ok, msg, form) => {
    if (ok) {
      form.reset()
      setInitialForm(false)
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setSwitchButton("Please wait...");
    axios({
      method: "post",
      url: "https://getform.io/f/5492e521-8f82-473e-b975-58019aa265b3",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks for your feedback!", form)
      })
      .catch(r => {
        alert("Error occurred. Please try again")
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <Layout location="/" title="Bhuvaneswaran Balasubramanian">
      <Seo title="Udemy course feedback | Bhuvaneswaran Balasubramanian" />
      {initialForm ? (
        <div className="col-md-8 mt-5">
          <h3>Course Feedback Form(Instructor)</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="course">
                Couse enrolled<span className="required">*</span>
              </label>
              <select name="course" className="form-control" required>
                <option value="-1">-- Select --</option>
                <option value="AZ-204: Developing Solutions for Azure">
                  AZ-204: Developing Solutions for Azure
                </option>
                <option value="AZ-400: Microsoft Azure DevOps Expert">
                  AZ-400: Microsoft Azure DevOps Expert
                </option>
                <option value="AZ-104: Microsoft Azure Administrator">
                  AZ-104: Microsoft Azure Administrator
                </option>
                <option value="AZ-303: Azure Architect Technologies">
                  AZ-303: Azure Architect Technologies
                </option>
                <option value="AZ-900: Microsoft Azure Fundamentals">
                  AZ-900: Microsoft Azure Fundamentals
                </option>
                <option value="AI-100: Designing and Implement Azure AI Solution">
                  AI-100: Designing and Implement Azure AI Solution
                </option>
                <option value="AZ-500: Microsoft Azure Security Technologies">
                  AZ-500: Microsoft Azure Security Technologies
                </option>
                <option value="DP-200: Implementing an Azure Data Solution">
                  DP-200: Implementing an Azure Data Solution
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="student">
                Student Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="student"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Email address <small>(optional)</small></label>
              <input type="email" className="form-control" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="status">
                Is this course helpful to you clear the actual exam?{" "}
                <span className="required">*</span>{" "}
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  value="Yes, it helped me to clear the exam."
                  name="helped"
                  required
                />
                <label className="custom-control-label" htmlFor="yes">
                  Yes, it helped me to clear the exam.
                </label>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  value="Not yet taken the exam."
                  name="helped"
                />
                <label className="custom-control-label" htmlFor="notyet">
                  Not yet taken the exam.
                </label>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  value="No"
                  name="helped"
                />
                <label className="custom-control-label" htmlFor="no">
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="status">
                Will you recommend the course to your friends/colleague?{" "}
                <span className="required">*</span>{" "}
              </label>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  value="Yes"
                  name="recommendation"
                  required
                />
                <label className="custom-control-label" htmlFor="yes">
                  Yes
                </label>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  value="No"
                  name="recommendation"
                />
                <label className="custom-control-label" htmlFor="notyet">
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="feedback">
                Your feedback on course <span className="required">*</span>{" "}
              </label>
              <textarea
                className="form-control"
                name="feedback"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              {switchButton}
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center mt-5 mb-5">
          <h1>Thanks for your feedback!</h1>
        </div>
      )}
      <hr />
    </Layout>
  )
}

export default Feedback
