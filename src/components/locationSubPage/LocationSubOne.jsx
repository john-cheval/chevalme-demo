// "use client";
// import React from "react";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import "./lp.css";
// // import Slider from "react-slick";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// // import LocationContactForm from "./locationContactForm";

// const LocationSubOne = () => {
//   var settings = {
//     // dots: true,
//     arrow: false,
//     infinite: true,
//     autoplay: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const settings2 = {
//     dots: true,
//     arrow: false,
//     infinite: true,
//     autoplay: true,
//     speed: 300,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="lp">
//       <section
//         className="banner-lp d-lg-block d-sm-none d-md-none d-tab-md-none sec-space"
//         style={{
//           background: `url('https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-app-banner.jpg') no-repeat center center / cover`,
//         }}
//       >
//         <div className="container mx-auto ptb-100">
//           <h1>
//             Mobile App Development <span className="db">Company in Dammam</span>
//           </h1>
//           <p className="banner-para">
//             Cheval is a leading mobile app development company in
//             <span className="db">
//               {" "}
//               Dammam. We specialize in creating innovative and{" "}
//             </span>
//             user-friendly mobile applications for businesses.
//           </p>
//           <div className="contactbtn bnr">
//             {" "}
//             <a
//               target="_blank"
//               className="radius-30"
//               href="/contact-us/"
//               title="Contact Us Now"
//             >
//               Contact us today!
//             </a>
//           </div>
//         </div>
//       </section>

//       <section
//         className="banner-lp-mobile d-lg-none"
//         style={{
//           background: `url('https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/mobile-bg-bnr.png') no-repeat center center / cover`,
//         }}
//       >
//         <div className="container mx-auto c-pt-40">
//           <p style={{ fontSize: "25px" }} className="text-center">
//             Mobile App Development Company<span className="db"> in Dammam</span>
//           </p>
//           <p className="banner-para">
//             Cheval is a leading mobile app development company in
//             <span className="db">
//               {" "}
//               Dammam. We specialize in creating innovative and{" "}
//             </span>
//             user-friendly mobile applications for businesses.
//           </p>
//           <div className="contactbtn radius-30 banner">
//             {" "}
//             <a
//               target="_blank"
//               className="radius-30"
//               href="/contact-us/"
//               title="Contact Us Now"
//             >
//               Contact us today!
//             </a>{" "}
//           </div>
//           <div className="text-center">
//             {" "}
//             <img
//               className="mx-auto"
//               src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-banner-sm.png"
//               alt="Mobile App Development Company"
//               title="Mobile App Development Company in Dammam"
//             />{" "}
//           </div>
//         </div>
//       </section>

