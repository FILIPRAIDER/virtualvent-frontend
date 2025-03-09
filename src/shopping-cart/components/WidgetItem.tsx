interface Props {
  title: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, children }: Props) => {
  return (
    <div className="md:col-span-2 lg:col-span-1 w-[95%] mx-auto">
      <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
        <div className="flex flex-col">
          <h5 className="text-xl text-gray-600 text-left border-b border-gray-200">
            {title}
          </h5>
          <div className="mt-2 flex flex-col justify-center gap-4">
            {children}
          </div>
          <button className="bg-[#093F51] font-semibold text-xl text-white py-2 rounded-lg hover:bg-[#349999] cursor-pointer transition-colors mt-8">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
};
