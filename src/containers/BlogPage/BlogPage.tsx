import React from "react";
import { DEMO_POSTS } from "data/posts";
import { Helmet } from "react-helmet";
import SectionMagazine5 from "./SectionMagazine5";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

// DEMO DATA
const POSTS = DEMO_POSTS;

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const BlogPage: React.FC = () => {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Blog || Ilma Trans</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      {/* ======= START CONTAINER ============= */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionMagazine5 posts={MAGAZINE1_POSTS} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
