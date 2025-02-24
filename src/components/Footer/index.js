// /** @format */
// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import AndriodLogo from "../../../public/Footer/images/android.svg";
// import AppleLogo from "../../../public/Footer/images/apple.svg";
// import ChevalLogo from "../../../public/Footer/images/cheval.svg";
// import Cheval2Logo from "../../../public/Footer/images/cheval2.svg";
// import Facebook from "../../../public/Footer/images/facebook.svg";
// import Html from "../../../public/Footer/images/html.svg";
// import Instagram from "../../../public/Footer/images/instagram.svg";
// import Linkedin from "../../../public/Footer/images/linkedin.svg";
// import Php from "../../../public/Footer/images/php.svg";
// import ReactLogo from "../../../public/Footer/images/react.svg";
// import Matter from "matter-js";
// import FooterContent from "./FooterContent";
// import FooterBGVideo from "./FooterBGVideo";
// // import FooterLogo from "../../../public/Footer/footerBgLogo.svg";
// // import CustomLogo from "../../../public/Footer/images/custom.svg";
// // import Ecommerce from "../../../public/Footer/images/e-commerce.svg";
// // import Magneto from "../../../public/Footer/images/magneto.svg";
// // import Shopify from "../../../public/Footer/images/shopify.svg";
// // import Website from "../../../public/Footer/images/website.svg";
// // import Wordpress from "../../../public/Footer/images/wordpress.svg";

// // const pillImages = [AndriodLogo, Cheval2Logo, AppleLogo, Php];

// const images = [
//   AndriodLogo,
//   Cheval2Logo,
//   AppleLogo,
//   Php,
//   ChevalLogo,
//   Facebook,
//   Html,
//   Instagram,
//   Linkedin,
//   ReactLogo,
// ];

// function Footer({ data }) {
//   // const matterBoxRef = useRef(null);
//   // useEffect(() => {
//   //   if (matterBoxRef.current) {
//   //     var Engine = Matter.Engine,
//   //       Render = Matter.Render,
//   //       Runner = Matter.Runner,
//   //       Bodies = Matter.Bodies,
//   //       Composite = Matter.Composite,
//   //       MouseConstraint = Matter.MouseConstraint,
//   //       Mouse = Matter.Mouse,
//   //       Events = Matter.Events,
//   //       Body = Matter.Body;

//   //     var engine = Engine.create();

//   //     // var matterBox = matterBoxRef.current;
//   //     var matterBox = document.querySelector(".matter-box");
//   //     var render = Render.create({
//   //       element: matterBox,
//   //       engine: engine,
//   //       options: {
//   //         width: matterBox.clientWidth,
//   //         height: matterBox.clientHeight,
//   //         wireframes: false,
//   //         background: "transparent",
//   //       },
//   //     });

//   //     var matterCircle = document.querySelectorAll(".dm-matter-elem-circle");

//   //     function createCircles() {
//   //       return Array.from(matterCircle).map(function (matterCircleElem) {
//   //         var circleElemWidth = matterCircleElem.offsetWidth;
//   //         var circleElemHeight = matterCircleElem.offsetHeight;
//   //         var circleElemPosX =
//   //           matterCircleElem.offsetLeft + circleElemWidth / 2;
//   //         var circleElemPosY =
//   //           matterCircleElem.offsetTop + circleElemHeight / 2;

//   //         var circleBody = Bodies.circle(
//   //           circleElemPosX,
//   //           circleElemPosY,
//   //           Math.max(circleElemWidth, circleElemHeight) / 2,
//   //           {
//   //             density: 0.01,
//   //             friction: 0.1,
//   //             restitution: 0.5,
//   //             render: {
//   //               opacity: 0,
//   //             },
//   //           }
//   //         );

//   //         Composite.add(engine.world, circleBody);
//   //         return circleBody;
//   //       });
//   //     }

//   //     var elemCircles = createCircles();

//   //     function createBoundaries() {
//   //       var ground = Bodies.rectangle(
//   //         matterBox.clientWidth / 2,
//   //         matterBox.clientHeight,
//   //         matterBox.clientWidth,
//   //         1,
//   //         {
//   //           isStatic: true,
//   //           render: {
//   //             opacity: 0,
//   //           },
//   //         }
//   //       );

//   //       var leftWall = Bodies.rectangle(
//   //         0,
//   //         matterBox.clientHeight / 2,
//   //         1,
//   //         matterBox.clientHeight,
//   //         {
//   //           isStatic: true,
//   //           render: {
//   //             opacity: 0,
//   //           },
//   //         }
//   //       );

//   //       var rightWall = Bodies.rectangle(
//   //         matterBox.clientWidth,
//   //         matterBox.clientHeight / 2,
//   //         1,
//   //         matterBox.clientHeight,
//   //         {
//   //           isStatic: true,
//   //           render: {
//   //             opacity: 0,
//   //           },
//   //         }
//   //       );

//   //       var topWall = Bodies.rectangle(
//   //         matterBox.clientWidth / 2,
//   //         0,
//   //         matterBox.clientWidth,
//   //         1,
//   //         {
//   //           isStatic: true,
//   //           render: {
//   //             opacity: 0,
//   //           },
//   //         }
//   //       );

//   //       Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);
//   //     }

//   //     createBoundaries();

//   //     var runner = Runner.create();

