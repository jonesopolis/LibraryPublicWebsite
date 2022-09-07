import Link from "next/link";

function Services() {
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
          <div className="col-lg-4 text-center" key={x.id}>
            <svg className="bd-placeholder-img rounded-circle mb-4" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>{x.heading}</h2>
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

  return (
    <>
      <div className="container marketing pt-5">{getCards()}</div>
    </>
  );
}

export default Services;
