
interface ButtonActionProps {
  action: () => void;
  title: string;
}
export function ButtonAction({ title, action }: ButtonActionProps) {
  return (
    <>
      <button
        className="flex h-[33.41px] w-[168.66px] 
        items-center justify-center rounded-[23.24px] 
        border border-green-medium text-[18px] 
        uppercase text-green-medium"
        onClick={action}
      >
        {title}
      </button>
    </>
  );
}
