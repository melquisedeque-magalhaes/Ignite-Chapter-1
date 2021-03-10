interface RepositoryItemProps {
    name: string;
    description: string;
    html_url: string;
}

export default function RepositoryItem({ name, description, html_url }: RepositoryItemProps) {
    return (
        <li>
            <strong>{name}</strong>
            <p>{description}</p>

            <a target='_blank' href={html_url}>
               Acessar Repositorio
            </a>
        </li>
    )
}