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
        <h1 id="mainhead">Data Warehouse</h1>

        <h2 className="font-bold text-3xl font-sans">
          What Is a Data Warehouse?
        </h2>
        <br />
        <div className="flex">
        <p id="pone" className="font-sans bg-gradient-to-r from-indigo-500 w-2/3">
          A data warehouse is a type of data management system that is designed
          to enable and support business intelligence (BI) activities,
          especially analytics. Data warehouses are solely intended to perform
          queries and analysis and often contain large amounts of historical
          data. The data within a data warehouse is usually derived from a wide
          range of sources such as application log files and transaction
          applications. A data warehouse centralizes and consolidates large
          amounts of data from multiple sources. Its analytical capabilities
          allow organizations to derive valuable business insights from their
          data to improve decision-making. Over time, it builds a historical
          record that can be invaluable to data scientists and business
          analysts. Because of these capabilities, a data warehouse can be
          considered an organization’s “single source of truth.”
        </p>
        <img src="https://www.nukon.com/hubfs/nukon/nukon-blog/Nukon-Data-warehousing%E2%80%93an-easier-way-to-access-your-data/Nukon-Data-warehouse-artwork-hero.jpg" className="w-1/3"/>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          What Is a Data Warehouseing?
        </h2>
        <br />
        <p id="pone" className="font-sans bg-gradient-to-l from-indigo-500">
          Data warehousing is the process of constructing and using a data
          warehouse. A data warehouse is constructed by integrating data from
          multiple heterogeneous sources that support analytical reporting,
          structured and/or ad hoc queries, and decision making. Data
          warehousing involves data cleaning, data integration, and data
          consolidations.
        </p><br /><br />
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Benefits of a Data Warehouse
        </h2>
        <br />
        <br />

        <div className="border-2 w-1/2">
          <ul className="m-2 p-2">
            <li className="font-bold mt-2 mb-2">Unlock Data-Driven Capabilities</li>
            <li className="font-bold mt-2 mb-2"> Maintain Data Quality And Consistency</li>
            <li className="font-bold mt-2 mb-2">Use Data From Numerous Sources</li>
            <li className="font-bold mt-2 mb-2">Realize The Power Of Automation</li>
            <li className="font-bold mt-2 mb-2">Respond To Business Growth</li>
            <li className="font-bold mt-2 mb-2">Get Data Warehousing On A Subscription Model</li>
            <li className="font-bold mt-2 mb-2">Learn More About Your Customers</li>
            <li className="font-bold mt-2 mb-2">Enjoy Interoperability Between Physical Solutions And The Cloud</li>
          </ul>
        </div>
      </div>

      {<Footer />}
    </>
  );
};

export default printf;