//       <section className="about-service pb-sm-50 pt-sm-50 md:pt-[50px] md:pb-[50px]">
//         <div className="container mx-auto ">
//           <div
//             className="flex items-top relative lg:flex-row flex-col wow animate animated animated"
//             style={{ visibility: "visible" }}
//           >
//             <div className="md:w-1/2 self-center tab-w-100">
//               <img
//                 className="digiimg tab-w-100"
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-app-img02.jpg"
//                 alt="Web Development COmpany in Dammam"
//                 title="Web Development Agency in Dammam"
//               />
//             </div>
//             <div className="md:w-3/4 w-full tab-w-100">
//               <div className="digicont">
//                 <p className="mt-0">
//                   At Cheval, we understand the significance of our{" "}
//                   <a
//                     target="_blank"
//                     rel="nofollow"
//                     href="https://maps.app.goo.gl/BRTMqAVGfaZqaP8s8"
//                     title="Mobile App Development Agency in Dammam"
//                   >
//                     <u>Mobile App Development Agency in Dammam</u>
//                   </a>
//                   . Committed to delivering excellence, our team of skilled
//                   professionals works tirelessly to create cutting-edge and
//                   user-friendly mobile applications customized to fit the
//                   distinctive requirements of our clients perfectly. With our
//                   expertise and experience, we help businesses thrive in the
//                   digital world by providing them with cutting-edge mobile
//                   solutions. Trust Cheval for all your mobile app development
//                   needs.We understand the importance of user experience and
//                   design, and we work closely with you to create an app that is
//                   both functional and visually appealing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="types-of-services pb-[90px] sm:px-0 px-5">
//         <div className="container mx-auto">
//           <h2 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] leading-[44px] text-blackcurrant mb-[41px] lg:mt-0 mt-5 pb-md-20 pb-sm-50">
//             Types of mobile app development services we offer in Dammam:
//           </h2>
//           <Slider {...settings} className="slick-slider-services ">
//             <div className="element element-1">
//               <p style={{ fontSize: "25px" }}>Custom Mobile App Development</p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 In Dammam, we provide personalized mobile app development
//                 services designed to address the specific needs of our clients.
//                 Our team of seasoned developers excels at crafting fully
//                 customized mobile apps that perfectly align with your business
//                 goals and objectives.
//               </p>
//             </div>
//             <div className="element element-2">
//               <p style={{ fontSize: "25px" }}>Native App Development</p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 We specialize in developing native mobile apps for iOS and
//                 Android platforms. Our developers have expertise in programming
//                 languages like Swift and Java, ensuring high-performance and
//                 seamless user experiences.
//               </p>
//             </div>
//             <div className="element element-3">
//               <p style={{ fontSize: "25px" }}>Hybrid App Development</p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 {" "}
//                 We also provide services that leverage frameworks like React
//                 Native and Flutter. This allows us to create cross-platform apps
//                 that can run on multiple operating systems, saving time and cost
//                 for our clients.
//               </p>
//             </div>
//             <div className="element element-4">
//               <p style={{ fontSize: "25px" }}>UI/UX Design</p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 Our team of proficient designers focuses on creating intuitive
//                 and visually appealing user interfaces for mobile apps. We
//                 understand the importance of user experience and strive to
//                 deliver engaging designs that enhance user satisfaction and
//                 drive app usage.
//               </p>
//             </div>
//             <div className="element element-5">
//               <p style={{ fontSize: "25px" }}>
//                 App Testing and Quality Assurance
//               </p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 To ensure flawless performance across various devices and
//                 operating systems, we conduct rigorous testing and quality
//                 assurance processes, meticulously eliminating bugs from our
//                 mobile apps. This dedication to perfection results in a seamless
//                 user experience and ensures the app's unwavering reliability.
//               </p>
//             </div>
//             <div className="element element-6">
//               <p style={{ fontSize: "25px" }}>App Maintenance and Support</p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 We provide ongoing app maintenance and support services to
//                 ensure your mobile app remains up-to-date and functions
//                 smoothly. Our team is available to address any issues or updates
//                 required, ensuring the long-term success of your mobile app.
//               </p>
//             </div>
//           </Slider>
//         </div>
//       </section>

