import Compo from "./Compo";

function Header() {
  return <h1>Header</h1>;
}
function Main() {
  return <h1>Main</h1>;
}
function Footer() {
  return <h1>Footer</h1>;
}
function Layout() {
  return (
    <>
      <Header />
      <Compo name={"Binding"} />
      <Main />
      <Footer />
    </>
  );
}
export default Layout;
