import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Books = () => {
    return (
        <Layout location="/" title="Bhuvan">
            <Seo title="Books | Bhuvaneswaran Balasubramanian" />
            <h1>Books</h1>
            <section>
                <p>I usually read books in my free time. Here is my collection of books which I finished reading.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className='col-sm-3'>
                                    <div className="card">
                                        <img className="card-img-top" src="../books/book2.jpg" alt="tuesdaywithmorrie_cover" />
                                        <div className="card-body">
                                            <a href="https://www.goodreads.com/book/show/6900.Tuesdays_with_Morrie" className="card-link" target="_blank"
                                                rel="noreferrer"><h5 className="card-text">Tuesdays with Morrie</h5></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-3'>
                                    <div className="card">
                                        <img className="card-img-top" src="../books/book1.jpg" alt="thealchemist_cover" />
                                        <div className="card-body">
                                            <a href="https://www.goodreads.com/book/show/18144590-the-alchemist" className="card-link" target="_blank"
                                                rel="noreferrer"><h5 className="card-text">The Alchemist</h5></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </Layout>
    )
}

export default Books
