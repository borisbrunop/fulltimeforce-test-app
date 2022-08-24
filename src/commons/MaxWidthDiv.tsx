interface MaxWidthDivTypes {
    className?: string,
    children: JSX.Element,
    classNameInner?: string
}

export function MaxWidthDiv({ children, className = '', classNameInner = '' }: MaxWidthDivTypes) {
  return (
    <div
      className={"flex px-4 lg:px-10 w-full justify-center items-center " + className || ""}
    >
      <div className={`w-full flex flex-col max-w-7xl ${classNameInner || ""}`}>
        {children}
      </div>
    </div>
  );
}