import { useRouter } from "next/router";

const Category = () => {
  const param = useRouter();
  return <div>{param.asPath}</div>;
};

export default Category;
