import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const FeedbackWall = () => {
  return (
    <Layout location="." title="Bhuvaneswaran Balasubramanian">
      <Seo title="Course Feedback Wall | Bhuvaneswaran Balasubramanian" />
      <h1>Course Feedback Wall</h1>
      <hr />
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="embed-responsive">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6807541730573873152"
                frameBorder="0"
                allowFullScreen=""
                title="Embedded post"
              ></iframe>
            </div>

            <div className="embed-responsive">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6796702582757834752"
                frameBorder="0"
                allowFullScreen=""
                title="Embedded post"
              ></iframe>
            </div>

            <div className="embed-responsive">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6794160492815368192"
                frameBorder="0"
                allowFullScreen=""
                title="Embedded post"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </Layout>
  )
}

export default FeedbackWall
