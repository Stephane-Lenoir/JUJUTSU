.pageaccueil {
    background-color: #Afe9ff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .pageaccueil.visible {
    opacity: 1;
  }
  
  .imgtitre {
    width: 90%;
    max-width: 90vw;
    height: auto;
    padding-left: 5rem;
  }
  
  @media (max-width: 768px) {
    .imgtitre {
      height: 50vh;
      object-fit: cover;
    }
  }
  
  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
   
  .nav-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .vaflex {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #cbffe6;
    margin-left: auto;
    margin-right: auto;
    max-width: 85%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
 
  