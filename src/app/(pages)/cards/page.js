import React from "react";
import Image from "next/image";
import background from "../../../assets/img/titlebg2.jpg";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import CircleSvg from "../../../assets/img/circle.svg";
import "../../../assets/styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faArrowUp,
  faChartLine,
  faChartPie,
  faLifeRing,
  faLineChart,
  faPieChart,
  faRankingStar,
  faUsers,
  faArrowDown,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
// import CommonLayout from "./layout";

const StatsCard = () => {
  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Stats Cards " titleBg={background} />
        <div fluid="true" className="container-fluid px-5 mb-4">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "cards", link: "/cards" },
            ]}
          />
          <div className="flex flex-col gap-4">
            {/* Stats Card Option 1 */}
            <div className="w-full bg-white p-4">
              <h2 className="mt-2 mb-4 text-2xl font-semibold">
                Stats Card Option 1
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Card 1 */}
                <div className="w-full lg:w-1/4 ">
                  <div className="bg-white p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h3 className="text-primary text-2xl font-semibold">
                          2780
                        </h3>
                        <span>New User</span>
                      </div>
                      <div className="text-primary">
                        <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                      </div>
                    </div>
                    <div className="w-full h-2 mt-1 bg-[#8c8a89]">
                      <div className="w-4/5 h-full bg-primary"></div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full lg:w-1/4">
                  <div className="bg-white p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h3 className="text-primary-1 text-2xl font-semibold">
                          1561
                        </h3>
                        <span>New Transitions</span>
                      </div>
                      <div className="text-primary-1">
                        <FontAwesomeIcon
                          icon={faChartColumn}
                          className="text-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full h-2 mt-1 bg-[#8c8a89]">
                      <div className="w-1/3 h-full bg-[#FFBC00]"></div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="w-full lg:w-1/4">
                  <div className="bg-white p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h3 className="text-success text-2xl font-semibold">
                          64.89 %
                        </h3>
                        <span>Growth Rate</span>
                      </div>
                      <div className="text-success">
                        <FontAwesomeIcon
                          icon={faRankingStar}
                          className="text-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full h-2 mt-1 bg-[#8c8a89]">
                      <div className="w-2/3 h-full bg-[#197854]"></div>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="w-full lg:w-1/4">
                  <div className="bg-white p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h3 className="text-secondary-1 text-2xl font-semibold">
                          423
                        </h3>
                        <span>Support Ticket</span>
                      </div>
                      <div className="text-secondary-1">
                        <FontAwesomeIcon
                          icon={faLifeRing}
                          className="text-2xl"
                        />
                      </div>
                    </div>
                    <div className="w-full h-2 mt-1 bg-secondary-1">
                      <div className="w-40/100 h-full bg-secondary-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card Option 2 */}
            <div className="w-full bg-white p-4">
              <h2 className="mt-2 mb-4 text-2xl font-semibold">
                Stats Card Option 2
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <div className="bg-light p-4 shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-uppercase text-muted mb-1">
                          Traffic
                        </h5>
                        <span className="card-count">350,897</span>
                      </div>
                      <div className="text-center">
                        <div className="h-11 w-11 rounded-full flex items-center justify-center icon bg-primary text-white rounded-circle shadow-md text-xl">
                          <FontAwesomeIcon icon={faChartColumn} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success me-2">
                        <FontAwesomeIcon icon={faArrowUp} /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <div className="bg-light p-4 shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-uppercase text-muted mb-1">
                          New users
                        </h5>
                        <span className="card-count">2,356</span>
                      </div>
                      <div className="text-center">
                        <div className="h-11 w-11 rounded-full flex items-center justify-center icon bg-[#FFBC00] text-white rounded-circle shadow-md text-xl">
                          <FontAwesomeIcon icon={faUsersLine} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger me-2">
                        <FontAwesomeIcon icon={faArrowDown} /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last week</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <div className="bg-light p-4 shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-uppercase text-muted mb-1">
                          Sales
                        </h5>
                        <span className="card-count">924</span>
                      </div>
                      <div className="text-center">
                        <div className="h-11 w-11 rounded-full flex items-center justify-center icon bg-[#197854] text-white rounded-circle shadow-md text-xl">
                          <FontAwesomeIcon icon={faChartPie} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning me-2">
                        <FontAwesomeIcon icon={faArrowDown} /> 1.10%
                      </span>
                      <span className="text-nowrap">Since yesterday</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                  <div className="bg-light p-4 shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-uppercase text-muted mb-1">
                          Performance
                        </h5>
                        <span className="card-count">49.65%</span>
                      </div>
                      <div className="text-center">
                        <div className="h-11 w-11 rounded-full flex items-center justify-center icon bg-secondary-1 text-white rounded-circle shadow-md text-xl">
                          <FontAwesomeIcon icon={faChartLine} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success me-2">
                        <FontAwesomeIcon icon={faArrowUp} /> 12%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card Option 3 */}
            <div className="w-full p-4 bg-white">
              <h4 className="mt-2 mb-4 text-2xl font-semibold">
                Stats Card Option 3
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 color-card">
                {/* Card 1 */}
                <div className="stretch-card col-span-1 sm:col-span-1 lg:col-span-1 ">
                  <div className="bg-gradient-to-r from-orange-300 to-orange-500 text-white p-4 shadow-md relative">
                    <Image
                      src={CircleSvg}
                      className="card-img-absolute"
                      alt="circle-image"
                      width={0}
                      height={0}
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Sales
                      <FontAwesomeIcon
                        icon={faLineChart}
                        className="float-right text-2xl p-2"
                      />
                    </h4>
                    <h2 className="mb-5">Rs. 15,0000</h2>
                    <h6 className="card-text">Increased by 60%</h6>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1 color-card">
                  <div className="bg-gradient-info text-white p-4 shadow-md relative">
                    <Image
                      src={CircleSvg}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Weekly Orders
                      <FontAwesomeIcon
                        icon={faPieChart}
                        className="float-right text-2xl p-2"
                      />
                    </h4>
                    <h2 className="mb-5">45,6334</h2>
                    <h6 className="card-text">Decreased by 10%</h6>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-span-1 sm:col-span-1 lg:col-span-1 color-card">
                  <div className="bg-gradient-success text-white p-4 shadow-md relative">
                    <Image
                      src={CircleSvg}
                      className="card-img-absolute"
                      alt="circle-image"
                    />
                    <h4 className="font-weight-normal mb-3">
                      Visitors Online
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="float-right text-2xl p-2"
                      />
                    </h4>
                    <h2 className="mb-5">95,5741</h2>
                    <h6 className="card-text">Increased by 5%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StatsCard;
