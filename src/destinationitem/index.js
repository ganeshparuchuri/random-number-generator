import "./index.css";

const Searchitem = (props) => {
  const { initialHistoryList, del } = props;
  const { timeAccessed, logoUrl, title, domainUrl,id } = initialHistoryList;
  const deleteButton = () => {
    del(id);
  };

  return (
    <li className="listitem">
      <div>
        <div className="div1">
          <p className="span">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <h1 className="title">{title}</h1>
          <p className="domain_url">{domainUrl}</p>
        </div>
      </div>
      <button className="button" testid="delete" onClick={deleteButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  );
};
export default Searchitem;
