import { useState, useEffect } from "react";

const ratingMap = {
  1: "Poor",
  2: "Needs Improvement",
  3: "Good",
  4: "Great",
  5: "Outstanding",
};

const updateGauge = (value) => {
  const angle = -90 + (value - 1) * 45; // Rotates from -90 to +90
  const needle = document.getElementById("needle");
  const text = document.getElementById("rating-text");

  if (needle) {
    needle.style.transition = "transform 0.5s ease-out"; // Smooth needle transition
    needle.setAttribute("transform", `rotate(${angle} 100 100)`);
  }

  if (text) {
    text.innerText = ratingMap[value];
  }

  const arcFill = document.getElementById("gauge-fill");
  const dash = value * 113; // 565/5
  if (arcFill) {
    arcFill.style.transition = "stroke-dasharray 0.5s ease-out"; // Smooth fill transition
    arcFill.setAttribute("stroke-dasharray", `${dash}, 565`);
  }
};

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false); // Modal state

  useEffect(() => {
    updateGauge(3); // Initialize to middle
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 text-center bg-white text-black hero-font">
      <h1 className="text-4xl font-bold mb-4">Contact the Designer</h1>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Got feedback, a query, or want to rate this Porsche-inspired website?
        Drop your message below!
      </p>

      <form
        action="https://formspree.io/f/mkgrqapl"
        method="POST"
        className="max-w-lg mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback or Questions"
          className="w-full p-3 border rounded h-32"
          required
        ></textarea>

        {/* Button to open the Speedometer Modal */}
        <button
          type="button"
          onClick={() => setModalOpen(true)} // Open modal
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Rate My Website
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        You’ll receive a confirmation email once the form is submitted.
      </p>

      {/* Modal for Speedometer */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to close modal
          >
            <div className="text-center">
              <h2 className="text-2xl mb-4">Rate My Website</h2>

              <div className="relative w-60 h-32 mx-auto mb-4">
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  {/* Background arc */}
                  <path
                    d="M10,100 A90,90 0 0,1 190,100"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="12"
                  />
                  {/* Foreground arc (rating fill) */}
                  <path
                    id="gauge-fill"
                    d="M10,100 A90,90 0 0,1 190,100"
                    fill="none"
                    stroke="#4caf50"
                    strokeWidth="12"
                    strokeDasharray="0, 565"
                  />
                  {/* Needle */}
                  <line
                    id="needle"
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="20"
                    stroke="#000"
                    strokeWidth="6"
                    transform="rotate(-90 100 100)"
                  />
                </svg>
                <p id="rating-text" className="text-lg mt-4 font-bold">
                  Select a rating
                </p>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  defaultValue="3"
                  name="rating"
                  className="mt-6 w-full"
                  onInput={(e) => updateGauge(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
