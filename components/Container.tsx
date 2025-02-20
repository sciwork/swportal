type Props = {
  as?: string | React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Container = ({ as: Component = "div", className, children }: Props) => {
  return (
    <Component className={className}>
      <div className="container mx-auto max-w-6xl p-10 text-gray-800">
        {children}
      </div>
    </Component>
  );
};

export default Container;
