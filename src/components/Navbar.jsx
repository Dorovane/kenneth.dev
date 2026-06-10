function Navbar(){
  return(
    <>
    <div className="border shadow-xl rounded-full bg-surface flex items-center p-2 fixed w-[1470px] z-10">
      <h1 className="text-5xl font-extrabold ms-8 animate-pulse text-green-400">Dorovane Dev</h1>
      <div className="flex gap-10 ms-auto me-6">
        <span className="font-mono text-xl font-bold cursor-pointer hover:-translate-y-2 transition">Accueil</span>
        <span className="font-mono text-xl font-bold cursor-pointer hover:-translate-y-2 transition">A propos</span>
        <span className="font-mono text-xl font-bold cursor-pointer hover:-translate-y-2 transition">Compétences</span>
        <span className="font-mono text-xl font-bold cursor-pointer hover:-translate-y-2 transition">Projets</span>
        <span className="font-mono text-xl font-bold cursor-pointer hover:-translate-y-2 transition">Contact</span>
        </div>
    </div>
    </>
  )
}

export default Navbar