import ContenidoMenu from "../ContenidoMenu/ContenidoMenu";
import MenuWrap from "../MenuWrap/MenuWrap";
import SearchWrap from "../SearchWrap/SearchWrap";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <SearchWrap />
        <ContenidoMenu />
        <MenuWrap />
      </main>
    </>
  );
}
