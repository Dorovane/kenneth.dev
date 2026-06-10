function Home(){
  return(
    <>
    <div className="flex">
      <div className="mt-22">
        <h1 className="flex flex-col ">
          <span className="height-1 font-medium absolute top-50 left-10">TCHEGNIOUGBO</span>
          <span className="height text-blue-400 ms-64">Kenneth</span>
        </h1>
        <p className="border border-blue-500 p-2 px-4 rounded inline text-lg">Full Stack Developer</p>
        <div className="flex gap-3 mt-8 ">
        <span className="font-mono text-xl border bg-green-300 text-black-600 rounded-xl p-3 hover:bg-gray-500 transition duration-500 cursor-pointer">Voir Projets</span>
        <span className="font-mono text-xl border border-green-500 rounded-xl p-3.5 hover:bg-blue-400  transition duration-500 cursor-pointer">Contact</span>
        </div>
      </div>
      <img className="ms-auto me-12 w-[500px] h-[600px]" src="Moi.jpg" alt="Dorovane's picture" />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-12">
      <div className="height-2">Lorem ipsum, dolor sit amet consectetur <span className="text-red-400">adipisicing elit</span>.</div>
      <div className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, obcaecati. Debitis, suscipit itaque. Impedit eveniet, quae numquam vitae exercitationem eos placeat expedita eaque sapiente recusandae cumque veritatis assumenda sint molestiae.
      Repudiandae, veniam, vero beatae amet corrupti magnam praesentium pariatur nihil accusantium reiciendis veritatis iusto libero. Perspiciatis explicabo quo, asperiores illum facilis expedita dolor culpa nam fuga, quis iure, nihil distinctio!
      Maxime harum placeat ea corrupti dicta facere magnam adipisci? Obcaecati praesentium consequatur quis, ex, asperiores nesciunt laboriosam corporis laudantium quia alias, quaerat et harum possimus autem natus recusandae deleniti totam?
      Qui perferendis magnam optio dignissimos quia omnis non rerum aspernatur nesciunt mollitia, itaque sequi aut deleniti tenetur libero natus nam dolorum quam placeat eius temporibus ullam unde nobis dolor! Accusantium!
      Corporis dolor ut deserunt quae. Quo nemo perferendis cum illum, suscipit quas architecto voluptates deserunt dignissimos nostrum ratione, unde quaerat sapiente molestias? Saepe quia id voluptate nihil ex cumque molestias!
      Est ex aliquam</div>
    </div>
    </>
  )
}

export default Home