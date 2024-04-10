import ContenidoMenu from "../ContenidoMenu/ContenidoMenu";
import SearchWrap from "../SearchWrap/SearchWrap";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <SearchWrap />
        <ContenidoMenu />
      </main>
    </>
  );
}
