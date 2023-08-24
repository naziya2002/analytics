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
        <h1 id="mainhead">Data Sharing</h1>

        <h2 className="font-bold text-3xl font-sans">What is DataLake?</h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500">
          
        </p>
        <br />
        <br />
        <div className="w-100% md:w-auto bg-slate-100 border-4 border-amber-950 rad rounded-full mr-20 ">
        <img src="https://d1.awsstatic.com/AWS_Analytics_2021_LakeHouse.337c5d294eae24fe954c1d2e93fcda03233dfba4.png" alt="image description"  />
        </div>
        <br /><br />
        <h2 className="font-bold text-3xl font-sans mb-6">DataLake Solutions</h2>
        <div className="flex bg-gradient-to-r from-indigo-500 w-2/3 rounded-l-lg rounded-r-lg">
        <div className="box-border  md:box-content h-32 w-32 p-4 border-2 mr-6 rounded-l-lg mt-2 mb-2 mr-2 ml-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black">
          <p className="font-extrabold ">Various interfaces, APIs and endpoints</p>
        </div>
        <div className="box-border  md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black ">
          <p className="font-extrabold">Support for or connection to processing and analytics layers</p>
        </div>
        <div className="box-border md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black ">
          <p className="font-extrabold"> Robust search and cataloging features</p>
        </div>
        <div className="box-border md:box-content h-32 w-32 p-4 border-2 mr-6 mt-2 mb-2 bg-gradient-to-r  hover:from-blue-500 hover:to-black">
          <p className="font-extrabold"> Security and access control</p>
        </div>
        <div className="box-border md:box-content h-32 w-32 p-4 border-2 rounded-r-lg mt-2 mb-2 mr-2 bg-gradient-to-l  hover:from-blue-500 hover:to-black">
          <p className="font-extrabold">Flexibility and scalability</p>
        </div>
        </div>

        <div>
        <br /><br />
        <h2 className="font-bold text-3xl font-sans mb-5"> Beast Data Lake Solution Vendors at present</h2>
        <div className="box-border b">
          <ul className="">
            <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
            <Link href={"https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/"}>Amazon Web Services</Link>
            </li>
            <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
            <Link href={"https://www.cloudera.com/products/sdx/data-lake-service.html"}>Databricks</Link>
            </li>
            <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
            <Link href={"https://www.databricks.com/product/data-lakehouse"}>Cloudera</Link>
            </li>
            <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
            <Link href={"https://www.domo.com/platform/leverage-the-cloud"}>Domo</Link>
            </li>
            <li className="bg-black hover:bg-blue-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
            <Link href={"https://www.ibm.com/data-lake"}>IBM</Link>
            </li>
          </ul>
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
