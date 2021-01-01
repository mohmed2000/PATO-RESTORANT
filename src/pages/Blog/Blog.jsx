/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import BlogSec from "../../component/BlogSec";
import PageHeader from "../../component/PageHeader";

import "./Blog.css";
import { useEffect } from "react";
export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="Blog" />
      <BlogSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
