const PageHome = ({ chartsData }) => {
  return (
    <>
      <div>
        <h1>Coming Soon!</h1>
        <p>New project under construction.</p>
      </div>
      {chartsData ?? <div>Charts</div>}
    </>
  );
};

export default PageHome;
