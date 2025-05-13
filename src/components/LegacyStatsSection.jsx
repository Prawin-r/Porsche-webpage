import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function LegacyStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-black text-white py-24 text-center hero-font"
    >
      <h2 className="text-5xl font-bold mb-12 tracking-wide">Porsche Legacy</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 px-6 md:px-20">
        <div>
          <h3 className="text-6xl font-extrabold text-red-500">
            {startCount && <CountUp end={75} duration={3} />}+
          </h3>
          <p className="mt-3 text-lg">Years of Innovation</p>
        </div>
        <div>
          <h3 className="text-6xl font-extrabold text-red-500">
            {startCount && <CountUp end={250} duration={3} />}+
          </h3>
          <p className="mt-3 text-lg">Race Wins</p>
        </div>
        <div>
          <h3 className="text-6xl font-extrabold text-red-500">
            {startCount && <CountUp end={1000000} duration={3} separator="," />}
          </h3>
          <p className="mt-3 text-lg">Porsche Owners</p>
        </div>
      </div>
    </section>
  );
}
