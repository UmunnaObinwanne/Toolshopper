// Breadcrumbs.jsx
import { Breadcrumbs } from "@rewind-ui/core";
import { useLocation, Link } from "react-router-dom";

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs className="p-4 bg-gray-100 rounded-md">
      <Breadcrumbs.Item>
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </Breadcrumbs.Item>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Breadcrumbs.Item key={to} className="text-gray-700">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Breadcrumbs.Item>
        ) : (
          <Breadcrumbs.Item key={to}>
            <Link to={to} className="text-blue-500 hover:underline">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </Breadcrumbs.Item>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
