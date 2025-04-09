const Header = () => {
  return (
  <header className="relative w-full overflow-hidden bg-cinder uppercase">
    <h1 className="relative -left-2 -top-2 m-0 
    -mb-14 whitespace-nowrap p-0 text-[15.9rw]
    dark:border-b-icentine dark:border-b-2 dark:bp-8">
      Brazilian Nut <span className='outline'>News</span></h1>
    <img src="/images/subheading.svg"
     alt="Where the best news rises to the top"
     className="absolute bottom-0 right-0 px-3 py-1 bg-cinder" />
  </header>
  )
}

export default Header
