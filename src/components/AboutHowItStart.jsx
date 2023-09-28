const AboutHowItStart = () => {
  return (
    <div className="howItStart">
      <div className="howItTitle">
        <h2>How it Started</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
          <br />
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="howIt">
        <div className="howItDesc">
          <h2>Vel mauris molestie dignissim</h2>
          <h3>
            Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
            ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
          </h3>
          <p>
            Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet
            faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet
            vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus
            sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia
            ex quis faucibus tempor. Sed feugia.
          </p>
        </div>
        <img src={require("../images/howItImg.jpg")} alt="howIt" />
      </div>
      <div className="break"></div>
    </div>
  );
}

export default AboutHowItStart