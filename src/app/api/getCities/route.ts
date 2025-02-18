import { NextResponse } from "next/server"

export type CitiesArray = {
    id: number
    nome: string
    microrregiao: {
        id: number
        nome: string
        mesorregiao: {
            id: number
            nome: string
            UF: {
                id: number
                nome: string
                sigla: string
                regiao: {
                    id: number
                    nome: string
                    sigla: string
                }
            }
        }
    }
    "regiao-imediata": {
        id: number
        nome: string
        "regiao-intermediara": {
            id: number
            nome: string
            UF: {
                id: number
                nome: string
                sigla: string
            }
            regiao: {
                id: number
                nome: string
                sigla: string
            }
        }
    }
}[]

export async function GET() {
    const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios")
    const cities: CitiesArray = await res.json()
    cities.sort((a, b) => a.nome.localeCompare(b.nome))
    return NextResponse.json(cities)
}