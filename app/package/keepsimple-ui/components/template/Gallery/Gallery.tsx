import './Gallery.css'

const Gallery: React.FC = () => {
    return (
        <section className="section section-gallery">
            <div className="section-content">
                <h2 className="typography-gallery-section-headline card-gallery-headline">Our apps mind their business. Not&nbsp;yours.</h2>
            </div>
            <div className="card-gallery">

                <div className="gallery-item" tabIndex={-1}>
                    <div className="container" >
                        <div className="gallery-content">
                            <p className="gallery-content-headline">Safari throws trackers off your&nbsp;trail.</p>
                            <button className="modal-trigger" >
                                <svg className="svg-plus" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path fill-rule="evenodd" fill="#FFFFFF" d="M16.503 16.497l.008-5.739c0-.828.672-1.498 1.589-1.498h.02c.721.001 1.391.672 1.391 1.5v.001l-.008 5.74 5.749.008c1.548.001 1.498.672 1.498 2.391v-.79c-.001.73.02 1.399-1.5 1.399h-.002l-5.75-.008-.008 5.739c-.001 1.45-.673 1.498-1.5 1.498h-.002c-.828-.001-1.498-.078-1.498-1.5v-.002l.008-5.739-5.75-.008a1.5 1.5 0 0 1-1.498-1.5v-.002a1.5 1.5 0 0 1 1.5-1.498h.002l5.751.008M17.999 0C8.58 0 0 8.58 0 18c0 9.941 8.58 17.999 17.999 17.999 9.942 0 18-8.058 18-17.999 0-9.42-8.058-18-18-18"></path></svg>
                            </button>
                        </div>
                        <div className="gallery-video">
                            <input type="checkbox" className="feature-toggle" />

                            <div className="feature-media-object">
                                <div className="video-wrapper">
                                    <figure className="image-tilt-startframe" role="img" style={{ opacity: 0 }} ></figure>
                                    <video
                                        muted
                                        playsInline
                                        autoPlay
                                        loop
                                        src="https://www.apple.com/105/media/us/privacy/2019/58349417-857c-47c2-89c3-6ab1a56a2f58/safari/large_2x.mp4">
                                    </video>
                                    <div className="playback-control-container">
                                        <button className="playback-control is-loading" disabled></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* paddev */}
            </div>
        </section>
    )
}

export default Gallery;