function SampleSites() {
  function getFeatures() {
    let items = [];
    for (var i = 0; i < 3; i++) {
      items.push();
    }

    return (
      <>
        <div className="container pt-5">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Sample Sites <span className="text-muted"></span>
              
              </h2><br/>

           
              <p><a href="https://www.durhampubliclibrary.org" target="_blank" rel="noreferrer">Durham Public Library</a></p>

              <p><a href="https://www.bowbakerfreelibrary.org" target="_blank" rel="noreferrer">Baker Free Library</a></p>
              <p><a href="https://www.meekins-library.org" target="_blank" rel="noreferrer">Meekins Library</a></p>

              <p><a href="https://www.centervillelibrary.org" target="_blank" rel="noreferrer">Centerville Library</a> </p>

              <p><a href="https://counselingassociatesofky.com" target="_blank" rel="noreferrer">Counseling Associates of Ky</a> </p>

              <p><a href="https://eurekalibrary.azurewebsites.net" target="_blank" rel="noreferrer">Eureka Public Library</a></p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                You&apos;re librarians, <span className="text-muted">not web developers!</span>
              </h2>
              <p className="lead"> Ok, Maybe you have professional web developers on your staff – and if so, that’s great! But chances are you don’t, and why should you? Small and mid-size public libraries typically don’t have the time or the budget to focus on the technical details of website management. With PiperWebs you don’t have to.`` All you have to do is manage your site content, and our system makes that task as easy as using a word processor. If you do run into questions, or just want to talk about new options or features for your site, we’re always just a phone call away. We work exclusively with public libraries. This means that we may already be familiar with many of the systems and providers that you use. We’ll bring our experience with other libraries and library website best practices to the table – to help you develop an outstanding site for you and your patrons. With PiperWebs, you don’t NEED web development experience on your staff . You have us!</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly,<span className="text-muted"> why we are different</span>
              </h2>
              <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{getFeatures()}</>;
}

export default SampleSites;
