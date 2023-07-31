import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from '../styles/home/styles'
import { Table } from '@/components/Table'
import { GetServerSideProps } from 'next'
import puppeteer from 'puppeteer'
import axios from 'axios'
import { FiiType } from '@/utils/typeAllObjects'

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  fiiList: FiiType[]
}

export default function Home({ fiiList }: HomeProps) {
  const filteredFiss = fiiList.filter(
    (item) =>
      item.nome === 'KNCR11' ||
      item.nome === 'CPTS11' ||
      item.nome === 'PVBI11' ||
      item.nome === 'XPLG11',
  )

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <h2>Seus Fundos imobiliarios</h2>
        <Table data={filteredFiss} />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await axios.get('http://localhost:3000/api/get-fiis')

  return {
    props: {
      fiiList: data,
    },
  }
}
