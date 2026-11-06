import { Header } from "./components";
import { ArticleSearch, BrandList } from "../../widgets";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <ArticleSearch />
        <BrandList />
      </main>
    </>
  );
};
