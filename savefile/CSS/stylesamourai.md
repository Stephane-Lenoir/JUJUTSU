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
    width: 100%;
    max-width: 100vw;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .imgtitre {
      height: 50vh;
      object-fit: cover;
    }
  }
  
  .titre1 {
    text-align: center;
    color: #948bff;
  }
  
  .titre2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 3rem;
    text-align: center;
    color: #948bff;
  }

  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
 .sous {
    padding-top: 1rem;
    padding-bottom: 2rem;
    font-size: 1rem;
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
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  
  .deuxmille {
    width: 100%;
    text-align: center;
  }
  