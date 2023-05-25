import React, { useState, useEffect } from 'react'

import { SuperHeroFilters, SuperHeroCard } from '../../components'


const HomePage = () => {

  const [superHeroes, setSuperHeroes] = useState([])
  const [goodOnly, setGoodOnly] = useState(false)
  const [badOnly, setBadOnly] = useState(false)
  const [textFilter, setTextFilter] = useState('')

  async function fetchSuperHero(id) {
    const response = await fetch(`https://superheroapi.com/api/2250671835131286/${id}`)

    const data = await response.json()
    return data;
  }

  async function fetchRandomSuperHeroes(numOfHeroes) {
    const allSuperHeroes = [];
    let ids = [];
    while(ids.length < numOfHeroes){
      let r = Math.floor(Math.random() * 732) + 1;
      if(ids.indexOf(r) === -1) ids.push(r);
    }

    for(let id of ids) {
      const superhero = await fetchSuperHero(id);
      allSuperHeroes.push(superhero);
    }

    setSuperHeroes(allSuperHeroes);
    console.log(superHeroes)
  }

  useEffect(() => {    
    fetchRandomSuperHeroes(24)
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default HomePage
