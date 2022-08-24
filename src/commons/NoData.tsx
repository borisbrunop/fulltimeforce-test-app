import {Button} from "./Button";

interface NoDataTypes { 
    action?: {onClick: () => {}, label: string}[],
    message: string 
    className?: string
}

const NoData = ({ action, message, className = "mt-20"}: NoDataTypes) => {
  return (
    <div className="w-full flex justify-center items-top">
      <p className={`py-5 px-10 text-center rounded bg-soft text-darkSecondary h-fit ${className}`}>
        {message}
        {action &&
          action.map((item) => (
            <Button
              className="rounded py-1 px-2  m-2"
              onClick={() => item.onClick()}
            >
              <p>{item.label}</p>
            </Button>
          ))}
      </p>
    </div>
  );
};

export default NoData;