//       <section className="bg-blackcurrant md:pt-[50px] md:pb-[50px] pt-[50px] px-5 pb-sm-50">
//         <div className="container mx-auto">
//           <h2 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] leading-[44px] text-blackcurrant mb-[41px] lg:mt-0 mt-5 pb-md-20 ">
//             Need of Mobile App Development Company in Dammam?
//           </h2>
//           <div className="flex items-top tab-flex-inherit relative lg:flex-row flex-col wow animate animated">
//             <div className="md-w-65 align-self-center md:pr-[20px] pb-sm-5 text-justify-content box-padding">
//               <p>
//                 At Cheval, we understand the need for a reliable mobile app
//                 development company in Dammam. With the increasing demand for
//                 mobile apps, businesses in Dammam require a trusted partner to
//                 develop innovative and user-friendly apps. We offer our
//                 expertise in mobile app development, ensuring seamless
//                 functionality,{" "}
//                 <a
//                   target="_blank"
//                   href="/graphic-design-company-dammam/"
//                   title="Graphic Design Company in Dammam"
//                 >
//                   <u></u>
//                 </a>
//                 attractive design, and optimal user experience. Devoted to
//                 delivering excellence, our team of skilled professionals is
//                 committed to providing exceptional mobile apps that perfectly
//                 cater to the distinct requirements of businesses in Dammam.
//               </p>
//             </div>
//             <div className="md-w-35">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mobile-img03.png"
//                 className="w-100"
//                 alt="Need of Mobile App Development company in Dammam"
//                 title="Mobile App Development Company in Dammam"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="need bg-white md:pt-[50px] md:pb-[50px] px-5 pb-sm-50 pt-sm-50">
//         <div className="container mx-auto bxshdw1 my-5 pd-md-40">
//           <h3 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] leading-[44px] text-blackcurrant mb-[41px] lg:mt-0 mt-5 c-need">
//             Why Choose Us For Mobile App Development Company in Dammam
//           </h3>
//           <div className="flex items-top tab-flex-inherit relative lg:flex-row flex-col px-5 wow animate animated">
//             <div className="md-w-35 pb-sm-50 align-self-center image_cover">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-app-img04.png"
//                 className="w-100"
//                 alt="Why Choose Us For Mobile App Development Company in Dammam"
//                 title="Mobile App Development in Dammam"
//               />
//             </div>
//             <div className="md-w-65 align-self-center md:pl-[20px] pb-sm-5">
//               <p>
//                 Extensive experience in developing mobile apps for various
//                 industries, ensuring high-quality and user-friendly solutions.
//                 Our team consists of skilled and dedicated developers who
//                 continuously stay abreast of the latest technologies and trends
//                 in app development. Our track record speaks for itself, as we
//                 have consistently delivered successful mobile apps on schedule
//                 and within budget, consistently exceeding our client's
//                 expectations. Strong emphasis on customer satisfaction,
//                 providing excellent support and maintenance services post-app
//                 development.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="different bg-white md:pb-[50px] md:pt-[50px] px-3 pb-sm-50">
//         <div className="container mx-auto">
//           <h3 className="lg:pl-[32px] font-chopard font-bold text-[40px] leading-[44px] text-blackcurrant mb-[41px] lg:mt-0 mt-5 text-center">
//             How We Are Different From Other Mobile App Development Companies in
//             Dammam
//           </h3>
//           <div className="flex items-top tab-flex-inherit relative lg:flex-row flex-col px-5 wow animate animated">
//             <div className="md:w-1/2 self-center">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/09/mobile-how.jpg"
//                 className="w-100 pb-sm-5"
//                 alt="Mobile App Development Companies in Dammam"
//                 title="How We Are Different From Other"
//               />
//             </div>
//             <div className="md:w-1/2 self-center">
//               <ul>
//                 <li className="c-list">
//                   <i className="fas fa-check-circle"></i>
//                   <p>
//                     Our team at Cheval is dedicated to providing personalized
//                     and tailored mobile app development solutions to our clients
//                     in Dammam. We understand that every business is unique, and
//                     we strive to create apps that reflect their individual needs
//                     and goals.{" "}
//                   </p>
//                 </li>
//                 <li className="c-list">
//                   <i className="fas fa-check-circle"></i>
//                   <p>
//                     Unlike other mobile app development companies in Dammam, we
//                     prioritize user experience and design. A visually appealing
//                     and intuitive app is crucial for engaging users and driving
//                     success. Our designers and developers work closely together
//                     to create seamless and user-friendly apps.{" "}
//                   </p>
//                 </li>
//                 <li className="c-list">
//                   <i className="fas fa-check-circle"></i>
//                   <p>
//                     At Cheval, we pride ourselves on our commitment to quality
//                     and timely delivery. Recognizing the significance of meeting
//                     deadlines, we prioritize ensuring that our clients' apps are
//                     launched on schedule. Our efficient project management
//                     processes and experienced team ensure we deliver
//                     high-quality apps within the agreed-upon timeframe.
//                   </p>
//                 </li>
//                 <li className="c-list">
//                   <i className="fas fa-check-circle"></i>
//                   <p>
//                     We go beyond just developing mobile apps. Our team at Cheval
//                     offers comprehensive support and maintenance services to
//                     ensure that our clients' apps are always up-to-date and
//                     functioning smoothly. We provide regular updates, bug fixes,
//                     and performance enhancements to ensure our clients' apps
//                     remain competitive in the ever-evolving mobile app market.
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="process bg-white md:pb-[50px] px-3 pb-sm-50">
//         <img
//           src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-app-bg.jpg"
//           className="w-100p"
//           alt="Mobile App Development Services in Dammam"
//           title="Our Process for Mobile App Development Services"
//         />
//         <div className="container mx-auto px-5">
//           <h3 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] leading-[44px] text-blackcurrant mb-[41px] lg:mt-0 mt-5 pb-md-20 px-5 text-white-n mt--20">
//             Our Process for Mobile App Development Services
//           </h3>
//           <Slider {...settings} className="slick-slider-process">
//             <div className="process-inner element-1">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/1-1.svg"
//                 className="w-100"
//                 alt="1"
//                 title="one"
//               />
//               <p style={{ fontSize: "25px" }} className="f-600">
//                 Understanding client requirements
//               </p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 We thoroughly analyze the client's needs and expectations to
//                 ensure we deliver the best mobile app solution.
//               </p>
//             </div>
//             <div className="process-inner element-2">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/2-1.svg"
//                 className="w-100"
//                 alt="2"
//                 title="two"
//               />
//               <p style={{ fontSize: "25px" }} className="f-600">
//                 Design and development
//               </p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 {" "}
//                 Through collaborative efforts, our skilled designers and
//                 developers work hand in hand to craft a visually captivating and
//                 user-friendly mobile app.
//               </p>
//             </div>
//             <div className="process-inner element-3">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/3-1.svg"
//                 className="w-100"
//                 alt="3"
//                 title="three"
//               />
//               <p style={{ fontSize: "25px" }} className="f-600">
//                 Testing and quality assurance
//               </p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 Our comprehensive testing process rigorously identifies and
//                 rectifies bugs or issues, guaranteeing a seamless user
//                 experience.
//               </p>
//             </div>
//             <div className="process-inner element-4">
//               <img
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/path1107.svg"
//                 className="w-100"
//                 alt="4"
//                 title="four"
//               />
//               <p style={{ fontSize: "25px" }} className="f-600">
//                 Deployment and support
//               </p>
//               <p className="text-lg text-ironsidegrey leading-[27px]">
//                 Once the app is ready, we assist with its deployment and provide
//                 ongoing support to ensure its smooth functioning.{" "}
//               </p>
//             </div>
//           </Slider>
//         </div>
//       </section>

