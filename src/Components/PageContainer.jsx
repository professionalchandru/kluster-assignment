/* eslint-disable react/prop-types */
const PageContainer = ({ children }) => {
  return (
    <div className="w-full h-[calc(100vh-72px) px-14 py-6 overflow-y-auto overflow-x-hidden]">
      {children}
    </div>
  );
};

export default PageContainer;
