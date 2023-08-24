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
        <h1 id="mainhead">Data Lake</h1>

        <h2 className="font-bold text-3xl font-sans">What is DataLake?</h2>
        <br />
        <div className="flex w-full">
          <p id="pone" className="bg-gradient-to-r from-indigo-500 w-2/5">
            A data lake is a centralized repository designed to store, process,
            and secure large amounts of structured, semistructured, and
            unstructured data. It can store data in its native format and
            process any variety of it, ignoring size limits. A data lake
            provides a scalable and secure platform that allows enterprises to:
            ingest any data from any system at any speed—even if the data comes
            from on-premises, cloud, or edge-computing systems; store any type
            or volume of data in full fidelity; process data in real time or
            batch mode; and analyze data using SQL, Python, R, or any other
            language, third-party data, or analytics application.
          </p>
          <div className="mr-10 border-2 border black rounded-lg">
            <img
              src="https://www.guru99.com/images/1/022218_0459_WhatisDataL1.png"
              alt="image description"
            />
          </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Why do you need a data lake?
        </h2>
        <br />
        <div className="flex w-full">
          <p id="pone" className="bg-gradient-to-l from-indigo-500 w-2/5">
            Organizations that successfully generate business value from their
            data, will outperform their peers. An Aberdeen survey saw
            organizations who implemented a Data Lake outperforming similar
            companies by 9% in organic revenue growth. These leaders were able
            to do new types of analytics like machine learning over new sources
            like log files, data from click-streams, social media, and internet
            connected devices stored in the data lake. This helped them to
            identify, and act upon opportunities for business growth faster by
            attracting and retaining customers, boosting productivity,
            proactively maintaining devices, and making informed decisions.
          </p>
        </div>
        <br />
        <br />

        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
          DataLake Solutions
        </h2>
        <div className="flex bg-gradient-to-r from-indigo-500 w-full">
          <div className="box-border  md:box-content h-32 w-32 p-4 border-2 mr-6 rounded-l-lg mt-2 mb-2 mr-2 ml-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black">
            <p className="font-extrabold ">
              Various interfaces, APIs and endpoints
            </p>
          </div>
          <div className="box-border  md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black ">
            <p className="font-extrabold">
              Support for or connection to processing and analytics layers
            </p>
          </div>
          <div className="box-border md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black ">
            <p className="font-extrabold">
              {" "}
              Robust search and cataloging features
            </p>
          </div>
          <div className="box-border md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black">
            <p className="font-extrabold"> Security and access control</p>
          </div>
          <div className="box-border md:box-content h-32 w-32 p-4 border-2 rounded-r-lg mt-2 mb-2 mr-2 bg-gradient-to-l  hover:from-blue-500 hover:to-black">
            <p className="font-extrabold">Flexibility and scalability</p>
          </div>
        </div>

        <div>
          <br />
          <br />
          <h2 className="font-bold text-3xl font-sans mb-5">
           
            Best Data Lake Solution Vendors at present
          </h2>
          <div className="box-border b bg-gradient-to-r from-indigo-500 flex">
          <div className="box w-2/3" >
            <ul >
              <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={
                    "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/"
                  }
                >
                  Amazon Web Services
                </Link>
              </li>
              <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={
                    "https://www.cloudera.com/products/sdx/data-lake-service.html"
                  }
                >
                  Databricks
                </Link>
              </li>
              <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={"https://www.databricks.com/product/data-lakehouse"}
                >
                  Cloudera
                </Link>
              </li>
              <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link href={"https://www.domo.com/platform/leverage-the-cloud"}>
                  Domo
                </Link>
              </li>
              <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link href={"https://www.ibm.com/data-lake"}>IBM</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 h-full p-0 mr-10 rounded-lg mt-3 border-2 bg-center">
          <img
              src="https://www.bankinghub.eu/wp-content/uploads/2015/04/solution.jpg"
              alt="image description"
              className="rounded-lg"
            />
          </div>
          </div>
          <div>
          </div>
        </div>
      </div>

      {<Footer />}
    </>
  );
};

export default printf;
