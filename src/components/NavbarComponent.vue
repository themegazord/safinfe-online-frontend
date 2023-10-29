<template>
  <nav>
    <h1 class="titulo">SF <span>sistemas</span></h1>
    <ul class="nav-links">
      <router-link class="nav-link" active-class="nav-link-atual" to="login">Entre</router-link>
      <router-link class="nav-link" active-class="nav-link-atual" to="contatos">Contatos</router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 2560px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 2560 / 1920) calc(4rem * 2560 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 2560 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 2560 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 2560 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 2560 / 1920);
    height: calc(3.125rem * 2560 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
@media screen and (max-width: 1920px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1920 / 1920) calc(4rem * 1920 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1920 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1920 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1920 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1920 / 1920);
    height: calc(3.125rem * 1920 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 1600px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1600 / 1920) calc(4rem * 1600 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1600 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1600 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1600 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1600 / 1920);
    height: calc(3.125rem * 1600 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
@media screen and (max-width: 1440px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1440 / 1920) calc(4rem * 1440 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1440 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1440 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1440 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1440 / 1920);
    height: calc(3.125rem * 1440 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}  
@media screen and (max-width: 1366px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1366 / 1920) calc(4rem * 1366 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1366 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1366 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1366 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1366 / 1920);
    height: calc(3.125rem * 1366 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
@media screen and (max-width: 1280px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1280 / 1920) calc(4rem * 1280 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1280 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1280 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1280 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1280 / 1920);
    height: calc(3.125rem * 1280 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
@media screen and (max-width: 1024px) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: calc(1rem * 1024 / 1920) calc(4rem * 1024 / 1920);
    height: 10vh;
    background: var(--darkblue);
  }

  .titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: calc(1.7rem * 1024 / 1920);
    color: white;
  }

  .titulo span {
    color: var(--sistemas);
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: calc(4rem * 1024 / 1920);
  }

  .nav-link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    text-align: center;
    font-size: calc(1rem * 1024 / 1920);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .nav-link-atual {
    width: calc(10rem * 1024 / 1920);
    height: calc(3.125rem * 1024 / 1920);
    border-radius: 5px;
    background: #278FCB;
    box-shadow: 0px 8px 16px 0px rgba(250, 116, 54, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
</style>