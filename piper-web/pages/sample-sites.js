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
                How it all started <span className="text-muted">and how it&apos;s going.</span>
              </h2>
              <p className="lead">Piper Mountain Webs began developing websites for local businesses, community organizations and libraries in 2003. Public libraries were literally part of the family - PiperWebs founder is married to a library director. It didn&apos;t take long to realize that small and mid-sized public libraries were in need of an affordable, professional website solution that didn&apos;t require in-depth technical skills. To address this need we created a set of professionally-designed website templates and paired them with a custom content management system designed specifically for public libraries. Then we added special book displays, event calendar, and optional website pages that are maintained by our staff - like a weekly display of New York Times bestsellers. All in an effort to help small and mid-sized libraries present relevant, current and interesting content to their patrons. Starting with our local library in 2003, we&apos;ve since grown to serve over 150 libraries in 26 states. We continue to add new ways for this growing community of libraries to share information, best practices, and even website content.</p>
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
