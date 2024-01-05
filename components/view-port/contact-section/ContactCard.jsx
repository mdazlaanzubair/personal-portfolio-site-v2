"use client";

import { P1 } from "@/components/common/TypoAndUtils";
import React from "react";

const ContactCard = () => {
  const services_checkbox = [
    "Web Development",
    "App Development",
    "Web Scraping",
    "E-commerce Store",
    "Content Writing",
    "Consultancy",
  ];

  const budget_estimates = [
    "Less than $ 500",
    "$ 1,000 - $ 5,000",
    "More than $ 5,000",
  ];

  return (
    <div className="card w-full shadow-lg bg-gradient-to-br from-base-100/100 to-base-100">
      <form className="card-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <div className="divider">
                <P1>Contact Information</P1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Full Name (required)"
                    className="font-satoshi-medium input input-sm input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Email address (required)"
                    className="font-satoshi-medium input input-sm input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Country (optional)"
                    className="font-satoshi-medium input input-sm input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Phone Number (optional)"
                    className="font-satoshi-medium input input-sm input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <div className="divider">
                <P1>What&apos;s your project is about?</P1>
              </div>
              <div className="grid grid-cols-1 gap-3 w-full">
                <label className="form-control">
                  <textarea
                    className="font-satoshi-medium textarea p-3 textarea-sm textarea-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                    placeholder="Project description"
                    rows={3}
                    required
                  />
                  <div className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt"></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <div className="divider">
                <P1>Which service you&apos;re look for?</P1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full">
                {services_checkbox?.map((service, index) => (
                  <div key={index} className="form-control m-0">
                    <label className="cursor-pointer label bg-primary/5 rounded-md p-3">
                      <span className="font-satoshi-medium label-text text-xs">
                        {service}
                      </span>
                      <input
                        name="services"
                        value={service}
                        type="checkbox"
                        className="checkbox checkbox-accent checkbox-xs"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <div className="divider">
                <P1>Your anticipated budget?</P1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                {budget_estimates?.map((budget, index) => (
                  <div key={index} className="form-control">
                    <label className="cursor-pointer label bg-primary/5 rounded-md p-3">
                      <span className="font-satoshi-medium label-text text-xs">
                        {budget}
                      </span>
                      <input
                        name="budget"
                        value={budget}
                        type="radio"
                        className="radio radio-accent radio-xs"
                        required
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col items-end text-end">
              <button className="btn btn-sm btn-accent btn-wide mx-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
