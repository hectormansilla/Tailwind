function App() {
  
  return (

    <div className="container mx-auto py-12">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/r1ySsbIA7EU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="bg-red-400 aspect-square">

          </div>
        </div>
        <div className="col-span-1 bg-blue-200">

        </div>
      </div>
    </div>

  )
}

export default App
