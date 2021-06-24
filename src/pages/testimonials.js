import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Testimonials = () => {
  return (
    <Layout location="." title="Bhuvan">
      <Seo title="Testimonials | Bhuvaneswaran Balasubramanian" />
      <h1>Testimonials</h1>
      <hr />
      <section>
        <h2 className="text-blue">Udemy</h2>
        <div className="row">
          <div className="col-md-12">
            <img
              className="box box-review mb-5"
              alt="review1-screenshot"
              src="../reviews/udemy-review-2.png"
            />
            <img
              className="box box-review mb-5"
              alt="review1-screenshot"
              src="../reviews/udemy-review-1.png"
            />
            <img
              className="box box-review mb-5"
              alt="review1-screenshot"
              src="../reviews/udemy-review-3.png"
            />
          </div>
        </div>
      </section>
      <hr />
      <section>
        <h2 className="text-blue">LinkedIn</h2>
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

export default Testimonials
