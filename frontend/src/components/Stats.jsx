import React from "react";
import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}+</span>;
};

const Stats = () => {
    return (
        <div className="absolute bottom-3  left-1/2 -translate-x-1/2 w-full">
            <div className="max-w-4xl mx-auto bg-dark-bg/80 backdrop-blur border border-accent-amber/30 rounded-xl px-6 py-4">
                <div className="flex justify-around text-center">

                    <div>
                        <h3 className="text-3xl font-bold text-neon">
                            <Counter end={30} />
                        </h3>
                        <p className="text-off-white text-sm mt-1">
                            Projects Completed
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-neon">
                            <Counter end={15} />
                        </h3>
                        <p className="text-off-white text-sm mt-1">
                            Satisfied Clients
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-neon">
                            <Counter end={3} />
                        </h3>
                        <p className="text-off-white text-sm mt-1">
                            Years Experience
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Stats;



