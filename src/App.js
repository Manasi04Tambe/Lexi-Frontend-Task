import React, { useState } from "react";

const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const response = {
    answer:
      "Yes, under Section 166 of the Motor Vehicles Act, 1988, where the deceased was self-employed and aged 54–55 years at the time of death, the claimant is entitled to an addition towards future prospects.",
    citations: [
      {
        text: "As the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects.",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
      }
    ]
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  const openPdfInNewTab = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 flex justify-center text-gray-900 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-xl p-6 shadow-md">
        {/* Question */}
        <div className="bg-gray-200 p-4 rounded-xl text-sm leading-relaxed mb-4 border border-gray-300">
          <div className="bg-pink-600 text-white inline-block px-3 py-1 rounded-md text-xs font-bold mb-2">
            Dani Vs Pritam (Future 10 at age 54–55)
          </div>
          <div>
            In a motor accident claim where the deceased was self-employed and
            aged 54–55 years at the time of death, is the claimant entitled to
            an addition towards future prospects in computing compensation under
            Section 166 of the Motor Vehicles Act, 1988? If so, how much?
          </div>
        </div>

        {/* Submit Button */}
        {!showAnswer && (
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Submit
          </button>
        )}

        {/* Answer Section */}
        {showAnswer && (
          <div className="mt-6 bg-white p-5 rounded-xl border border-gray-200 text-base leading-7">
            <p className="mb-4">{response.answer}</p>

            <h3 className="text-base font-semibold mb-2">Legal Position:</h3>
            <p className="mb-2">
              The <strong>Punjab and Haryana High Court</strong>, in{" "}
              <em>Dani Devi v. Pritam Singh</em> (FAO No. 4353 of 2012, decided
              on 13.09.2022), held that:
            </p>

            {/* Citation */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg italic mb-5">
              "{response.citations[0].text}"
              <br />
              <button
                onClick={() => openPdfInNewTab(response.citations[0].link)}
                className="text-blue-600 underline mt-2 block text-sm"
              >
                View Citation PDF
              </button>
            </div>

            <h3 className="text-base font-semibold mb-2">Summary of Entitlement:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Category:</strong> Self-employed
              </li>
              <li>
                <strong>Age:</strong> 54–55 years
              </li>
              <li>
                <strong>Future Prospects Addition:</strong> 10% of the annual
                income
              </li>
            </ul>

            <p>
              This aligns with the principles laid down by the Supreme Court in{" "}
              <em>Pranay Sethi</em>, where future prospects were allowed even
              for self-employed and fixed-income individuals based on age
              brackets.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
