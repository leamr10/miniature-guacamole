

export default function Project ({project}) {
    const {name, description, link, repo, image} = project
    return (
        <div className="p-3">
          <img
            src={require(`../images/${image}`)}
            alt={name}
            className=""
          />
          <div className="">
            <h3>
              <a href={link}>{name}</a>{' '}
              <a href={repo}>
                <i className="fab fa-github"></i>
              </a>
            </h3>
            <p>{description}</p>
          </div>
        </div>
      );
}

