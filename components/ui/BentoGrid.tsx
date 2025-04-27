import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg,rgba(166, 157, 252, 1) 0%, rgba(0, 0, 66, 1) 35%, rgba(0, 158, 186, 1) 100%)",
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="h-full w-full absolute">
          {img && (
            <img
              src={img}
              className={cn(imgClassName, "object-center object-cover")}
              alt={img}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5
          } && 'w-full opacity-80'`}
        >
          {spareImg && (
            <img
              src={spareImg}
              className={cn(
                imgClassName,
                "object-center object-cover w-full h-full"
              )}
              alt={spareImg}
            />
          )}
        </div>
      </div>

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
