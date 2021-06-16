import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Books = () => {
    return (
        <Layout location="/" title="Bhuvaneswaran Balasubramanian">
            <Seo title="Books | Bhuvaneswaran Balasubramanian" />
            <h1>Books</h1>
            <section>
                <p>I usually read books in my free time. I prefer Kindle PaperWhite rather than physical books, the reason is we can store many books in one device and we can read it at night time as well using dark mode feature.</p>
                <p>Here is my collection of books which I finished reading.</p>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div className='col-md-3'>
                                    <div class="card">
                                        <img class="card-img-top" src="../books/book2.jpg" alt="tuesdaywithmorrie_cover" />
                                        <div class="card-body">
                                            <a href="https://www.goodreads.com/book/show/6900.Tuesdays_with_Morrie" class="card-link" target="_blank"
                                                rel="noreferrer"><h5 class="card-text">Tuesdays with Morrie</h5></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div class="card">
                                        <img class="card-img-top" src="../books/book1.jpg" alt="thealchemist_cover" />
                                        <div class="card-body">
                                            <a href="https://www.goodreads.com/book/show/18144590-the-alchemist" class="card-link" target="_blank"
                                                rel="noreferrer"><h5 class="card-text">The Alchemist</h5></a>
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
