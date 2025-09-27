const Userdetails = ({ fname, age, img }) => {
  return (
    <div className="user-card">
      <img src={img} alt={fname} />
      <div className="user-info">
        <h2>{fname}</h2>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Userdetails;
