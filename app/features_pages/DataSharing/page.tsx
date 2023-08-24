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

        <h2 className="font-bold text-3xl font-sans">What is DataSharing?</h2>
        <br />
        <div className="flex">
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500">
          Data sharing is the process of making the same data resources
          available to multiple applications, users, or organizations. It
          includes technologies, practices, legal frameworks, and cultural
          elements that facilitate secure data access for multiple entities
          without compromising data integrity. Data sharing improves efficiency
          within an organization and fosters collaboration with vendors and
          partners. Awareness of the risks and opportunities of shared data is
          integral to the process.
        </p>
        <div className="mr-2">
          <img src="https://afiahealth.com/wp-content/uploads/2014/12/data-sharing.png" className="rounded-lg"/>
        </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Importance of DataSharing for Enterprise
        </h2>
        <br />
        <br />
        <div className="flex w-full">
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500 ">
          Data sharing benefits the researcher, research sponsors, data
          repositories, the scientific community, and the public. It encourages
          more connection and collaboration between scientists, and better
          science leads to better decisionmaking.
          <br />
          Data sharing reduces inefficiencies, leading to healthier bottom lines. It also increases collaboration and subsequently opens up new opportunities between business leaders.
        </p>
        <div className="">
          <img src="https://cdn.pixabay.com/photo/2015/08/17/19/58/question-892904_1280.png" className="rounded-lg w-96 " />
        </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
        What are the risks of data sharing?
        </h2>
        <div className="">
          <ul>
            <li className="font-bold mt-2 mb-2">
            Privacy disclosure
            </li>
            <li className="font-bold mt-2 mb-2">
            Data misinterpretation
            </li>
            <li className="font-bold mt-2 mb-2">
            Low data quality
            </li>
          </ul>
        
        </div>

        <div>
          <br />
          <br />
          <h2 className="font-bold text-3xl font-sans mb-5">
            Best Data Sharing technologies
          </h2>
          <div className="box-border b">
            <ul className="">
              <li className="bg-black hover:bg-indigo-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={
                    "https://www.oracle.com/in/database/what-is-a-data-warehouse/"
                  }
                >
                  Data warehousing
                </Link>
              </li>
              <li className="bg-black hover:bg-indigo-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={
                    "https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces"
                  }
                >
                  APIs
                </Link>
              </li>
              <li className="bg-black hover:bg-indigo-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link
                  href={"https://research.ibm.com/blog/what-is-federated-learning"}
                >
                  Federated learning
                </Link>
              </li>
              <li className="bg-black hover:bg-indigo-500 w-max h-max ml-0 m-2 border-2 rounded p-3">
                <Link href={"https://www.ibm.com/topics/blockchain"}>
                Blockchain technology
                </Link>
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