//       <section className="benefitsec spb-80">
//         <div className="container mx-auto">
//           <div className="flex items-top relative lg:flex-row flex-col px-5 wow animate animated animated col-gap-20 visible">
//             <div className="md:w-1/2 w-full tab-w-100">
//               <div className="benefit_img">
//                 {" "}
//                 <img
//                   className="img-w-100"
//                   src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/mob-app-img05.jpg"
//                   alt="Benefits Of Hiring"
//                   title="Benefits Of Hiring Our Mobile App Development Services in Dammam"
//                 />{" "}
//               </div>
//             </div>
//             <div className="md:w-1/2 w-full self-center tab-w-100">
//               <div className="benefit_main">
//                 <div className="benefit-content">
//                   <h4>
//                     Benefits Of Hiring Our Mobile App Development Services in
//                     Dammam
//                   </h4>
//                   <p>
//                     Our Mobile App Development Company in Dammam offers the
//                     region's best mobile app development services. You can
//                     benefit from our expertise and experience in creating
//                     innovative and user-friendly mobile applications by hiring
//                     us. With our team of skilled developers well-versed in the
//                     latest technologies and trends, your app will remain
//                     up-to-date and competitive. From conceptualization to design
//                     and development, we offer end-to-end solutions, ensuring a
//                     seamless and efficient process. Our services enhance your
//                     brand's visibility, engage with your target audience, and
//                     increase customer satisfaction. Trust our Mobile App
//                     Development Company in Dammam for exceptional results.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         className="contactbgsec"
//         style={{
//           backgroundImage: `url(https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/bootsbg-1.png)`,
//         }}
//       >
//         <div className="container mx-auto">
//           <div className="max-900">
//             <p>
//               Transform Your Web Design Into a Fully Functional Website With Our
//               <span className="db">
//                 {" "}
//                 Top-Notch{" "}
//                 <a
//                   target="_blank"
//                   href="/web-development-company-dammam/"
//                   title="web development service dammam"
//                 >
//                   <u>Web Development Services</u>
//                 </a>
//                 !
//               </span>
//             </p>
//             <div className="contactbtn">
//               {" "}
//               <a target="_blank" href="/contact-us/" title="Contact Us Now">
//                 Contact Us
//               </a>{" "}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="industiressection spbt-80">
//         <div className="container mx-auto">
//           <div className="flex items-top relative lg:flex-row flex-col px-5 wow animate animated animated col-gap-20 animated visible">
//             <div className="md:w-1/2 w-full tab-w-100">
//               {" "}
//               <img
//                 className="img-w-100"
//                 src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/digital-img7.jpg"
//                 alt="Industries"
//                 title="Industries we serve"
//               />{" "}
//             </div>
//             <div className="md:w-1/8 w-full">
//               <h4 className="text-center Industries tab-mt-20">
//                 Industries We Serve
//               </h4>
//               <div className="flex items-top relative lg:flex-row flex-col px-5 wow animate animated animated col-gap-20 mbl-px-0 visible tab-flex-inherit animated">
//                 <div className="md:w-1/5 w-full tab-w-50">
//                   <ul className="indust-order">
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon1.svg"
//                         alt="Retail and E-commerce"
//                         title="Retail and E-commerce Industry"
//                       />
//                       Retail and E-commerce
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon2.svg"
//                         alt="Healthcare and Fitness"
//                         title="Healthcare and Fitness Industry"
//                       />
//                       Healthcare and Fitness
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon3.svg"
//                         alt="Banking and Finance"
//                         title="Banking and Finance Industry"
//                       />
//                       Banking and Finance
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon4.svg"
//                         alt="Travel and Hospitality"
//                         title="Travel and Hospitality Industry"
//                       />
//                       Travel and Hospitality
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon5.svg"
//                         alt="Education and E-learning"
//                         title="Education and E-learning Industry"
//                       />
//                       Education and E-learning
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="md:w-1/7 w-full tab-w-50">
//                   <ul className="indust-order">
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon6.svg"
//                         alt="Real Estate and Property Management"
//                         title="Real Estate and Property Management Industry"
//                       />
//                       Real Estate and Property Management
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon7.svg"
//                         alt="Food and Beverage"
//                         title="Food and Beverage Industry"
//                       />
//                       Food and Beverage
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon8.svg"
//                         alt="Logistics and Transportation"
//                         title="Logistics and Transportation Industry"
//                       />
//                       Logistics and Transportation
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon9.svg"
//                         alt="Entertainment and Media"
//                         title="Entertainment and Media Industry"
//                       />
//                       Entertainment and Media
//                     </li>
//                     <li>
//                       <img
//                         className="industri-icon"
//                         src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/industries-icon10.svg"
//                         alt="Automotive and Transportation"
//                         title="Automotive and Transportation Industry"
//                       />
//                       Automotive and Transportation
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <section className="form-section bg-black spbt-80">
//         <div className="container mx-auto">
//           <div className="flex items-top relative md:flex-row flex-col px-3-- wow animate animated mx-3 animated bg-white bdr-16p">
//             <div
//               className="md:w-1/2 d-sm-none d-tab-none"
//               style={{
//                 backgroundSize: "cover",
//                 backgroundImage:
//                   "url(https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/08/digital-img8.jpg)",
//                 height: "auto",
//                 borderRadius: "16px 0 0 16px",
//               }}
//             ></div>
//             <div className="md:w-1/2 cus-head tab-w-100">
//               <h4 className="text-center f-600">
//                 Have a question or need assistance?
//               </h4>
//               <p className="text-center f-18">
//                 You're just a few clicks away! Complete the contact form to
//                 reach out to us and let us know how we can assist you.
//               </p>
//               <LocationContactForm />
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="testimonialsection">
//         <div className="container mx-auto">
//           <h4 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] text-blackcurrant lg:mt-0 mt-5 px-5 mb-24">
//             Testimonials
//           </h4>
//           <Slider {...settings2} className="testimonial-sld">
//             <div className="element element-1 d-flexing">
//               <div className="testimain radius-16">
//                 <div className="testi-img mb-24">
//                   {" "}
//                   <img
//                     src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/quote.svg"
//                     alt="quotes"
//                     title="Quote Image"
//                   />{" "}
//                 </div>
//                 <div className="testcontent">
//                   <p>
//                     As a tech-savvy individual, I was blown away by the
//                     exceptional mobile app development services provided by
//                     Cheval in Dammam. Their attention to detail and seamless
//                     user experience set them apart. I enthusiastically endorse
//                     their services to anyone aiming to strengthen their digital
//                     presence.
//                   </p>
//                   <h5 className="text-center">Sk Hassan CTO of MZH Pvt Ltd</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="element element-2 d-flexing">
//               <div className="testimain radius-16">
//                 <div className="testi-img mb-24">
//                   {" "}
//                   <img
//                     src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/quote.svg"
//                     alt="quotes"
//                     title="Quote Image"
//                   />{" "}
//                 </div>
//                 <div className="testcontent">
//                   <p>
//                     Being a busy professional, I needed a reliable mobile app
//                     development service catering to my business needs. Cheval in
//                     Dammam exceeded my expectations with their prompt delivery,
//                     innovative solutions, and excellent customer support. They
//                     truly understand the importance of a user-friendly app.
//                   </p>
//                   <h5 className="text-center">
//                     Mr. Mujib Senior Developer at Prompt Solutions
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="element element-3 d-flexing">
//               <div className="testimain radius-16">
//                 <div className="testi-img mb-24">
//                   {" "}
//                   <img
//                     src="https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/quote.svg"
//                     alt="quotes"
//                     title="Quote Image"
//                   />{" "}
//                 </div>
//                 <div className="testcontent">
//                   <p>
//                     As a startup founder, I was searching for a mobile app
//                     development service that could transform my vision into
//                     reality. Cheval in Dammam brought my ideas to life and added
//                     their expertise to enhance the functionality and design of
//                     the app. Their professionalism and commitment to excellence
//                     are commendable.
//                   </p>
//                   <h5 className="text-center">
//                     Mr. Ali CMO at PurposeTree Pvt Ltd{" "}
//                   </h5>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       </section>

