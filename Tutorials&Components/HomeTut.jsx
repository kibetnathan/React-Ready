import React from "react";

function LandingPageTut() {
  const codeString = String.raw`
//LandingPage.jsx

import React from "react";

const LandingPage = () => {
  return (
    <div>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href="https://tailblocks.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">TAILBLOCKS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/edf2f7/a5afbd"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
`;

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-200">
        <h2 className="text-blue-700 text-5xl font-semibold">Landing Page</h2>
                <img src="../assets/home.webp" alt="" className="object-cover m-5" />
        <div className="w-full flex flex-row p-15 box-border items-baseline">
          <h3 className="text-3xl underline decoration-2 mr-30">Code</h3>
          <h3 className="text-2xl">
            <a href="#tutorial">Tutorial</a>
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          id="codebox"
          className="bg-gray-900 w-[80vw] h-min-[70vh] text-neutral-200 rounded-3xl p-6 flex flex-col overflow-x-scroll"
        >
          <pre className="text-sm">
            <code>{codeString}</code>
          </pre>
        </div>
        <div
          id="tutorial"
          className="mt-20 w-[80%] min-h-screen bg-gray-300 rounded-3xl flex flex-col px-5"
        >
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 1: Create the Component File </pre>
          </h2>
          <p>Create a file called LandingPage.jsx in your src folder:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">folders</span> <br />
            <br />
            <pre>
              {`src/
    └─ LandingPage.jsx`}
            </pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 2: Import React </pre>
          </h2>
          <p>At the top of LandingPage.jsx, import React:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`import React from "react";`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 3: Create the Header Section </pre>
          </h2>
          <p>
            Build a responsive header with a logo, navigation links, and a call-to-action button. The header uses Tailwind's flexbox utilities to adapt between mobile and desktop layouts:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3 overflow-x-scroll">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`<header className="text-gray-700 body-font border-b border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        {/* SVG icon */}
      </svg>
      <span className="ml-3 text-xl">TAILBLOCKS</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
      Button
    </button>
  </div>
</header>`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 4: Build the Hero Section </pre>
          </h2>
          <p>
            Create a hero section with text content on the left and an image on the right. This section is fully responsive and stacks vertically on mobile devices:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3 overflow-x-scroll">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`<section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 5: Add the Features Section </pre>
          </h2>
          <p>
            Create a features section with a centered title and feature cards. Each card displays an icon, title, description, and a "Learn More" link:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3 overflow-x-scroll">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        ROOF PARTY POLAROID
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        Master Cleanse Reliac Heirloom
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                {/* SVG icon */}
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
      {/* Add more feature cards as needed */}
    </div>
  </div>
</section>`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 6: Customize Your Content </pre>
          </h2>
          <p>
            Replace placeholder text, images, and links with your own content. Update the company name, navigation links, hero text, and feature descriptions to match your brand:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`// Replace these with your own content:
- Company name: "TAILBLOCKS" → "Your Company"
- Navigation links: Update href and text
- Hero heading and description
- Feature card titles and descriptions
- Button text and actions
- Image sources`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 7: Add Multiple Feature Cards </pre>
          </h2>
          <p>
            To showcase multiple features, duplicate the feature card component and modify each one. Use md:w-1/3 for a 3-column layout on medium screens and larger:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3 overflow-x-scroll">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`<div className="flex flex-wrap -m-4">
  {/* Feature Card 1 */}
  <div className="p-4 md:w-1/3">
    {/* Card content */}
  </div>
  
  {/* Feature Card 2 */}
  <div className="p-4 md:w-1/3">
    {/* Card content */}
  </div>
  
  {/* Feature Card 3 */}
  <div className="p-4 md:w-1/3">
    {/* Card content */}
  </div>
</div>`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 8: Import and Use in App.jsx </pre>
          </h2>
          <p>Import your LandingPage component in App.jsx and add it to your routes:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`import LandingPage from "./LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Key Tailwind Classes Explained </pre>
          </h2>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">explanation</span> <br />
            <br />
            <pre>{`Responsive Design:
- flex-col md:flex-row: Stack vertically on mobile, horizontally on tablet+
- hidden lg:inline-block: Hide on mobile, show on large screens
- md:w-1/2: Half width on medium screens and up

Spacing:
- px-5 py-24: Horizontal padding 5, vertical padding 24
- mb-4 md:mb-0: Margin bottom 4, removed on medium screens
- -m-4: Negative margin to offset child padding

Flexbox:
- flex justify-center items-center: Center content
- flex-grow: Allow element to grow to fill space
- flex-wrap: Wrap items to next line

Colors & Hover:
- bg-indigo-500 hover:bg-indigo-600: Background color with hover effect
- text-gray-700: Gray text color`}</pre>
          </div>

          <p className="text-lg py-13">
            And just like that, you've created a professional, responsive landing page with React and Tailwind CSS!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPageTut;