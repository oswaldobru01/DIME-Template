import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
const blogs = getBlogs();
export const metadata = {
  title: "Digital Marketing Experts",
  description:
    "Digital Marketing Experts",
};

export default async function BlogDetails({ params }) {
  const { id } = await params;

  const isExistBlog = blogs?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistBlog) {
    notFound();
  }
  return (
    <PageWrapper isInnerPage={true}>
      <BlogDetailsMain />
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return blogs?.map(({ id }) => ({ id: id.toString() }));
}