//       <section
//         className="contactbgsec spb-80"
//         // style=" background-image: url(https://d331b20430.nxcli.net/chevalapi/wp-content/uploads/2023/07/bootsbg-1.png);"
//       >
//         <div className="container mx-auto">
//           <div>
//             <p className="c-link-pb">
//               We also provide various services across Dammam
//             </p>
//             <div className="flex flex-wrap -mx-3 c-linking">
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/web-development-company-dammam/"
//                       title="Web Development Services in Dammam"
//                     >
//                       Web Development Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/seo-company-dammam/"
//                       title="SEO Service in Dammam"
//                     >
//                       SEO Service Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/ecommerce-company-dammam/"
//                       title="Ecommerce Web Design Service in Dammam"
//                     >
//                       Ecommerce Web Design Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 c-linking">
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/graphic-design-company-dammam/"
//                       title="Graphic Design Service in Dammam"
//                     >
//                       Graphic Design Service Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/digital-marketing-company-dammam/"
//                       title="Digital Marketing Service in Dammam"
//                     >
//                       Digital Marketing Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//               <div className="lg:w-1/3 sm:w-1/3">
//                 <div className="mx-3 lg:mb-0 mb-5">
//                   <div className="c-btn1">
//                     {" "}
//                     <a
//                       target="_blank"
//                       href="/custom-web-design-company-dammam/"
//                       title="Custom Web Design Service in Dammam"
//                     >
//                       Custom Web Design In Dammam
//                     </a>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="faqsection max-1000 spb-80">
//         <div className="container mx-auto">
//           <h5 className="text-center lg:pl-[32px] font-chopard font-bold text-[32px] text-blackcurrant lg:mt-0 mt-5 px-5 mbl-mt-0">
//             FAQ
//           </h5>
//           <Accordion
//             type="single"
//             collapsible
//             className="accordionWrapper"
//             defaultValue="item-1"
//           >
//             <AccordionItem className="accordionItem  " value="item-1">
//               <AccordionTrigger className="accordionItemHeading">
//                 How experienced is your team in mobile app development?
//               </AccordionTrigger>
//               <AccordionContent className="accordionItemContent">
//                 <p>
//                   In the mobile app development industry, our team comprises
//                   highly skilled and experienced professionals with several
//                   years of expertise in their respective domains. Over time, we
//                   have delivered numerous successful projects for clients in
//                   Dammam, boasting a proven track record of creating innovative
//                   and user-friendly mobile apps. Absolutely; we possess
//                   expertise in app development for both iOS and Android
//                   platforms. Our team is highly proficient in utilizing
//                   cutting-edge technologies and frameworks to deliver top-notch,
//                   cross-platform-compatible mobile apps.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem className="accordionItem " value="item-2">
//               <AccordionTrigger className="accordionItemHeading">
//                 Why is Mobile App Development Company important in Dammam?
//               </AccordionTrigger>
//               <AccordionContent className="accordionItemContent">
//                 <p>
//                   A mobile app development company in Dammam is important
//                   because it can help you create a customized and user-friendly
//                   mobile application for your business. With the increasing use
//                   of smartphones, having a mobile app can significantly enhance
//                   your brand visibility and customer engagement. A professional
//                   app development company can understand your business
//                   requirements and develop an app that meets your needs. With
//                   their expertise, they can develop a seamless and efficient app
//                   that captivates and retains customers, ultimately leading to
//                   increased sales and fostering business growth.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//             <AccordionItem className="accordionItem " value="item-3">
//               <AccordionTrigger className="accordionItemHeading">
//                 How long does it take to develop a mobile app?
//               </AccordionTrigger>
//               <AccordionContent className="accordionItemContent">
//                 <p>
//                   The timeline for developing a mobile app is influenced by
//                   complexity, feature count, and specific client requirements.
//                   We maintain close collaboration with our clients to grasp
//                   their requirements thoroughly and offer a development timeline
//                   that is practical and achievable. Moreover, we offer
//                   comprehensive post-development support and maintenance
//                   services to ensure your app operates seamlessly. This includes
//                   regular updates, bug fixes, and feature enhancements to keep
//                   your app up-to-date and running optimally. At the core of our
//                   expertise lies transforming ideas into innovative mobile
//                   solutions. Committed to excellence, our team of experts is
//                   dedicated to crafting cutting-edge apps customized to meet
//                   your specific requirements. We execute each step with
//                   precision and creativity throughout the entire process, from
//                   concept to development. With our mobile solutions, you can
//                   outshine your competition and provide customers with a
//                   seamless and engaging user experience.
//                 </p>
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LocationSubOne;
