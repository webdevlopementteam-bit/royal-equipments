"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  mobileNo: z
    .string()
    .trim()
    .regex(
      /^(\d{10}|\d{12})$/,
      "Mobile number must contain exactly 10 or 12 digits.",
    ),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(1, "Please enter your message."),
});

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CAPTCHA state
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[16px] text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-[#2F3192]/40 focus:border-[#2F3192] focus:bg-white focus:ring-4 focus:ring-[#2F3192]/10";

  const labelClass = "mb-2 block text-[16px] font-medium text-slate-700";
  const textClass = "text-[16px] leading-relaxed";

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "mobileNo" ? value.replace(/\D/g, "").slice(0, 12) : value;

    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus("");
  };

  // CAPTCHA checkbox handler
  const handleCaptchaChange = (e) => {
    const checked = e.target.checked;

    setIsCaptchaVerified(checked);
    setCaptchaError("");
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // Validate all contact form fields
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);

      // Also validate CAPTCHA when the form fields are invalid
      if (!isCaptchaVerified) {
        setCaptchaError("Please confirm that you are not a robot.");
      }

      return;
    }

    setErrors({});

    // Prevent submission until CAPTCHA is checked
    if (!isCaptchaVerified) {
      setCaptchaError("Please confirm that you are not a robot.");
      return;
    }

    setCaptchaError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "12345",
          subject: "New Contact Form Submission - Royale Equipments",
          from_name: "Royale Equipments Website",
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          mobileNo: result.data.mobileNo,
          email: result.data.email,
          message: result.data.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        sessionStorage.setItem("contactFormSubmitted", "true");
        router.push("/thank-you");
      } else {
        setStatus(
          data.message || "Unable to submit your form. Please try again.",
        );
      }
    } catch {
      setStatus(
        "Something went wrong. Please check your internet connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-800">
      <Breadcrumb title="Contact" />

      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#2F3192]/15 bg-[#2F3192]/5 px-5 py-2 text-[15px] font-medium text-[#2F3192]">
            We're Here to Help
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#2F3192] sm:text-4xl">
            Get in Touch With Us
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#2F3192]" />

          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
            Have a question or need assistance? Contact our team for product
            enquiries, business discussions, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2 lg:gap-8">
          <section className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_45px_rgba(47,49,146,0.07)] transition-shadow duration-300 hover:shadow-[0_16px_50px_rgba(47,49,146,0.12)]">
            <div className="border-b border-slate-100 bg-gradient-to-r from-[#2F3192]/[0.07] via-white to-white px-5 py-6 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2F3192] text-white">
                  <MessageCircle size={23} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[#2F3192] sm:text-2xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-[15px] text-slate-500">
                    Fill out the form below with your details.
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 p-5 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                  />

                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name *
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                  />

                  {errors.lastName && (
                    <p
                      id="lastName-error"
                      className="mt-2 text-sm text-red-600"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="mobileNo" className={labelClass}>
                  Mobile Number *
                </label>

                <input
                  id="mobileNo"
                  type="tel"
                  name="mobileNo"
                  inputMode="numeric"
                  placeholder="Enter 10 or 12 digit number"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={Boolean(errors.mobileNo)}
                  aria-describedby={
                    errors.mobileNo ? "mobileNo-error" : undefined
                  }
                />

                {errors.mobileNo && (
                  <p id="mobileNo-error" className="mt-2 text-sm text-red-600">
                    {errors.mobileNo}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Comment or Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* I'm not a robot CAPTCHA */}
              <div>
                <div
                  className={`flex flex-col gap-4 rounded-xl border p-4 transition-colors flex-row sm:items-center sm:justify-start max-w-[280px] ${
                    captchaError
                      ? "border-red-300 bg-red-50"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <label
                    htmlFor="notRobot"
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      id="notRobot"
                      type="checkbox"
                      checked={isCaptchaVerified}
                      onChange={handleCaptchaChange}
                      aria-invalid={Boolean(captchaError)}
                      aria-describedby={
                        captchaError ? "captcha-error" : undefined
                      }
                      className="h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 accent-[#2F3192] focus:ring-2 focus:ring-[#2F3192]/30"
                    />

                    <span className="text-[15px] font-medium text-slate-700">
                      I'm not a robot
                    </span>
                  </label>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <Image
                      src="/contact/captcha.webp"
                      alt="CAPTCHA verification image"
                      width={150}
                      height={56}
                      className="h-12 w-auto max-w-[150px] rounded-md  object-contain p-1"
                    />
                  </div>
                </div>

                {captchaError && (
                  <p
                    id="captcha-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {captchaError}
                  </p>
                )}
              </div>

              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-[15px] ${
                    status === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F3192] px-5 py-4 text-[16px] font-medium text-white shadow-md shadow-[#2F3192]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#242675] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2F3192]/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Message"}

                {!isSubmitting && <ArrowUpRight size={19} />}
              </button>

              <p className="text-center text-[14px] leading-6 text-slate-500">
                Please ensure your contact details are correct before
                submitting.
              </p>
            </form>
          </section>

          <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_45px_rgba(47,49,146,0.07)] transition-shadow duration-300 hover:shadow-[0_16px_50px_rgba(47,49,146,0.12)]">
            <div className="relative overflow-hidden bg-[#2F3192] px-5 py-7 text-white sm:px-8">
              <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full border-[20px] border-white/10" />
              <div className="absolute -bottom-16 right-24 h-32 w-32 rounded-full bg-white/5" />

              <div className="relative flex items-start gap-4">
                <div>
                  <span className="text-sm font-medium tracking-wide text-white/75">
                    Contact Information
                  </span>

                  <h2 className="mt-1 text-2xl font-semibold">Let's Connect</h2>

                  <p className={`mt-2 text-white/80 ${textClass}`}>
                    Reach out to our team for product enquiries, business
                    discussions, and assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col divide-y divide-slate-100 px-5 sm:px-8">
              <div className="py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F3192]/[0.07] text-[#2F3192]">
                    <Phone size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F3192]">
                    Phone Number
                  </h3>
                </div>

                <div
                  className={`mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 ${textClass}`}
                >
                  {[
                    "+91 9310010882",
                    "+91 9811810882",
                    "+91 9355055513",
                    "+91 9310510882",
                    "+91 9310804106",
                  ].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="group flex min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-[14px] text-slate-600 transition-all duration-300 hover:border-[#2F3192]/30 hover:bg-[#2F3192]/5 hover:text-[#2F3192]"
                    >
                      <span className="min-w-0 break-words">{phone}</span>

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-[#2F3192] opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F3192]/[0.07] text-[#2F3192]">
                    <Mail size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F3192]">
                    Email Address
                  </h3>
                </div>

                <div
                  className={`mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 ${textClass}`}
                >
                  <a
                    href="mailto:sales@royalequipments.in"
                    className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-[14px] text-slate-600 transition-colors hover:border-[#2F3192]/30 hover:bg-[#2F3192]/5 hover:text-[#2F3192]"
                  >
                    <span className="min-w-0 break-all">
                      sales@royalequipments.in
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#2F3192]"
                    />
                  </a>

                  <a
                    href="mailto:royalequipments@gmail.com"
                    className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-[14px] text-slate-600 transition-colors hover:border-[#2F3192]/30 hover:bg-[#2F3192]/5 hover:text-[#2F3192]"
                  >
                    <span className="min-w-0 break-all">
                      royalequipments@gmail.com
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#2F3192]"
                    />
                  </a>
                </div>
              </div>

              <div className="py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F3192]/[0.07] text-[#2F3192]">
                    <MapPin size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F3192]">
                    Office Address
                  </h3>
                </div>

                <p className={`mt-3 pl-1 text-slate-600 ${textClass}`}>
                  Plot No. A1, Suraj Vihar, Opposite NSIT College, Near Dwarka
                  Mor Metro Station, New Delhi – 110078, India
                </p>
              </div>

              <div className="py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F3192]/[0.07] text-[#2F3192]">
                    <Factory size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2F3192]">
                    Factory Address
                  </h3>
                </div>

                <p className={`mt-3 pl-1 text-slate-600 ${textClass}`}>
                  Khewat No. 979, Khatoni No. 1127 Khatri Industrial Area,
                  Khasra No. 170/5/1, Sampla Berl Road, Ismalla-11B, Rohtak,
                  Haryana – 124501
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="w-full overflow-hidden border-t border-slate-200 bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#2F3192]">
            Find Our Office
          </h2>

          <div className="mt-3 h-1 w-12 rounded-full bg-[#2F3192]" />

          <p className={`mt-3 text-slate-600 ${textClass}`}>
            Explore our office location and nearby roads on the map below.
          </p>
        </div>

        <div className="mx-auto mt-6 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_40px_rgba(47,49,146,0.10)]">
            <div className="h-[230px] overflow-hidden rounded-xl sm:h-[270px] lg:h-[300px]">
              <iframe
                title="Royale Equipments Office Location - New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d112082.24748184219!2d77.03183300000002!3d28.612667000000002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzQ1LjYiTiA3N8KwMDEnNTQuNiJF!5e0!3m2!1sen!2sus!4v1791547981952!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
