import { serverURL } from "@/utils/consts";
import { Navigation as NavigationType } from "@/payload-types";

const getHeaderData = async () => {
  const res = await fetch(`${serverURL}/read-api/navigation`, {
    next: {
      tags: ["navigation"],
    },
  });
  const data: NavigationType = await res.json();
  return data;
};

const CHeader = async () => {

  const { page, pages } = await getHeaderData();

  return (
    <header>
     {/* TODO - navigation component */}
    </header>
  );
};

export default CHeader;
