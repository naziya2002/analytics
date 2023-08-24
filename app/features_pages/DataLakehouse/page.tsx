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
        <h1 id="mainhead">Data LakeHouse</h1>

        <h2 className="font-bold text-3xl font-sans">
          What is data lakehouse?
        </h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500">
          A data lakehouse features the flexibility and cost-efficiency of a
          data lake with the contextual and high-speed querying capabilities of
          a data warehouse. Data lakehouses combine the key aspects of lakes and
          warehouses. This enables enterprises to use the single-repository
          model of data warehouses for unified storage without sacrificing the
          analytical flexibility of data lakes, allowing data lakehouses to
          excel at both analytical and machine learning workloads.
        </p>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Data Lakehouse Key features
        </h2>
        <br />
        <br />
        <div className="flex">
        <p id="pone" className="font-sans bg-gradient-to-l from-indigo-500 w-2/3">
          As previously noted, data lakehouses combine the best features within
          data warehousing with the most optimal ones within data lakes. It
          leverages similar data structures from data warehouses and pairs it
          with the low cost storage and flexibility of data lakes, enabling
          organizations to store and access big data quickly and more
          efficiently while also allowing them to mitigate potential data
          quality issues. It supports diverse data datasets, i.e. both
          structured and unstructured data, meeting the needs of both business
          intelligence and data science workstreams. It typically supports
          programming languages like Python, R, and high performance SQL. Data
          lakehouses also support ACID transactions on larger data workloads.
          ACID stands for atomicity, consistency, isolation, and durability; all
          of which are key properties that define a transaction to ensure data
          integrity. Atomicity can be defined as all changes to data are
          performed as if they are a single operation. Consistency is when data
          is in a consistent state when a transaction starts and when it ends.
          Isolation refers to the intermediate state of transaction being
          invisible to other transactions. As a result, transactions that run
          concurrently appear to be serialized. Durability is after a
          transaction successfully completes, changes to data persist and are
          not undone, even in the event of a system failure. This feature is
          critical in ensuring data consistency as multiple users read and write
          data simultaneously.
        </p>
        <img src="https://www.datanomiq.io/wp-content/uploads/2023/01/data-lakehouse-visualization.jpg" className="rounded-lg w-1/3" />
        </div>

        <br />
        <br />
        
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Data Lakehouse Archeitecture
        </h2>
        <br />
        <br />
        <h2>
          {" "}
          <b>Ingestion layer</b>
        </h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500">
          This first layer gathers data from a range of different sources and
          transforms it into a format that can be stored and analyzed in a
          lakehouse. The ingestion layer can use protocols to connect with
          internal and external sources such as database management systems,
          NoSQL databases, social media, and others. As the name suggests, this
          layer is responsible for the ingestion of data.
        </p>
        <br />
        <br />
        <h2>
          {" "}
          <b>Metadata layer</b>
        </h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-l from-indigo-500">
          The metadata layer is the foundation of the data lakehouse. It’s a
          unified catalog that delivers metadata for every object in the lake
          storage, helping organize and provide information about the data in
          the system. This layer also gives user the opportunity to use
          management features such as ACID transactions, file caching, and
          indexing for faster query. Users can implement predefined schemas
          within this layer, which enable data governance and auditing
          capabilities.
        </p>
        <br />
        <br />
        <h2>
          {" "}
          <b>Storage layer</b>
        </h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500">
          In this layer, the structured, unstructured, and semi-structured data
          is stored in open-source file formats, such as such as Parquet or
          Optimized Row Columnar (ORC). The real benefit of a lakehouse is the
          system’s ability to accept all data types at an affordable cost.
        </p>
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
        Benefits  of a data lakehouse
        </h2>
        <div className="border-2 w-1/2">
          <ul className="m-2 p-2">
            <li className="font-bold mt-2 mb-2">Reduced data redundancy</li>
            <li className="font-bold mt-2 mb-2">Cost-effective</li>
            <li className="font-bold mt-2 mb-2">Supports wide variety of workloads</li>
            <li className="font-bold mt-2 mb-2">More scale</li>
            <li className="font-bold mt-2 mb-2">Streaming support</li>
          </ul>
        </div>

      </div>

      {<Footer />}
    </>
  );
};

export default printf;
