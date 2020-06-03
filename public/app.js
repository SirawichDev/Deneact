const App = (props) => {
  const [userJob, setUserJob] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/userjob")
      .then((res) => res.json())
      .then((data) => {
        setUserJob(data);
      });
  }, []);

  return (
    <div class="center">
      {userJob.map((ujob) => (
        <div class="content" key={ujob.id}>
          <img class="img" src={ujob.img} />
          <h1>
            {" "}
            {ujob.name} - {ujob.job}
          </h1>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
