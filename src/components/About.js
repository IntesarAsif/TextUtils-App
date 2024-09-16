export default function About(props) {


    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white'
    }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                TextUtils offers a powerful tool to help you analyze your text
                effortlessly.
              </strong>{" "}
              With features like word count, character count, and whitespace
              removal, it provides detailed insights to improve the readability
              and structure of your content. Simplify your writing and optimize
              text with just a few clicks.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is completely free for everyone!</strong> You
              can access its full range of features without any hidden charges
              or subscriptions. Whether you are a student, professional, or
              casual user, enjoy unlimited access to text analysis and editing
              tools without worrying about costs.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Our app works seamlessly across all major browsers.
              </strong>
              TextUtils is fully browser compatible, designed to work flawlessly
              across all major web browsers like Chrome, Firefox, Safari, and
              Edge. No installations or downloads are required, making it easy
              to use from any device. Experience consistent functionality,
              whether you're on a desktop or mobile browser.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
