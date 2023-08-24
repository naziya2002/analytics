import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";

const printf = () => {
  return (
    <>
      <div id="divone" className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead">Big Data</h1>

        <h2 className="font-bold text-3xl font-sans">What is Big Data?</h2>
        <br />
        <div className="flex w-full">
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500 w-2/3">
          Put simply, big data is larger, more complex data sets, especially
          from new data sources. These data sets are so voluminous that
          traditional data processing software just can’t manage them. But these
          massive volumes of data can be used to address business problems you
          wouldn’t have been able to tackle before. big data By Bridget,
          Editorial Director, NewsStephen J. Bigelow, Senior Technology Editor
          What is big data? Big data is a combination of structured,
          semi structured and unstructured data collected by organizations that
          can be mined for information and used in machine learning projects,
          predictive modeling and other advanced analytics applications.
        </p>
        <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg" className="rounded-lg w-1/3" />
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
          The three Vs of big data
        </h2>
        <br />
        <div className="flex bg-gradient-to-r from-indigo-500">
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans text-center">Volume</h1>
            <p className="px-3 py-3">
              The amount of data matters. With big data, you’ll have to process
              high volumes of low-density, unstructured data. This can be data
              of unknown value, such as Twitter data feeds, clickstreams on a
              web page or a mobile app, or sensor-enabled equipment. For some
              organizations, this might be tens of terabytes of data. For
              others, it may be hundreds of petabytes.
            </p>
          </div>
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans  text-center">
              Velocity
            </h1>
            <p className="px-3 py-3">
              Velocity is the fast rate at which data is received and (perhaps)
              acted on. Normally, the highest velocity of data streams directly
              into memory versus being written to disk. Some internet-enabled
              smart products operate in real time or near real time and will
              require real-time evaluation and action.
            </p>
          </div>
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans text-center">
              Variety
            </h1>
            <p className="px-3 py-3">
              Variety refers to the many types of data that are available.
              Traditional data types were structured and fit neatly in a
              relational database. With the rise of big data, data comes in new
              unstructured data types. Unstructured and semistructured data
              types, such as text, audio, and video, require additional
              preprocessing to derive meaning and support metadata.
            </p>
          </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
          How big data works
        </h2>
        <br />
        <div className="flex bg-gradient-to-l from-indigo-500">
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans text-center">
              Integrate
            </h1>
            <p className="px-3 py-3">
              Big data brings together data from many disparate sources and
              applications. Traditional data integration mechanisms, such as
              extract, transform, and load (ETL) generally aren’t up to the
              task. It requires new strategies and technologies to analyze big
              data sets at terabyte, or even petabyte, scale.
            </p>
          </div>
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans  text-center">
              Manage
            </h1>
            <p className="px-3 py-3">
              Big data requires storage. Your storage solution can be in the
              cloud, on premises, or both. You can store your data in any form
              you want and bring your desired processing requirements and
              necessary process engines to those data sets on an on-demand basis
            </p>
          </div>
          <div className="border-2 w-80 m-5 rounded-md">
            <h1 className="font-bold text-2xl font-sans text-center">
              Analyze
            </h1>
            <p className="px-3 py-3">
              Your investment in big data pays off when you analyze and act on
              your data. Get new clarity with a visual analysis of your varied
              data sets. Explore the data further to make new discoveries. Share
              your findings with others. Build data models with machine learning
              and artificial intelligence. Put your data to work.
            </p>
          </div>
        </div>
      </div>

      {<Footer />}
    </>
  );
};

export default printf;
