import { Header } from "./components";
import { ArticleSearch, BrandSelector, PartList } from "@/widgets";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className="app-content d-flex flex-column flex-grow-1 w-100 min-h-0">
        <ArticleSearch />
        <BrandSelector />
        <PartList />
      </main>
    </>
  );
};
