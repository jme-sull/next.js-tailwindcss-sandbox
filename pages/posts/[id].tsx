import utilStyles from '../../styles/utils.module.css'

import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import Hero from "../../components/hero"


import { getAllPostsIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Post({ 
  postData
}: {
  postData: {
    title: string
    date: string
    contentHTML: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
}