//   //     const mouse = Mouse.create(render.canvas);
//   //     const mouseConstraint = MouseConstraint.create(engine, {
//   //       mouse: mouse,
//   //       constraint: {
//   //         stiffness: 0.5,
//   //         render: {
//   //           visible: false,
//   //         },
//   //       },
//   //     });

//   //     Composite.add(engine.world, mouseConstraint);

//   //     render.mouse = mouse;

//   //     Events.on(engine, "afterUpdate", function () {
//   //       elemCircles.forEach(function (circleBody, index) {
//   //         var angle = circleBody.angle;
//   //         var position = circleBody.position;
//   //         var matterCircleElem = matterCircle[index];

//   //         matterCircleElem.style.left =
//   //           position.x - matterCircleElem.offsetWidth / 2 + "px";
//   //         matterCircleElem.style.top =
//   //           position.y - matterCircleElem.offsetHeight / 2 + "px";
//   //         matterCircleElem.style.transform = "rotate(" + angle + "rad)";
//   //       });
//   //     });

//   //     function handleResize() {
//   //       Composite.clear(engine.world, false);

//   //       createBoundaries();
//   //       elemCircles = createCircles();

//   //       render.options.width = matterBox.clientWidth;
//   //       render.options.height = matterBox.clientHeight;

//   //       mouseConstraint.mouse.element.removeEventListener(
//   //         "mousewheel",
//   //         mouseConstraint.mouse.mousewheel
//   //       );
//   //       mouseConstraint.mouse.element.removeEventListener(
//   //         "DOMMouseScroll",
//   //         mouseConstraint.mouse.mousewheel
//   //       );

//   //       mouseConstraint.mouse.element.removeEventListener(
//   //         "touchstart",
//   //         mouseConstraint.mouse.mousedown
//   //       );
//   //       mouseConstraint.mouse.element.removeEventListener(
//   //         "touchmove",
//   //         mouseConstraint.mouse.mousemove
//   //       );
//   //       mouseConstraint.mouse.element.removeEventListener(
//   //         "touchend",
//   //         mouseConstraint.mouse.mouseup
//   //       );

//   //       mouseConstraint.mouse.element.addEventListener(
//   //         "touchstart",
//   //         mouseConstraint.mouse.mousedown,
//   //         { passive: true }
//   //       );
//   //       mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
//   //         if (mouseConstraint.body) {
//   //           mouseConstraint.mouse.mousemove(e);
//   //         }
//   //       });
//   //       mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
//   //         if (mouseConstraint.body) {
//   //           mouseConstraint.mouse.mouseup(e);
//   //         }
//   //       });
//   //     }

//   //     mouseConstraint.mouse.element.addEventListener(
//   //       "touchstart",
//   //       mouseConstraint.mouse.mousedown,
//   //       { passive: true }
//   //     );
//   //     mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
//   //       if (mouseConstraint.body) {
//   //         mouseConstraint.mouse.mousemove(e);
//   //       }
//   //     });
//   //     mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
//   //       if (mouseConstraint.body) {
//   //         mouseConstraint.mouse.mouseup(e);
//   //       }
//   //     });

//   //     var engineStarted = false;

//   //     var observer = new IntersectionObserver(
//   //       function (entries) {
//   //         entries.forEach(function (entry) {
//   //           if (entry.isIntersecting && !engineStarted) {
//   //             engineStarted = true;
//   //             Runner.run(runner, engine);
//   //             Render.run(render);
//   //           }
//   //         });
//   //       },
//   //       {
//   //         threshold: 0.1,
//   //       }
//   //     );

//   //     observer.observe(matterBox);
//   //     return () => {
//   //       Composite.clear(engine.world, true);
//   //       Render.stop(render);
//   //       Runner.stop(runner);
//   //       Engine.clear(engine);

//   //       render.canvas.remove();
//   //       render.textures = {};

//   //       observer.disconnect();

//   //       window.removeEventListener("resize", handleResize);

//   //       const element = mouseConstraint.mouse.element;
//   //       element.removeEventListener(
//   //         "touchstart",
//   //         mouseConstraint.mouse.mousedown
//   //       );
//   //       element.removeEventListener(
//   //         "touchmove",
//   //         mouseConstraint.mouse.mousemove
//   //       );
//   //       element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);
//   //       element.removeEventListener(
//   //         "mousewheel",
//   //         mouseConstraint.mouse.mousewheel
//   //       );
//   //       element.removeEventListener(
//   //         "DOMMouseScroll",
//   //         mouseConstraint.mouse.mousewheel
//   //       );
//   //     };
//   //   }
//   // }, []);

//   return (
//     <footer
//       className="relative z-auto w-screen h-fit  text-white overflow-hidden"
//       // ref={matterBoxRef}
//     >
//       <FooterBGVideo />

//       <div className="absolute inset-0 bg-footer-gradient z-10" />

//       <div className=" relative z-40 max-w-screen px-5 sm:px-10 md:px-12 mx-auto w-full pointer-events-auto">
//         <FooterContent data={data} />
//       </div>

//       {/* <div className="matter-box h-[40vh] w-full  z-[50] absolute top-[60%]">
//         {images?.map((img, index) => (
//           <Image
//             width={0}
//             height={0}
//             sizes="100vw"
//             key={index}
//             src={img}
//             alt={"img"}
//             className="w-20 h-w-20 absolute left-[50%] top-10 dm-matter-elem-circle z-[101] cursor-grab"
//           />
//         ))}
//       </div> */}
//     </footer>
//   );
// }

// export default Footer;
