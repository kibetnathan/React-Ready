import React from "react";

const DocsIntro = () => {
  return (
    <section className="prose max-w-3xl mx-auto py-10 px-4 bg-blue-200">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to React Ready</h1>
      <p className="text-lg text-blue-700 mb-6">
        <strong>React Ready</strong> is your go-to library for ready-to-use React components,
        complete with step-by-step tutorials and detailed documentation. Our goal is to help
        developers build faster, learn efficiently, and create beautiful interfaces without
        reinventing the wheel.
      </p>
      <p className="text-gray-700 mb-6">
        Each component comes with a live example, setup guide, and explanation of how it works
        under the hood. Whether you're integrating small UI elements or constructing entire
        layouts, React Ready gives you reliable, production-tested code that just works.
      </p>
      <p className="text-gray-700 mb-6">
        The documentation is designed to be simple and practical. You’ll find clear installation
        instructions, usage patterns, and tips on customization—so you can adapt every component
        to fit your project’s needs with ease.
      </p>
      <p className="text-gray-700">
        Start exploring the components library, follow along with the tutorials, and take your
        React workflow to the next level. With <strong>React Ready</strong>, you’re always just a few
        steps away from a production-ready interface.
      </p>
    </section>
  );
};

export default DocsIntro;
