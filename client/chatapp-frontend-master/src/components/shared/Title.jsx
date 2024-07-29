/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chattu",
  description = "this is the Chat App called Chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
