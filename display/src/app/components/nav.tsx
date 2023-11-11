import NavBar from "./NavBar";

function Nav({ children }: {
  children: React.ReactNode,
}) {


  return (
    <div className="h-full bg-primary">
      <NavBar />
      <main className="h-full pl-36">
        {children}
      </main>
    </div>
  )
}

export default Nav;