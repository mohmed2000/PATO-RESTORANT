/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import BlogSec from "../../component/BlogSec";
import PageHeader from "../../component/PageHeader";

import "./Blog.css";
export default function Blog() {
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader />
      <BlogSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
