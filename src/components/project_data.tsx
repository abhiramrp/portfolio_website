import { Url } from "next/dist/shared/lib/router/router"

interface Project {
    id: number,
    title: string, 
    description: string, 
    github: Url
}

