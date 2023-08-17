import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import React from "react";
import { client } from "src/config/contentful.config";
import { formatData, formatData2 } from "src/helpers/formatData";

const ContentFul = (props) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri}>{children}</Link>
      ),
    },
  };

  console.log("🚀 ~ file: index.js:17 ~ ContentFul ~ props.data:", props.data);
  const data = documentToReactComponents(props.data);

  return <div>{data}</div>;
};

export default ContentFul;

export async function getServerSideProps(context) {
  try {
    const { items } = await client.getEntries({
      // content_type: "mainNavigation",
      "sys.id": "4S7TNTRdrFLk7FbifmEAs3",
      include: 5,
      // select: "fields.mainNavigation",
    });
    console.log("🚀 ~ file: App.js:14 ~ fetchData ~ items:", items);
    const data = formatData(items);

    return {
      props: {
        data: data[0][0],
      },
    };
  } catch (error) {
    console.log(error);
    console.log("🚀 ~ file: index.js:27 ~ getServerSideProps ~ error:", error);
    return {
      props: {
        error: "some error",
      },
    };
  }
}
