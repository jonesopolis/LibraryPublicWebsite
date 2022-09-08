import Image from "next/image";
import serviceLady from "../img/services.png";

function Services() {
  function getCards() {
    var models = [
      {
        id: 1,
        heading: "Website design",
        description: `Starting with your choice of professionally-designed templates, we work with you to customize a look that is unique to your library, and to define a site navigation plan that makes it easy for your patrons to find the information they need.`,
        linkText: `This is a link`,
      },
      {
        id: 2,
        heading: "Content management system",
        description: `Once your site design is in place, we pair it with a content management system designed specifically for public libraries. This system makes it easy for you and / or your staff to add, update, and manage the information that appears on your site.`,
        linkText: "This is the link",
      },
      {
        id: 3,
        heading: "Service and support",
        description: "You're never on your own. As you work with your site, you're certain to have questions. You may get new feature options from your automation provider, or want to take advantage of a new widget or display from social media. Or you may have just forgotten some of the basics, like how to add links or images to your content. Whatever the case may be, our staff is always just a phone call or email away. It's like having your own personal library web technician on call - whenever you need help.",
        linkText: "This is the link",
      },
    ];

    return (
      <div className="row">
        {models.map((x) => (
          <div className="col-lg-4 text-center px-4" key={x.id}>
            <svg className="bd-placeholder-img rounded-circle mb-4 bg-dark" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" />
            </svg>

            <h2>{x.heading}</h2>
            <p className="text-muted">{x.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container marketing pt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <Image src={serviceLady} className="img-fluid rounded mb-4" layout="responsive" alt="piper webs" />
          </div>
        </div>
        {getCards()}
      </div>
    </>
  );
}

export default Services;
