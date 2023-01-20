 const deleteNote=(id)=>{       
            setNotes((current) =>
              current.filter((note) => note.id !== id)
            )         
    }

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='cardList'>
        {cards}
        </section>
    </div>
  );
}

export default App;
