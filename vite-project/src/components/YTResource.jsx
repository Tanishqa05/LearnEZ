import React from "react";

function YTResource() {
  return (
    <>
      <div className="ratio ratio-16x9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZwwcV8JY8wo?si=CgvCzPYLOiChrsXl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default YTResource;
