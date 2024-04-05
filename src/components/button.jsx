function Button({ children, color, bgcolor, href, target }) {
  const bgcolorMappings = {
    orange: { base: "bg-orange-500", hover: "hover:bg-orange-700" },
    blue: { base: "bg-blue-500", hover: "hover:bg-blue-700" },
    gray: { base: "bg-gray-500", hover: "hover:bg-gray-700" },
  };

  const defaultClasses = { base: "bg-blue-500", hover: "hover:bg-blue-700" };
  const { base, hover } = bgcolorMappings[bgcolor] || defaultClasses;

  return (
    <a
      className={`py-2 px-4 ${base} ${hover} text-${color} rounded-md mr-2 transition-colors flex`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

export default Button;
