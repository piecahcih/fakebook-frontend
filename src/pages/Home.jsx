
function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-9xl">Homeja</h1>
      <div className="hover-3d">
        {/* content */}
        <figure className="max-w-100  rounded-2xl mt-10">
          <img className="w-60" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="3D card" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <span className="text-rotate text-5xl leading-[2]">
        <span className="justify-items-center">
          <span>📐 DESIGN</span>
          <span>⌨️ DEVELOP</span>
          <span>🌎 DEPLOY</span>
          <span>🌱 SCALE</span>
          <span>🔧 MAINTAIN</span>
          <span>♻️ REPEAT</span>
        </span>
      </span>

      <div className="flex gap-4 m-10">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>

        <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>

      <calendar-date className="cally bg-amber-50 border border-base-300 shadow-lg rounded-box">
        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
        <calendar-month></calendar-month>
      </calendar-date>
    </div>
  )
}

export default Home