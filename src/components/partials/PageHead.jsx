import Head from 'next/head'
import React from 'react'
import { useSelector } from "react-redux";

function PageHead() {
    const { page_details } = useSelector((state) => state.page_details);

    return (
        <Head>
            <title>{page_details?.title}</title>
            <meta name="description" content={page_details?.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default PageHead
