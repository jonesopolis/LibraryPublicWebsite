import Image from "next/image";
import mountains from "../img/mountains.jpg";
import Link from "next/link";

export default function Home() {
  function getCarousel() {
    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={mountains} className="d-block w-100" layout="responsive" alt="piper webs" />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={mountains} className="d-block w-100" layout="responsive" alt="piper webs" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={mountains} className="d-block w-100" layout="responsive" alt="piper webs" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }

  function getCards() {
    var models = [
      {
        id: 1,
        heading: "You manage web content.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. `,
        linkText: `This is a link`,
        linkRoute: "/services",
      },
      {
        id: 2,
        heading: "One-stop solutions",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. `,
        linkText: "This is the link",
        linkRoute: "/services",
      },
      {
        id: 3,
        heading: "Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum.",
        linkText: "This is the link",
        linkRoute: "/services",
      },
    ];

    return (
      <div className="row">
        {models.map((x) => (
          <div className="col-lg-4 text-center px-4" key={x.id}>
            <svg className="bd-placeholder-img rounded-circle mb-4 bg-dark" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" />
              <text x="50%" y="50%" dy=".3em">
                things
              </text>
            </svg>

            <h3>{x.heading}</h3>
            <p>{x.description}</p>
            <p>
              <Link href={x.linkRoute}>
                <a className="btn btn-secondary">{x.linkText}&raquo;</a>
              </Link>
            </p>
          </div>
        ))}
      </div>
    );
  }

  function getFeatures() {
    let items = [];
    for (var i = 0; i < 3; i++) {
      items.push();
    }

    return (
      <>
        <hr className="featurette-divider my-5" />

        <div className="row featurette">
          <div className="col-md-12">
            <h2 className="featurette-heading">
              How it all started <span className="text-muted">and how it&apos;s going.</span>
            </h2>
            <img className="float-end ms-4" src="https://source.unsplash.com/random/500x250" />
            <p className="lead">Piper Mountain Webs began developing websites for local businesses, community organizations and libraries in 2003. Public libraries were literally part of the family - PiperWebs founder is married to a library director. It didn&apos;t take long to realize that small and mid-sized public libraries were in need of an affordable, professional website solution that didn&apos;t require in-depth technical skills. To address this need we created a set of professionally-designed website templates and paired them with a custom content management system designed specifically for public libraries. Then we added special book displays, event calendar, and optional website pages that are maintained by our staff - like a weekly display of New York Times bestsellers. All in an effort to help small and mid-sized libraries present relevant, current and interesting content to their patrons. Starting with our local library in 2003, we&apos;ve since grown to serve over 150 libraries in 26 states. We continue to add new ways for this growing community of libraries to share information, best practices, and even website content.</p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-12">
            <h2 className="featurette-heading">
              You&apos;re librarians, <span className="text-muted">not web developers!</span>
            </h2>
            <img className="float-start me-3" src="https://source.unsplash.com/random/500x250" />
            <p className="lead"> Ok, Maybe you have professional web developers on your staff – and if so, that’s great! But chances are you don’t, and why should you? Small and mid-size public libraries typically don’t have the time or the budget to focus on the technical details of website management. With PiperWebs you don’t have to.`` All you have to do is manage your site content, and our system makes that task as easy as using a word processor. If you do run into questions, or just want to talk about new options or features for your site, we’re always just a phone call away. We work exclusively with public libraries. This means that we may already be familiar with many of the systems and providers that you use. We’ll bring our experience with other libraries and library website best practices to the table – to help you develop an outstanding site for you and your patrons. With PiperWebs, you don’t NEED web development experience on your staff . You have us!</p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-12">
            <h2 className="featurette-heading">
              And lastly,<span className="text-muted"> why we are different</span>
            </h2>
            <img className="float-end ms-4" src="https://source.unsplash.com/random/500x250" />
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </>
    );
  }

  return (
    <>
      {getCarousel()}

      <div className="container marketing mt-5 pt-5">
        {getCards()}

        {getFeatures()}
      </div>
    </>
  );
}
