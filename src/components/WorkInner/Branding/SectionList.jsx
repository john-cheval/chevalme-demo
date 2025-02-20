import Image from "next/image";
import React from "react";

const SectionList = ({ data, ID }) => {
  return (
    <>
      {data?.map((section, index) => (
        <>
          {section?.description && (
            <div
              key={index + 1}
              className="flex flex-col md:space-y-0 space-y-3 md:flex-row w-full justify-between text-[#101763] pb-3 md:pb-6 lg:pb-10 xl:pb-16"
            >
              <h5 className="font-sora font-semibold text-3xl text-center md:text-start sm:text-4xl md:text-5xl">
                {section?.title}
              </h5>
              <p
                dangerouslySetInnerHTML={{ __html: section?.description }}
                className="font-satoshi text-center md:text-start text-xl paragraphText-Size w-full md:w-1/2 lg:w-[65%]"
              />
            </div>
          )}

          <div className="relative w-full flex flex-col gap-y-5">
            {section?.images && ID !== 2023 && (
              <div className="w-full grid-cols-1 md:grid-cols-3 grid-flow-row gap-5 h-fit grid">
                {section?.images?.map((img, index) => {
                  const fileExtension = img?.image
                    .split(".")
                    .pop()
                    .toLowerCase();
                  const isVideo = fileExtension === "mp4";
                  return img.image_type === "Half" ? (
                    isVideo ? (
                      <div
                        key={index}
                        className="w-full col-span-1 md:col-span-2 bg-transparent rounded-[1rem] h-auto overflow-hidden"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full col-span-1 md:col-span-2"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 1}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] w-full  col-span-1 md:col-span-2 bg-transparent h-auto "
                        alt="work-image"
                      />
                    )
                  ) : img.image_type === "Quarter" ? (
                    isVideo ? (
                      <div
                        key={index + 2}
                        className="  h-auto col-span-1 w-full relative  aspect-square md:aspect-auto "
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] h-full w-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div
                        key={index + 9}
                        className="h-full-- col-span-1 w-full relative"
                      >
                        <Image
                          src={img.image}
                          fill={true}
                          className="rounded-[1rem] h-auto w-full object-cover  "
                          alt="work-image"
                          sizes="100vw"
                        />
                      </div>
                    )
                  ) : (
                    img.image_type === "Full" &&
                    (isVideo ? (
                      <div
                        key={index + 3}
                        className="w-full col-span-1 md:col-span-3 bg-transparent rounded-[1rem]"
                      >
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          id="video"
                          className="rounded-[1rem] w-full h-full"
                          alt="work-video"
                        >
                          <source src={img.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        key={index + 4}
                        src={img.image}
                        overrideSrc="/Work/work1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-[1rem] col-span-1 w-full h-auto md:col-span-3  object-fill"
                        alt="work-image"
                      />
                    ))
                  );
                })}
              </div>
            )}

            {/* Below section for "Half-1" and "Half-2" images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section?.images &&
                section?.images?.map((img, index) => {
                  const fileExtension = img?.image
                    .split(".")
                    .pop()
                    .toLowerCase();
                  const isVideo = fileExtension === "mp4";

                  if (img.image_type === "Half-1") {
                    return (
                      <div
                        key={index + 5}
                        className="rounded-[1rem] h-auto overflow-hidden md:col-start-1"
                      >
                        {isVideo ? (
                          <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            id="video"
                            className="rounded-[1rem] w-full h-full"
                            alt="work-video"
                          >
                            <source src={img?.image} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={img?.image}
                            overrideSrc="/Work/work1.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-[1rem] w-full h-auto  object-cover"
                            alt="Half-1 work image"
                          />
                        )}
                      </div>
                    );
                  }

                  if (img.image_type === "Half-2") {
                    return (
                      <div
                        key={index + 6}
                        className="rounded-[1rem] h-auto overflow-hidden md:col-start-2"
                      >
                        {isVideo ? (
                          <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            id="video"
                            className="rounded-[1rem] w-full h-full"
                            alt="work-video"
                          >
                            <source src={img.image} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={img.image}
                            overrideSrc="/Work/work2.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-[1rem] w-full h-auto  object-cover"
                            alt="Half-2 work image"
                          />
                        )}
                      </div>
                    );
                  }

                  // Default fallback for other types
                  return null;
                })}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default SectionList;
