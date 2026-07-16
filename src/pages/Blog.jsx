import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/ui/Container";

const Blog = () => {
  usePageTitle(
    "Blog",
    "Construction industry insights, tips, and news from Elite Construction."
  );

  return (
    <div>
      <PageHeader
        title="Our Blog"
        subtitle="Insights, tips, and news from the construction industry."
      />
      <Container className="py-16">
        <p className="text-dark">Blog page content will go here (Step 13).</p>
      </Container>
    </div>
  );
};

export default Blog;