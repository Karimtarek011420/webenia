export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="card service-card text-center p-4 bg-white shadow-sm hover-card">
        <i className={`${icon} mb-3 fs-2 text-primary`}></i>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary btn-sm mt-3">
            Learn More <i className="fa-solid fa-arrow-right fs-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
