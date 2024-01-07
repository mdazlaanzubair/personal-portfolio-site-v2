"use client";

import { H3, P1 } from "@/components/common/TypoAndUtils";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email address is required"),
  // country: Yup.string(),
  // phoneNumber: Yup.string(),
  projectDescription: Yup.string().required("Project description is required"),
  services: Yup.array()
    .of(Yup.string())
    .min(1, "At least one service must be selected")
    .required("Service selection is required"),
  budget: Yup.string().required("Budget selection is required"),
});

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

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      // country: "",
      // phoneNumber: "",
      projectDescription: "",
      services: [],
      budget: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="card w-full shadow-lg bg-gradient-to-br from-base-100/100 to-base-100">
      <form onSubmit={formik.handleSubmit} className="card-body">
        <div className="grid grid-cols-1 gap- items-start">
          <div className="flex flex-col items-start">
            <div className="divider">
              <P1>Contact Information</P1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              <div className="form-control">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name (required)"
                  className="font-satoshi-medium input input-md input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.fullName}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email address (required)"
                  className="font-satoshi-medium input input-md input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.email}
                    </span>
                  </div>
                )}
              </div>
              {/* <div className="form-control">
                <input
                  type="text"
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  placeholder="Country (optional)"
                  className="font-satoshi-medium input input-md input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                />
                {formik.touched.country && formik.errors.country && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.country}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  placeholder="Phone Number (optional)"
                  className="font-satoshi-medium input input-md input-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.phoneNumber}
                    </span>
                  </div>
                )}
              </div> */}
            </div>
          </div>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.services.includes(service)}
                    />
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.services && formik.errors.services && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.services}
                </span>
              </div>
            )}
          </div>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.budget === budget}
                    />
                  </label>
                </div>
              ))}
            </div>
            {formik.touched.budget && formik.errors.budget && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {formik.errors.budget}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start">
            <div className="divider">
              <P1>What&apos;s your project is about?</P1>
            </div>
            <label className="form-control w-full">
              <textarea
                className="font-satoshi-medium textarea p-3 textarea-md textarea-accent text-xs border rounded-md outline-none border-transparent bg-secondary bg-opacity-5 focus:text-accent focus:border-accent focus:outline-none transition-all ease-in-out duration-300"
                placeholder="Project description"
                name="projectDescription"
                rows={5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.projectDescription}
              />
              {formik.touched.projectDescription &&
                formik.errors.projectDescription && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {formik.errors.projectDescription}
                    </span>
                  </div>
                )}
            </label>
          </div>
          <div className="flex flex-col items-end text-end">
            <div className="divider"></div>
            <button type="submit" className="btn btn-block btn-accent mx-auto">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
