import Header from "../components/header";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <>
    <SEO title="Siden finnes ikke" />

    <Header />

    <div className="aboslute">
      <h1>
        <span>Siden</span>
        <span className="text-blue-500">finnes ikke</span>
      </h1>
    </div>
  </>
);

export default NotFoundPage;
