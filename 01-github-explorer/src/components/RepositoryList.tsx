import { useEffect, useState } from 'react'
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export default function RepositoryList () {

    const [ repositories, setRepositories ] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/melquisedeque-magalhaes/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    return (
        <section className='repository-list'>
            <h1>Lista de Repositorios</h1>

            <ul>
                {repositories.map(
                    repository => 
                    <RepositoryItem 
                        key={repository.name}
                        name={repository.name}
                        description={repository.description}
                        html_url={repository.html_url}
                    />)}   
            </ul>
        </section>
    )
}