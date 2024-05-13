import { PickLang } from "../PickLang/PickLang";

export const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <nav className="sticky top-0 flex h-14 w-screen items-center justify-between bg-[#474747] pl-[20%]">
      <div className="flex w-[70%]">
        <h2 className="text-white">{`© ${thisYear} bookpanda.dev`}</h2>
      </div>
      <div className="justify-begin flex w-[30%] pr-8">
        <PickLang />
      </div>
    </nav>
  );
};
